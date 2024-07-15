import Layout from "../pages/layout";
import Index from "../pages";

import Page_comic from "../pages/comic/comic";

import Page_Genres from "../pages/Genres/Genres";
import Page_chapper from "../pages/Chapper/chapper";
import { createBrowserRouter } from "react-router-dom";
import UserProfile from "../pages/UserProfile";
import ContactUs from "../pages/ContactUs";
import Login from "../pages/Login/Login.jsx";
import SignUp from "../pages/SignUp/SignUp.jsx";
import Page_NewRelease from "../pages/NewRelease/NewRelease";
import Page_Recent from "../pages/Recent/Recent";
import Page_Comming from "../pages/Comming/Comming";
import ChapterPage from "../pages/ChapterPage/ChapterPage";
import ReadChapter from "../pages/ReadChapter/ReadChapter";
import Test from "../pages/Test/Test.jsx";
import MangaCategory from "../pages/MangaCategory/MangaCategory.jsx";
import ItemManga from "../components/MangaItem/ItemManga.jsx";
import ViewCategory from "../pages/ViewCategory/ViewCategory.jsx";
import Policy from "../pages/Policy/Policy.jsx";
import MangaText from "../pages/MangaText/MangaText.jsx";
import React from "react";
import Page_Recommended from "../pages/Recommended/Recommended.js";
import ViewUserProfile from "../pages/profile/index.js";
import Novel from "../pages/Novel/Novel.js";
import NovelPage from "../pages/Novel/NovelPage.js";
import SignUpSuccess from "../pages/SignUp/SignUpSuccess";
import NovelPage2 from "../pages/NovelPage/NovelPage2";
import NovelPageGenre from "../pages/Novel/NovelPageGenre";
import ReadChapter2 from "../pages/ReadChapter/ReadChapter2";
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword";
import ForgotPassSuccess from "../pages/ForgotPassword/ForgotPassSuccess";

// console.log("check sv di ko", sv);
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />,
      },
    ],
  },
  {
    path: "/:sv",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: "/:sv/comic",
        element: <Page_comic />,
      },
      {
        path: "/:sv/genres",
        element: <Page_Genres />,
      },
      {
        path: "/:sv/chapper",
        element: <Page_chapper />,
      },
      {
        path: "/:sv/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/:sv/novel",
        element: <Novel />,
      },
      {
        path: "/:sv/policy",
        element: <Policy />,
      },
      {
        path: "/:sv/user-profile",
        element: <UserProfile />,
      },
      {
        path: "/:sv/view-user-profile",
        element: <ViewUserProfile />,
      },
      {
        path: "/:sv/newRelease",
        element: <Page_NewRelease />,
      },
      {
        path: "/:sv/recent",
        element: <Page_Recent />,
      },
      {
        path: "/:sv/recommended",
        element: <Page_Recommended />,
      },
      {
        path: "/:sv/commingsoon",
        element: <Page_Comming />,
      },
      {
        path: "/:sv/chapter/:slug",
        element: <ChapterPage />,
      },
      {
        path: "/:sv/chapter/:slug/:id",
        element: <ReadChapter />,
      },
      {
        path: "/:sv/chapter2/:slug/:id",
        element: <ReadChapter2 />,
      },
      {
        path: "/:sv/novel/:slug",
        element: <NovelPage />,
      },
      {
        path: "/:sv/novel/:slug/:chapter",
        element: <NovelPage />,
      },
      {
        path: "/:sv/novel2/:slug/:chapter",
        element: <NovelPageGenre />,
      },
      {
        path: "/:sv/novel2/:slug",
        element: <NovelPage2 />,
      },
      {
        path: "/:sv/genres/:category",
        element: <MangaCategory />,
      },
      {
        path: "/:sv/all-category",
        element: <ViewCategory />,
      },
      {
        path: "/:sv/manga-text",
        element: <MangaText />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/sign-up-success",
    element: <SignUpSuccess />,
  },
  {
    path: "/forgot-password-success",
    element: <ForgotPassSuccess />,
  },
  {
    path: "/test",
    element: <ItemManga />,
  },
]);
export default router;
