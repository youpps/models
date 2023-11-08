import React, { FC } from "react";
import { IndexServicesBlock, IndexServicesContent, IndexServicesList, IndexServicesListItem, IndexServicesListItemText, IndexServicesListItemTitle, IndexServicesTitle } from "./IndexServicesStyles";
import Container from "../../../components/Common/Container/Container";

interface IIndexServices {
  services: {
    title: JSX.Element | string;
    text: JSX.Element | string;
  }[];
}

const IndexServices: FC<IIndexServices> = ({ services }) => {
  return (
    <IndexServicesBlock id="services">
      <Container>
        <IndexServicesContent>
          <IndexServicesTitle>Наши услуги</IndexServicesTitle>
          <IndexServicesList>
            {services.map((service, idx) => {
              return (
                <IndexServicesListItem key={idx}>
                  <IndexServicesListItemTitle>{service.title}</IndexServicesListItemTitle>
                  <IndexServicesListItemText>{service.text}</IndexServicesListItemText>
                </IndexServicesListItem>
              );
            })}
          </IndexServicesList>
        </IndexServicesContent>
      </Container>
    </IndexServicesBlock>
  );
};

export default IndexServices;
