'use client';

import React from 'react';
import { AppProgressBar } from 'next-nprogress-bar';

const ProgressBar: React.FC = () => {
    return (
        <AppProgressBar
            height="3px"
            color="#27aae2"
            options={{ showSpinner: false }}
            shallowRouting
            delay={500}
        />
    );
};

export default ProgressBar;
