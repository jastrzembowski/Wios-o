import React, { Component } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
const DATABASE_URL = "https://dancing-app-77d2a.firebaseio.com";
export default class BarChart extends Component {
  state = {
    offers: [],
    chartData: {
      options: {
        yAxes: [{ ticks: { min: 0 } }],
      },
      labels: ["Łatwe", "Średnie", "Trudne"],
      datasets: [
        {
          label: "Population",
          data: [],
          backgroundColor: ["#89C7CC", "#04738D", "#89C7CC"],
        },
      ],
    },
  };
  labels = ["łatwy", "średni", "trudny"];
  componentDidMount() {
    fetch(`${DATABASE_URL}/offers.json`)
      .then((response) => response.json())
      .then((data) => {
        const formattedData = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        this.setState({
          offers: formattedData,
        });
      })
      .then(this.filteringData);
  }
  filteringData = () => {
    let difficultyLevels = this.labels.map((difficulty) => {
      return this.state.offers.filter((element) => {
        return element.level === difficulty;
      }).length;
    });
    this.setState({
      chartData: {
        labels: ["Łatwe", "Średnie", "Trudne"],
        datasets: [
          {
            label: "Ilość obiektów",
            data: difficultyLevels,
            backgroundColor: ["#89C7CC", "#04738D", "#89C7CC"],
          },
        ],
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
  };
  render() {
    return (
      <div
        className="chart"
        style={{
          width: "600px",
          height: "400px",
          marginLeft: "100px",
        }}
      >
        <Bar
          data={this.state.chartData}
          options={{
            title: {
              display: true,
              text: "Ilość obiektów w naszej bazie względem poziomu trudności",
              fontSize: 20,
            },
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                  },
                },
              ],
            },
            legend: {
              display: false,
              position: "right",
            },
          }}
        />
      </div>
    );
  }
}
