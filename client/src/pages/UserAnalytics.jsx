import React from "react";
import "./Analytics.css";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import sourceData from "./data/sourceData.json";
import reportData from "./data/reportData.json";
defaults.maintainAspectRatio = false;
defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "red";

const UserAnalytics = () => {
  return (
    <div className="chart ">
      <div className="dataCard lineChart">
        {" "}
        <Line
          data={{
            labels: reportData.map((data) => data.label),
            datasets: [
              {
                label: "Report",
                data: reportData.map((data) => data.report),
                backgroundColor: "#064FF0",
                borderColor: "#064FF0",
              },
              {
                label: "Investigated",
                data: reportData.map((data) => data.invest),
                backgroundColor: "#FF3030",
                borderColor: "#FF3030",
              },
            ],
          }}
          options={{
            elements: {
              line: {
                tension: 0.5,
              },
            },
            plugins: {
              title: {
                text: "Monthly Crimes Reported & Investigated",
              },
            },
          }}
        />
      </div>
      <div className="dataCard barChart">
        {" "}
        <Bar
          data={{
            labels: sourceData.map((data) => data.label),
            datasets: [
              {
                label: "Count",
                data: sourceData.map((data) => data.value),
                backgroundColor: [
                  "rgba(43, 63, 229, 0.8)",
                  "rgba(250, 192, 19, 0.8)",
                  "rgba(253, 135, 135, 0.8)",
                  "rgba(92, 184, 92, 0.8)",
                ],
                borderRadius: 5,
              },
            ],
          }}
          options={{
            plugins: {
              title: {
                text: "Reported Crimes",
              },
            },
          }}
        />
      </div>
      <div className="dataCard pieChart">
        <Doughnut
          data={{
            labels: sourceData.map((data) => data.label),
            datasets: [
              {
                label: "Count",
                data: sourceData.map((data) => data.value),
                backgroundColor: [
                  "rgba(43, 63, 229, 0.8)",
                  "rgba(250, 192, 19, 0.8)",
                  "rgba(253, 135, 135, 0.8)",
                  "rgba(92, 184, 92, 0.8)",
                ],
                borderColor: [
                  "rgba(43, 63, 229, 0.8)",
                  "rgba(250, 192, 19, 0.8)",
                  "rgba(253, 135, 135, 0.8)",
                  "rgba(92, 184, 92, 0.8)",
                ],
              },
            ],
          }}
          options={{
            plugins: {
              title: {
                text: "Reported Crimes",
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default UserAnalytics;
