'use client';

import config from '@/config';
import { SWRConfig } from 'swr';

export const SWRProvider = ({ children }: { children: React.ReactNode }) => {
    return <SWRConfig value={config.swr.value}>{children}</SWRConfig>;
};
