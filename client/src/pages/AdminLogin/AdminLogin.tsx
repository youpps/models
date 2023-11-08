import React, { useEffect, useState } from "react";
import { AdminLoginBlock, AdminLoginButton, AdminLoginError, AdminLoginForm, AdminLoginInput, AdminLoginTitle } from "./AdminLoginStyles";
import AuthService from "../../services/authService";
import { useNavigate, useSearchParams } from "react-router-dom";

const AdminLogin = () => {
  const [query] = useSearchParams();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const login = query.get("l");
    const password = query.get("p");

    if (login && password) {
      onLogin(login, password);
    }
  }, []);

  async function onLogin(login: string, password: string, e?: React.SyntheticEvent) {
    e?.preventDefault();

    if (!login || !password) {
      return;
    }

    const res = await AuthService.login(login, password);
    if (!res) {
      setError("Неправильный логин или пароль");
      return;
    }

    AuthService.setAccessToken(res.accessToken);

    if (res.child.isAdmin) {
      navigate("/admin/children");
      return;
    }

    navigate(`/admin/children/${res.child.id}`);
  }

  return (
    <AdminLoginBlock>
      <AdminLoginForm onSubmit={(e) => onLogin(login, password, e)}>
        <AdminLoginTitle>Вход</AdminLoginTitle>
        <AdminLoginInput placeholder="Логин" value={login} onChange={(e) => setLogin(e.currentTarget.value)} />
        <AdminLoginInput placeholder="Пароль" value={password} onChange={(e) => setPassword(e.currentTarget.value)} />
        <AdminLoginButton>Войти</AdminLoginButton>

        {error && <AdminLoginError>{error}</AdminLoginError>}
      </AdminLoginForm>
    </AdminLoginBlock>
  );
};

export default AdminLogin;
