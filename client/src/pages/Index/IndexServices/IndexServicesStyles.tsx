import styled from "styled-components";
import pxIntoRem from "../../../utils/pxIntoRem";

const IndexServicesBlock = styled.div`
  width: 100%;
  padding-top: ${pxIntoRem(173)};

  @media (max-width: 395px) {
    padding-top: ${pxIntoRem(113)};
  }
`;

const IndexServicesContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const IndexServicesTitle = styled.h2`
  color: #222741;
  text-align: center;
  font-family: Inter;
  font-size: ${pxIntoRem(40)};
  font-style: normal;
  font-weight: 600;
  line-height: 140%;

  @media (max-width: 395px) {
    font-size: ${pxIntoRem(20)};
  }
`;

const IndexServicesList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: auto;
  margin-top: ${pxIntoRem(60)};
  gap: ${pxIntoRem(60)} ${pxIntoRem(40)};

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 395px) {
    margin-top: ${pxIntoRem(30)};
    gap: ${pxIntoRem(20)};
  }
`;

const IndexServicesListItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${pxIntoRem(9.5)};
  padding: ${pxIntoRem(60)};
  border-radius: ${pxIntoRem(40)};
  background: #fff;
  cursor: pointer;
  transition-duration: 0.35s;

  &:hover {
    filter: drop-shadow(0px ${pxIntoRem(20)} ${pxIntoRem(80)} rgba(0, 0, 0, 0.15));
  }

  @media (max-width: 395px) {
    padding: ${pxIntoRem(30)} ${pxIntoRem(20)};
    border-radius: ${pxIntoRem(15)};
  }
`;

const IndexServicesListItemTitle = styled.h3`
  color: #6854fc;
  text-align: center;
  font-family: Inter;
  font-size: ${pxIntoRem(22)};
  font-style: normal;
  font-weight: 600;
  line-height: 160%;
  letter-spacing: ${pxIntoRem(0.44)};
  text-align: center;

  @media (max-width: 395px) {
    font-size: ${pxIntoRem(16)};
    letter-spacing: ${pxIntoRem(0.32)};
  }
`;

const IndexServicesListItemText = styled.p`
  color: rgba(34, 39, 65, 0.5);
  text-align: center;
  font-family: Inter;
  font-size: ${pxIntoRem(18)};
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  text-align: center;

  @media (max-width: 395px) {
    font-size: ${pxIntoRem(12)};
    // letter-spacing: ${pxIntoRem(0.32)};
  }
`;
export { IndexServicesBlock, IndexServicesContent, IndexServicesList, IndexServicesListItem, IndexServicesListItemText, IndexServicesListItemTitle, IndexServicesTitle };
