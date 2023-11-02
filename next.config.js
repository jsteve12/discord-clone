/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.externals.push({
      "utf-8-validate": "commonjs utf-8-validate",
      bufferutil: "commonjs bufferutil",
    });

    return config;
  },
  images: {
    domains: ["uploadthing.com", "utfs.io"],
  },
};

module.exports = nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,

//   // Specify the file extensions to be resolved
//   webpack: (webpackConfig, { webpack }) => {
//     webpackConfig.resolve.extensionAlias = {
//       ".js": [".ts", ".tsx", ".js", ".jsx"],
//     };
//     return webpackConfig;
//   },
//   images: {
//     domains: ["uploadthing.com", "utfs.io"],
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "utfs.io",
//       },
//     ],
//   },
// };

// module.exports = nextConfig;
