import styled from "styled-components";
import pxIntoRem from "../../utils/pxIntoRem";

const ChildrenBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
`;

const ChildrenContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${pxIntoRem(140)};

  @media (max-width: 395px) {
    margin-top: ${pxIntoRem(90)};
  }
`;

const ChildrenTitle = styled.h1`
  color: #222741;
  text-align: center;
  font-family: Inter;
  font-size: ${pxIntoRem(48)};
  font-style: normal;
  font-weight: 700;
  line-height: 120%;

  @media (max-width: 395px) {
    color: #222741;
    font-size: ${pxIntoRem(20)};
    font-weight: 600;
    line-height: 140%;
  }
`;

const ChildrenFilterButton = styled.button`
  display: none;
  color: #6854fc;
  font-family: Inter;
  font-size: ${pxIntoRem(18)};
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
  border-radius: ${pxIntoRem(30)};
  border: ${pxIntoRem(2)} solid #6854fc;
  padding: ${pxIntoRem(8)} ${pxIntoRem(60)};
  margin-top: ${pxIntoRem(30)};
  cursor: pointer;
  background-color: transparent;

  @media (max-width: 700px) {
    display: flex;
  }
`;

const ChildrenBody = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: ${pxIntoRem(100)};
  margin-bottom: ${pxIntoRem(135)};

  @media (max-width: 800px) {
    justify-content: space-around;
  }

  @media (max-width: 500px) {
    margin-top: ${pxIntoRem(30)};
    margin-bottom: ${pxIntoRem(60)};
  }
`;

const ChildrenFiltersBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${pxIntoRem(25)};

  @media (max-width: 700px) {
    display: none;
  }
`;

const ChildrenItemsBlock = styled.div`
  display: grid;
  grid-template-columns: ${pxIntoRem(180)} ${pxIntoRem(180)} ${pxIntoRem(180)};
  grid-auto-rows: max-content;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-grow: 1;
  gap: ${pxIntoRem(60)};
  max-width: ${pxIntoRem(820)};

  @media (max-width: 800px) {
    justify-content: center;
    grid-template-columns: ${pxIntoRem(180)} ${pxIntoRem(180)} ${pxIntoRem(180)};
  }

  @media (max-width: 500px) {
    gap: ${pxIntoRem(20)} ${pxIntoRem(60)};
    grid-template-columns: ${pxIntoRem(180)} ${pxIntoRem(180)};
  }

  @media (max-width: 395px) {
    gap: ${pxIntoRem(20)} ${pxIntoRem(60)};
    grid-template-columns: ${pxIntoRem(145)} ${pxIntoRem(145)};
  }
`;

const ChildrenItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

const ChildrenItemImage = styled.img`
  width: ${pxIntoRem(180)};
  height: ${pxIntoRem(180)};
  flex-shrink: 0;
  background-color: #c4c4c4;
  object-fit: cover;
  border-radius: 100%;
  object-fit: cover;

  @media (max-width: 395px) {
    width: ${pxIntoRem(130)};
    height: ${pxIntoRem(130)};
    flex-shrink: 0;
  }
`;

const ChildrenItemTitle = styled.h2`
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: ${pxIntoRem(24)};
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  margin-top: ${pxIntoRem(20)};
  color: #222741;
  white-space: nowrap;

  @media (max-width: 395px) {
    font-size: ${pxIntoRem(16)};
    line-height: 160%;
    letter-spacing: ${pxIntoRem(0.32)};
    margin-top: ${pxIntoRem(10)};
  }
`;

const ChildrenItemText = styled.p`
  color: rgba(0, 0, 0, 0.5);
  text-align: center;
  font-family: Inter;
  font-size: ${pxIntoRem(18)};
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  margin-top: ${pxIntoRem(5)};
  color: rgba(34, 39, 65, 0.5);

  @media (max-width: 395px) {
    font-size: ${pxIntoRem(12)};
    font-weight: 400;
    line-height: 160%;
    letter-spacing: ${pxIntoRem(0.24)};
    margin-top: ${pxIntoRem(12)};
  }
`;

export { ChildrenBlock, ChildrenBody, ChildrenItemsBlock, ChildrenContent, ChildrenTitle, ChildrenFiltersBlock, ChildrenItem, ChildrenItemImage, ChildrenItemText, ChildrenItemTitle, ChildrenFilterButton };
