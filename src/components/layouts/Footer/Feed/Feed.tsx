import React, { useRef } from 'react';
import { useInViewport } from 'react-in-viewport';

// eslint-disable-next-line react-refresh/only-export-components
const Feed: React.FC = () => {
    const myRef = useRef<HTMLElement>(null);
    const finishAddScript = useRef<boolean>(false);
    const { inViewport } = useInViewport(myRef);

    React.useEffect(() => {
        if (inViewport && !finishAddScript.current) {
            const script = document.createElement('script');

            script.src =
                'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v9.0&appId=your-app-id&autoLogAppEvents=1';
            script.async = true;

            document.body.appendChild(script);

            finishAddScript.current = true;

            return () => {
                document.body.removeChild(script);
            };
        }
    }, [inViewport]);

    return (
        <section ref={myRef}>
            <div id="fb-root"></div>
            <div
                className="fb-page"
                data-href="https://www.facebook.com/thungcartonsgn"
                data-tabs="timeline"
                data-width=""
                data-height="290"
                data-small-header="true"
                data-adapt-container-width="true"
                data-hide-cover="false"
                data-show-facepile="true"
            >
                <blockquote
                    cite="https://www.facebook.com/thungcartonsgn"
                    className="fb-xfbml-parse-ignore"
                >
                    <a href="https://www.facebook.com/thungcartonsgn">Thùng Carton SGN</a>
                </blockquote>
            </div>
        </section>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export default React.memo(Feed);
