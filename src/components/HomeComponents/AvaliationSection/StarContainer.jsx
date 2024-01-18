import styled from "styled-components";

const StarContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const StarBox = styled.div`
  display: flex;
  padding: 10px;
  align-items: flex-start;
  gap: 10px;
  border-radius: 100px;
  border: 1px solid var(--Grey-15);
  background: var(--Grey-10);
`;

const StarContainerComponent = () => {
    const stars = Array(5).fill(null);
  
    return (
      <StarContainer>
        {stars.map((_, item) => (
          <StarBox key={item}>
            <img src="/imgs/icons/yeallow-star-icon.svg" />
          </StarBox>
        ))}
      </StarContainer>
    );
  };

export default StarContainerComponent;