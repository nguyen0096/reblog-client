import './Chat.scss';

import * as React from 'react';

import { Container } from 'components/Layout/Container';

import { Header } from './children/Header';
import { Body } from './children/Body';
import { Footer } from './children/Footer';

export const ChatBox = () => {
    return (
        <Container>
            <div className="chat-box">
                <Header />
                <Body />
                <Footer />
            </div>
        </Container>
    );
};
