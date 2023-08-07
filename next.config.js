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
};

module.exports = nextConfig;
