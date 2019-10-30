import React, { useEffect, useRef } from 'react';
import ChartCard from "../ChartCard";
import ChartJS from 'chart.js';
import BEMHelper from "react-bem-helper";
import EyeIcon from "../../../../../Common/Icons/EyeIcon";
import '../chart.scss';

const cls = new BEMHelper('chart');
const ChartDemographyAge = () => {
  const canvas = useRef(null);

  useEffect(() => {
    if (!canvas) return;

    const config = {
      type: 'horizontalBar',
      data: {
        labels: ['от 60 до 100', 'от 40 до 60', 'от 30 до 40', 'от 20 до 30', 'от 15 до 20'],
        datasets: [{
          label: 'М',
          backgroundColor: '#D8DFE5',
          borderColor: '#D8DFE5',
          data: [15, 90, 60, 80, 10],
        }, {
          label: 'Ж',
          backgroundColor: '#CAAEB7',
          borderColor: '#CAAEB7',
          data: [-15, -65, -50, -90, -5],
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
            display: false,
            stacked: true,
            ticks: {
              min: -100,
              max: 100
            },
          }],
          yAxes: [{
            display: true,
            stacked: true,
            barThickness: 30,
          }]
        }
      }
    };
    const ctx = canvas.current.getContext('2d');

    new ChartJS(ctx, config);
  });

  return (
    <ChartCard title='Демография: пол и возраст авторов'>
      <div {...cls()}>
        <section {...cls('data')}>
          <ul {...cls('legend')}>
            <li {...cls('legend-item')}>
              <EyeIcon {...cls('legend-item-icon')} fill='#D8DFE5'/>
              М
            </li>
            <li {...cls('legend-item')}>
              <EyeIcon {...cls('legend-item-icon')} fill='#CAAEB7'/>
              Ж
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

export default ChartDemographyAge;
