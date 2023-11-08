import React, { FC } from "react";
import { AdminChildSelectBlock, AdminChildSelectItem, AdminChildSelectItems, AdminChildSelectValue } from "./AdminChildSelectStyles";
import useModal from "../../../hooks/useModal";
import useOutsideClick from "../../../hooks/useOutsideClick";

interface IAdminChildSelect {
  value: string | null;
  values: string[];
  placeholder: string;
  onChange: (value: string) => void;
}

const AdminChildSelect: FC<IAdminChildSelect> = ({ value, values, onChange, placeholder }) => {
  const [selectOpen, openSelect, closeSelect] = useModal();

  const ref = useOutsideClick(closeSelect);

  const changeSelect = (value: string) => {
    onChange(value);
    closeSelect();
  };

  return (
    <AdminChildSelectBlock ref={ref}>
      <AdminChildSelectValue onClick={selectOpen ? closeSelect : openSelect} isPlaceholder={!value}>
        {value || placeholder}
      </AdminChildSelectValue>
      {selectOpen && (
        <AdminChildSelectItems>
          {values.map((value) => {
            return (
              <AdminChildSelectItem key={value} onClick={() => changeSelect(value)}>
                {value}
              </AdminChildSelectItem>
            );
          })}
        </AdminChildSelectItems>
      )}
    </AdminChildSelectBlock>
  );
};

export default AdminChildSelect;
