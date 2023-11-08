import React, { FC } from "react";
import { IndexOurHelpBlock, IndexOurHelpContent, IndexOurHelpList, IndexOurHelpListItem, IndexOurHelpListItemImage, IndexOurHelpListItemText, IndexOurHelpListItemTitle, IndexOurHelpTitle } from "./IndexOurHelpStyles";
import Container from "../../../components/Common/Container/Container";

interface IIndexOurHelp {
  items: {
    image: string;
    title: JSX.Element | string;
    text: JSX.Element | string;
  }[];
}

const IndexOurHelp: FC<IIndexOurHelp> = ({ items }) => {
  return (
    <IndexOurHelpBlock>
      <Container>
        <IndexOurHelpContent>
          <IndexOurHelpTitle>Чем мы еще можем быть Вам полезны</IndexOurHelpTitle>
          <IndexOurHelpList>
            {items.map((item, idx) => {
              return (
                <IndexOurHelpListItem key={idx}>
                  <IndexOurHelpListItemImage src={item.image} />
                  <IndexOurHelpListItemTitle>{item.title}</IndexOurHelpListItemTitle>
                  <IndexOurHelpListItemText>{item.text}</IndexOurHelpListItemText>
                </IndexOurHelpListItem>
              );
            })}
          </IndexOurHelpList>
        </IndexOurHelpContent>
      </Container>
    </IndexOurHelpBlock>
  );
};

export default IndexOurHelp;
