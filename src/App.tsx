import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import { lazy } from "react";
import ErrorMessage from "./components/ErrorMessage";

const LazyHome = lazy(() => import("./components/pages/Home"));
const LazyUserDetails = lazy(() => import("./components/pages/UserDetails"));

const App = () => {
  return (
    <>
      <Layout>
        <main className="main">
          <Routes>
            <Route path="/" element={<LazyHome />} />
            <Route path="/details/:userID" element={<LazyUserDetails />} />
            <Route path="" element={<ErrorMessage />} />
          </Routes>
        </main>
      </Layout>
    </>
  );
};

export default App;
