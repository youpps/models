import React, { useEffect, useState, useMemo } from "react";
import { ChildrenBlock, ChildrenBody, ChildrenContent, ChildrenFilterButton, ChildrenFiltersBlock, ChildrenItem, ChildrenItemImage, ChildrenItemText, ChildrenItemTitle, ChildrenItemsBlock, ChildrenTitle } from "./ChildrenStyles";
import Header from "../../components/Common/Header/Header";
import Footer from "../../components/Common/Footer/Footer";
import ChildrenFilter from "./ChildrenFilter/ChildrenFilter";
import Container from "../../components/Common/Container/Container";
import { Child, ChildrenChosenFilters, ChildrenFilters } from "../../types/child";
import ChildrenService from "../../services/childrenService";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import FiltersService from "../../services/filtersService";
import ChildrenMobileFilter from "./ChildrenMobileFilter/ChildrenMobileFilter";
import useModal from "../../hooks/useModal";

const Children = () => {
  const navigate = useNavigate();

  const [children, setChildren] = useState<Child[]>([]);
  const [childrenChosenFilters, setChildrenChosenFilters] = useState<ChildrenChosenFilters>({
    specialization: null,
    sex: null,
    age: null,
    height: null,
    hairColor: null,
    eyeColor: null,
    shoesSize: null,
    city: null,
  });

  const changeFilter = (filter: string, value: string | null) => {
    setChildrenChosenFilters((prev) => {
      return {
        ...prev,
        [filter]: value,
      };
    });
  };

  const [childrenFilters, setChildrenFilters] = useState<ChildrenFilters>({
    specialization: [],
    sex: [],
    age: [],
    height: [],
    hairColor: [],
    eyeColor: [],
    shoesSize: [],
    city: [],
  });

  useEffect(() => {
    const filters = FiltersService.getFilters();
    if (filters) {
      setChildrenChosenFilters(filters);
    }
  }, []);

  useEffect(() => {
    FiltersService.setFilters(childrenChosenFilters);

    async function getData() {
      async function getChildrenFilters() {
        const childrenFilters = await ChildrenService.getChildrenFilters();

        setChildrenFilters(childrenFilters);
      }

      async function getChildren() {
        const children = await ChildrenService.getChildren(childrenChosenFilters);

        setChildren(children);
      }

      await Promise.allSettled([getChildrenFilters(), getChildren()]);
    }

    getData();
  }, [childrenChosenFilters]);

  const [mobileFiltersOpen, openMobileFilters, closeMobileFilters] = useModal();

  return (
    <ChildrenBlock>
      <Header />
      {mobileFiltersOpen && <ChildrenMobileFilter filters={childrenFilters} chosenFilters={childrenChosenFilters} onChange={setChildrenChosenFilters} onClose={closeMobileFilters} />}

      <Container>
        <ChildrenContent>
          <ChildrenTitle>База детей</ChildrenTitle>

          <ChildrenFilterButton onClick={openMobileFilters}>Открыть фильтр</ChildrenFilterButton>

          <ChildrenBody>
            <ChildrenFiltersBlock>
              <ChildrenFilter title="Направление" value={childrenChosenFilters.specialization} values={childrenFilters.specialization} onChange={(value) => changeFilter("specialization", value?.item ?? null)} />
              <ChildrenFilter title="Пол" value={childrenChosenFilters.sex} values={childrenFilters.sex} onChange={(value) => changeFilter("sex", value?.item ?? null)} />

              <ChildrenFilter title="Возраст" value={childrenChosenFilters.age} values={childrenFilters.age} onChange={(value) => changeFilter("age", value?.item ?? null)} />
              <ChildrenFilter title="Рост" value={childrenChosenFilters.height} values={childrenFilters.height} onChange={(value) => changeFilter("height", value?.item ?? null)} />

              <ChildrenFilter title="Волосы" value={childrenChosenFilters.hairColor} values={childrenFilters.hairColor} onChange={(value) => changeFilter("hairColor", value?.item ?? null)} />
              <ChildrenFilter title="Глаза" value={childrenChosenFilters.eyeColor} values={childrenFilters.eyeColor} onChange={(value) => changeFilter("eyeColor", value?.item ?? null)} />
              <ChildrenFilter title="Обувь" value={childrenChosenFilters.shoesSize} values={childrenFilters.shoesSize} onChange={(value) => changeFilter("shoesSize", value?.item ?? null)} />
              <ChildrenFilter title="Город" value={childrenChosenFilters.city} values={childrenFilters.city} onChange={(value) => changeFilter("city", value?.item ?? null)} />
            </ChildrenFiltersBlock>

            <ChildrenItemsBlock>
              {children.map((child) => {
                return (
                  <ChildrenItem key={child.id} onClick={() => navigate(`/children/${child.id}`)}>
                    <ChildrenItemImage alt="avatar" src={child.avatar} />
                    <ChildrenItemTitle>
                      {child.name} {child.surname}
                    </ChildrenItemTitle>
                    <ChildrenItemText>
                      {moment().diff(moment(child.birthDate), "years")} лет, {child.height}см
                    </ChildrenItemText>
                  </ChildrenItem>
                );
              })}
            </ChildrenItemsBlock>
          </ChildrenBody>
        </ChildrenContent>
      </Container>

      <Footer />
    </ChildrenBlock>
  );
};

export default Children;
