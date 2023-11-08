import styled from "styled-components";
import pxIntoRem from "../../../utils/pxIntoRem";

const AdminChildSelectBlock = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 395px) {
    width: 100%;
  }
`;

interface IAdminChildSelectValue {
  isPlaceholder: boolean;
}

const AdminChildSelectValue = styled.button<IAdminChildSelectValue>`
  display: flex;
  align-items: center;
  width: ${pxIntoRem(394)};
  height: ${pxIntoRem(42)};
  font-family: Inter;
  font-size: ${pxIntoRem(20)};
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border-radius: ${pxIntoRem(1)};
  border: ${pxIntoRem(3)} solid #6854fc;
  background: #fff;
  box-shadow: 0px ${pxIntoRem(4)} ${pxIntoRem(4)} 0px rgba(0, 0, 0, 0.25);
  padding-left: ${pxIntoRem(5)};
  color: ${({ isPlaceholder }) => (isPlaceholder ? `rgba(0, 0, 0, 0.3)` : `rgba(0, 0, 0, 0.5)`)};
  cursor: pointer;

  @media (max-width: 395px) {
    width: 100%;
  }
`;

const AdminChildSelectItems = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: ${pxIntoRem(1)};
  border: ${pxIntoRem(3)} solid #6854fc;
  background: #fff;
  box-shadow: 0px ${pxIntoRem(4)} ${pxIntoRem(4)} 0px rgba(0, 0, 0, 0.25);
  margin-top: ${pxIntoRem(5)};
  width: ${pxIntoRem(394)};

  @media (max-width: 395px) {
    width: 100%;
  }
`;

const AdminChildSelectItem = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  height: ${pxIntoRem(42)};
  color: rgba(0, 0, 0, 0.5);
  font-family: Inter;
  font-size: ${pxIntoRem(20)};
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  padding-left: ${pxIntoRem(5)};
  cursor: pointer;
  background-color: transparent;
  border-bottom: ${pxIntoRem(3)} solid #6854fc;

  &:last-of-type {
    border-bottom: none;
  }
`;

export { AdminChildSelectBlock, AdminChildSelectItem, AdminChildSelectItems, AdminChildSelectValue };
