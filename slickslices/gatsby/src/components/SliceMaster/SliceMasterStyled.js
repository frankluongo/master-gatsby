import styled from 'styled-components';

const SliceMasterStyled = styled.div`
  a {
    display: flex;
    justify-content: center;
    width: 100%;

    text-decoration: none;
  }
  h2 {
    position: relative;
    z-index: 2;

    margin-bottom: -2rem;

    font-size: 4rem;
    text-align: center;

    transform: rotate(-2deg);
  }
  .gatsby-image-wrapper {
    height: 400px;
  }
  .description {
    position: relative;
    z-index: 2;

    padding: 1rem;
    margin: 2rem;
    margin-top: -6rem;

    text-align: center;

    background: var(--yellow);
    transform: rotate(1deg);
  }

  &[data-single-page='true'] {
    display: flex;
    flex-direction: column;

    h2 {
      margin-bottom: 0;
      margin-top: 2rem;

      transform: rotate(0deg);

      background-color: white;
    }
    .gatsby-image-wrapper {
      height: auto;

      order: -1;
    }
    .description {
      margin-top: 2rem;

      background: white;
      transform: rotate(0deg);
    }
  }
`;
export { SliceMasterStyled };
