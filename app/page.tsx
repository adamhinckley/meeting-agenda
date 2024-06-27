'use client';
import Agenda from './components/agenda';
import Announcements from './components/announcements';
import FrontPage from './components/frontPage';
import PageThree from './components/pageThree';

export default function Home() {
	return (
		<main>
			<FrontPage />
			<Agenda />
			<hr />
			<Announcements />
			<hr />
			<PageThree />
		</main>
	);
}
