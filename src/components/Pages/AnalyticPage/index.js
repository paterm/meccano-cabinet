import React from 'react';
import ChartQuantityOfMentions from "./components/Charts/ChartQuantityOfMentions";
import ChartDynamicsOfTonality from "./components/Charts/ChartDynamicsOfTonality";
import ChartSource from "./components/Charts/ChartSource";
import ChartAuthors from "./components/Charts/ChartAuthors";
import BEMHelper from "react-bem-helper";
import './analytic-page.scss';

const cls = new BEMHelper('analytic-page');
const AnalyticPage = () => (
  <div {...cls('')}>
    <ChartQuantityOfMentions />
    <ChartDynamicsOfTonality />
    <ChartSource />
    <ChartAuthors />
  </div>
);

export default AnalyticPage;
