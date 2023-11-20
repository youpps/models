import React, { FC, useMemo, useState } from "react";
import { ChildrenFilterBlock, ChildrenFilterList, ChildrenFilterListItem, ChildrenFilterListItemText, ChildrenFilterTitle } from "./ChildrenFilterStyles";
import useModal from "../../../hooks/useModal";

interface IChildrenFilterValue {
  item: string;
  counter: number;
}

interface IChildrenFilter {
  title: string;
  value: string | null;
  values: IChildrenFilterValue[];
  onChange: (value: IChildrenFilterValue | null) => void;
  formatValue?: (value: string) => string;
}

const ChildrenFilter: FC<IChildrenFilter> = ({ title, value, values, onChange, formatValue }) => {
  const [selectOpen, openSelect, closeSelect] = useModal();

  const changeSelect = () => (selectOpen ? closeSelect() : openSelect());
  const stopPropagation = (e: React.SyntheticEvent) => e.stopPropagation();

  const allLength = useMemo(() => {
    return values.reduce((prev, value) => prev + value.counter, 0);
  }, [values]);

  return (
    <ChildrenFilterBlock onClick={changeSelect}>
      <ChildrenFilterTitle>{title}</ChildrenFilterTitle>

      <ChildrenFilterList isOpen={selectOpen} onClick={stopPropagation} length={values.length + 1}>
        <ChildrenFilterListItem isActive={!value} onClick={() => onChange(null)}>
          <ChildrenFilterListItemText>Все</ChildrenFilterListItemText>
          <ChildrenFilterListItemText>{allLength}</ChildrenFilterListItemText>
        </ChildrenFilterListItem>

        {values.map((filterValue) => {
          return (
            <ChildrenFilterListItem isActive={filterValue.item === value} key={filterValue.item} onClick={() => onChange(filterValue)}>
              <ChildrenFilterListItemText>{formatValue ? formatValue(filterValue.item) : filterValue.item}</ChildrenFilterListItemText>
              <ChildrenFilterListItemText>{filterValue.counter}</ChildrenFilterListItemText>
            </ChildrenFilterListItem>
          );
        })}
      </ChildrenFilterList>
    </ChildrenFilterBlock>
  );
};

export default ChildrenFilter;
