import React, { FC } from "react";
import { IndexAboutBlock, IndexAboutContent, IndexAboutItem, IndexAboutItemButton, IndexAboutItemContent, IndexAboutItemImage, IndexAboutItemText, IndexAboutItemTitle } from "./IndexAboutStyles";
import Container from "../../../components/Common/Container/Container";
import { useNavigate } from "react-router-dom";
import FiltersService from "../../../services/filtersService";

interface IIndexAbout {
  items: {
    image: string;
    title: string;
    text: string;
    onClick(): void;
  }[];
}

const IndexAbout: FC<IIndexAbout> = ({ items }) => {
  const navigate = useNavigate();

  return (
    <IndexAboutBlock>
      <Container width={1360}>
        <IndexAboutContent>
          {items.map((item) => {
            return (
              <IndexAboutItem key={item.title}>
                <IndexAboutItemContent>
                  <IndexAboutItemTitle>{item.title}</IndexAboutItemTitle>
                  <IndexAboutItemText>{item.text}</IndexAboutItemText>
                  <IndexAboutItemButton onClick={item.onClick}>Посмотреть</IndexAboutItemButton>
                </IndexAboutItemContent>
                <IndexAboutItemImage src={item.image} />
              </IndexAboutItem>
            );
          })}
        </IndexAboutContent>
      </Container>
    </IndexAboutBlock>
  );
};

export default IndexAbout;
