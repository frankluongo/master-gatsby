import styled from 'styled-components';

const BeerListStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
`;

const SingleBeerStyled = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 2rem;

  text-align: center;

  border: 1px solid var(--grey);

  h3,
  p {
    margin: 0;
  }

  img {
    align-items: center;
    justify-content: center;
    display: grid;
    width: 100%;
    height: 200px;
    object-fit: contain;

    font-size: 12px;

    margin-bottom: 1rem;
    margin-top: 1rem;
  }

  .rating {
    display: flex;
    flex: 1 0 auto;
    align-items: flex-end;
  }
`;

export { BeerListStyled, SingleBeerStyled };
