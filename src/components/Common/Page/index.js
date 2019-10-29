import React from 'react';
import BEMHelper from "react-bem-helper";
import './page.scss';

const cls = new BEMHelper('page');
const Index = ({ children, className }) => (
    <section {...cls('', '', className)}>
      {children}
    </section>
);

export default Index;
