import { useContext } from "react";
import { Link, useNavigate, useParams, useSearchParams } from "react-router-dom";
import { ThemeContext } from "../context/themecontext";
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { FaRegChartBar } from "react-icons/fa";

export default function Navbar(){
  const navigate = useNavigate();
  console.log(navigate);
  
  function handlenavigate(){
    navigate("/add")
  }
  const { theme, handleToggle } = useContext(ThemeContext);
  return (
    <nav className="w-full py-3 px-3 flex items-center justify-between bg-neutral-800">
      <Link
        to={"/"}
        className="text-lg cursor-pointer select-none text-neutral-50"
      >
        Expense Tracker
      </Link>
      <div className="text-neutral-50 font-medium">
        <Link to={"/charts"} className="flex items-center justify-center gap-2.5">
          Chart
          <FaRegChartBar size={23} />
        </Link>
      </div>
      <div className="flex items-center justify-center gap-2">
        <button onClick={handlenavigate} className="px-3 py-2 rounded-lg cursor-pointer bg-neutral-50 text-neutral-900">
          Add Topics
        </button>
        <button
          className="px-3 py-2 rounded-lg cursor-pointer bg-neutral-50 text-neutral-900 transition duration-300"
          onClick={handleToggle}
        >
          {theme === "light" ? <CiDark size={25} /> : <CiLight size={25} />}
        </button>
      </div>
    </nav>
  );
}
