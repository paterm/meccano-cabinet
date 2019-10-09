import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import BEMHelper from 'react-bem-helper';
import { SIDE_BAR_MENUS } from './sidebar-menu';
import './left-sidebar.scss';

const cls = new BEMHelper('left-sidebar');

function LeftSidebar({ sidebar }) {
  return (
    <aside {...cls('', { open: sidebar.open })}>
      <section {...cls('project')}>
        Имя проекта
      </section>

      <section {...cls('menu')}>
        <nav {...cls('menu-nav')}>
          {SIDE_BAR_MENUS.map((item, itemIndex) => (
            <Link
              {...cls('menu-item')}
              to={item.url}
              key={itemIndex}
            >
              <img {...cls('menu-item-icon')} src={require('./img/star-icon.svg')} alt=""/>
              <span {...cls('menu-item-name')} >{item.name}</span>
            </Link>
          ))}
        </nav>
      </section>
    </aside>
  )
}

function mapStateToProps({ sidebar }) {
    return { sidebar };
}

export default connect(mapStateToProps)(LeftSidebar);
