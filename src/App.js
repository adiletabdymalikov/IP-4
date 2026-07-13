import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import ProductList from './pages/ProductList'; 
import ProductDetails from "./pages/product-details";
import ProductsItems from "./pages/products-list";
import ProductDetail from "./pages/product-detail";
import AddProduct from "./pages/addproduct";
import Profile from "./pages/profile";
import LoginSign from "./pages/login";
import EditProduct from "./pages/editproduct";
import Register from "./pages/Register";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* Главная страница автоматически перенаправляет на список товаров */}
          <Route path="/" element={<Navigate to="/products" replace />} /> 
          
          <Route path="/products" element={<ProductList />} />
          <Route path="/details/:id" element={<ProductDetails />} />
          <Route path="/products-list" element={<ProductsItems />} />
          <Route path="/product-detail/:adid" element={<ProductDetail />} />
          
          {/* ИСПРАВЛЕНО: Изменили путь, чтобы кнопка "+ Add product" вела сюда */}
          <Route path="/add-product" element={<AddProduct />} />
          
          <Route path="/profile" element={<Profile />} />
          
          {/* ИСПРАВЛЕНО: Изменили с "/login-local" на "/login" */}
          <Route path="/login" element={<LoginSign />} />
          
          <Route path="/register" element={<Register />} />
          <Route path="/edit/:id" element={<EditProduct />} />
          
          {/* Ошибка 404 */}
          <Route path="*" element={<div>Страница не найдена</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;