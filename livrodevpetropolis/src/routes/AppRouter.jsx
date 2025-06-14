import { Routes, Route } from "react-router-dom";
import Inicio from "../pages/início";
import Autores from "../pages/Autores";
import Posts from "../pages/Posts";
import Update from "../pages/Update";
import Error from "../pages/Error";
import Feed from "../pages/Feed";
import More from "../pages/More";
import Detalhes from '../pages/Detalhes'


export default function AppRouter() {
  return (
    <Routes>
      <Route path={"/"} element={<Inicio />} />
      <Route path={"/autores"} element={<Autores />} />
      <Route path={"/posts"} element={<Posts />} />
      <Route path={"*"} element={<Error />} />
      <Route path={"/update/:id"} element={<Update />}></Route>
    
      <Route path={"/feed"} element={<Feed />}></Route>
        <Route path={'/detalhes'} element={<Detalhes/>}></Route>

    </Routes>
  );
}
