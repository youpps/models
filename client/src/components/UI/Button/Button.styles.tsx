import styled from "styled-components";
import pxIntoRem from "../../../utils/pxIntoRem";

const ButtonBlock = styled.button`
  border-radius: ${pxIntoRem(30)};
  display: flex;
  padding: ${pxIntoRem(15)} ${pxIntoRem(20)};
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  font-family: Inter;
  font-size: ${pxIntoRem(18)};
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
  cursor: pointer;
  flex-grow: 1;
  flex-shrink: 0;
  color: #6854fc;
  background-color: transparent;
  border: ${pxIntoRem(3)} solid #6854fc;

  @media (max-width: 395px) {
    padding: ${pxIntoRem(10)} ${pxIntoRem(20)};
  }
`;

export { ButtonBlock };
