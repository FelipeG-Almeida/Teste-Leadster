import HeaderComponent from '@/components/header/header';
import Head from 'next/head';
import localFont from '@next/font/local';
import Webinars from '@/components/webinars/webinars';
import CallToAction from '@/components/callToAction/callToAction';

const Jakarta_Sans = localFont({
	src: '../../src/assets/fonts/PlusJakartaSans-VariableFont_wght.ttf',
});

export default function Home() {
	return (
		<>
			<Head>
				<title>Teste Leadser</title>
				<meta
					name="description"
					content="Generated by create next app"
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={Jakarta_Sans.className}>
				<HeaderComponent />
				<Webinars />
				<CallToAction />
			</main>
		</>
	);
}
