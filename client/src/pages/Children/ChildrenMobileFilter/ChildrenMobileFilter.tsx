import React, { FC, useMemo, useState } from "react";
import { ChildrenMobileFilterBlock, ChildrenMobileFilterBody, ChildrenMobileFilterButton, ChildrenMobileFilterClose, ChildrenMobileFilterContent, ChildrenMobileFilterTitle } from "./ChildrenMobileFilterStyles";
import { ChildrenChosenFilters, ChildrenFilters } from "../../../types/child";
import ChildrenMobileFilterSelect from "./ChildrenMobileFilterSelect/ChildrenMobileFilterSelect";
import ChildrenMobileFilterInput from "./ChildrenMobileFilterInput/ChildrenMobileFilterInput";

interface IChildrenMobileFilter {
  filters: ChildrenFilters;
  chosenFilters: ChildrenChosenFilters;
  onChange(filters: ChildrenChosenFilters): void;
  onClose(): void;
}

const ChildrenMobileFilter: FC<IChildrenMobileFilter> = ({ filters, chosenFilters, onChange, onClose }) => {
  const [temporaryChosenFilters, setTemporaryChosenFilters] = useState<ChildrenChosenFilters>(chosenFilters);

  const changeFilter = (filter: string, value: string | null) => {
    setTemporaryChosenFilters((prev) => {
      return {
        ...prev,
        [filter]: value,
      };
    });
  };

  function onFiltersChange() {
    onChange(temporaryChosenFilters);
    onClose();
  }

  const stopPropagation = (e: React.SyntheticEvent) => e.stopPropagation();

  return (
    <ChildrenMobileFilterBlock onClick={onClose}>
      <ChildrenMobileFilterContent onClick={stopPropagation}>
        <ChildrenMobileFilterTitle>
          <ChildrenMobileFilterClose alt="close" src="/images/close.svg" onClick={onClose} />
          Фильтр
        </ChildrenMobileFilterTitle>

        <ChildrenMobileFilterBody>
          <ChildrenMobileFilterSelect title="Направление" value={temporaryChosenFilters.specialization} values={filters.specialization} onChange={(value) => changeFilter("specialization", value)} />
          <ChildrenMobileFilterSelect title="Пол" value={temporaryChosenFilters.sex} values={filters.sex} onChange={(value) => changeFilter("sex", value)} />
          <ChildrenMobileFilterInput title="Возраст" value={temporaryChosenFilters.age} unit="лет" onChange={(value) => changeFilter("age", value)} />
          <ChildrenMobileFilterInput title="Рост" value={temporaryChosenFilters.height} unit="см" onChange={(value) => changeFilter("height", value)} />
          <ChildrenMobileFilterSelect title="Волосы" value={temporaryChosenFilters.hairColor} values={filters.hairColor} onChange={(value) => changeFilter("hairColor", value)} />
          <ChildrenMobileFilterSelect title="Глаза" value={temporaryChosenFilters.eyeColor} values={filters.eyeColor} onChange={(value) => changeFilter("eyeColor", value)} />
          <ChildrenMobileFilterSelect title="Обувь" value={temporaryChosenFilters.shoesSize} values={filters.shoesSize} onChange={(value) => changeFilter("shoesSize", value)} />
          <ChildrenMobileFilterSelect title="Город" value={temporaryChosenFilters.city} values={filters.city} onChange={(value) => changeFilter("city", value)} />
        </ChildrenMobileFilterBody>

        <ChildrenMobileFilterButton onClick={onFiltersChange}>Применить фильтр</ChildrenMobileFilterButton>
      </ChildrenMobileFilterContent>
    </ChildrenMobileFilterBlock>
  );
};

export default ChildrenMobileFilter;
