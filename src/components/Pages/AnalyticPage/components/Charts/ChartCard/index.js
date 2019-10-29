import React, { useState } from 'react';
import BEMHelper from "react-bem-helper";
import PrintIcon from "./icons/PrintIcon";
import ShareIcon from "./icons/ShareIcon";
import StarIcon from "./icons/StarIcon";
import TrashIcon from "./icons/TrashIcon";
import './chart-card.scss';
import ButtonGroups from "../../../../../Common/ButtonGroups";
import Page from "../../../../../Common/Page";

const cls = new BEMHelper('chart-card');
const groupButtons = [
  { id: 'sum', label: 'Сумма' },
  { id: 'average', label: 'Среднее' },
  { id: 'count', label: 'Количество' }
];
const ChartCard = ({ title, children }) => {
  const [activeButton, setActiveButton] = useState(groupButtons[1]);

  return (
    <Page {...cls()}>
      <section {...cls('header')}>
        <h5 {...cls('header-title')}>{title}</h5>

        <div {...cls('header-buttons')}>
          <button {...cls('header-button')}><PrintIcon /></button>
          <button {...cls('header-button')}><ShareIcon /></button>
          <button {...cls('header-button')}><StarIcon /></button>
          <button {...cls('header-button')}><TrashIcon /></button>
        </div>
      </section>

      <section {...cls('body')}>
        { children }
      </section>

      <section {...cls('footer')}>
        <button {...cls('footer-button')}>Период</button>
        <button {...cls('footer-button')}>Показатель</button>

        <ButtonGroups
          active={activeButton}
          buttons={groupButtons}
          onChange={setActiveButton}
        />
      </section>
    </Page>
  );
};

export default ChartCard;
