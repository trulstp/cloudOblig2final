import React, { Component } from "react";
import axios from "axios";
import convert from "xml-js";
import "./styles.css";
import { Chart } from "chart.js/auto";
import { Line } from "react-chartjs-2";

class Index extends Component {
    constructor() {
        super();
        this.state = {
            array: [],
        };
    }
    async componentDidMount() {
        const response = await this.fetchData();
        this.setState({ array: response.data[0].topic });
        console.log(response.data[0].topic);
    }

    fetchData() {
        return axios.get("http://localhost:5000/app/");
    }

    fetchAirTemps() {
        const tempData = this.state.array;
        let temperature = [];
        tempData.forEach((data) => {
            temperature.push(data.airTemperature);
        });
        return temperature;
    }

    fetchAirTempsStation(name) {
        const tempData = this.state.array;
        let temperature = [];
        tempData.forEach((data) => {
            if (data.stationName === name) {
                temperature.push(data.airTemperature);
            }
        });
        return temperature;
    }

    fetchLabels() {
        const tempData = this.state.array;
        let label = [];
        tempData.forEach((data) => {
            if (data.stationName === "63rd Street Weather Station") {
                label.push(data.timestamp);
            }
        });
        return label;
    }

    convertXml() {
        const xml = "";

        const xmlToJson = convert.xml2json(xml, { compact: false, spaces: 4 });
        return xmlToJson;
    }

    convertJson() {
        const json = "";

        const jsonToXml = convert.json2xml(json, { compact: false, spaces: 4 });
        return jsonToXml;
    }

    calcAverage(values) {
        let sum = 0;

        values.forEach((value) => {
            sum += value;
        });

        return (sum / values.length).toFixed(2);
    }

    calcMin(values) {
        return Math.min(...values);
    }

    calcMax(values) {
        return Math.max(...values);
    }

    calcJump(values) {
        let highestJump = 0;
        for (let i = 0; i < values.length - 1; i++) {
            const dif = Math.abs(values[i] - values[i + 1]).toFixed(2);

            if (dif > highestJump) {
                highestJump = dif;
            }
        }
        return highestJump;
    }

    render() {
        const station63rdTemp = this.fetchAirTempsStation("63rd Street Weather Station");
        const stationForsterTemp = this.fetchAirTempsStation("Foster Weather Station");
        const stationOakTemp = this.fetchAirTempsStation("Oak Street Weather Station");
        const allStationTemp = this.fetchAirTemps();
        const timestamps = this.fetchLabels();

        const graphData = {
            labels: timestamps,
            datasets: [
                {
                    label: "63rd Street Weather Station",
                    backgroundColor: "rgb(255, 100, 130)",
                    borderColor: "rgb(255, 100, 130)",
                    data: station63rdTemp,
                },
                {
                    label: "Foster Weather Station",
                    backgroundColor: "rgb(100, 130, 255)",
                    borderColor: "rgb(100, 130, 255)",
                    data: stationForsterTemp,
                },
                {
                    label: "Oak Street Weather Station",
                    backgroundColor: "rgb(130, 255, 100)",
                    borderColor: "rgb(130, 255, 100)",
                    data: stationOakTemp,
                },
            ],
        };

        return (
            <main>
                <h1>Weather Station data</h1>
                <section className="analysis-wrapper">
                    <h2>Analysis</h2>
                    <p>
                        <span className="bold">Overall average Air Temperature:</span> {this.calcAverage(allStationTemp)}
                    </p>
                    <p>
                        <span className="bold">Overall lowest Air Temperature:</span> {this.calcMin(allStationTemp)}
                    </p>
                    <p>
                        <span className="bold">Overall highest Air Temperature:</span> {this.calcMax(allStationTemp)}
                    </p>
                </section>
                <section className="analysis-wrapper">
                    <h2>63rd Street Weather Station analysis</h2>
                    <p>
                        <span className="bold">Average Air Temperature:</span> {this.calcAverage(station63rdTemp)}
                    </p>
                    <p>
                        <span className="bold">Lowest Air Temperature:</span> {this.calcMin(station63rdTemp)}
                    </p>
                    <p>
                        <span className="bold">Highest Air Temperature:</span> {this.calcMax(station63rdTemp)}
                    </p>
                    <p>
                        <span className="bold">Biggest jump in Air Temperature:</span> {this.calcJump(station63rdTemp)}
                    </p>
                </section>
                <section className="analysis-wrapper">
                    <h2>Foster Weather Station analysis</h2>
                    <p>
                        <span className="bold">Average Air Temperature:</span> {this.calcAverage(stationForsterTemp)}
                    </p>
                    <p>
                        <span className="bold">Lowest Air Temperature:</span> {this.calcMin(stationForsterTemp)}
                    </p>
                    <p>
                        <span className="bold">Highest Air Temperature:</span> {this.calcMax(stationForsterTemp)}
                    </p>
                    <p>
                        <span className="bold">Biggest jump in Air Temperature:</span> {this.calcJump(stationForsterTemp)}
                    </p>
                </section>
                <section className="analysis-wrapper">
                    <h2>Oak Street Weather Station analysis</h2>
                    <p>
                        <span className="bold">Average Air Temperature:</span> {this.calcAverage(stationOakTemp)}
                    </p>
                    <p>
                        <span className="bold">Lowest Air Temperature:</span> {this.calcMin(stationOakTemp)}
                    </p>
                    <p>
                        <span className="bold">Highest Air Temperature:</span> {this.calcMax(stationOakTemp)}
                    </p>
                    <p>
                        <span className="bold">Biggest jump in Air Temperature:</span> {this.calcJump(stationOakTemp)}
                    </p>
                </section>
                <section className="graph-wrapper">
                    <h2>Graph of Air Temperature</h2>
                    <div>
                        <Line data={graphData} options={{ scales: { y: { title: { display: true, text: "Air temperature" } } } }} />
                    </div>
                </section>
            </main>
        );
    }
}

export default Index;
