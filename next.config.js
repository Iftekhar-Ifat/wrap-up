/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ['drive.google.com', 'image.freepik.com'],
    },
};

module.exports = nextConfig;
