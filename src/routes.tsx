import Advertise from "pages/Advertise";
import Cart from "pages/Cart";
import Category from "pages/Category";
import DefaultPage from "pages/DefaultPage/DefaultPage";
import Home from "pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultPage />}>
          <Route index element={<Home />}></Route>
          <Route path="category/:categoryName" element={<Category />} />
          <Route path="cart" element={<Cart />} />
          <Route path="advertise/:categoryName" element={<Advertise />}/>
          <Route path="advertise" element={<Advertise />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
