import React, { Component } from 'react';
import Chart from '../../components/chart';

class App extends Component {
  constructor() {
    super();
    this.state = {
      chartData: {}
    };
  }

  componentWillMount() {
    // this.getchartData(); // this should be this.getChartData();
    this.getChartData();
  }

  getChartData() {
    // Ajax calls here
    this.setState({
      chartData: {
        labels: ['1', '1-4', '5-9', '10-19', '20+'],
        datasets: [
          {
            label: 'Population',
            data: [
              352,
              1001,
              3003,
              6000,
              2000,
              100,
              10,
              20,
              30,
              40
            ],
            backgroundColor: [
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 99, 132, 0.6)'
            ]
          }
        ]
      }
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}

        </div>
        <Chart chartData={this.state.chartData} location="Massachusetts" legendPosition="bottom" />
      </div>
    );
  }
}

export default App;

