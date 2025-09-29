import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader";

const LazyHome = lazy(() => import("./components/pages/Home"));
const LazyProfile = lazy(() => import("./components/pages/Profile"));

const App = () => {
  return (
    <>
      <Suspense fallback={<Loader/>}>
        <Layout>
          <main className="main">
            <Routes>
              <Route path="/" element={<LazyHome />} />
              <Route path="/profile" element={<LazyProfile />} />
            </Routes>
          </main>
        </Layout>
      </Suspense>
    </>
  );
};

export default App;
