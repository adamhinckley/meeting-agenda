import Textfield from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Autocomplete, { type AutocompleteChangeReason } from '@mui/material/Autocomplete';
import { useAppContext } from '@/context/AppContext';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { hymnsArray } from '@/utils/hymns';
import Switch from '@mui/material/Switch';

import type { EditorChildren } from '@/utils/types';
import { Divider } from '@mui/material';

const MusicEditor = ({
	handleChange,
	handleDeleteBlockIndex,
	handleAddBlockIndex,
}: EditorChildren) => {
	const { content, setContent } = useAppContext();

	const linkWarning =
		'Links are automatically added to the hymn titles except for hymn numbers 1,000 and up.  If you are using one of those hymns, add the link here.';

	type HymnValue = { number: number; title: string };
	const handleHymnChange = (selectedOption: HymnValue | null, key: string) => {
		if (selectedOption) {
			const hymnNumber = { [key]: selectedOption.number.toString() };
			const hymnTitle = { [`${key}Title`]: selectedOption.title };
			setContent({ ...content, ...hymnNumber, ...hymnTitle });
		} else {
			const hymnNumber = { [key]: '' };
			const hymnTitle = { [`${key}Title`]: '' };
			const hymnLink = { [`${key}Link`]: '' };
			setContent({ ...content, ...hymnNumber, ...hymnTitle, ...hymnLink });
		}
	};

	const handleLinkToggle = (key: string, link: string) => {
		if (link) {
			const newContent = { ...content, [key]: '' };
			setContent(newContent);
		} else {
			const newContent = { ...content, [key]: 'https://' };
			setContent(newContent);
		}
	};

	const linkHelperText = 'Optional';

	const LinkWarning = () => (
		<Typography sx={{ mb: 1, mt: 1, fontSize: `${14 / 16}rem`, color: 'blue' }}>
			{linkWarning}
		</Typography>
	);

	return (
		<Accordion sx={{ padding: '0 12px 6px 12px' }}>
			<AccordionSummary expandIcon={<ExpandMoreIcon />}>
				<Typography variant="h6">Music</Typography>
			</AccordionSummary>
			{/* <Typography sx={{ mb: 1 }}>Opening Hymn</Typography> */}
			<Autocomplete
				options={hymnsArray}
				getOptionLabel={(option) => `${option.number} - ${option.title}`}
				renderInput={(params) => <Textfield {...params} label="Opening Hymn" />}
				onChange={(e, value) => handleHymnChange(value, 'openingHymn')}
				value={{
					number: Number(content.openingHymn),
					title: content.openingHymnTitle as string,
				}}
			/>
			<div className="flex items-center">
				<Typography>Using a new opening hymn?</Typography>
				<Switch
					checked={Boolean(content.openingHymnLink)}
					onChange={() =>
						handleLinkToggle('openingHymnLink', content.openingHymnLink as string)
					}
				/>
			</div>
			{content.openingHymnLink && (
				<>
					<LinkWarning />
					<Textfield
						name="openingHymnLink"
						value={content.openingHymnLink}
						onChange={handleChange}
						fullWidth
						label="Opening Hymn Link"
						sx={{ mb: 2 }}
						helperText={linkHelperText}
					/>
				</>
			)}
			<Autocomplete
				options={hymnsArray}
				getOptionLabel={(option) => `${option.number} - ${option.title}`}
				renderInput={(params) => <Textfield {...params} label="Sacrament Hymn" />}
				onChange={(e, value) => handleHymnChange(value, 'sacramentHymn')}
				value={{
					number: Number(content.sacramentHymn),
					title: content.sacramentHymnTitle as string,
				}}
			/>
			<div className="flex items-center">
				<Typography>Using a new sacrament hymn?</Typography>
				<Switch
					checked={Boolean(content.sacramentHymnLink)}
					onChange={() =>
						handleLinkToggle('sacramentHymnLink', content.sacramentHymnLink as string)
					}
				/>
			</div>
			{content.sacramentHymnLink && (
				<>
					<LinkWarning />
					<Textfield
						name="sacramentHymnLink"
						value={content.sacramentHymnLink}
						onChange={handleChange}
						fullWidth
						label="Sacrament Hymn Link"
						sx={{ mb: 2 }}
						helperText={linkHelperText}
					/>
				</>
			)}
			{!content.isTestimonyMeeting && (
				<>
					<Typography sx={{ mb: 1 }}>Intermediate Music</Typography>
					<div className="flex relative justify-between content-center min-w-full items-center">
						<Textfield
							name="title"
							// @ts-ignore
							value={content.intermediateMusic.title}
							onChange={(e) => handleChange(e, 'intermediateMusic')}
							fullWidth
							label="left side (intermediate music etc.)"
							sx={{ mb: 2, width: '49%' }}
						/>
						<Textfield
							name="songTitle"
							// @ts-ignore
							value={content.intermediateMusic.songTitle}
							onChange={(e) => handleChange(e, 'intermediateMusic')}
							fullWidth
							label="center (song title, etc.)"
							sx={{ mb: 2, width: '49%' }}
						/>
					</div>
					<LinkWarning />
					<Textfield
						name="intermediateMusicLink"
						value={content.intermediateMusicLink}
						onChange={handleChange}
						fullWidth
						label="Intermediate Hymn Link"
						sx={{ mb: 2 }}
						helperText={linkHelperText}
					/>
					{Array.isArray(content.intermediateMusicPerformers) &&
						content.intermediateMusicPerformers.length === 0 && (
							<Textfield
								name="hymnNumber"
								// @ts-ignore
								value={content.intermediateMusic.hymnNumber}
								onChange={(e) => handleChange(e, 'intermediateMusic')}
								fullWidth
								label="Hymn Number (right side)"
								sx={{ mb: 2 }}
								type="number"
							/>
						)}
					{Array.isArray(content.intermediateMusicPerformers) &&
						content.intermediateMusicPerformers.map((performer, index) => {
							return (
								<div key={index} className="flex relative">
									<Textfield
										name={`performer ${index + 1}`}
										value={performer}
										onChange={(e) =>
											handleChange(e, 'intermediateMusicPerformers', index)
										}
										fullWidth
										label={`Performer ${index + 1}`}
										sx={{ mb: 2 }}
									/>
									<IconButton
										onClick={() =>
											handleDeleteBlockIndex &&
											handleDeleteBlockIndex(
												'intermediateMusicPerformers',
												index,
											)
										}
										sx={{
											height: '40px',
											margin: '42px 0 0',
											position: 'absolute',
											right: '2px',
											top: '-34px',
										}}
									>
										<DeleteForeverIcon color="error" />
									</IconButton>
								</div>
							);
						})}
					<div className="flex justify-center">
						<Button
							onClick={() =>
								handleAddBlockIndex &&
								handleAddBlockIndex('intermediateMusicPerformers')
							}
							sx={{ margin: '12px' }}
						>
							<AddIcon />
							Add Performer
						</Button>
					</div>
				</>
			)}
			<Autocomplete
				options={hymnsArray}
				getOptionLabel={(option) => `${option.number} - ${option.title}`}
				renderInput={(params) => <Textfield {...params} label="Closing Hymn" />}
				onChange={(e, value) => handleHymnChange(value, 'closingHymn')}
				value={{
					number: Number(content.closingHymn),
					title: content.closingHymnTitle as string,
				}}
			/>
			<div className="flex items-center">
				<Typography>Using a new closing hymn?</Typography>
				<Switch
					checked={Boolean(content.closingHymnLink)}
					onChange={() =>
						handleLinkToggle('closingHymnLink', content.closingHymnLink as string)
					}
				/>
			</div>
			{content.closingHymnLink && (
				<>
					<LinkWarning />
					<Textfield
						name="closingHymnLink"
						value={content.closingHymnLink}
						onChange={handleChange}
						fullWidth
						label="Closing Hymn Link"
						sx={{ mb: 2 }}
						helperText={linkHelperText}
					/>
				</>
			)}
		</Accordion>
	);
};

export default MusicEditor;
