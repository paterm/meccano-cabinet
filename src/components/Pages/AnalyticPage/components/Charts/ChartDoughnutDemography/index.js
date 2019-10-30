import React, { useEffect, useRef } from 'react';
import ChartCard from "../ChartCard";
import ChartJS from 'chart.js';
import BEMHelper from "react-bem-helper";
import EyeIcon from "../../../../../Common/Icons/EyeIcon";
import '../chart.scss';

const cls = new BEMHelper('chart');
const ChartDoughnutDemography = () => {
  const canvas = useRef(null);

  useEffect(() => {
    if (!canvas) return;

    const config = {
      type: 'doughnut',
      data: {
        labels: [1, 2],
        datasets: [{
          backgroundColor: ['#1F78B4', '#A6CEE3'],
          data: [60, 40],
          weight: 30
        }, {
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
            display: false
          }],
          yAxes: [{
            display: false
          }]
        },
        animation: {
          animateScale: true,
          animateRotate: true
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
              <EyeIcon {...cls('legend-item-icon')} fill='#1F78B4'/>
              60%
            </li>
            <li {...cls('legend-item')}>
              <EyeIcon {...cls('legend-item-icon')} fill='#A6CEE3'/>
              40%
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

export default ChartDoughnutDemography;
