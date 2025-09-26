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
				shared: {},
				extraOptions: {
					debug: true,
					enableUrlLoaderFix: true,
					exposePages: true,
				},
			}),
		);
		return config;
	},
	transpilePackages: ['@react-ui/lib'],
};

export default nextConfig;
