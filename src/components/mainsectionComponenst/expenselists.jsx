import ExpenseCard from "./expenseCard";

export default function ExpenseList() {
  return (
    <div className="w-full px-4 py-2 h-full grid grid-rows-[10%_90%]">
      <div className="w-full flex items-center justify-between">
        <div className="font-medium text-xl select-none cursor-pointer underline">
          Expenses List
        </div>
        <div className="flex items-center gap-2">
          <select
            name="sorted"
            id="sortedby"
            className="border px-2 py-2 rounded-lg curosr-pointer"
          >
            <option value="hightolow" className="text-neutral-950">
              High to Low
            </option>
            <option value="lowtohigh" className="text-neutral-950">
              Low to High
            </option>
            <option value="date" className="text-neutral-950">
              Date
            </option>
          </select>
          <input
            type="text"
            placeholder="Search"
            className="border rounded-lg px-3 py-2"
          />
        </div>
      </div>
      <div className="w-full h-full overflow-y-auto overflow-x-hidden grid-cols-1 sm:grid-cols-1 grid md:grid-cols-2 lg:grid-cols-3 gap-4 items-start content-start scrollbar-custom">
        <ExpenseCard />
        <ExpenseCard />
        <ExpenseCard />
        <ExpenseCard />
        <ExpenseCard />
        <ExpenseCard />
        <ExpenseCard />
        <ExpenseCard />
        <ExpenseCard />
        <ExpenseCard />
        <ExpenseCard />
        <ExpenseCard />
      </div>
    </div>
  );
}
