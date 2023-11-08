import React, { useState, useEffect } from "react";
import moment from "moment";
import { ChildBlock, ChildButton, ChildContent, ChildImage, ChildImages, ChildImagesLine, ChildInfo, ChildInfoContent, ChildInfoFullname, ChildInfoImage, ChildInfoList, ChildInfoListItem, ChildTitle, ChildVideo } from "./ChildStyles";
import Header from "../../components/Common/Header/Header";
import Footer from "../../components/Common/Footer/Footer";
import Container from "../../components/Common/Container/Container";
import { Child as ChildEntity } from "../../types/child";
import ChildrenService from "../../services/childrenService";
import { useNavigate, useParams } from "react-router-dom";

const Child = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [child, setChild] = useState<ChildEntity | null>(null);

  async function getData() {
    const id = params["id"] || -1;
    const child = await ChildrenService.getChild(id);
    if (!child) {
      navigate("/");
      return;
    }

    setChild(child);
  }

  useEffect(() => {
    getData();
  }, []);

  function chunk(arr: any[]) {
    const size = 2;
    const result = [];

    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }

    return result;
  }

  return (
    <ChildBlock>
      <Header />

      <Container>
        <ChildContent>
          <ChildTitle>Страница модели</ChildTitle>

          <ChildInfo>
            <ChildInfoImage src={child?.avatar} />
            <ChildInfoContent>
              <ChildInfoFullname>
                {child?.name} {child?.surname}
              </ChildInfoFullname>
              <ChildInfoList>
                <ChildInfoListItem>
                  Направление: <span>{child?.specialization.toLowerCase()}</span>
                </ChildInfoListItem>
                <ChildInfoListItem>
                  Пол: <span>{child?.sex.toLowerCase()}</span>
                </ChildInfoListItem>
                <ChildInfoListItem>
                  Возраст: <span> {child?.birthDate ? `${moment().diff(moment(child?.birthDate), "years")} лет` : ""}</span>
                </ChildInfoListItem>
                <ChildInfoListItem>
                  Рост: <span>{child?.height ? `${child.height}см` : ""}</span>
                </ChildInfoListItem>
                <ChildInfoListItem>
                  Волосы: <span>{child?.hairColor.toLowerCase()}</span>
                </ChildInfoListItem>
                <ChildInfoListItem>
                  Глаза: <span>{child?.eyeColor.toLowerCase()}</span>
                </ChildInfoListItem>
                <ChildInfoListItem>
                  Обувь: <span>{child?.shoesSize.toLowerCase()}</span>
                </ChildInfoListItem>
                <ChildInfoListItem>
                  Город: <span>{child?.city}</span>
                </ChildInfoListItem>
              </ChildInfoList>
            </ChildInfoContent>
          </ChildInfo>

          <ChildVideo src="https://www.youtube.com/embed/ooEBgQ7v1W4"></ChildVideo>

          <ChildImages>
            {chunk(child?.images ?? []).map((imageChunk, idx) => {
              return (
                <ChildImagesLine key={idx}>
                  {imageChunk.map((image) => {
                    return <ChildImage src={image.url} key={image.id} />;
                  })}
                </ChildImagesLine>
              );
            })}
          </ChildImages>

          <ChildButton onClick={() => window.open(`https://wa.me/79119685928/?text=Здравствуйте, хочу у Вас заказать съемку с моделью ${window.origin}/children/${child?.id}`)}>Заказать съемку</ChildButton>
        </ChildContent>
      </Container>

      <Footer />
    </ChildBlock>
  );
};

export default Child;
