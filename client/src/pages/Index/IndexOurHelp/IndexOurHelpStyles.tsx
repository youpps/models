import styled from "styled-components";
import pxIntoRem from "../../../utils/pxIntoRem";

const IndexOurHelpBlock = styled.div`
  margin-top: ${pxIntoRem(120)};
  margin-bottom: ${pxIntoRem(238)};
  width: 100%;

  @media (max-width: 395px) {
    margin-top: ${pxIntoRem(62)};
    margin-bottom: ${pxIntoRem(100)};
  }
`;

const IndexOurHelpContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const IndexOurHelpTitle = styled.h2`
  color: #222741;
  font-family: Inter;
  font-size: ${pxIntoRem(40)};
  font-style: normal;
  font-weight: 700;
  line-height: 140%;

  @media (max-width: 850px) {
    text-align: center;
  }

  @media (max-width: 395px) {
    text-align: center;
    font-size: ${pxIntoRem(20)};
    font-weight: 600;
    max-width: ${pxIntoRem(300)};
  }
`;

const IndexOurHelpList = styled.div`
  display: grid;
  grid-template-columns: ${pxIntoRem(341)} ${pxIntoRem(341)} ${pxIntoRem(341)};
  justify-content: space-between;
  margin-top: ${pxIntoRem(60)};
  gap: ${pxIntoRem(60)};
  width: 100%;

  @media (max-width: 850px) {
    grid-template-columns: ${pxIntoRem(341)} ${pxIntoRem(341)};
    justify-content: center;
  }

  @media (max-width: 500px) {
    grid-template-columns: ${pxIntoRem(300)} ${pxIntoRem(300)};
  }

  @media (max-width: 395px) {
    grid-template-columns: ${pxIntoRem(341)};
    margin-top: ${pxIntoRem(30)};
    gap: ${pxIntoRem(20)};
  }
`;

const IndexOurHelpListItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const IndexOurHelpListItemImage = styled.div`
  width: ${pxIntoRem(100)};
  height: ${pxIntoRem(100)};
  flex-shrink: 0;
  background-color: #f0eeff;
  border-radius: 100%;

  @media (max-width: 395px) {
    width: ${pxIntoRem(70)};
    height: ${pxIntoRem(70)};
  }
`;

const IndexOurHelpListItemTitle = styled.h3`
  color: #6854fc;
  text-align: center;
  font-family: Inter;
  font-size: ${pxIntoRem(22)};
  font-style: normal;
  font-weight: 600;
  line-height: 160%;
  letter-spacing: ${pxIntoRem(0.44)};
  margin-top: ${pxIntoRem(30)};

  @media (max-width: 395px) {
    font-size: ${pxIntoRem(16)};
    letter-spacing: ${pxIntoRem(0.32)};
    margin-top: ${pxIntoRem(10)};
  }
`;

const IndexOurHelpListItemText = styled.p`
  color: rgba(0, 0, 0, 0.5);
  text-align: center;
  font-family: Inter;
  font-size: ${pxIntoRem(18)};
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
  letter-spacing: ${pxIntoRem(0.36)};
  margin-top: ${pxIntoRem(10)};

  @media (max-width: 395px) {
    color: rgba(34, 39, 65, 0.5);
    font-size: ${pxIntoRem(12)};
    letter-spacing: ${pxIntoRem(0.24)};
  }
`;

export { IndexOurHelpBlock, IndexOurHelpContent, IndexOurHelpTitle, IndexOurHelpList, IndexOurHelpListItem, IndexOurHelpListItemImage, IndexOurHelpListItemText, IndexOurHelpListItemTitle };
