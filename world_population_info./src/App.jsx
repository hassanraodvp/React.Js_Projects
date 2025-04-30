import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout.jsx";
import Error from "./pages/ErrorPage.jsx";
import Loader from "./components/Loader.jsx";
// Importing the pages
const Home = React.lazy(() => import("./pages/Home.jsx"));
const About = React.lazy(() => import("./pages/About.jsx"));
const Country = React.lazy(() => import("./pages/Country.jsx"));
const Contact = React.lazy(() => import("./pages/Contact.jsx"));
const CountryDetails = React.lazy(() => import("./pages/CountryDetails.jsx"));


const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="country" element={<Country />}>
            <Route path=":id" element={<CountryDetails />} />
          </Route>
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </Suspense>
  );
};

export default App;
