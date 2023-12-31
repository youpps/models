import React, { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  AdminChildrenBlock,
  AdminChildrenContent,
  AdminChildrenContentBackButton,
  AdminChildrenContentCreateButton,
  AdminChildrenContentInput,
  AdminChildrenContentPanel,
  AdminChildrenMobileTable,
  AdminChildrenMobileTableBottom,
  AdminChildrenMobileTableBottomButton,
  AdminChildrenMobileTableBottomInfo,
  AdminChildrenMobileTableBottomInfoLink,
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
import AuthService from "../../services/authService";

const AdminChildren = () => {
  const navigate = useNavigate();
  const [children, setChildren] = useState<AdminChild[]>([]);
  const [totalChildren, setTotalChildren] = useState<AdminChild[]>([]);
  const [q, setQ] = useState("");
  const [page, setPage] = useState(0);

  const pagesCount = useMemo(() => {
    return Math.ceil(totalChildren.length / 50);
  }, [totalChildren]);

  const nextPage = () => setPage((prev) => prev + 1);
  const prevPage = () => setPage((prev) => prev - 1);

  async function getData() {
    const totalChildren = await AdminChildrenService.getChildren({
      perPage: 10000,
      page: 0,
      q: "",
    });

    const children = await AdminChildrenService.getChildren({
      perPage: 50,
      page,
      q,
    });

    setTotalChildren(totalChildren);
    setChildren(children);
  }

  function onQChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPage(0);
    setQ(e.currentTarget.value);
  }

  useEffect(() => {
    getData();
  }, [q, page]);

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

  function onBackClick() {
    AuthService.removeAuth();
    navigate("/admin/login");
  }

  return (
    <AdminChildrenBlock>
      <Container>
        <AdminChildrenContent>
          <AdminChildrenContentPanel>
            <AdminChildrenContentBackButton onClick={onBackClick}>Выйти</AdminChildrenContentBackButton>
            <AdminChildrenContentCreateButton onClick={createChild}>Создать ребенка</AdminChildrenContentCreateButton>
            <AdminChildrenContentInput placeholder="Поиск по: id, имени или фамилии" value={q} onChange={onQChange} />
          </AdminChildrenContentPanel>

          <AdminChildrenTable>
            <AdminChildrenTableHeader>
              <AdminChildrenTableHeaderItem>Id</AdminChildrenTableHeaderItem>
              <AdminChildrenTableHeaderItem>Имя</AdminChildrenTableHeaderItem>
              <AdminChildrenTableHeaderItem>Фамилия</AdminChildrenTableHeaderItem>
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
                    <AdminChildrenTableBodyItem>{child.name}</AdminChildrenTableBodyItem>
                    <AdminChildrenTableBodyItem>{child.surname}</AdminChildrenTableBodyItem>
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
                    Имя: <span>{child.name}</span>
                  </AdminChildrenMobileTableItemLine>
                  <AdminChildrenMobileTableItemLine>
                    Фамилия: <span>{child.surname}</span>
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

          <AdminChildrenMobileTableBottom>
            <AdminChildrenMobileTableBottomInfo>
              {[...new Array(pagesCount)].map((_, idx) => {
                return (
                  <AdminChildrenMobileTableBottomInfoLink isActive={page === idx} onClick={() => setPage(idx)} key={idx}>
                    {idx + 1}
                  </AdminChildrenMobileTableBottomInfoLink>
                );
              })}
            </AdminChildrenMobileTableBottomInfo>
            {page !== 0 && <AdminChildrenMobileTableBottomButton onClick={prevPage}>Предыдущая</AdminChildrenMobileTableBottomButton>}
            {children.length === 50 && <AdminChildrenMobileTableBottomButton onClick={nextPage}>Следующая</AdminChildrenMobileTableBottomButton>}
          </AdminChildrenMobileTableBottom>
        </AdminChildrenContent>
      </Container>
    </AdminChildrenBlock>
  );
};

export default AdminChildren;
