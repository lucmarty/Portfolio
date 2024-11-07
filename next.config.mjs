/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
    output: "export",
    reactStrictMode: true,
    images: {
        unoptimized: true,
    },
    assetPrefix: isProd ? '/portfolio/' : '',
    basePath: isProd ? '/portfolio' : '',
};

export default nextConfig;
