import styled from "styled-components";
import pxIntoRem from "../../../utils/pxIntoRem";

const IndexAgencyBlock = styled.div`
  width: 100%;
  background-color: #6854fc;
  margin-top: ${pxIntoRem(105)};

  @media (max-width: 395px) {
    margin-top: ${pxIntoRem(60)};
  }
`;

const IndexAgencyContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${pxIntoRem(62)} 0px;

  @media (max-width: 900px) {
    justify-content: center;
  }

  @media (max-width: 395px) {
    padding: ${pxIntoRem(20)} 0px;
  }
`;

const IndexAgencyTitle = styled.h2`
  color: #fff;
  font-family: Inter;
  font-size: ${pxIntoRem(37)};
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
  max-width: ${pxIntoRem(530)};
  @media (max-width: 900px) {
    text-align: center;
    max-width: none;
  }

  @media (max-width: 395px) {
    text-align: center;
    max-width: none;
    font-size: ${pxIntoRem(16)};
  }
`;

const IndexAgencyText = styled.p`
  color: #fff;
  font-family: Inter;
  font-size: ${pxIntoRem(21)};
  font-style: normal;
  font-weight: 600;
  line-height: 160%;
  letter-spacing: ${pxIntoRem(0.42)};
  max-width: ${pxIntoRem(705)};
  position: relative;
  right: ${pxIntoRem(-40)};

  @media (max-width: 900px) {
    display: none;
  }
`;

export { IndexAgencyBlock, IndexAgencyContent, IndexAgencyText, IndexAgencyTitle };
