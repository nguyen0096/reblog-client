import React from 'react';

import { Container } from './Container';

export default {
    title: 'Layout/Container',
    component: Container,
};

export const Default = () => {
    return (
        <Container style={{ backgroundColor: 'cyan', width: '20rem', height: '20rem'}}>
            Content goes here!
        </Container>
    );
};
