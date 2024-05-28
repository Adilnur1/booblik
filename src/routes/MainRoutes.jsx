import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import MenuPage from "../pages/MenuPage/MenuPage";
import DetailPage from "../pages/DetailPage/DetailPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import Vacancies from "../pages/Vacancies/Vacancies";
import Layout from "../components/Layout";
import Bublers from "../pages/Bublers/Bublers";
import Branches from "../pages/Branches/Branches";
import Header from "../components/Header/Header";
import AdminPage from "../pages/AdminPage/AdminPage";
import New from "../pages/New/New";
import AboutUs from "../pages/AboutUs/AboutUs";

export const PUBLIC_ROUTES = [
  {
    id: 1,
    path: "/",
    element: (
      <>
        <Layout>
          <HomePage />
        </Layout>
      </>
    ),
  },
  {
    id: 2,
    path: "/menu",
    element: (
      <Layout>
        <MenuPage />
      </Layout>
    ),
  },
  {
    id: 3,
    path: "/details/:id",
    element: (
      <Layout>
        <DetailPage />
      </Layout>
    ),
  },
  {
    id: 4,
    path: "*",
    element: <NotFoundPage />,
  },
  {
    id: 5,
    path: "/vacancies",
    element: (
      <Layout>
        <Vacancies />
      </Layout>
    ),
  },
  {
    id: 6,
    path: "/bublers",
    element: (
      <Layout>
        <Bublers />
      </Layout>
    ),
  },
  {
    id: 7,
    path: "/branches",
    element: (
      <Layout>
        <Branches />
      </Layout>
    ),
  },
  {
    id: 8,
    path: "/admin",
    element: (
      <Layout>
        <AdminPage />
      </Layout>
    ),
  },
  {
    id: 9,
    path: "/new",
    element: (
      <Layout>
        <New />
      </Layout>
    ),
  },
  {
    id: 10,
    path: "/about",
    element: (
      <Layout>
        <AboutUs />
      </Layout>
    ),
  },
];
// const PRIVATE_ROUTES = [
//   { id: 5, path: "/admin", element: <AdminPage /> },
//   { id: 6, path: "/edit/:id", element: <EditPage /> },
// ];

const MainRoutes = () => {
  return (
    <Routes>
      {PUBLIC_ROUTES.map((route) => (
        <Route key={route.id} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
