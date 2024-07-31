export const getHymnLink = (hymnNumber: string, hymnTitle: string, closingHymnLink?: string) => {
	if (closingHymnLink) {
		return closingHymnLink;
	}

	const title = hymnTitle
		?.toLowerCase()
		.trim()
		.replace(/[^\w\s]/g, '') // Remove punctuation
		.replace(/\s+/g, '-'); // Replace spaces with hyphens

	console.log('title', title);

	return Number(hymnNumber) < 1000
		? `https://www.churchofjesuschrist.org/study/manual/hymns/${title}?lang=eng`
		: '';
};
