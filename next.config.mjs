/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/pizza?sortBy=relevance&q=',
                permanent: true
            }
        ]
    },
    images: {
        domains: ["www.svgrepo.com"]
    }
};

export default nextConfig;
