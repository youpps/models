import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import ru from "date-fns/locale/ru";
import Index from "./pages/Index/Index";
import AdminLogin from "./pages/AdminLogin/AdminLogin";
import AdminChildren from "./pages/AdminChildren/AdminChildren";
import Child from "./pages/Child/Child";
import Children from "./pages/Children/Children";
import AdminChild from "./pages/AdminChild/AdminChild";
import "bootstrap/dist/css/bootstrap.min.css";

registerLocale("ru", ru);
setDefaultLocale("ru");

const AppBlock = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  background-size: cover;
  background: #f9f9fb;
`;

function App() {
  return (
    <AppBlock>
      <Routes>
        <Route index element={<Index />} />
        <Route path="/children" element={<Children />} />
        <Route path="/children/:id" element={<Child />} />

        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/children" element={<AdminChildren />} />
        <Route path="/admin/children/:id" element={<AdminChild />} />
      </Routes>
    </AppBlock>
  );
}

export default App;
