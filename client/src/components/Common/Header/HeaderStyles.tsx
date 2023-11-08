import styled from "styled-components";
import pxIntoRem from "../../../utils/pxIntoRem";
import { Link } from "react-router-dom";

const HeaderBlock = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  position: fixed;
  width: 100%;
  height: ${pxIntoRem(100)};
  flex-shrink: 0;
  box-shadow: 0px ${pxIntoRem(4)} ${pxIntoRem(40)} 0px rgba(0, 0, 0, 0.05);
  z-index: 99999;

  @media (max-width: 395px) {
    height: ${pxIntoRem(60)};
  }
`;

const HeaderLogo = styled.img`
  margin-left: auto;
  margin-right: auto;
  cursor: pointer;
  width: ${pxIntoRem(140)};

  @media (max-width: 395px) {
    width: ${pxIntoRem(70)};
  }
`;

const HeaderBurger = styled.img`
  position: fixed;
  display: flex;
  right: ${pxIntoRem(90)};
  top: ${pxIntoRem(25)};
  width: ${pxIntoRem(48)};
  height: ${pxIntoRem(48)};
  flex-shrink: 0;
  cursor: pointer;

  @media (max-width: 500px) {
    right: ${pxIntoRem(45)};
  }

  @media (max-width: 395px) {
    display: none;
  }
`;

const HeaderBurgerMobile = styled.img`
  display: none;
  width: ${pxIntoRem(27)};
  height: ${pxIntoRem(43)};
  flex-shrink: 0;
  cursor: pointer;
  position: fixed;
  right: ${pxIntoRem(18)};
  top: ${pxIntoRem(10)};

  @media (max-width: 395px) {
    display: flex;
  }
`;

interface IHeaderBurgerMenu {
  isOpen: boolean;
}

const HeaderBurgerMenu = styled.div<IHeaderBurgerMenu>`
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  width: ${pxIntoRem(630)};
  height: 100vh;
  z-index: 999999;
  overflow-y: scroll;
  background-color: #fff;
  box-shadow: ${pxIntoRem(-20)} 0px ${pxIntoRem(100)} 0px rgba(0, 0, 0, 0.1);
  padding: ${pxIntoRem(26)} ${pxIntoRem(26)} ${pxIntoRem(142)} ${pxIntoRem(70)};
  transform: translateX(${({ isOpen }) => (isOpen ? "0%" : "-100%")});
  transition-duration: 0.6s;

  @media (max-width: 395px) {
    width: ${pxIntoRem(224)};
    padding: ${pxIntoRem(20)} ${pxIntoRem(20)} ${pxIntoRem(30)} ${pxIntoRem(20)};
  }
`;

const HeaderBurgerMenuClose = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${pxIntoRem(52)};
  height: ${pxIntoRem(52)};
  background-color: rgba(196, 196, 196, 0.2);
  margin-left: auto;
  border-radius: 100%;
  flex-shrink: 0;
  cursor: pointer;

  @media (max-width: 395px) {
    background-color: transparent;
    width: fit-content;
    height: fit-content;
  }
`;

const HeaderBurgerMenuCloseImage = styled.img`
  width: ${pxIntoRem(36)};
  height: ${pxIntoRem(36)};
  flex-shrink: 0;

  @media (max-width: 395px) {
    width: ${pxIntoRem(24)};
    height: ${pxIntoRem(24)};
  }
`;

const HeaderBurgerMenuLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${pxIntoRem(40)};
  margin-top: ${pxIntoRem(60)};

  @media (max-width: 395px) {
    margin-top: ${pxIntoRem(16)};
    gap: ${pxIntoRem(20)};
  }
`;

const HeaderBurgerMenuLink = styled.button`
  display: flex;
  background-color: transparent;
  color: #222741;
  font-family: Inter;
  font-size: ${pxIntoRem(36)};
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  cursor: pointer;

  @media (max-width: 395px) {
    font-size: ${pxIntoRem(20)};
  }
`;

const HeaderBurgerMenuNetworks = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${pxIntoRem(50)};

  @media (max-width: 395px) {
    margin-top: ${pxIntoRem(30)};
  }
`;

const HeaderBurgerMenuNetworksTitle = styled.h3`
  color: #222741;
  font-family: Inter;
  font-size: ${pxIntoRem(18)};
  font-style: normal;
  font-weight: 400;
  line-height: 140%;

  @media (max-width: 395px) {
    font-size: ${pxIntoRem(12)};
  }
`;

const HeaderBurgerMenuNetworksContent = styled.div`
  display: flex;
  align-items: center;
  margin-top: ${pxIntoRem(25)};
  gap: ${pxIntoRem(20)};

  @media (max-width: 395px) {
    margin-top: ${pxIntoRem(22)};
    position: relative;
    left: ${pxIntoRem(-5)};
    gap: ${pxIntoRem(10)};
  }
`;

const HeaderBurgerMenuNetwork = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${pxIntoRem(65)};
  height: ${pxIntoRem(65)};
  flex-shrink: 0;
  border-radius: ${pxIntoRem(20)};
  background: #6854fc1a;
  cursor: pointer;

  @media (max-width: 395px) {
    width: ${pxIntoRem(35)};
    height: ${pxIntoRem(35)};
    border-radius: ${pxIntoRem(10)};
  }
`;

const HeaderBurgerMenuNetworkImage = styled.img`
  width: ${pxIntoRem(32)};
  height: ${pxIntoRem(32)};
  flex-shrink: 0;

  @media (max-width: 395px) {
    width: ${pxIntoRem(17.231)};
    height: ${pxIntoRem(17.231)};
  }
`;

export {
  HeaderBlock,
  HeaderBurger,
  HeaderLogo,
  HeaderBurgerMobile,
  HeaderBurgerMenu,
  HeaderBurgerMenuClose,
  HeaderBurgerMenuCloseImage,
  HeaderBurgerMenuLink,
  HeaderBurgerMenuLinks,
  HeaderBurgerMenuNetwork,
  HeaderBurgerMenuNetworkImage,
  HeaderBurgerMenuNetworks,
  HeaderBurgerMenuNetworksContent,
  HeaderBurgerMenuNetworksTitle,
};
