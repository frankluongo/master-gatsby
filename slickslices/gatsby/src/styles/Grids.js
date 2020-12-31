import styled from 'styled-components';

export const HomePageGrid = styled.section`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(2, minmax(auto, 1fr));
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ItemsGrid = styled.div`
  --columns: 2;

  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(var(--columns), 1fr);
  @media (max-width: 540) {
    --columns: 2;
  }
`;

export const ItemStyled = styled.div`
  position: relative;

  text-align: center;

  img {
    height: auto;

    font-size: 0;
  }

  @keyframes shine {
    from {
      background-position: 200%;
    }
    to {
      background-position: -40px;
    }
  }

  img.loading {
    --shine: white;
    --background: var(--grey);

    background-image: linear-gradient(
      90deg,
      var(--background) 0px,
      var(--shine) 40px,
      var(--background) 80px
    );
    background-size: 500px;
    animation: shine 1s infinite linear;
  }

  p {
    left: 0;
    position: absolute;
    top: 0;

    width: 100%;
    margin: 0;

    transform: translateY(-10px);
  }
  .mark {
    display: inline;
  }
`;
