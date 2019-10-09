import React from 'react';

import { Link } from 'react-router-dom';
import BEMHelper from 'react-bem-helper';

import './content-header.scss';

import UploadIcon from './svg-icons/UploadIcon';
import SearchIcon from './svg-icons/SearchIcon';

const cls = new BEMHelper('content-header');

function ContentHeader() {
  return (
    <section {...cls()}>
      <div {...cls('group')}>
        <Link {...cls('link')} to=''>Аналитика</Link>
        <Link {...cls('link')} to=''>Упоминания</Link>
      </div>

      <div {...cls('group')}>
        <Link {...cls('link')} to=''>СМИ</Link>
        <Link {...cls('link')} to=''>SM</Link>
      </div>

      <div {...cls('group')}>
        <Link {...cls('link')} to=''>
          <UploadIcon />
        </Link>
        <Link {...cls('link')} to=''>
          <SearchIcon />
        </Link>
      </div>
    </section>
  );
}

export default ContentHeader;
