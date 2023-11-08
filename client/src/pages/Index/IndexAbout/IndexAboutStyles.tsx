import styled from "styled-components";
import pxIntoRem from "../../../utils/pxIntoRem";
import Button from "../../../components/UI/Button/Button";

const IndexAboutBlock = styled.div`
  width: 100%;
  margin-top: ${pxIntoRem(120)};

  @media (max-width: 395px) {
    margin-top: ${pxIntoRem(60)};
  }
`;

const IndexAboutContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${pxIntoRem(60)};
  width: 100%;

  @media (max-width: 395px) {
    gap: ${pxIntoRem(15)};
    align-items: center;
  }
`;

const IndexAboutItem = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgba(196, 196, 196, 0.15);
  border-radius: 0px ${pxIntoRem(20)} ${pxIntoRem(20)} 0px;

  @media (max-width: 1000px) {
    border-radius: ${pxIntoRem(15)};
  }

  @media (max-width: 395px) {
    max-width: ${pxIntoRem(333)};
  }
`;

const IndexAboutItemContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${pxIntoRem(60)} ${pxIntoRem(65)} ${pxIntoRem(45)} ${pxIntoRem(90)};

  @media (max-width: 1000px) {
    align-items: center;
    text-align: center;
    width: 100%;
  }

  @media (max-width: 395px) {
    padding: ${pxIntoRem(30)} ${pxIntoRem(20)} ${pxIntoRem(35)};
  }
`;

const IndexAboutItemTitle = styled.h2`
  color: #222741;
  font-family: Inter;
  font-size: ${pxIntoRem(37)};
  font-style: normal;
  font-weight: 700;
  line-height: 140%;

  @media (max-width: 395px) {
    font-size: ${pxIntoRem(20)};
  }
`;

const IndexAboutItemText = styled.p`
  color: rgba(34, 39, 65, 0.5);
  font-family: Inter;
  font-size: ${pxIntoRem(18)};
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  margin-top: ${pxIntoRem(30)};
  margin-bottom: ${pxIntoRem(10)};

  @media (max-width: 395px) {
    text-align: center;
    font-size: ${pxIntoRem(12)};
    margin-top: ${pxIntoRem(10)};
    max-width: ${pxIntoRem(290)};
    margin-bottom: 0px;
  }
`;

const IndexAboutItemButton = styled(Button)`
  max-width: ${pxIntoRem(300)};
  max-height: ${pxIntoRem(60)};
  margin-top: auto;
  color: #ffffff;
  background-color: #6854fc;

  @media (max-width: 1000px) {
    align-items: center;
    text-align: center;
    width: 100%;
    margin-top: ${pxIntoRem(30)};
  }

  @media (max-width: 395px) {
    padding-block: ${pxIntoRem(8)};
    width: ${pxIntoRem(225)};
    margin-top: ${pxIntoRem(30)};
  }
`;

const IndexAboutItemImage = styled.img`
  min-height: 100%;
  border-radius: ${pxIntoRem(20)};
  width: ${pxIntoRem(728)};
  object-fit: cover;

  @media (max-width: 1000px) {
    display: none;
  }
`;

export { IndexAboutBlock, IndexAboutContent, IndexAboutItem, IndexAboutItemButton, IndexAboutItemContent, IndexAboutItemImage, IndexAboutItemText, IndexAboutItemTitle };
