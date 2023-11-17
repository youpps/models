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

const AdminChildrenContentButtons = styled.div`
  display: flex;
  align-items: center;
`;

const AdminChildrenContentBackButton = styled.button`
  height: ${pxIntoRem(40)};
  padding: 0px ${pxIntoRem(10)};
  max-width: ${pxIntoRem(200)};
  background-color: red;
  color: #ffffff;
  font-family: Inter;
  font-size: ${pxIntoRem(15)};
  font-style: normal;
  font-weight: 500;
  line-height: 160%;
  letter-spacing: ${pxIntoRem(0.36)};
  cursor: pointer;

  @media (max-width: 395px) {
    width: 100%;
    max-width: 100%;
  }
`;

const AdminChildrenContentCreateButton = styled.button`
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

  @media (max-width: 395px) {
    width: 100%;
    max-width: 100%;
  }
`;

const AdminChildrenTable = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border: ${pxIntoRem(1)} solid #000000;

  @media (max-width: 395px) {
    display: none;
  }
`;

const AdminChildrenTableHeader = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 0.8fr 0.8fr 0.8fr 0.8fr 2fr 0.5fr;
  height: ${pxIntoRem(40)};
  width: 100%;
  background-color: #000000;
`;

const AdminChildrenTableHeaderItem = styled.div`
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
  padding: ${pxIntoRem(5)};

  &:last-child {
    border: none;
  }
`;

const AdminChildrenTableBody = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 0.8fr 0.8fr 0.8fr 0.8fr 2fr 0.5fr;
  height: auto;
  width: 100%;
`;

const AdminChildrenTableBodyItem = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
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
`;

const AdminChildrenTableBodyItemDeleteButton = styled.button`
  position: absolute;
  left: ${pxIntoRem(4)};
  bottom: ${pxIntoRem(4)};
  padding: ${pxIntoRem(1)} ${pxIntoRem(4)};
  background-color: red;
  color: #ffffff;
  font-family: Inter;
  font-size: ${pxIntoRem(8)};
  font-style: normal;
  font-weight: 500;
  line-height: 160%;
  cursor: pointer;
`;

const AdminChildrenTableBodyItemToButton = styled.button`
  position: absolute;
  right: ${pxIntoRem(4)};
  bottom: ${pxIntoRem(4)};
  padding: ${pxIntoRem(1)} ${pxIntoRem(4)};
  background-color: #6854fc;
  color: #ffffff;
  font-family: Inter;
  font-size: ${pxIntoRem(8)};
  font-style: normal;
  font-weight: 500;
  line-height: 160%;
  cursor: pointer;
`;

interface IAdminChildrenTableBodyButton {
  isActive: boolean;
}

const AdminChildrenTableBodyButton = styled.button<IAdminChildrenTableBodyButton>`
  color: #ffffff;
  background-color: ${({ isActive }) => (isActive ? "green" : "red")};
  font-family: Inter;
  font-size: ${pxIntoRem(8)};
  font-style: normal;
  font-weight: 500;
  border-bottom: ${pxIntoRem(1)} solid #000000;
  line-height: 160%;
  cursor: pointer;
`;

const AdminChildrenMobileTable = styled.div`
  display: none;
  flex-direction: column;
  gap: ${pxIntoRem(10)};
  margin-top: ${pxIntoRem(10)};

  @media (max-width: 395px) {
    display: flex;
  }
`;

const AdminChildrenMobileTableItem = styled.div`
  display: flex;
  flex-direction: column;
  border: ${pxIntoRem(1)} solid #000000;
`;

const AdminChildrenMobileTableItemLine = styled.p`
  color: #000000;
  font-family: Inter;
  font-size: ${pxIntoRem(12)};
  font-style: normal;
  font-weight: 700;
  line-height: 160%;
  letter-spacing: ${pxIntoRem(0.36)};
  padding: ${pxIntoRem(2)} ${pxIntoRem(10)};

  span {
    font-weight: 500;
  }
`;

const AdminChildrenMobileTableItemDeleteButton = styled.button`
  color: #ffffff;
  background-color: red;
  font-family: Inter;
  font-size: ${pxIntoRem(12)};
  font-style: normal;
  font-weight: 500;
  border-top: ${pxIntoRem(1)} solid red;
  line-height: 160%;
  cursor: pointer;
  height: ${pxIntoRem(40)};
`;

const AdminChildrenMobileTableItemToButton = styled.button`
  color: #ffffff;
  background-color: #6854fc;
  font-family: Inter;
  font-size: ${pxIntoRem(12)};
  font-style: normal;
  font-weight: 500;
  border-top: ${pxIntoRem(1)} solid #000000;
  line-height: 160%;
  cursor: pointer;
  height: ${pxIntoRem(40)};
`;

interface IAdminChildrenMobileTableItemSwitchButton {
  isActive: boolean;
}

const AdminChildrenMobileTableItemSwitchButton = styled.button<IAdminChildrenMobileTableItemSwitchButton>`
  color: #ffffff;
  background-color: ${({ isActive }) => (isActive ? "green" : "#000000")};
  font-family: Inter;
  font-size: ${pxIntoRem(12)};
  font-style: normal;
  font-weight: 500;
  border-top: ${pxIntoRem(1)} solid #000000;
  line-height: 160%;
  cursor: pointer;
  height: ${pxIntoRem(40)};
`;

export {
  AdminChildrenBlock,
  AdminChildrenContentButtons,
  AdminChildrenContentBackButton,
  AdminChildrenContentCreateButton,
  AdminChildrenContent,
  AdminChildrenTableBodyItemDeleteButton,
  AdminChildrenTableBodyItemToButton,
  AdminChildrenTable,
  AdminChildrenTableBody,
  AdminChildrenTableHeader,
  AdminChildrenTableHeaderItem,
  AdminChildrenTableBodyItem,
  AdminChildrenTableBodyButton,
  AdminChildrenMobileTable,
  AdminChildrenMobileTableItem,
  AdminChildrenMobileTableItemLine,
  AdminChildrenMobileTableItemDeleteButton,
  AdminChildrenMobileTableItemToButton,
  AdminChildrenMobileTableItemSwitchButton,
};
