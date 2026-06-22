/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  allowedDevOrigins: ['10.184.107.107', '192.168.2.160', '192.168.1.2', '10.212.134.202','192.168.1.22','192.168.1.6'],
  images: {
    qualities: [75, 100],        // ✅ fixes image quality warning
  },
};

export default nextConfig;