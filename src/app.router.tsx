import { Route, Routes } from "react-router-dom";
import Home from "./app/page";
import ProductsPage from "./app/products/page";
import { AboutPage } from "./app/about/page";

export const Router = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/products" element={<ProductsPage />} />
    <Route path="/about" element={<AboutPage />} />
  </Routes>
)