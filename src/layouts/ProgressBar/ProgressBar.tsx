'use client';

import React from 'react';
import { AppProgressBar } from 'next-nprogress-bar';

const ProgressBar: React.FC = () => {
    return (
        <AppProgressBar
            height="3px"
            color="#027aad"
            options={{ showSpinner: false }}
            shallowRouting
            delay={500}
        />
    );
};

export default ProgressBar;
