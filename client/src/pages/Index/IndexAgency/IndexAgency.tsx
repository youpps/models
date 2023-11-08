import React from "react";
import { IndexAgencyBlock, IndexAgencyContent, IndexAgencyText, IndexAgencyTitle } from "./IndexAgencyStyles";
import Container from "../../../components/Common/Container/Container";

const IndexAgency = () => {
  return (
    <IndexAgencyBlock>
      <Container>
        <IndexAgencyContent>
          <IndexAgencyTitle>Наше агентство - это место, где мечты детей становятся реальностью.</IndexAgencyTitle>
          <IndexAgencyText>
            Мы с гордостью подтверждаем нашу миссию, предоставляя детям уникальные возможности для развития и самовыражения в индустрии развлечений. Мы стремимся помочь каждому ребенку раскрыть свой потенциал и создать свой путь к успешному будущему.
          </IndexAgencyText>
        </IndexAgencyContent>
      </Container>
    </IndexAgencyBlock>
  );
};

export default IndexAgency;
