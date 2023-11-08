import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  AdminChildrenBlock,
  AdminChildrenContent,
  AdminChildrenContentButton,
  AdminChildrenTable,
  AdminChildrenTableBody,
  AdminChildrenTableBodyButton,
  AdminChildrenTableBodyItem,
  AdminChildrenTableBodyItemButton,
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
                      {child.id} <AdminChildrenTableBodyItemButton onClick={() => navigate(`/admin/children/${child.id}`)}>Перейти</AdminChildrenTableBodyItemButton>
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
        </AdminChildrenContent>
      </Container>
    </AdminChildrenBlock>
  );
};

export default AdminChildren;
