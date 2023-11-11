import styled from "styled-components";
import pxIntoRem from "../../utils/pxIntoRem";

const AdminChildrenBlock = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: ${pxIntoRem(20)};
`;

const AdminChildrenContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const AdminChildrenContentButton = styled.button`
  height: ${pxIntoRem(40)};
  padding: 0px ${pxIntoRem(10)};
  max-width: ${pxIntoRem(200)};
  background-color: blue;
  color: #ffffff;
  font-family: Inter;
  font-size: ${pxIntoRem(15)};
  font-style: normal;
  font-weight: 500;
  line-height: 160%;
  letter-spacing: ${pxIntoRem(0.36)};
  cursor: pointer;
`;

const AdminChildrenTable = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border: ${pxIntoRem(1)} solid #000000;
`;

const AdminChildrenTableHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.8fr 0.8fr 2fr 0.5fr;
  height: ${pxIntoRem(40)};
  width: 100%;
  background-color: #000000;

  @media (max-width: 700px) {
    grid-template-columns: 1fr 2fr 0.5fr;

    & > :nth-child(5n-2) {
      display: none;
    }

    & > :nth-child(5n-3) {
      display: none;
    }
  }

  @media (max-width: 395px) {
    grid-template-columns: 1fr 0.5fr;

    & > :nth-child(5n-1) {
      display: none;
    }
  }
`;

const AdminChildrenTableHeaderItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-family: Inter;
  font-size: ${pxIntoRem(12)};
  font-style: normal;
  font-weight: 500;
  line-height: 160%;
  letter-spacing: ${pxIntoRem(0.36)};
  height: 100%;
  border-right: ${pxIntoRem(1)} solid #000000;
  padding: ${pxIntoRem(5)};
  &:last-child {
    border: none;
  }

  @media (max-width: 395px) {
    font-size: ${pxIntoRem(10)};
  }
`;

const AdminChildrenTableBody = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.8fr 0.8fr 2fr 0.5fr;
  height: auto;
  width: 100%;

  @media (max-width: 700px) {
    grid-template-columns: 1fr 2fr 0.5fr;

    & > :nth-child(5n-2) {
      display: none;
    }

    & > :nth-child(5n-3) {
      display: none;
    }
  }

  @media (max-width: 395px) {
    grid-template-columns: 1fr 0.5fr;

    & > :nth-child(5n-1) {
      display: none;
    }
  }
`;

const AdminChildrenTableBodyItem = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-family: Inter;
  font-size: ${pxIntoRem(10)};
  font-style: normal;
  font-weight: 500;
  line-height: 160%;
  letter-spacing: ${pxIntoRem(0.36)};
  height: 100%;
  border-right: ${pxIntoRem(1)} solid #000000;
  border-bottom: ${pxIntoRem(1)} solid #000000;
  height: ${pxIntoRem(40)};
  color: #000000;

  @media (max-width: 395px) {
    font-size: ${pxIntoRem(10)};
  }
`;

const AdminChildrenTableBodyItemDeleteButton = styled.button`
  position: absolute;
  left: ${pxIntoRem(4)};
  padding: ${pxIntoRem(2)} ${pxIntoRem(10)};
  background-color: red;
  color: #ffffff;
  font-family: Inter;
  font-size: ${pxIntoRem(12)};
  font-style: normal;
  font-weight: 500;
  line-height: 160%;
  cursor: pointer;

  @media (max-width: 395px) {
    padding: ${pxIntoRem(2)} ${pxIntoRem(5)};
  }
`;

const AdminChildrenTableBodyItemToButton = styled.button`
  position: absolute;
  right: ${pxIntoRem(4)};
  padding: ${pxIntoRem(2)} ${pxIntoRem(10)};
  background-color: #6854fc;
  color: #ffffff;
  font-family: Inter;
  font-size: ${pxIntoRem(12)};
  font-style: normal;
  font-weight: 500;
  line-height: 160%;
  cursor: pointer;

  @media (max-width: 395px) {
    padding: ${pxIntoRem(2)} ${pxIntoRem(5)};
  }
`;

interface IAdminChildrenTableBodyButton {
  isActive: boolean;
}

const AdminChildrenTableBodyButton = styled.button<IAdminChildrenTableBodyButton>`
  color: #ffffff;
  background-color: ${({ isActive }) => (isActive ? "green" : "red")};
  font-family: Inter;
  font-size: ${pxIntoRem(12)};
  font-style: normal;
  font-weight: 500;
  border-bottom: ${pxIntoRem(1)} solid #000000;
  line-height: 160%;
  cursor: pointer;
`;

export {
  AdminChildrenBlock,
  AdminChildrenContentButton,
  AdminChildrenContent,
  AdminChildrenTableBodyItemDeleteButton,
  AdminChildrenTableBodyItemToButton,
  AdminChildrenTable,
  AdminChildrenTableBody,
  AdminChildrenTableHeader,
  AdminChildrenTableHeaderItem,
  AdminChildrenTableBodyItem,
  AdminChildrenTableBodyButton,
};
