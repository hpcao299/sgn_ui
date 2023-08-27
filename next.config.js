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
                protocol: 'http',
                hostname: 'trangvangtructuyen.vn',
                pathname: '/**',
            },
            { protocol: 'https', hostname: 'sgn-cdn.onrender.com', pathname: '/uploads/**' },
            {
                protocol: 'https',
                hostname: 'i.ibb.co',
                pathname: '/**',
            },
        ],
    },
};

module.exports = nextConfig;
