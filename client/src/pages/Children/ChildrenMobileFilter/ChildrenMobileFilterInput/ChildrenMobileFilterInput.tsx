import React, { FC, useEffect, useMemo, useState } from "react";
import { ChildrenMobileFilterInputBlock, ChildrenMobileFilterInputField, ChildrenMobileFilterInputFieldInfo, ChildrenMobileFilterInputFieldInput, ChildrenMobileFilterInputFields, ChildrenMobileFilterInputTitle } from "./ChildrenMobileFilterInputStyles";
import { ChildrenFilter } from "../../../../types/child";
import useModal from "../../../../hooks/useModal";
import useOutsideClick from "../../../../hooks/useOutsideClick";

interface IChildrenMobileFilterValue {
  item: string;
  counter: number;
}

interface IChildrenMobileFilterInput {
  title: string;
  unit: string;
  onChange(value: string): void;
  value: string | null;
}

const ChildrenMobileFilterInput: FC<IChildrenMobileFilterInput> = ({ title, unit, value, onChange }) => {
  const values = useMemo(() => {
    return {
      first: value?.split("-")[0] ?? "",
      second: value?.split("-")[1] ?? "",
    };
  }, [value]);

  function changeValue(firstValue: string, secondValue: string) {
    const firstValueNumber = firstValue ? Number(firstValue) : "";
    const secondValueNumber = secondValue ? Number(secondValue) : "";

    if (!Number.isNaN(firstValueNumber) && !Number.isNaN(secondValueNumber)) {
      onChange(`${firstValueNumber}-${secondValueNumber}`);
    }
  }

  return (
    <ChildrenMobileFilterInputBlock>
      <ChildrenMobileFilterInputTitle>{title}</ChildrenMobileFilterInputTitle>
      <ChildrenMobileFilterInputFields>
        <ChildrenMobileFilterInputField>
          <ChildrenMobileFilterInputFieldInput placeholder="От" value={values.first} onChange={(e) => changeValue(e.currentTarget.value, values.second)} inputMode="numeric" />
          <ChildrenMobileFilterInputFieldInfo>{unit}</ChildrenMobileFilterInputFieldInfo>
        </ChildrenMobileFilterInputField>

        <ChildrenMobileFilterInputField>
          <ChildrenMobileFilterInputFieldInput placeholder="До" value={values.second} onChange={(e) => changeValue(values.first, e.currentTarget.value)} inputMode="numeric" />
          <ChildrenMobileFilterInputFieldInfo>{unit}</ChildrenMobileFilterInputFieldInfo>
        </ChildrenMobileFilterInputField>
      </ChildrenMobileFilterInputFields>
    </ChildrenMobileFilterInputBlock>
  );
};

export default ChildrenMobileFilterInput;
