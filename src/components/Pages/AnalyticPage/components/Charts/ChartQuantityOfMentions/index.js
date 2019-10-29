import React, { useEffect, useRef } from 'react';
import ChartCard from "../ChartCard";
import ChartJS from 'chart.js';
import BEMHelper from "react-bem-helper";
import EyeIcon from "../../../../../Common/Icons/EyeIcon";
import { toPriceFormat } from "../../../../../../helpers";
import '../chart.scss';

const cls = new BEMHelper('chart');
const ChartQuantityOfMentions = () => {
  const canvas = useRef(null);

  useEffect(() => {
    if (!canvas) return;

    const config = {
      type: 'line',
      data: {
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        datasets: [{
          backgroundColor: '#F056FE',
          borderColor: '#F056FE',
          data: [1000, 50, 1800, 10, 1500, 500, 550, 1300, 1200, 1160, 1200, 2250, 1750],
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
            display: true,
          }]
        }
      }
    };
    const ctx = canvas.current.getContext('2d');

    new ChartJS(ctx, config);
  }, []);

  return (
    <ChartCard title='Количество упоминаний'>
      <div {...cls()}>
        <section {...cls('data')}>
          <ul {...cls('legend')}>
            <li {...cls('legend-item')}>
              <EyeIcon {...cls('legend-item-icon')} fill='#F056FE'/>
              11991%
            </li>
          </ul>
          
          <div {...cls('total')}>{toPriceFormat(2821)}</div>
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

export default ChartQuantityOfMentions;
