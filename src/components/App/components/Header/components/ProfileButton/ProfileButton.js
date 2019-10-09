import React, { Component } from 'react';
import BEMHelper from 'react-bem-helper';
import ArrowIcon from './icons/arrow.svg';
import DropDown from '../../../../../Common/DropDown/DropDown';
import './profile-button.scss';

const cls = new BEMHelper('profile-button');

function ProfileButton() {
    let dropDown = null;
    const listItems = [
        { label: 'Настройки аккаунта ', value: 'settings', closeOnClick: true },
        { label: 'Документация', value: 'docs', closeOnClick: true },
        { label: 'Выйти', value: 'logout', closeOnClick: true }
    ];

    return (
        <section {...cls()} onClick={() => dropDown && dropDown.toggle()}>
            <div {...cls('icon')} />
            <span {...cls('name')}>Rosnano</span>
            <img {...cls('arrow')} src={ArrowIcon} alt='arrow' />

            <DropDown
                ref={ref => dropDown = ref}
                items={listItems}
            />
        </section>
    );
}

export default ProfileButton;
