import type { Metadata } from 'next';
import './globals.css';
import { AppContextProvider } from '@/context/AppContext';
import Head from 'next/head';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
	title: 'Ward Program',
	description: 'Sacrament Meeting Agenda for Florence Ward',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	redirect('https://app.wardprogram.com/?stake=tupelo&ward=florence');
	return (
		<html lang="en">
			<Head>
				<title>{metadata.title as string}</title>
				<meta name="description" content={metadata.description as string} />
				<meta property="og:title" content={metadata.title as string} />
				<meta property="og:description" content={metadata.description as string} />
				<meta property="og:image" content="../assets/florence-ward.png" />
				{/* Step 3: Add og:image meta tag */}
				{/* Add more meta tags as needed */}
			</Head>
			<AppContextProvider>
				<body className="bg-white">{children}</body>
			</AppContextProvider>
		</html>
	);
}
