import React from 'react';
import BEMHelper from "react-bem-helper";
import PropTypes from 'prop-types';
import isObject from 'lodash/isObject';
import './button-group.scss';

const cls = new BEMHelper('button-group');
const Index = ({ className, active, buttons, onChange }) => (
  <section {...cls('', '', className)}>
    {buttons.map((button, buttonIndex) => (
      <button
        key={button.id || buttonIndex}
        {...cls('button', {active: isObject(active) ? active.id === button.id : active === button.id})}
        onClick={() => onChange(button)}
      >{button.label}</button>
    ))}
  </section>
);

Index.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
      ]).isRequired,
      label: PropTypes.string.isRequired
    })
  )
};

export default Index;
