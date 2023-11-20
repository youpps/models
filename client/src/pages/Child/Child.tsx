import React, { useState, useEffect, useMemo } from "react";
import moment from "moment";
import { ChildBlock, ChildButton, ChildContent, ChildInfo, ChildInfoContent, ChildInfoFullname, ChildInfoImage, ChildInfoList, ChildInfoListItem, ChildTitle, ChildVideo } from "./ChildStyles";
import Header from "../../components/Common/Header/Header";
import Footer from "../../components/Common/Footer/Footer";
import Container from "../../components/Common/Container/Container";
import { Child as ChildEntity, ChildImage } from "../../types/child";
import ChildrenService from "../../services/childrenService";
import { useNavigate, useParams } from "react-router-dom";
import ChildImages from "./ChildImages/ChildImages";
import Formatter from "../../utils/formatter";
import { Cipher } from "crypto";

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

  const correctVideo = useMemo(() => {
    if (child?.video.includes("https://youtu.be/")) {
      const splitted = child.video.split("/");
      const id = splitted.pop();

      return `https://www.youtube.com/embed/${id}`;
    }

    if (child?.video.includes("https://www.youtube.com/shorts")) {
      const splitted = child.video.split("/");
      const id = splitted.pop();

      return `https://www.youtube.com/embed/${id}`;
    }

    if (child?.video?.includes("https://www.youtube.com/watch?v=")) {
      const splitted = child.video.split("?v=");
      const id = splitted.pop();

      return `https://www.youtube.com/embed/${id}`;
    }

    return child?.video;
  }, [child]);

  const age = useMemo(() => {
    const years = moment().diff(moment(child?.birthDate), "years");

    return child?.birthDate ? `${years} ${Formatter.declination(years, [" год", " года", " лет"])}` : "";
  }, [child]);

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
                  Возраст: <span>{age}</span>
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

          {child?.video && <ChildVideo src={correctVideo}></ChildVideo>}

          <ChildImages images={child?.images ?? []}></ChildImages>

          <ChildButton onClick={() => window.open(`https://wa.me/79119685928/?text=Здравствуйте, хочу у Вас заказать съемку с моделью ${window.origin}/children/${child?.id}`)}>Заказать съемку</ChildButton>
        </ChildContent>
      </Container>

      <Footer />
    </ChildBlock>
  );
};

export default Child;
