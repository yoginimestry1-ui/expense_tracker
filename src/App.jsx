import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mainsection from "./components/mainsection";
import Navbar from "./components/navbar";
import { ThemeContext } from "./context/themecontext";
import Charts from "./components/mainsectionComponenst/charts";
import AddExpense from "./components/addExpense/add";
export default function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className="h-screen w-full grid grid-rows-[10%_90%] "
    >
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Mainsection />} />
        </Routes>
        <Routes>
          <Route path="/charts" element={<Charts />} />
        </Routes>
        <Routes>
          <Route path="/add" element={<AddExpense />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
