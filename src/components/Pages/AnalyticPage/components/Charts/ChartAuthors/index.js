import React, { useEffect, useRef } from 'react';
import ChartCard from "../ChartCard";
import ChartJS from 'chart.js';
import BEMHelper from "react-bem-helper";
import EyeIcon from "../../../../../Common/Icons/EyeIcon";
import '../chart.scss';

const cls = new BEMHelper('chart');
const ChartAuthors = () => {
  const canvas = useRef(null);
  const data = [20, 80, 45, 80, 45];

  useEffect(() => {
    if (!canvas) return;

    const config = {
      type: 'horizontalBar',
      data: {
        labels: ['Автор 1', 'Автор 2', 'Автор 3', 'Автор 4', 'Автор 5'],
        datasets: [{
          label: 'Dataset 1',
          backgroundColor: '#98D280',
          borderColor: '#98D280',
          data,
        }, {
          label: 'Dataset 2',
          backgroundColor: '#CAAEB7',
          borderColor: '#CAAEB7',
          data: [15, 20, 0, 0, 40],
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
              min: 0,
              max: 100
            }
          }],
          yAxes: [{
            display: true,
            stacked: true
          }]
        }
      }
    };
    const ctx = canvas.current.getContext('2d');

    new ChartJS(ctx, config);
  });

  return (
    <ChartCard title='Источники'>
      <div {...cls()}>
        <section {...cls('data')}>
          <ul {...cls('legend')}>
            <li {...cls('legend-item')}>
              <EyeIcon {...cls('legend-item-icon')} fill='#98D280'/>
              80%
            </li>
            <li {...cls('legend-item')}>
              <EyeIcon {...cls('legend-item-icon')} fill='#CAAEB7'/>
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

export default ChartAuthors;
