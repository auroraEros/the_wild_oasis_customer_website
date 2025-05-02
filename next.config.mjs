/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "nejskfsgtdkgcbhpzlsf.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/cabin-images/**",
        search: "",
      },
      // {
      //   protocol: "https",
      //   hostname: "lh3.googleusercontent.com",
      //   port: "",
      //   pathname: "a/ACg8ocKInLd3nRcRGkGiuZUpViZWuzxsPe2VN5VAWjUiAni_l73dbAk=s96-c",
      //   search: "",
      // },
    ],

  },
};

export default nextConfig;
