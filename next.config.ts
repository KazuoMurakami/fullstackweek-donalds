import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  images: { remotePatterns: [{ hostname: 'u9a6wmr3as.ufs.sh' }] }, // garantindo que as imagens sejam carregadas pelo dominio do neon
}

export default nextConfig
