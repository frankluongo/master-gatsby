const nodemailer = require('nodemailer');

// Create a Transport
const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: 587,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

exports.handler = async (event, context) => {
  const body = JSON.parse(event.body);
  // Validate The Data
  const reqFields = ['email', 'name', 'order'];
  for (const field of reqFields) {
    if (!body[field])
      return {
        statusCode: 400,
        body: JSON.stringify({
          message: `${field} Field Required`,
        }),
      };
  }
  // Send the email
  const { email, name, order, total } = body;
  if (!order.length) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: 'Why would you order nothing!?',
      }),
    };
  }
  await transporter.sendMail({
    from: "Slick's Slices <slick@example.com>",
    to: `${name} <${email}>`,
    subject: 'New Order!',
    html: orderEmail({ order, total }),
  });
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Success! Your Order will be ready for pickup soon',
    }),
  };
};

function orderEmail({ order, total }) {
  return `
    <div style="margin-top: 15px;margin-bottom: 15px;">
      <h2>Your Recent Order for ${total}</h2>
      <p style="margin-bottom: 15px;">
        Please start walking over, we will have your order ready in the next 20 minutes.
      </p>
      <ul style="list-style: none;margin: 0;padding: 0;">
        ${order.map(orderItem).join('')}
      </ul>
      <p>Your total is $${total} due at pickup</p>
    </div>
  `;
}

function orderItem(item) {
  return `
    <li style="margin-bottom: 15px;display: flex;align-items: center;">
      <img src="${item.thumbnail}" alt="${item.name}" width="75" />
      <div style="margin-left: 15px;">
        ${item.size} ${item.name} - ${item.price}
      </div>
    </li>
  `;
}

function wait(ms) {
  return new Promise((res, _) => {
    setTimeout(res, ms);
  });
}
