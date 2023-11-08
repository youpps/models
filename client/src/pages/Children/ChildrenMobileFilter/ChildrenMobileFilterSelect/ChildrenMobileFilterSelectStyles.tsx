import styled from "styled-components";
import pxIntoRem from "../../../../utils/pxIntoRem";

const ChildrenMobileFilterSelectBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  cursor: pointer;
`;

const ChildrenMobileFilterSelectTitle = styled.h2`
  color: #222741;
  font-family: Inter;
  font-size: ${pxIntoRem(14)};
  font-style: normal;
  font-weight: 500;
  line-height: 130%;
`;

const ChildrenMobileFilterSelectField = styled.div`
  border-radius: ${pxIntoRem(8)};
  border: ${pxIntoRem(1)} solid #dee0ec;
  padding: ${pxIntoRem(13)} ${pxIntoRem(16)};
  margin-top: ${pxIntoRem(6)};
  position: relative;
  cursor: pointer;
`;

const ChildrenMobileFilterSelectValues = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: ${pxIntoRem(8)};
  border: ${pxIntoRem(1)} solid #dee0ec;
  margin-top: ${pxIntoRem(6)};
  position: relative;
`;

const ChildrenMobileFilterSelectValue = styled.button`
  display: flex;
  background-color: transparent;
  color: #75788b;
  font-family: Inter;
  font-size: ${pxIntoRem(12)};
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  padding: ${pxIntoRem(13)} ${pxIntoRem(16)};
  border-bottom: ${pxIntoRem(1)} solid #dee0ec;
  cursor: pointer;

  &:last-child {
    border-bottom: none;
  }
`;

const ChildrenMobileFilterSelectText = styled.span`
  color: #75788b;
  font-family: Inter;
  font-size: ${pxIntoRem(12)};
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
`;

const ChildrenMobileFilterSelectArrow = styled.img`
  width: ${pxIntoRem(24)};
  height: ${pxIntoRem(24)};
  flex-shrink: 0;
  position: absolute;
  right: ${pxIntoRem(16)};
`;

export { ChildrenMobileFilterSelectBlock, ChildrenMobileFilterSelectValues, ChildrenMobileFilterSelectValue, ChildrenMobileFilterSelectTitle, ChildrenMobileFilterSelectField, ChildrenMobileFilterSelectText, ChildrenMobileFilterSelectArrow };
