import React, { FC, useMemo, useState } from "react";
import {
  ChildrenMobileFilterSelectArrow,
  ChildrenMobileFilterSelectBlock,
  ChildrenMobileFilterSelectField,
  ChildrenMobileFilterSelectText,
  ChildrenMobileFilterSelectTitle,
  ChildrenMobileFilterSelectValue,
  ChildrenMobileFilterSelectValues,
} from "./ChildrenMobileFilterSelectStyles";
import { ChildrenFilter } from "../../../../types/child";
import useModal from "../../../../hooks/useModal";
import useOutsideClick from "../../../../hooks/useOutsideClick";

interface IChildrenMobileFilterValue {
  item: string;
  counter: number;
}

interface IChildrenMobileFilterSelect {
  title: string;
  onChange(value: string | null): void;
  value: string | null;
  values: ChildrenFilter[];
}

const ChildrenMobileFilterSelect: FC<IChildrenMobileFilterSelect> = ({ title, value, values, onChange }) => {
  const [selectOpen, openSelect, closeSelect] = useModal();

  const ref = useOutsideClick(closeSelect);

  const changeSelect = (value: IChildrenMobileFilterValue | null) => {
    onChange(value?.item ?? null);
    closeSelect();
  };

  return (
    <ChildrenMobileFilterSelectBlock ref={ref}>
      <ChildrenMobileFilterSelectTitle>{title}</ChildrenMobileFilterSelectTitle>

      <ChildrenMobileFilterSelectField onClick={selectOpen ? closeSelect : openSelect}>
        <ChildrenMobileFilterSelectText>{value || "Все"}</ChildrenMobileFilterSelectText>
        <ChildrenMobileFilterSelectArrow src="/images/arrow.svg" />
      </ChildrenMobileFilterSelectField>

      {selectOpen && (
        <ChildrenMobileFilterSelectValues>
          <ChildrenMobileFilterSelectValue onClick={() => changeSelect(null)}>Все</ChildrenMobileFilterSelectValue>
          {values.map((value) => {
            return (
              <ChildrenMobileFilterSelectValue key={value.item} onClick={() => changeSelect(value)}>
                {value.item}
              </ChildrenMobileFilterSelectValue>
            );
          })}
        </ChildrenMobileFilterSelectValues>
      )}
    </ChildrenMobileFilterSelectBlock>
  );
};

export default ChildrenMobileFilterSelect;
