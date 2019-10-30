import React, { useEffect, useRef } from 'react';
import ChartCard from "../ChartCard";
import ChartJS from 'chart.js';
import BEMHelper from "react-bem-helper";
import EyeIcon from "../../../../../Common/Icons/EyeIcon";
import '../chart.scss';

const cls = new BEMHelper('chart');
const ChartSource = () => {
  const canvas = useRef(null);
  const data = [20, 98, 45, 80, 65];

  useEffect(() => {
    if (!canvas) return;

    const config = {
      type: 'horizontalBar',
      data: {
        labels: ['ТНТ', 'СМИ', 'Россия 1', 'ВКонтаке', 'Facebook'],
        datasets: [{
          barPercentage: 0.5,
          barThickness: 6,
          maxBarThickness: 8,
          minBarLength: 2,
          backgroundColor: '#D8DFE5',
          borderColor: '#D8DFE5',
          data,
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
            ticks: {
              min: 0,
              max: 100
            }
          }],
          yAxes: [{
            display: true,
            barThickness: 30,
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
            {data.map((item, itemIndex) => (
              <li {...cls('legend-item')} key={itemIndex}>
                <EyeIcon {...cls('legend-item-icon')} fill='#D8DFE5'/>
                {item}%
              </li>
            ))}
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

export default ChartSource;
