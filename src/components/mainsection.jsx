import { useContext } from "react";
import { ThemeContext } from "../context/themecontext";
import ExpenseList from "./mainsectionComponenst/expenselists";
import Charts from "./mainsectionComponenst/charts";

export default function Mainsection() {
  const { theme, handleToggle } = useContext(ThemeContext);
  return (
    <div
      className={`w-full h-full transition duration-300 ${
        theme === "light"
          ? "bg-neutral-50 text-neutral-950"
          : "bg-neutral-950 text-neutral-50"
      }`}
    >
        <ExpenseList />
    </div>
  );
}
