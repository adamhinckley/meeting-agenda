import { useAppContext } from '@/context/AppContext';

const StandardSecondHalf = () => {
	const { content } = useAppContext();

	if (Object.keys(content).length === 0) {
		return null;
	}

	const {
		isTestimonyMeeting,
		intermediateMusic: intermediateMusicToNarrow,
		blockTwo,
		blockThree,
		intermediateMusicPerformers,
		intermediateMusicLink: savedIntermediateMusicLink,
	} = content;

	const hasMultiplePerformers =
		Array.isArray(intermediateMusicPerformers) && intermediateMusicPerformers.length > 1;

	const intermediateMusic = intermediateMusicToNarrow as {
		title: string;
		hymnNumber: string;
		songTitle: string;
	};

	const intermediateMusicTitleSlug = intermediateMusic?.songTitle
		?.toLowerCase()
		.trim()
		.replace(/[^a-z\s]/g, '')
		.replace(/\s/g, '-');

	const intermediateMusicLink =
		savedIntermediateMusicLink ||
		`https://www.churchofjesuschrist.org/study/manual/hymns/${intermediateMusicTitleSlug}?lang=eng`;

	return (
		<>
			{isTestimonyMeeting ? (
				<p className="block">Bearing of Testimonies</p>
			) : (
				<>
					{Array.isArray(blockTwo) &&
						blockTwo.map((blockToNarrow, index) => {
							const block = blockToNarrow as { left: string; right: string };
							return (
								<div className="agenda-block" key={index}>
									<div className="title-container">
										<p className="agenda-title">{block.left}</p>
										<p className="agenda-content">{block.right}</p>
									</div>
								</div>
							);
						})}
					<div className="agenda-block">
						{hasMultiplePerformers ? (
							<>
								<div className="title-container no-margin">
									<p className="agenda-title">{intermediateMusic.title}</p>
									{intermediateMusicLink ? (
										<a
											href={intermediateMusicLink as string}
											target="_blank"
											rel="noreferrer"
											className="underline text-blue-800"
										>
											<p className="agenda-content">
												{intermediateMusic.songTitle}
											</p>
										</a>
									) : (
										<p className="agenda-content">
											{intermediateMusic.songTitle}
										</p>
									)}
								</div>
								{intermediateMusicPerformers.map((performer, index) => (
									<div className="multiple-performers" key={index}>
										<p className="agenda-content">{performer as string}</p>
									</div>
								))}
							</>
						) : (
							<>
								<div className="title-container">
									<p className="agenda-title">{intermediateMusic.title}</p>
									{intermediateMusicLink ? (
										<a
											href={intermediateMusicLink as string}
											target="_blank"
											rel="noreferrer"
											className="underline text-blue-800"
										>
											<p className="agenda-content">
												{intermediateMusic.hymnNumber}
											</p>
										</a>
									) : (
										<p className="agenda-content">
											{intermediateMusic.hymnNumber}
										</p>
									)}
								</div>
								<p className="agenda-content hymn">{intermediateMusic.songTitle}</p>
							</>
						)}
						{Array.isArray(blockThree) &&
							blockThree.map((blockToNarrow, index) => {
								const block = blockToNarrow as { left: string; right: string };
								return (
									<div className="agenda-block" key={index}>
										<div className="title-container">
											<p className="agenda-title">{block.left}</p>
											<p className="agenda-content">{block.right}</p>
										</div>
									</div>
								);
							})}
					</div>
				</>
			)}
		</>
	);
};

export default StandardSecondHalf;
