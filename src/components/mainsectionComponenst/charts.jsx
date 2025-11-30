import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Bar } from "react-chartjs-2";
import { useState } from "react";
import { Data } from "../../utils/data";
import { Pie } from "react-chartjs-2";
export default function Charts() {
  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained ",
        data: Data.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "&quot;#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  return (
    <div className="w-full h-full grid grid-cols-[50%_50%] place-content-center">
      <div className="">
        <Bar
          data={chartData}
          options={{
            plugins: {
              title: {
                display: true,
                text: "Users Gained between 2016-2020",
              },
              legend: {
                display: false,
              },
            },
          }}
          className="border-2 border-neutral-700"
        />
      </div>

      <div className="w-[50%] mx-auto">
        <Pie
          data={chartData}
          options={{
            plugins: {
              title: {
                display: true,
                text: "Users Gained between 2016-2020",
              },
            },
          }}
        />
      </div>
    </div>
  );
}
