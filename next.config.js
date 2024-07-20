/** @type {import('next').NextConfig} */
const nextConfig = {
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
                protocol: 'https',
                hostname: 'files.saigonnguyen.online',
                pathname: '/uploads/**',
            },
        ],
    },
};

module.exports = nextConfig;
