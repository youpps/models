import React from "react";
import { IndexBlock } from "./IndexStyles";
import Header from "../../components/Common/Header/Header";
import IndexGreeting from "./IndexGreeting/IndexGreeting";
import IndexServices from "./IndexServices/IndexServices";
import IndexAgency from "./IndexAgency/IndexAgency";
import IndexAbout from "./IndexAbout/IndexAbout";
import IndexOurHelp from "./IndexOurHelp/IndexOurHelp";
import Footer from "../../components/Common/Footer/Footer";
import FiltersService from "../../services/filtersService";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <IndexBlock>
      <Header />

      <IndexGreeting />

      <IndexServices
        services={[
          {
            title: "Кастинги в рекламу, кино, сериалы",
            text: "Кастинги в рекламу, кино, сериалы, тв шоу для детей всех возрастов. Можно без опыта съемок.",
          },
          {
            title: (
              <>
                Кастинги для брендов одежды и <br /> торговых марок
              </>
            ),
            text: "Кастинги для брендов одежды и торговых марок. Съемки от каталогов до витрин и компейнов. Попасть на витрину магазина очень просто",
          },
          {
            title: "Кастинг чат",
            text: "Присоединяйтесь к нашим детским кастинг-чатам, где маленькие звездочки обмениваются идеями, вдохновением и мечтами, создавая будущее шоу-бизнеса вместе!",
          },

          {
            title: "Организация съемок",
            text: "Организация съемок с участием детей. Съемки в Москве Санкт-Петербурге выездные съемки в Турции. Работаем с брендами с 2017 года.",
          },
          {
            title: "Подбор детей моделей актёров",
            text: "Подбор детей моделей или актёров по вашей задаче на ваш проект бесплатно.",
          },
          {
            title: "Размещение кастингов",
            text: "Размещение кастингов. Вы заказчик и хотите опубликовать ваш запрос в нашем чате - пишите нам в вацап.",
          },

          {
            title: "Консультации в продвижении детей",
            text: "Индивидуальные консультации в продвижении детей в медиасфере. Работаем индивидуально, помогаем расставить приоритеты и рассказываем секреты прохождения кастингов.",
          },
          {
            title: "Организация портфолио",
            text: (
              <>
                Мы специализируемся на организации портфолио <br /> для детей, создавая уникальные и <br /> профессиональные материалы, которые выделят вашего ребенка среди конкурентов.
              </>
            ),
          },
        ]}
      />

      <IndexAgency />

      <IndexAbout
        items={[
          {
            image: "/images/children_models.png",
            title: "Дети модели",
            text: "Мы работаем с самыми разнообразными детьми-моделями, поддерживая их в развитии и помогая им создавать захватывающие образы, которые подчеркивают их индивидуальность и уникальность на модных подиумах и фотосессиях.",
            onClick() {
              FiltersService.setFilters({
                specialization: "Модели",
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
            },
          },
          {
            image: "/images/children_actors.png",
            title: "Дети актёры",
            text: "Мы работаем с молодыми артистами, помогая им развивать актерские навыки, вырабатывать уверенность на сцене и в кино, а также находить проекты, которые подчеркнут их уникальные таланты.",
            onClick() {
              FiltersService.setFilters({
                specialization: "Актеры",
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
            },
          },
          {
            image: "/images/children_baby.png",
            title: "База детей 0+",
            text: "Мы работаем с самыми маленькими талантами, даже с грудничками, и помогаем их родителям обнаружить их потенциал в индустрии развлечений.",
            onClick() {
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
            },
          },
        ]}
      />

      <IndexOurHelp
        items={[
          {
            image: "",
            title: "Дети модели",
            text: "Дети модели для фото и видео съёмок. Работаем с 0 + . Большая база детей по всей России.  Кастинги для брендов каждый день.",
          },
          {
            image: "",
            title: "Дети актеры",
            text: "Актерские Кастинги это просто. Проводим кастинги по брифу удалённо, быстро, качественно. Помогаем родителям с пробами.",
          },
          {
            image: "",
            title: "Подбор детей моделей",
            text: "Специализируемся на подборе талантливых детей-моделей для проектов и брендов, обеспечивая лучшие возможности в мире моды.",
          },
          {
            image: "",
            title: "Подбор детей актеров",
            text: "Предоставляем услуги по подбору молодых актеров для кино и телевидения, находя талантливых детей для незабываемых впечатлений.",
          },
          {
            image: "",
            title: "Организация фото и видео съемок",
            text: "Профессиональная организация съемок с участием детей, обеспечивая комфортные условия и отличные результаты.",
          },
          {
            image: "",
            title: "Сборные съёмки для маркетплейсов",
            text: "Организация сборных съемок для маркетплейсов, объединяя талантливых детей-моделей и детей-актеров для качественного контента.",
          },
        ]}
      />

      <Footer />
    </IndexBlock>
  );
};

export default Index;
