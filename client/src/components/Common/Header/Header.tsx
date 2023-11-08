import React from "react";
import {
  HeaderBlock,
  HeaderBurger,
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
  HeaderBurgerMobile,
  HeaderLogo,
} from "./HeaderStyles";
import { useNavigate } from "react-router-dom";
import useModal from "../../../hooks/useModal";
import useOutsideClick from "../../../hooks/useOutsideClick";
import FiltersService from "../../../services/filtersService";

function Header() {
  const [burgerOpen, openBurger, closeBurger] = useModal();
  const navigate = useNavigate();

  const changeBurgerOpen = (e: React.SyntheticEvent) => {
    e.stopPropagation();

    burgerOpen ? closeBurger() : openBurger();
  };

  const ref = useOutsideClick(closeBurger);

  const toModels = () => {
    FiltersService.setFilters({
      specialization: "Модели",
      sex: null,
      age: null,
      height: null,
      hairColor: null,
      eyeColor: null,
      shoesSize: null,
      city: null,
    });

    navigate("/children");
  };

  const toActors = () => {
    FiltersService.setFilters({
      specialization: "Актеры",
      sex: null,
      age: null,
      height: null,
      hairColor: null,
      eyeColor: null,
      shoesSize: null,
      city: null,
    });

    navigate("/children");
  };

  const toServices = () => {
    navigate("/");

    setTimeout(() => {
      const services = document.querySelector("#services");

      services?.scrollIntoView({
        block: "start",
        behavior: "smooth",
      });
    }, 0);

    closeBurger();
  };

  return (
    <HeaderBlock>
      <HeaderLogo src="/images/logo.png" onClick={() => navigate("/")} />
      <HeaderBurger src="/images/burger.svg" onClick={changeBurgerOpen} />
      <HeaderBurgerMobile src="/images/burger-mobile.svg" onClick={changeBurgerOpen} />

      <HeaderBurgerMenu isOpen={burgerOpen} ref={ref}>
        <HeaderBurgerMenuClose>
          <HeaderBurgerMenuCloseImage onClick={closeBurger} />
        </HeaderBurgerMenuClose>

        <HeaderBurgerMenuLinks>
          {/* <HeaderBurgerMenuLink to={""}>О нас</HeaderBurgerMenuLink> */}
          <HeaderBurgerMenuLink onClick={toServices}>Наши услуги</HeaderBurgerMenuLink>
          {/* <HeaderBurgerMenuLink to={""}>Портфолио</HeaderBurgerMenuLink> */}
          <HeaderBurgerMenuLink onClick={toModels}>Дети модели</HeaderBurgerMenuLink>
          <HeaderBurgerMenuLink onClick={toActors}>Дети актеры</HeaderBurgerMenuLink>
          {/* <HeaderBurgerMenuLink to={""}>Контакты</HeaderBurgerMenuLink>
          <HeaderBurgerMenuLink to={""}>FAQ</HeaderBurgerMenuLink> */}
        </HeaderBurgerMenuLinks>

        <HeaderBurgerMenuNetworks>
          <HeaderBurgerMenuNetworksTitle>Наши соцсети</HeaderBurgerMenuNetworksTitle>

          <HeaderBurgerMenuNetworksContent>
            <HeaderBurgerMenuNetwork href="https://instagram.com/kasting_deti_spbmoskow">
              <HeaderBurgerMenuNetworkImage src="/inst-purple.svg" />
            </HeaderBurgerMenuNetwork>

            <HeaderBurgerMenuNetwork href="https://t.me/kasting_deti_spb_moskow">
              <HeaderBurgerMenuNetworkImage src="/telegram-purple.svg" />
            </HeaderBurgerMenuNetwork>

            <HeaderBurgerMenuNetwork href="https://vk.com/club211138131">
              <HeaderBurgerMenuNetworkImage src="/vk-purple.svg" />
            </HeaderBurgerMenuNetwork>

            <HeaderBurgerMenuNetwork href="https://Wa.me/79119685928">
              <HeaderBurgerMenuNetworkImage src="/whatsapp-purple.svg" />
            </HeaderBurgerMenuNetwork>
          </HeaderBurgerMenuNetworksContent>
        </HeaderBurgerMenuNetworks>
      </HeaderBurgerMenu>
    </HeaderBlock>
  );
}

export default Header;
