import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang="en">
			<Head />
			<body className="rt-bg-background rt-text-foreground antialiased rt-border-green-500">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
