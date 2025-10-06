import { Route, Routes } from "react-router-dom";
import Layout from "./components/entities/Layout";
import ErrorMessage from "./components/entities/ErrorMessage";
import Home from "./components/pages/Home";
import UserDetails from "./components/pages/UserDetails";

const App = () => {
  return (
    <>
      <Layout>
        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details/:userID" element={<UserDetails />} />
            <Route path="*" element={<ErrorMessage />} />
          </Routes>
        </main>
      </Layout>
    </>
  );
};

export default App;
