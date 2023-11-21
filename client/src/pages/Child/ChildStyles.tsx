import styled from "styled-components";
import pxIntoRem from "../../utils/pxIntoRem";
import Button from "../../components/UI/Button/Button";

const ChildBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;

const ChildContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${pxIntoRem(140)};
  margin-bottom: ${pxIntoRem(115)};

  @media (max-width: 395px) {
    margin-top: ${pxIntoRem(90)};
    margin-bottom: ${pxIntoRem(60)};
  }
`;

const ChildTitle = styled.h1`
  color: #222741;
  text-align: center;
  font-family: Inter;
  font-size: ${pxIntoRem(48)};
  font-style: normal;
  font-weight: 700;
  line-height: 120%;

  @media (max-width: 395px) {
    font-size: ${pxIntoRem(20)};
    font-weight: 600;
    line-height: 140%;
  }
`;

const ChildInfo = styled.div`
  display: flex;
  width: 100%;
  background-color: rgba(196, 196, 196, 0.15);
  margin-top: ${pxIntoRem(60)};
  border-radius: ${pxIntoRem(20)} 0px 0px ${pxIntoRem(20)};

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    background-color: transparent;
    margin-top: ${pxIntoRem(30)};
  }
`;

const ChildInfoImage = styled.img`
  border-radius: ${pxIntoRem(20)};
  background: #c4c4c4;
  width: ${pxIntoRem(600)};
  height: ${pxIntoRem(600)};
  object-fit: cover;

  @media (max-width: 800px) {
    width: ${pxIntoRem(450)};
    height: ${pxIntoRem(450)};
  }

  @media (max-width: 395px) {
    width: ${pxIntoRem(330)};
    height: ${pxIntoRem(330)};
    border-radius: ${pxIntoRem(15)};
  }
`;

const ChildInfoContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${pxIntoRem(60)};

  @media (max-width: 800px) {
    width: ${pxIntoRem(450)};
    margin-top: ${pxIntoRem(20)};
    border-radius: ${pxIntoRem(15)};
    background-color: rgba(196, 196, 196, 0.15);
    padding: ${pxIntoRem(30)};
  }

  @media (max-width: 395px) {
    width: ${pxIntoRem(330)};
  }
`;

const ChildInfoFullname = styled.h2`
  color: #222741;
  font-family: Inter;
  font-size: ${pxIntoRem(37)};
  font-style: normal;
  font-weight: 700;
  line-height: 140%;

  @media (max-width: 395px) {
    font-size: ${pxIntoRem(20)};
  }
`;

const ChildInfoList = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: ${pxIntoRem(30)};
  gap: ${pxIntoRem(10)};
  list-style: none;

  @media (max-width: 395px) {
    margin-top: ${pxIntoRem(20)};
    gap: ${pxIntoRem(9)};
  }
`;

const ChildInfoListItem = styled.li`
  color: #222741;
  font-family: Inter;
  font-size: ${pxIntoRem(25)};
  font-style: normal;
  font-weight: 700;
  line-height: 150%;

  span {
    color: rgba(34, 39, 65, 0.5);
    font-family: Inter;
    font-size: ${pxIntoRem(25)};
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
  }

  @media (max-width: 395px) {
    font-size: ${pxIntoRem(12)};
    font-weight: 700;

    span {
      font-size: ${pxIntoRem(12)};
      font-weight: 500;
    }
  }
`;

const ChildButton = styled(Button)`
  margin-top: ${pxIntoRem(60)};
  width: ${pxIntoRem(300)};
  background-color: #6854fc;
  color: #ffffff;

  @media (max-width: 395px) {
    margin-top: ${pxIntoRem(30)};
    width: ${pxIntoRem(280)};
    padding-block: ${pxIntoRem(7)};
  }
`;

const ChildContentBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: ${pxIntoRem(60)};
  width: 100%;

  @media (max-width: 395px) {
    align-items: center;
  }
`;

const ChildContentTitle = styled.h2`
  color: #222741;
  text-align: center;
  font-family: Inter;
  font-size: ${pxIntoRem(48 * 0.8)};
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  margin-bottom: ${pxIntoRem(60 * 0.8)};

  @media (max-width: 395px) {
    font-size: ${pxIntoRem(20 * 0.8)};
    font-weight: 600;
    line-height: 140%;
    margin-bottom: ${pxIntoRem(23 * 0.8)};
  }
`;

const ChildVideo = styled.iframe`
  border-radius: ${pxIntoRem(20)};
  width: 100%;
  height: ${pxIntoRem(600)};

  @media (max-width: 395px) {
    height: ${pxIntoRem(236)};
  }
`;

export { ChildBlock, ChildContent, ChildInfo, ChildInfoImage, ChildInfoContent, ChildInfoFullname, ChildInfoList, ChildInfoListItem, ChildTitle, ChildButton, ChildVideo, ChildContentBlock, ChildContentTitle };
