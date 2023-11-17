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
  flex-shrink: 1;
  height: 100%;
  cursor: pointer;

  ${({ type }) => type === "short" && `width: calc((100%/3) - ${pxIntoRem(30)});`}
  ${({ type }) => (type === "short" ? `flex-grow: 0;` : `flex-grow: 1;`)}

  @media (max-width: 700px) {
    width: 100%;
    flex-grow: 1;
  }
`;

const ChildImagesModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000000aa;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999999;
`;

const ChildImagesModalImageBlock = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: fit-content;
  width: fit-content;
`;

interface IChildImagesModalImageArrow {
  side: "left" | "right";
}

const ChildImagesModalImageArrow = styled.img<IChildImagesModalImageArrow>`
  position: absolute;
  width: ${pxIntoRem(50)};
  height: ${pxIntoRem(50)};
  padding: ${pxIntoRem(5)};
  background-color: #ffffff;
  border-radius: 100%;
  z-index: 9999999999999;
  cursor: pointer;
  transform: ${({ side }) => (side === "left" ? "rotate(90deg)" : "rotate(-90deg)")};
  ${({ side }) => side}: ${pxIntoRem(-25)};

  @media (max-width: 395px) {
    width: ${pxIntoRem(25)};
    height: ${pxIntoRem(25)};
    ${({ side }) => side}: ${pxIntoRem(-12.5)};
  }
`;

const ChildImagesModalImageClose = styled.img`
  position: absolute;
  width: ${pxIntoRem(50)};
  height: ${pxIntoRem(50)};
  top: ${pxIntoRem(-12.5)};
  right: ${pxIntoRem(-12.5)};
  padding: ${pxIntoRem(5)};
  background-color: #ffffff;
  border-radius: 100%;
  z-index: 9999999999999;
  cursor: pointer;

  @media (max-width: 395px) {
    width: ${pxIntoRem(25)};
    height: ${pxIntoRem(25)};
    top: ${pxIntoRem(-7.25)};
    right: ${pxIntoRem(-7.25)};
  }
`;

const ChildImagesModalImage = styled.img`
  max-height: 80vh;
  max-width: 80vw;
  border-radius: ${pxIntoRem(20)};
`;

export { ChildImagesBlock, ChildImage, ChildImagesLine, ChildImagesModal, ChildImagesModalImage, ChildImagesModalImageBlock, ChildImagesModalImageArrow, ChildImagesModalImageClose };
