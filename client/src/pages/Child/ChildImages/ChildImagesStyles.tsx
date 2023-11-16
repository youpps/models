import styled from "styled-components";
import pxIntoRem from "../../../utils/pxIntoRem";

const ChildImagesBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${pxIntoRem(50)};
  margin-top: ${pxIntoRem(120)};
  width: 100%;

  @media (max-width: 395px) {
    margin-top: ${pxIntoRem(23)};
    gap: ${pxIntoRem(13)};
  }
`;

const ChildImagesLine = styled.div`
  display: flex;
  gap: ${pxIntoRem(50)};

  //   grid-template-columns: 1fr 2fr;

  //   &:nth-child(2) {
  //     grid-template-columns: 2fr 1fr;
  //   }

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 395px) {
    gap: ${pxIntoRem(13)};

    &:nth-child(2) {
      gap: ${pxIntoRem(13)};
    }
  }
`;

interface IChildImage {
  type: "short" | "wide";
}

const ChildImage = styled.img<IChildImage>`
  border-radius: ${pxIntoRem(20)};
  background: #c4c4c4;
  flex-shrink: 0;
  object-fit: cover;
  width: 100%;
  //   min-height: ${pxIntoRem(400)};
  //   max-height: 100%;
  flex-shrink: 1;
  height: 100%;

  //   @media (max-width: 395px) {
  //     min-height: ${pxIntoRem(236)};
  //     max-height: ${pxIntoRem(236)};
  //   }

  ${({ type }) => type === "short" && `width: calc((100%/3) - ${pxIntoRem(30)});`}
  ${({ type }) => (type === "short" ? `flex-grow: 0;` : `flex-grow: 1;`)}

  @media (max-width: 700px) {
    width: 100%;
    flex-grow: 1;
  }
`;

export { ChildImagesBlock, ChildImage, ChildImagesLine };
