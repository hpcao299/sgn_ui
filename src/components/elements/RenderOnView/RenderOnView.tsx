import React, { useEffect, useRef, useState } from 'react';
import { useInViewport } from 'react-in-viewport';

interface RenderOnViewProps {
    children?: React.ReactNode;
}

const RenderOnView: React.FC<RenderOnViewProps> = ({ children }) => {
    const myRef = useRef<HTMLElement>(null);
    const { inViewport } = useInViewport(myRef);
    const [isVisible, setIsVisible] = useState<boolean>(false);

    useEffect(() => {
        if (inViewport) {
            setIsVisible(true);
        }
    }, [inViewport]);

    return (
        <div className="render-on-view" ref={myRef as React.RefObject<HTMLDivElement>}>
            {isVisible === true && children}
        </div>
    );
};

export default RenderOnView;
