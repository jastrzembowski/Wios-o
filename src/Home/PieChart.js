import React, { Component } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
const DATABASE_URL = "https://dancing-app-77d2a.firebaseio.com";

export default class PieChart extends Component {
  state = {
    chartData: {
      labels: [
        "1 ⭐",
        "2 ⭐",
        "3 ⭐",
        "4 ⭐",
        "5 ⭐",
      ],
      datasets: [
        {
          label: "Nasze oceny:",
          data: [],
          backgroundColor: [
            "#89C7CC",
            "#04738D",
            "#89C7CC",
            "#04738D",
            "#F1B71C",
          ],
        },
      ],
    },
  };
  labels= ["1", "2", "3", "4", "5"];
  componentDidMount() {
    fetch(`${DATABASE_URL}/ratings.json`)
      .then((response) => response.json())
      .then((data) => {
        const formattedData = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        this.setState({
          ratings: formattedData,
        });
      })
      .then(this.filteringData);
  }
  filteringData = () => {
    let dataRatings = this.labels.map((rate) => {
    
      return this.state.ratings.filter((element) => {
        console.log(rate)
        console.log(element.rate)
        return element.rate == rate;
      }).length;
    });
    
    this.setState({
      chartData: {
        labels: [
          "⭐",
          "⭐⭐",
          "⭐⭐⭐",
          "⭐⭐⭐⭐",
          "⭐⭐⭐⭐⭐",
        ],
        datasets: [
          {
            label: "Nasze oceny:",
            data: dataRatings,
            backgroundColor: [
              "#89C7CC",
              "#04738D",
              "#89C7CC",
              "#04738D",
              "#F1B71C",
            ],
          },
        ],
      },
    }
    )


  }
  render() {
    return (
      <div className="chart" style={{ width: "500px", height: "400px" }}>
        <Pie
          data={this.state.chartData}
          options={{
            title: {
              display: true,
              text: "Nasze oceny",
              fontSize: 30,
            },
            legend: {
              display: true,
              position: "right",
              
            },
            options:{
              hoverBackgroundColor: false
            }
          }}
        />
      </div>
    );
  
}
}
