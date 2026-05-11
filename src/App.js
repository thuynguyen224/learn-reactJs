import React, { useEffect } from "react";
import { NavLink, Route, Routes, Navigate } from "react-router-dom";
import AlbumFeature from "./features/Album";
import ListPage from "./features/Todo/pages/ListPage";
import DetailPage from "./features/Todo/pages/DetailPage";
import NotFound from "./components/NotFound";
import CounterFeature from "./features/Counter";
import './App.css';
import Header from "components/Header";
import userApi from "api/userApi";

function App() {
  useEffect(() => {
    // Call API to get data
    const fetchData = async () => {
      const params = {
        limit: 5,
      };
      try {
        const response = await userApi.getAll(params);
        console.log(response);
      } catch (error) {
        console.log("Failed to fetch category list: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="app">
      <Header/>
      <p>
        <NavLink to="/todos" activeClassName="active-menu">
          Todo
        </NavLink>
      </p>
      <p>
        <NavLink to="/albums" activeClassName="active-menu">
          Album
        </NavLink>
      </p>
      <Routes>
        <Route path="/todos" element={<ListPage />}>
          <Route index element={<ListPage />} />
          <Route path=":todoId" element={<DetailPage />} />
        </Route>
        <Route path="/" element={<CounterFeature />} />
        <Route path="/albums" element={<AlbumFeature />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/not-found" replace />} />
      </Routes>
      Footer
    </div>
  );
}

export default App;
