import styled from "styled-components";
import Button from "../../../components/UI/Button/Button";
import pxIntoRem from "../../../utils/pxIntoRem";

const ChildrenMobileFilterBlock = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  display: none;
  flex-direction: column;
  justify-content: flex-end;
  background-color: rgba(34, 39, 65, 0.8);
  z-index: 99999999;

  @media (max-width: 700px) {
    display: flex;
  }
`;

const ChildrenMobileFilterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${pxIntoRem(18)} ${pxIntoRem(34)} ${pxIntoRem(60)} ${pxIntoRem(16)};
  background-color: #fff;
  width: 100%;
  border-radius: ${pxIntoRem(20)} ${pxIntoRem(20)} 0px 0px;
  margin-top: ${pxIntoRem(46)};
  overflow-y: scroll;
`;

const ChildrenMobileFilterTitle = styled.h2`
  color: #222741;
  text-align: center;
  font-family: Inter;
  font-size: ${pxIntoRem(20)};
  font-style: normal;
  font-weight: 600;
  line-height: 130%;
  width: 100%;
  position: relative;
`;

const ChildrenMobileFilterClose = styled.img`
  width: ${pxIntoRem(28)};
  height: ${pxIntoRem(28)};
  flex-shrink: 0;
  position: absolute;
  left: ${pxIntoRem(6)};
  top: ${pxIntoRem(-3)};
  cursor: pointer;
`;

const ChildrenMobileFilterBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${pxIntoRem(12)};
  width: 100%;
  margin-top: ${pxIntoRem(25)};
`;

const ChildrenMobileFilterButton = styled(Button)`
  background-color: #6854fc;
  color: white;
  max-width: ${pxIntoRem(294)};
  width: 100%;
  padding-block: ${pxIntoRem(7)};
  margin-top: ${pxIntoRem(30)};
`;

export { ChildrenMobileFilterBlock, ChildrenMobileFilterClose, ChildrenMobileFilterContent, ChildrenMobileFilterTitle, ChildrenMobileFilterBody, ChildrenMobileFilterButton };
