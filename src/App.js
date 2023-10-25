import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
// import News from "./components/Section/News";
import Category from "./components/Section/Category";

function App() {
  return (
    <>
      {/*country --> ae ar at au be bg br ca ch cn co cu cz de eg fr gb gr hk hu id ie il in it jp kr lt lv ma mx my ng nl no nz ph pl pt ro rs ru sa se sg si sk th tr tw ua us ve za */}
      {/* Categories-> general technology science business  health entertainment sports  */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Category category="general" />} />
          <Route path="/business" element={<Category category="business" />} />
          <Route
            path="/technology"
            element={<Category category="technology" />}
          />
          <Route path="/science" element={<Category category="science" />} />
          <Route path="/health" element={<Category category="health" />} />
          <Route
            path="/entertainment"
            element={<Category category="entertainment" />}
          />
          <Route path="/sports" element={<Category category="sports" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
