import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    async redirects() {
        return [
            {
                source: '/giving.html',
                destination: '/partner',
                permanent: true,
            },
            {
                source: '/camp',
                destination: '/know/camp',
                permanent: true
            }
        ];
    },
};

export default nextConfig;
