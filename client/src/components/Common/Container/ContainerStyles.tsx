import styled from "styled-components";
import pxIntoRem from "../../../utils/pxIntoRem";

interface IContainerBlock {
  width: number;
}

const ContainerBlock = styled.div<IContainerBlock>`
  width: 100%;
  max-width: ${({ width }) => pxIntoRem(width)};
  margin: 0 auto;

  @media (max-width: ${({ width }) => width}px) {
    padding: 0px ${pxIntoRem(20)};
  }
`;

export { ContainerBlock };
