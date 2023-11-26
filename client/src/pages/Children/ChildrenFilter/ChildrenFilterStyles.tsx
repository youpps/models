import styled from "styled-components";
import pxIntoRem from "../../../utils/pxIntoRem";

const ChildrenFilterBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

const ChildrenFilterTitle = styled.h2`
  color: #000;
  cursor: pointer;
  font-family: Inter;
  font-size: ${pxIntoRem(30)};
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  cursor: pointer;
`;

interface IChildrenFilterList {
  isOpen: boolean;
  length: number;
}

const ChildrenFilterList = styled.ul<IChildrenFilterList>`
  list-style: none;
  margin-left: ${pxIntoRem(30)};
  margin-top: ${pxIntoRem(25)};
  display: flex;
  flex-direction: column;
  gap: ${pxIntoRem(12)};
  width: ${pxIntoRem(220)};
  overflow: hidden;
  max-height: ${({ isOpen, length }) => (isOpen ? `${pxIntoRem(length * 21.6 + (length - 1) * 13)}` : "0px")};
  transition-duration: 0.6s;
`;

const ChildrenFilterListItemText = styled.span`
  color: #747474;
  font-family: Inter;
  font-size: ${pxIntoRem(18)};
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

interface IChildrenFilterListItem {
  isActive?: boolean;
}

const ChildrenFilterListItem = styled.li<IChildrenFilterListItem>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  ${ChildrenFilterListItemText} {
    ${({ isActive }) => isActive && `font-weight: 700;`}
    ${({ isActive }) => isActive && `color: #6854FC;`}
  }
`;

export { ChildrenFilterBlock, ChildrenFilterList, ChildrenFilterListItem, ChildrenFilterTitle, ChildrenFilterListItemText };
