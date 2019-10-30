import React, { useEffect, useRef } from 'react';
import ChartCard from "../ChartCard";
import ChartJS from 'chart.js';
import BEMHelper from "react-bem-helper";
import EyeIcon from "../../../../../Common/Icons/EyeIcon";
import '../chart.scss';

const cls = new BEMHelper('chart');
const ChartDemography = () => {
  const canvas = useRef(null);

  useEffect(() => {
    if (!canvas) return;

    const config = {
      type: 'line',
      data: {
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        datasets: [{
          lineTension: 0,
          backgroundColor: '#F58FE1',
          borderColor: '#F58FE1',
          data: [1000, 50, 1800, 10, 1500, 500, 550, 1300, 1200, 1160, 1200, 2250, 1750],
          fill: false,
          borderWidth: 1
        }, {
          lineTension: 0,
          backgroundColor: '#A221FD',
          borderColor: '#A221FD',
          data: [200, 1500, 1200, 2010, 1400, 2000, 20, 500, 2400, 360, 1800, 1250, 750],
          fill: false,
          borderWidth: 1
        }]
      },
      options: {
        legend: {
          display: false
        },
        responsive: true,
        hover: {
          mode: 'nearest',
          intersect: true
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }]
        }
      }
    };
    const ctx = canvas.current.getContext('2d');

    new ChartJS(ctx, config);
  }, []);

  return (
    <ChartCard title='Демография: пол авторов'>
      <div {...cls()}>
        <section {...cls('data')}>
          <ul {...cls('legend')}>
            <li {...cls('legend-item')}>
              <EyeIcon {...cls('legend-item-icon')} fill='#F58FE1'/>
              30%
            </li>
            <li {...cls('legend-item')}>
              <EyeIcon {...cls('legend-item-icon')} fill='#A221FD'/>
              50%
            </li>
          </ul>
        </section>

        <section {...cls('graph')}>
          <canvas
            {...cls('canvas')}
            style={{width: '70%', height: '200px'}}
            ref={canvas}
          />
        </section>
      </div>
    </ChartCard>
  );
};

export default ChartDemography;
