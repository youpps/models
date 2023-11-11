import React from "react";
import { FooterBlock, FooterLink, FooterLinks, FooterNetwork, FooterNetworkImage, FooterNetworks, FooterTitle } from "./FooterStyles";
import { useNavigate } from "react-router-dom";
import FiltersService from "../../../services/filtersService";

const Footer = () => {
  const navigate = useNavigate();

  const toChildren = () => {
    FiltersService.setFilters({
      specialization: null,
      sex: null,
      age: null,
      height: null,
      hairColor: null,
      eyeColor: null,
      shoesSize: null,
      city: null,
      video: null,
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
  };

  return (
    <FooterBlock>
      <FooterTitle>Fresh Casting</FooterTitle>
      <FooterLinks>
        <FooterLink onClick={toServices}>Услуги</FooterLink>
        <FooterLink onClick={toChildren}>База детей</FooterLink>
        {/* <FooterLink>Контакты</FooterLink> */}
      </FooterLinks>
      <FooterNetworks>
        <FooterNetwork href="https://instagram.com/kasting_deti_spbmoskow">
          <FooterNetworkImage src="/images/inst.svg" />
        </FooterNetwork>

        <FooterNetwork href="https://t.me/kasting_deti_spb_moskow">
          <FooterNetworkImage src="/images/telegram.svg" />
        </FooterNetwork>

        <FooterNetwork href="https://vk.com/club211138131">
          <FooterNetworkImage src="/images/vk.svg" />
        </FooterNetwork>

        <FooterNetwork href="https://Wa.me/79119685928">
          <FooterNetworkImage src="/images/whatsapp.svg" />
        </FooterNetwork>
      </FooterNetworks>
    </FooterBlock>
  );
};

export default Footer;
