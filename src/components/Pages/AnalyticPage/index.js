import React from 'react';
import ChartQuantityOfMentions from "./components/Charts/ChartQuantityOfMentions";
import ChartDynamicsOfTonality from "./components/Charts/ChartDynamicsOfTonality";
import ChartSource from "./components/Charts/ChartSource";
import ChartAuthors from "./components/Charts/ChartAuthors";
import ChartCommunity from "./components/Charts/ChartCommunity";
import ChartSourceOfTonality from "./components/Charts/ChartSourceOfTonality";
import ChartDemography from "./components/Charts/ChartDemography";
import ChartDoughnutDemography from "./components/Charts/ChartDoughnutDemography";
import ChartDemographyAge from "./components/Charts/ChartDemographyAge";
import BEMHelper from "react-bem-helper";
import './analytic-page.scss';

const cls = new BEMHelper('analytic-page');
const AnalyticPage = () => (
  <div {...cls('')}>
    <ChartQuantityOfMentions />
    <ChartDynamicsOfTonality />
    <ChartSource />
    <ChartAuthors />
    <ChartCommunity />
    <ChartSourceOfTonality />
    <ChartDemography />
    <ChartDoughnutDemography />
    <ChartDemographyAge />
  </div>
);

export default AnalyticPage;
