import { Routes, Route } from "react-router-dom";
import Login from '../pages/Login'
import LivroPost from "../pages/LivroPost";
import Update from "../pages/Update";
import Detalhes from '../pages/Detalhes'
import Autores from "../pages/Autores";
import Error from "../pages/Error";
import Inicio from "../pages/Inicio";
import Disponiveis from "../pages/Disponiveis";

export default function AppRouter() {
  return (
    <Routes>
      <Route path={'/'} element={<Login/>}></Route>
      <Route path={"/inicio"} element={<Inicio />}></Route> 
      <Route path={"/livropost"} element={<LivroPost />}></Route>
      <Route path={"/disponiveis"} element={<Disponiveis />}></Route>
      <Route path={"/update/:id"} element={<Update />}></Route>
      <Route path={'/detalhes/:isbn'} element={<Detalhes/>}></Route>
      <Route path={"/autores"} element={<Autores />}></Route>
      <Route path={"*"} element={<Error />}></Route>
    </Routes>
  );
}


