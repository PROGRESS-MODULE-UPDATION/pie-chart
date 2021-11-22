import React from "react";
import Chart from "react-apexcharts";
<h1>
  "AREA OF INTEREST"
</h1>

export default class PieChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        series: [40, 30, 15, 15],
        labels: ["physics", "chemistry", "math", "computer science"]
      }
    };
  }
  render() {
    return (
      <div id="pieChart">
        <Chart
          options={this.state.options}
          series={this.state.options.series}
          type="pie"
          width="30%"
        />
        
      </div>
    );
  }
}