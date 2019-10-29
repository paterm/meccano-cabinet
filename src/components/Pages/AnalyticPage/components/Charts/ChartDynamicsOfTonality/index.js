import React, { useEffect, useRef } from 'react';
import ChartCard from "../ChartCard";
import ChartJS from 'chart.js';
import BEMHelper from "react-bem-helper";
import EyeIcon from "../../../../../Common/Icons/EyeIcon";
import '../chart.scss';

const cls = new BEMHelper('chart');
const ChartDynamicsOfTonality = () => {
  const canvas = useRef(null);

  useEffect(() => {
    if (!canvas) return;

    const config = {
      type: 'line',
      data: {
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        datasets: [{
          backgroundColor: '#CAAEB7',
          borderColor: '#CAAEB7',
          data: [1000, 50, 1800, 10, 1500, 500, 550, 1300, 1200, 1160, 1200, 2250, 1750],
          fill: false,
          borderWidth: 1
        }, {
          backgroundColor: '#98D280',
          borderColor: '#98D280',
          data: [200, 1500, 1200, 2010, 1400, 2000, 20, 500, 2400, 360, 1800, 1250, 750],
          fill: false,
          borderWidth: 1
        }, {
          backgroundColor: '#4B68F5',
          borderColor: '#4B68F5',
          data: [2200, 500, 800, 250, 1500, 2000, 1550, 300, 200, 2460, 2200, 250, 50],
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
            display: false,
          }]
        }
      }
    };
    const ctx = canvas.current.getContext('2d');

    new ChartJS(ctx, config);
  }, []);

  return (
    <ChartCard title='Динамика по тональности'>
      <div {...cls()}>
        <section {...cls('data')}>
          <ul {...cls('legend')}>
            <li {...cls('legend-item')}>
              <EyeIcon {...cls('legend-item-icon')} fill='#CAAEB7'/>
              30%
            </li>
            <li {...cls('legend-item')}>
              <EyeIcon {...cls('legend-item-icon')} fill='#98D280'/>
              50%
            </li>
            <li {...cls('legend-item')}>
              <EyeIcon {...cls('legend-item-icon')} fill='#4B68F5'/>
              20%
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

export default ChartDynamicsOfTonality;
