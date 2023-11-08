import styled from "styled-components";
import Button from "../../../components/UI/Button/Button";
import pxIntoRem from "../../../utils/pxIntoRem";

const IndexGreetingBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: ${pxIntoRem(100)};
`;

const IndexGreetingContent = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding-top: ${pxIntoRem(188)};
  @media (max-width: 1000px) {
    align-items: center;
    text-align: center;
  }

  @media (max-width: 395px) {
    padding-top: 68px;
  }
`;

const IndexGreetingTitle = styled.h1`
  color: #6854fc;
  font-family: Inter;
  font-size: ${pxIntoRem(80)};
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  text-transform: capitalize;
  margin-top: ${pxIntoRem(30)};

  @media (max-width: 395px) {
    text-align: center;
    font-size: ${pxIntoRem(45)};
    margin-top: ${pxIntoRem(15)};
  }
`;

const IndexGreetingSubtitle = styled.h2`
  color: #6854fc;
  font-family: Inter;
  font-size: ${pxIntoRem(40)};
  font-style: normal;
  font-weight: 700;
  line-height: 120%;

  @media (max-width: 395px) {
    text-align: center;
    font-size: ${pxIntoRem(20)};
  }
`;

const IndexGreetingText = styled.p`
  color: rgba(34, 39, 65, 0.5);
  font-family: Inter;
  font-size: ${pxIntoRem(18)};
  font-style: normal;
  font-weight: 500;
  line-height: 160%;
  letter-spacing: ${pxIntoRem(0.36)};
  margin-top: ${pxIntoRem(40)};
  max-width: ${pxIntoRem(600)};

  @media (max-width: 395px) {
    text-align: center;
    font-size: ${pxIntoRem(15)};
    letter-spacing: ${pxIntoRem(0.3)};
    max-width: ${pxIntoRem(330)};
  }
`;

const IndexGreetingStars = styled.img`
  position: absolute;
  top: ${pxIntoRem(105)};
  width: ${pxIntoRem(1440)};

  @media (max-width: 1000px) {
    display: none;
  }
`;

const IndexGreetingStarsMobile = styled.img`
  display: none;

  // @media (max-width: 1000px) {
  //   display: flex;
  //   position: absolute;
  //   width: ${pxIntoRem(600)};
  //   top: ${pxIntoRem(130)};
  // }

  @media (max-width: 395px) {
    display: flex;
    position: absolute;
    top: ${pxIntoRem(75)};
    width: ${pxIntoRem(395)};
  }
`;

const IndexGreetingImage = styled.img`
  position: absolute;
  left: ${pxIntoRem(628)};
  top: ${pxIntoRem(98)};
  width: ${pxIntoRem(627)};
  z-index: 2;

  @media (max-width: 1200px) {
    left: ${pxIntoRem(568)};
  }

  @media (max-width: 1000px) {
    display: none;
  }
`;

const IndexGreetingImageBottom = styled.img`
  position: absolute;
  left: ${pxIntoRem(630)};
  top: ${pxIntoRem(90)};
  width: ${pxIntoRem(645)};
  z-index: 1;

  @media (max-width: 1200px) {
    left: ${pxIntoRem(570)};
  }

  @media (max-width: 1000px) {
    display: none;
  }
`;

const IndexGreetingButtons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: ${pxIntoRem(30)};
  margin-top: ${pxIntoRem(89)};
  width: ${pxIntoRem(630)};

  @media (max-width: 395px) {
    grid-template-columns: 1fr;
    width: ${pxIntoRem(250)};
    margin-top: ${pxIntoRem(48)};
    gap: ${pxIntoRem(20)};
  }
`;

const IndexGreetingButton = styled(Button)`
  &:first-of-type {
    background-color: #6854fc;
    color: #ffffff;
  }
`;

export { IndexGreetingBlock, IndexGreetingContent, IndexGreetingStarsMobile, IndexGreetingText, IndexGreetingButton, IndexGreetingButtons, IndexGreetingTitle, IndexGreetingSubtitle, IndexGreetingImage, IndexGreetingImageBottom, IndexGreetingStars };
