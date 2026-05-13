import React, { useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import AlbumFeature from "./features/Album";
import ListPage from "./features/Todo/pages/ListPage";
import DetailPage from "./features/Todo/pages/DetailPage";
import NotFound from "./components/NotFound";
import CounterFeature from "./features/Counter";
import "./App.css";
import Header from "components/Header";
import userApi from "api/userApi";
import ProductFeature from "features/Product";
import ListPageProduct from "features/Product/pages/ListPage";
import productApi from "api/productApi";

function App() {
  useEffect(() => {
    // Call API to get data
    const fetchData = async () => {
      const params = {
        limit: 10,
      };
      try {
        const userList = await userApi.getAll(params);
        console.log(userList);
        const productList = await productApi.getAll(params);
        console.log(productList);
        const credentials = { username: "johnd", password: "m38rmF$" };
        const response = await userApi.login(JSON.stringify(credentials));
        console.log(response);
      } catch (error) {
        console.log("Failed to fetch category list: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/todos" element={<ListPage />}>
          <Route index element={<ListPage />} />
          <Route path=":todoId" element={<DetailPage />} />
        </Route>
        <Route path="/" element={<CounterFeature />} />
        <Route path="/albums" element={<AlbumFeature />} />
        <Route path="/products" element={<ProductFeature />} >
            <Route index element={<ListPageProduct />} />
        </Route>
        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/not-found" replace />} />
      </Routes>
      Footer
    </div>
  );
}

export default App;
