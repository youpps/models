import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  AdminChildrenBlock,
  AdminChildrenContent,
  AdminChildrenContentButton,
  AdminChildrenMobileTable,
  AdminChildrenMobileTableItem,
  AdminChildrenMobileTableItemDeleteButton,
  AdminChildrenMobileTableItemLine,
  AdminChildrenMobileTableItemSwitchButton,
  AdminChildrenMobileTableItemToButton,
  AdminChildrenTable,
  AdminChildrenTableBody,
  AdminChildrenTableBodyButton,
  AdminChildrenTableBodyItem,
  AdminChildrenTableBodyItemDeleteButton,
  AdminChildrenTableBodyItemToButton,
  AdminChildrenTableHeader,
  AdminChildrenTableHeaderItem,
} from "./AdminChildrenStyles";
import Container from "../../components/Common/Container/Container";
import { AdminChild } from "../../types/child";
import AdminChildrenService from "../../services/adminChildrenService";

const AdminChildren = () => {
  const navigate = useNavigate();
  const [children, setChildren] = useState<AdminChild[]>([]);

  async function getData() {
    const children = await AdminChildrenService.getChildren();
    setChildren(children);
  }

  useEffect(() => {
    getData();
  }, []);

  async function switchChild(id: number | string) {
    await AdminChildrenService.switchChild(id);
    getData();
  }

  async function createChild() {
    await AdminChildrenService.createChild();
    getData();
  }

  async function deleteChild(childId: string | number) {
    await AdminChildrenService.deleteChild(childId);
    getData();
  }

  return (
    <AdminChildrenBlock>
      <Container>
        <AdminChildrenContent>
          <AdminChildrenContentButton onClick={createChild}>Создать ребенка</AdminChildrenContentButton>

          <AdminChildrenTable>
            <AdminChildrenTableHeader>
              <AdminChildrenTableHeaderItem>Id</AdminChildrenTableHeaderItem>
              <AdminChildrenTableHeaderItem>Логин</AdminChildrenTableHeaderItem>
              <AdminChildrenTableHeaderItem>Пароль</AdminChildrenTableHeaderItem>
              <AdminChildrenTableHeaderItem>Ссылка</AdminChildrenTableHeaderItem>
              <AdminChildrenTableHeaderItem>Статус</AdminChildrenTableHeaderItem>
            </AdminChildrenTableHeader>

            <AdminChildrenTableBody>
              {children.map((child) => {
                return (
                  <React.Fragment key={child.id}>
                    <AdminChildrenTableBodyItem>
                      <AdminChildrenTableBodyItemDeleteButton onClick={() => deleteChild(child.id)}>Удалить</AdminChildrenTableBodyItemDeleteButton>
                      {child.id}
                      <AdminChildrenTableBodyItemToButton onClick={() => navigate(`/admin/children/${child.id}`)}>Перейти</AdminChildrenTableBodyItemToButton>
                    </AdminChildrenTableBodyItem>
                    <AdminChildrenTableBodyItem>{child.login}</AdminChildrenTableBodyItem>
                    <AdminChildrenTableBodyItem>{child.password}</AdminChildrenTableBodyItem>
                    <AdminChildrenTableBodyItem>{window.origin + `/admin/login?l=${child.login}&p=${child.password}`}</AdminChildrenTableBodyItem>
                    <AdminChildrenTableBodyButton isActive={!!child.isActive} onClick={() => switchChild(child.id)}>
                      {!!child.isActive ? "Выключить" : "Включить"}
                    </AdminChildrenTableBodyButton>
                  </React.Fragment>
                );
              })}
            </AdminChildrenTableBody>
          </AdminChildrenTable>

          <AdminChildrenMobileTable>
            {children.map((child) => {
              return (
                <AdminChildrenMobileTableItem key={child.id}>
                  <AdminChildrenMobileTableItemLine>
                    Id: <span>{child.id}</span>
                  </AdminChildrenMobileTableItemLine>
                  <AdminChildrenMobileTableItemLine>
                    Логин: <span>{child.login}</span>
                  </AdminChildrenMobileTableItemLine>
                  <AdminChildrenMobileTableItemLine>
                    Пароль: <span>{child.password}</span>
                  </AdminChildrenMobileTableItemLine>
                  <AdminChildrenMobileTableItemLine>
                    Ссылка: <span>{window.origin + `/admin/login?l=${child.login}&p=${child.password}`}</span>
                  </AdminChildrenMobileTableItemLine>

                  <AdminChildrenMobileTableItemToButton onClick={() => navigate(`/admin/children/${child.id}`)}>Перейти</AdminChildrenMobileTableItemToButton>

                  <AdminChildrenMobileTableItemDeleteButton onClick={() => deleteChild(child.id)}>Удалить</AdminChildrenMobileTableItemDeleteButton>

                  <AdminChildrenMobileTableItemSwitchButton isActive={!!child.isActive} onClick={() => switchChild(child.id)}>
                    {!!child.isActive ? "Выключить" : "Включить"}
                  </AdminChildrenMobileTableItemSwitchButton>
                </AdminChildrenMobileTableItem>
              );
            })}
          </AdminChildrenMobileTable>
        </AdminChildrenContent>
      </Container>
    </AdminChildrenBlock>
  );
};

export default AdminChildren;
