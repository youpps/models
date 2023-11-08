import styled from "styled-components";
import pxIntoRem from "../../../../utils/pxIntoRem";

const ChildrenMobileFilterInputBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  cursor: pointer;
`;

const ChildrenMobileFilterInputTitle = styled.h2`
  color: #222741;
  font-family: Inter;
  font-size: ${pxIntoRem(14)};
  font-style: normal;
  font-weight: 500;
  line-height: 130%;
`;

const ChildrenMobileFilterInputFields = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: space-between;
  gap: ${pxIntoRem(8)};
  width: 100%;
`;

const ChildrenMobileFilterInputField = styled.div`
  display: flex;
  border-radius: ${pxIntoRem(8)};
  border: ${pxIntoRem(1)} solid #dee0ec;
  margin-top: ${pxIntoRem(7)};
  position: relative;
  cursor: pointer;
  border-radius: ${pxIntoRem(8)};
  border: ${pxIntoRem(1)} solid #dee0ec;
  flex-grow: 0;
  flex-shrink: 0;
  height: ${pxIntoRem(44)};
`;

const ChildrenMobileFilterInputFieldInput = styled.input`
  color: #75788b;
  font-family: Inter;
  font-size: ${pxIntoRem(12)};
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  padding-left: ${pxIntoRem(16)};
  width: 100%;
`;

const ChildrenMobileFilterInputFieldInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #75788b;
  font-family: Inter;
  font-size: ${pxIntoRem(12)};
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  border-radius: 0px ${pxIntoRem(8)} ${pxIntoRem(8)} 0px;
  width: ${pxIntoRem(58)};
  background: rgba(196, 196, 196, 0.15);
  flex-shrink: 0;
`;

export { ChildrenMobileFilterInputBlock, ChildrenMobileFilterInputField, ChildrenMobileFilterInputFieldInfo, ChildrenMobileFilterInputFieldInput, ChildrenMobileFilterInputFields, ChildrenMobileFilterInputTitle };
