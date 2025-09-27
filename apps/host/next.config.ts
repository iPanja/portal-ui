import { NextFederationPlugin } from '@module-federation/nextjs-mf';
import type { NextConfig } from 'next';

// const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
	/* config options here */
	reactStrictMode: true,
	webpack(config, _) {
		config.plugins.push(
			// https://module-federation.io/guide/framework/nextjs
			new NextFederationPlugin({
				name: 'host',
				filename: 'static/chunks/remoteEntry.js', // Not used for host, but a required field
				remotes: {
					// remoteA: `remoteA@${isProd ? 'https://cdn.company.com/remote-a' : 'http://localhost:3001'}/remoteEntry.js`,
				},
				exposes: {},
				shared: {
					// react: {
					// 	singleton: true,
					// 	strictVersion: true,
					// 	requiredVersion: '19.1.0',
					// },
					// 'react-dom': {
					// 	singleton: true,
					// 	strictVersion: true,
					// 	requiredVersion: '19.1.0',
					// },
				},
				extraOptions: {
					debug: true,
					enableUrlLoaderFix: true,
					exposePages: true,
				},
			}),
		);

		// Ensure React is aliased correctly
		// config.resolve.alias = {
		// 	...config.resolve.alias,
		// 	react: require.resolve('react'),
		// 	'react-dom': require.resolve('react-dom'),
		// };
		return config;
	},
	transpilePackages: ['@repo/ui'],
	experimental: {},
};

export default nextConfig;
