import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader";

const LazyHome = lazy(() => import("./components/pages/Home"));
const LazyUserDetails = lazy(() => import("./components/pages/UserDetails"));

const App = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Layout>
          <main className="main">
            <Routes>
              <Route path="/" element={<LazyHome />} />
              <Route path="/details/:userID" element={<LazyUserDetails />} />
            </Routes>
          </main>
        </Layout>
      </Suspense>
    </>
  );
};

export default App;
