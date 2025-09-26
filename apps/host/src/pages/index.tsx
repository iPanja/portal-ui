import Image from 'next/image';
import { Geist, Geist_Mono } from 'next/font/google';
// import { Button } from '@repo/react-ui/components/ui/button';
import { Button } from '@repo/react-ui';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export default function Home() {
	return (
		<div
			className={`${geistSans.className} ${geistMono.className} font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20`}
		>
			<main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
				<Image
					className="dark:invert"
					src="/next.svg"
					alt="Next.js logo"
					width={180}
					height={38}
					priority
				/>
				<Button className="p-8" onClick={() => console.log('yippe')}>
					HEY OVER HERE
				</Button>
				<h3 className="px-12 text-green-500">YO YO YO YO </h3>
			</main>
		</div>
	);
}
