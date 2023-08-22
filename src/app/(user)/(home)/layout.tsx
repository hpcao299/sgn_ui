import React from 'react';
import Banner from './Banner';
import { Sidebar } from '@/layouts';
import dynamic from 'next/dynamic';

const News = dynamic(() => import('./News'), { ssr: false });

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <div className="container">
                <div className="flex" style={{ paddingBottom: '20px' }}>
                    <Sidebar />
                    <Banner />
                </div>
                {children}
            </div>

            <News />
        </>
    );
};

export default HomeLayout;
