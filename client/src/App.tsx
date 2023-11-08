import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Common/Header/Header";
import Index from "./pages/Index/Index";
import AdminLogin from "./pages/AdminLogin/AdminLogin";
import AdminChildren from "./pages/AdminChildren/AdminChildren";
import Child from "./pages/Child/Child";
import Children from "./pages/Children/Children";
import AdminChild from "./pages/AdminChild/AdminChild";

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
