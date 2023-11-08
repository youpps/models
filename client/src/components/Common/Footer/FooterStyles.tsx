import styled from "styled-components";
import pxIntoRem from "../../../utils/pxIntoRem";

const FooterBlock = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #030322;
  padding-block: ${pxIntoRem(90)} ${pxIntoRem(85)};
  width: 100%;

  @media (max-width: 395px) {
    padding-block: ${pxIntoRem(30)};
  }
`;

const FooterTitle = styled.h2`
  color: #6854fc;
  text-align: center;
  font-family: Inter;
  font-size: ${pxIntoRem(30)};
  font-style: normal;
  font-weight: 700;
  line-height: 120%;

  @media (max-width: 395px) {
    font-size: ${pxIntoRem(16)};
  }
`;

const FooterLinks = styled.div`
  display: flex;
  align-items: center;
  gap: ${pxIntoRem(60)};
  margin-top: ${pxIntoRem(62)};

  @media (max-width: 395px) {
    gap: ${pxIntoRem(20)};
    margin-top: ${pxIntoRem(30)};
  }
`;

const FooterLink = styled.a`
  color: #ffffff;
  font-family: Inter;
  font-size: ${pxIntoRem(18)};
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  cursor: pointer;

  @media (max-width: 395px) {
    font-size: ${pxIntoRem(12)};
  }
`;

const FooterNetworks = styled.div`
  display: flex;
  align-items: center;
  gap: ${pxIntoRem(50)};
  margin-top: ${pxIntoRem(82)};

  @media (max-width: 395px) {
    gap: ${pxIntoRem(20)};
    margin-top: ${pxIntoRem(30)};
  }
`;

const FooterNetwork = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${pxIntoRem(20)};
  background: #f2f2f21a;
  width: ${pxIntoRem(65)};
  height: ${pxIntoRem(65)};
  flex-shrink: 0;
  cursor: pointer;

  @media (max-width: 395px) {
    width: ${pxIntoRem(35)};
    height: ${pxIntoRem(35)};
    border-radius: ${pxIntoRem(10)};
  }
`;

const FooterNetworkImage = styled.img`
  width: ${pxIntoRem(32)};
  height: ${pxIntoRem(32)};

  @media (max-width: 395px) {
    width: ${pxIntoRem(17.231)};
    height: ${pxIntoRem(17.231)};
  }
`;

export { FooterBlock, FooterLink, FooterLinks, FooterNetwork, FooterNetworkImage, FooterNetworks, FooterTitle };
