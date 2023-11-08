import styled from "styled-components";

const AdminLoginBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const AdminLoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  gap: 10px;
`;

const AdminLoginTitle = styled.h1`
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
`;

const AdminLoginInput = styled.input`
  color: #000;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 160%;
  letter-spacing: 0.36px;
  border: 1px solid rgba(0, 0, 0, 0.4);
  height: 40px;
  width: 100%;
  padding: 10px;
`;

const AdminLoginButton = styled.button`
  height: 40px;
  width: 100%;
  background-color: #6854fc;
  color: #ffffff;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 160%;
  letter-spacing: 0.36px;
  padding: 10px;
  cursor: pointer;
`;

const AdminLoginError = styled.p`
  color: red;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 160%;
  letter-spacing: 0.36px;
`;

export { AdminLoginBlock, AdminLoginForm, AdminLoginTitle, AdminLoginInput, AdminLoginButton, AdminLoginError };
