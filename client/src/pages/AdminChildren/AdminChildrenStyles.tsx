import styled from "styled-components";

const AdminChildrenBlock = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 20px;
`;

const AdminChildrenContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const AdminChildrenContentButton = styled.button`
  height: 40px;
  padding: 0px 10px;
  max-width: 200px;
  background-color: blue;
  color: #ffffff;
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 160%;
  letter-spacing: 0.36px;
  cursor: pointer;
`;

const AdminChildrenTable = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border: 1px solid #000000;
`;

const AdminChildrenTableHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.8fr 0.8fr 2fr 0.5fr;
  height: 40px;
  width: 100%;
  background-color: #000000;
`;

const AdminChildrenTableHeaderItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 160%;
  letter-spacing: 0.36px;
  height: 100%;
  border-right: 1px solid #000000;
  padding: 5px;
  &:last-child {
    border: none;
  }
`;

const AdminChildrenTableBody = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.8fr 0.8fr 2fr 0.5fr;
  height: auto;
  width: 100%;
`;

const AdminChildrenTableBodyItem = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 160%;
  letter-spacing: 0.36px;
  height: 100%;
  border-right: 1px solid #000000;
  border-bottom: 1px solid #000000;
  height: 40px;
  color: #000000;

  &:nth-child(5) {
    border: none;
  }
`;

const AdminChildrenTableBodyItemButton = styled.button`
  position: absolute;
  right: 4px;
  padding: 2px 10px;
  background-color: #6854fc;
  color: #ffffff;
  font-family: Inter;
  font-size: 15px;
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
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  border-bottom: 1px solid #000000;
  line-height: 160%;
  cursor: pointer;
`;

// const AdminLoginForm = styled.form`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   width: 250px;
//   gap: 10px;
// `;

// const AdminLoginTitle = styled.h1`
//   color: #000;
//   text-align: center;
//   font-family: Inter;
//   font-size: 20px;
//   font-style: normal;
//   font-weight: 600;
//   line-height: 140%;
// `;

// const AdminLoginInput = styled.input`
// color: #000;
// font-family: Inter;
// font-size: 14px;
// font-style: normal;
// font-weight: 500;
// line-height: 160%;
// letter-spacing: 0.36px;
//   border: 1px solid rgba(0, 0, 0, 0.4);
//   height: 40px;
//   width: 100%;
//   padding: 10px;
// `;

// const AdminLoginButton = styled.button`
//   height: 40px;
//   width: 100%;
//   background-color: #6854fc;
//   color: #ffffff;
//   font-family: Inter;
//   font-size: 14px;
//   font-style: normal;
//   font-weight: 600;
//   line-height: 160%;
//   letter-spacing: 0.36px;
//   padding: 10px;
// `;

export { AdminChildrenBlock, AdminChildrenContentButton, AdminChildrenContent, AdminChildrenTableBodyItemButton, AdminChildrenTable, AdminChildrenTableBody, AdminChildrenTableHeader, AdminChildrenTableHeaderItem, AdminChildrenTableBodyItem, AdminChildrenTableBodyButton };
