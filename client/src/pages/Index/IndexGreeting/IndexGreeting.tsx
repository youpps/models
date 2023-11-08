import React from "react";
import { IndexGreetingBlock, IndexGreetingButton, IndexGreetingButtons, IndexGreetingContent, IndexGreetingImage, IndexGreetingImageBottom, IndexGreetingStars, IndexGreetingStarsMobile, IndexGreetingSubtitle, IndexGreetingText, IndexGreetingTitle } from "./IndexGreetingStyles";
import Container from "../../../components/Common/Container/Container";
import { useNavigate } from "react-router-dom";
import FiltersService from "../../../services/filtersService";

const IndexGreeting = () => {
  const navigate = useNavigate();

  const toServices = () => {
    const services = document.querySelector("#services");
    services?.scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
  };

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
    });

    navigate("/children");
  };

  return (
    <IndexGreetingBlock>
      <IndexGreetingStars alt="greeting-stars" src="/images/greeting-stars.png" />
      <IndexGreetingStarsMobile alt="greeting-stars-mobile" src="/images/greeting-stars-mobile.png" />
      <Container>
        <IndexGreetingContent>
          <IndexGreetingSubtitle>Детское кастинг-агенство </IndexGreetingSubtitle>
          <IndexGreetingTitle>Fresh casting</IndexGreetingTitle>
          <IndexGreetingText>Наше агентство - это место, где дети могут преодолеть свои грани и воплотить свои мечты в реальность. </IndexGreetingText>
          <IndexGreetingButtons>
            <IndexGreetingButton onClick={toServices}>Наши услуги</IndexGreetingButton>
            <IndexGreetingButton onClick={toChildren}>Каталог моделей</IndexGreetingButton>
          </IndexGreetingButtons>

          <IndexGreetingImage alt="greeting" src="/images/greeting.png" />
          <IndexGreetingImageBottom alt="greeting-bottom" src="/images/greeting-bottom.png" />
        </IndexGreetingContent>
      </Container>
    </IndexGreetingBlock>
  );
};

export default IndexGreeting;
