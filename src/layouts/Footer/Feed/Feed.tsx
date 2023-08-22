import React from 'react';

// eslint-disable-next-line react-refresh/only-export-components
const Feed: React.FC = () => {
    React.useEffect(() => {
        const script = document.createElement('script');

        script.src =
            'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v9.0&appId=your-app-id&autoLogAppEvents=1';
        script.async = true;

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <React.Fragment>
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
        </React.Fragment>
    );
};

export default React.memo(Feed);
