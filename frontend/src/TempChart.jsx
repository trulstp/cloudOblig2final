import React, { Component } from "react";
import { Chart } from "chart.js/auto";
import { Line } from "react-chartjs-2";

//const hours = fetchTimestamps();

const data = {
    labels: [],
    datasets: [
        {
            label: "63rd Street Weather Station",
            backgroundColor: "rgb(255, 100, 130)",
            borderColor: "rgb(255, 100, 130)",
            data: [],
        },
        {
            label: "Foster Weather Station",
            backgroundColor: "rgb(100, 130, 255)",
            borderColor: "rgb(100, 130, 255)",
            data: [],
        },
        {
            label: "Oak Street Weather Station",
            backgroundColor: "rgb(130, 255, 100)",
            borderColor: "rgb(130, 255, 100)",
            data: [],
        },
    ],
};

class TempChart extends Component {
    render() {
        return (
            <div>
                <Line data={data} options={{ scales: { y: { title: { display: true, text: "Air temperature" } } } }} />
            </div>
        );
    }
}

export default TempChart;
