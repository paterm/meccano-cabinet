import React from 'react'
import BEMHelper from 'react-bem-helper';
import './header.scss';
import Logo from './components/Logo';
import ChatIcon from './icons/ChatIcon';
import InfoIcon from './icons/InfoIcon';
import ProfileButton from './components/ProfileButton';

const cls = new BEMHelper('header');

function Index() {
    return (
        <header {...cls()}>
            <Logo />

            <section {...cls('right-bar')}>
                <ProfileButton />

                <button {...cls('right-bar-button')}>
                    <ChatIcon {...cls('chat-icon')} />
                </button>

                <button {...cls('right-bar-button')}>
                    <InfoIcon {...cls('info-icon')} />
                </button>
            </section>
        </header>
    );
}

export default Index;
