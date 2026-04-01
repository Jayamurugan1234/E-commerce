import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CategoryCards from "./components/CategoryCards";
import Women from "./pages/Women";
import Tops from "./pages/Tops"
import Cords from "./pages/Cords";
import Dress from "./pages/Dress";
import FShirts from "./pages/FShirts";
import Men from "./pages/Men";
import BShirts from "./pages/BShirts";
import BPants from "./pages/BPants";
import BTShirts from "./pages/BTShirts";
import BJackets from "./pages/BJackets";
import BShorts from "./pages/BShorts";
import Boys from "./pages/Boys";
import Girls from "./pages/Girls";
// import Home from "./pages/Home";
import Kids from "./pages/Kids";
import KBoys from "./pages/KBoys";
import KGirls from "./pages/KGirls";
import DressSection from "./components/DressSection";
import About1 from "./components/About1";
import DressSection1 from "./components/DressSection1";
import Footer from "./components/Footer";
import SearchProducts from "./components/SearchProducts";
import SearchPages from "./pages/SearchPages";
import ScrollTop from "./components/ScrollTop";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import "./App.css";
import { useState } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <BrowserRouter>

      <ScrollTop />
      <Navbar setSearchTerm={setSearchTerm} />


      <Routes>

        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <CategoryCards />
              <DressSection />
              <About1 />
              <DressSection1 />

              {searchTerm && <SearchProducts searchTerm={searchTerm} />}


            </>
          }
        />

        <Route path="/search" element={<SearchPages />} />


        <Route path="/women" element={<Women />} />
        <Route path="/women/tops" element={<Tops />} />
        <Route path="/women/cords" element={<Cords />} />
        <Route path="/women/dresses" element={<Dress />} />
        <Route path="/women/fshirts" element={<FShirts />} />





        <Route path="/men" element={<Men />} />
        <Route path="/men/bshirts" element={<BShirts />} />
        <Route path="/men/bpants" element={<BPants />} />
        <Route path="/men/btshirts" element={<BTShirts />} />
        <Route path="/men/bjacket" element={<BJackets />} />
        <Route path="/men/bshorts" element={<BShorts />} />





        <Route path="/boys" element={<Boys />} />
        <Route path="/girls" element={<Girls />} />


        <Route path="/kids" element={<Kids />} />

        <Route path="/kids/boys" element={<Boys />} />

        <Route path="/kids/girls" element={<KGirls />} />

        <Route path="/about" element={<About />} />
        {/* <Route path="/home" element={<Home />} /> */}

<Route path="/login" element={<Login />} />
<Route path="/signup" element={<Signup />} />
      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;