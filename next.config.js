/** @type {import('next').NextConfig} */
const nextConfig = {
    i18n: {
        locales: ['vi'],
        defaultLocale: 'vi',
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });

        return config;
    },
    reactStrictMode: false,
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
                pathname: '/uploads/**',
            },
            {
                protocol: 'http',
                hostname: 'trangvangtructuyen.vn',
                pathname: '/**',
            },
        ],
    },
};

module.exports = nextConfig;
