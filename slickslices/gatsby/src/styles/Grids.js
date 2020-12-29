import styled from 'styled-components';

export const HomePageGrid = styled.section`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(2, minmax(auto, 1fr));
`;

export const ItemsGrid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr 1fr;
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

    width: 100%;

    transform: rotate(-2deg) translateY(-50%);
  }
  .mark {
    display: inline;
  }
`;
