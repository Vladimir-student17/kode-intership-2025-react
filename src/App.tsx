import { Link, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import { lazy, Suspense } from "react";

const LazyHome = lazy(() => import("./components/pages/Home"));
const LazyProfile = lazy(() => import("./components/pages/Profile"));

const App = () => {
  return (
    <>
      <Layout>
        <main className="main">
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<LazyHome />} />
              <Route path="/profile" element={<LazyProfile />} />
            </Routes>
          </Suspense>
        </main>
      </Layout>
    </>
  );
};

export default App;
