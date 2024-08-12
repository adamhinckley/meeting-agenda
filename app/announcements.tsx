import { useAppContext } from '@/context/AppContext';
import { Divider } from '@mui/material';
import type { Announcement, Lesson } from '@/utils/defaultContent';

const Announcements = () => {
	const { content } = useAppContext();

	if (Object.keys(content).length === 0) {
		return null;
	}

	const { announcementsAndLessons } = content;
	if (!Array.isArray(announcementsAndLessons)) {
		return null;
	}
	if (!announcementsAndLessons.length) {
		return null;
	}

	return (
		<div className="mx-4">
			{announcementsAndLessons.map((itemToNarrow, index) => {
				const item = itemToNarrow as Lesson | Announcement;

				if (item.type === 'lesson' && item.lessons?.length) {
					return (
						<div key={index}>
							<h3 className="text-base font-semibold text-center">{item.title}</h3>
							<ul>
								{item.lessons?.map((lesson, index) =>
									lesson.link ? (
										<a
											href={lesson.link}
											key={index}
											className="underline  text-blue-800"
										>
											<li key={index}>{lesson.text}</li>
										</a>
									) : (
										<li key={index} style={{ wordWrap: 'break-word' }}>
											{lesson.text}
										</li>
									),
								)}
							</ul>
							<Divider className="my-4" />
						</div>
					);
				}
				if (item.type === 'announcement' && item.text?.length) {
					return (
						<div key={index}>
							<h3 className="text-base font-semibold text-center">{item.title}</h3>
							<ul>
								{item.text?.map((text: string, index: number) => (
									<li key={index} style={{ wordWrap: 'break-word' }}>
										{text}
									</li>
								))}
							</ul>
							<Divider className="my-4" />
						</div>
					);
				}
			})}
			<h3 className="text-base font-semibold text-center">Family History Corner</h3>
			<ul>
				<li>
					Our readings in Come, Follow Me this week are in a time of war between the
					Nephites and the Lamanites. What do you know of your ancestors and relatives who
					may have fought to preserve freedoms and way of life? What discovery clues do
					their records contain?{' '}
				</li>
				<li>
					While working with my mother on our own family history, it was the military
					records of a family member which allowed us to verify and confirm several pieces
					of his family's story. The records verified his various residences, confirmed
					that he was single throughout his life, and mentioned his next of kin so that we
					could clearly see that it was indeed our family member and not another soldier
					with the same name. (Lani Jackson)
				</li>
				<li>
					The{' '}
					<a
						href="https://www.familysearch.org/en/wiki/United_States_Military_Records"
						target="_blank"
						className="underline  text-blue-800"
					>
						FamilySearch wiki
					</a>{' '}
					is one source that can help you research these records
				</li>
			</ul>
		</div>
	);
};

export default Announcements;
