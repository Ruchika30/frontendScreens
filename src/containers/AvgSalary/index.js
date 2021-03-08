import React, { useEffect, useState } from 'react';
import LoaderProvider from '../../hooks/use-loader';
import {
  getAvgSalary as getAvgSalaryService
} from '../../services/careers';
import consumer from '../../context/consumer';
import Chart from '../../components/chart';

const AvgSalary = ({ idDetailContext }) => {
  const { show, hide } = LoaderProvider();
  const { careerId } = idDetailContext;
  const [avgsalaryList, setAvgSalaryList] = useState([]);
  const [chartDataObj, setchartDataObj] = useState(null);

  const getInitialData = async careerId => {
    try {
      show();
      const { salaryList } = await getAvgSalaryService(careerId);
      setAvgSalaryList(salaryList);
      const backgroundColor = [
        '#141f79',
        '#eacb11',
        '#141f79',
        '#eacb11'

      ];
      const labels = [];
      const datasets = [];
      const data = [];
      const chartData = {};
      const obj = {};
      const chartDataBody = salaryList.map(item => {
        labels.push(item.year);
        data.push(item.salary);
        return { labels, data };
      });

      obj.label = 'avg salary';
      obj.data = chartDataBody[0].data;
      obj.backgroundColor = backgroundColor;
      datasets.push(obj);

      chartData.labels = chartDataBody[0].labels;
      chartData.datasets = datasets;
      if (chartData) {
        setchartDataObj(chartData);
      }
      hide();
    } catch (error) {
      // setErrorFlag(true);
      // handleError(error, setError, '/returnb2c', [getOrderRefundDataB2cService]);
      // hide();
    }
  };

  useEffect(() => {
    getInitialData(careerId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <div className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}

      </div>
      <div style={{ width: '80%' }}>
        {chartDataObj && <Chart chartData={chartDataObj} location="Average Salary" legendPosition="bottom" />}
      </div>
    </div>
  );
};

export default consumer(AvgSalary);
