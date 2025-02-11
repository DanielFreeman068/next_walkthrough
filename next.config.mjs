/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images:{
        remotePatterns: [
            {
            protocol: 'https',
            hostname: 'ichef.bbci.co.uk',
            port:'',
            search:''
            },
        ],
    }
};

export default nextConfig;
