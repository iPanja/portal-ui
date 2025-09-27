import Image from 'next/image';
import { Geist, Geist_Mono } from 'next/font/google';
import { Button } from '@repo/ui/components/ui/button';
import {
	Alert,
	AlertDescription,
	AlertTitle,
} from '@repo/ui/components/ui/alert';
import React, { useState} from 'react';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export default function Home() {
	console.log('Host React version:', React.version);

    return (
        <main className="flex flex-col gap-[32px] items-center sm:items-start">
            <Alert variant="default">
                <AlertTitle>Dashboard</AlertTitle>
                <AlertDescription>
                Welcome to your dashboard! The sidebar navigation will persist across all pages.
                </AlertDescription>
            </Alert>

            <Image
                className="dark:invert"
                src="/next.svg"
                alt="Next.js logo"
                width={180}
                height={38}
                priority
            />

            <Button className="p-8" onClick={() => console.log('Dashboard button clicked')}>
                DASHBOARD ACTION
            </Button>

            <h3 className="px-12 text-green-500">Dashboard Content</h3>

            {/* Demo content to show the layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-6xl">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="p-6 bg-white border rounded-lg shadow-sm">
                    <h3 className="font-semibold mb-2">Dashboard Card {item}</h3>
                    <p className="text-sm text-gray-600">
                    This is dashboard content. Each page will have different content but the same navigation.
                    </p>
                </div>
                ))}
            </div>
        </main>
    );
}
