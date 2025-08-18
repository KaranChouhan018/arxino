import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  
  images: {
    domains: ["images.unsplash.com","www.shutterstock.com", "arizonagestionenergy.com"],
  },
};

export default withNextIntl(nextConfig);