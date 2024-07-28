import Textfield from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useAppContext } from '@/context/AppContext';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

import type { EditorChildren } from '@/utils/types';
import { Divider } from '@mui/material';

const MusicEditor = ({
	handleChange,
	handleDeleteBlockIndex,
	handleAddBlockIndex,
}: EditorChildren) => {
	const { content } = useAppContext();

	const linkWarning =
		'If there is a link from last week, update or delete it.  Note: the automatic links will not work for hymns 1,000 and up.  A link need to be manually added for those hymns.  Links in the program should be tested each week to ensure they are working as expected.';

	const linkHelperText = 'Optional';
	return (
		<Accordion sx={{ padding: '0 12px 6px 12px' }}>
			<AccordionSummary expandIcon={<ExpandMoreIcon />}>
				<Typography variant="h6">Music</Typography>
			</AccordionSummary>
			<Typography sx={{ mb: 1 }}>Opening Hymn</Typography>
			<Textfield
				name="openingHymn"
				value={content.openingHymn}
				onChange={handleChange}
				fullWidth
				label="Opening Hymn Number"
				sx={{ mb: 2 }}
				type="number"
			/>
			<Textfield
				name="openingHymnTitle"
				value={content.openingHymnTitle}
				onChange={handleChange}
				fullWidth
				label="Opening Hymn Title"
				sx={{ mb: 2 }}
			/>
			<Typography sx={{ mb: 1, fontSize: `${14 / 16}rem`, color: 'blue' }}>
				{linkWarning}
			</Typography>
			<Textfield
				name="openingHymnLink"
				value={content.openingHymnLink}
				onChange={handleChange}
				fullWidth
				label="Opening Hymn Link"
				sx={{ mb: 2 }}
				helperText={linkHelperText}
			/>
			<Divider sx={{ margin: '12px 0' }} />
			<Typography sx={{ mb: 1 }}>Sacrament Hymn</Typography>
			<Textfield
				name="sacramentHymn"
				value={content.sacramentHymn}
				onChange={handleChange}
				fullWidth
				label="Sacrament Hymn Number"
				sx={{ mb: 2 }}
				type="number"
			/>
			<Textfield
				name="sacramentHymnTitle"
				value={content.sacramentHymnTitle}
				onChange={handleChange}
				fullWidth
				label="Sacrament Hymn Title"
				sx={{ mb: 2 }}
			/>
			<Typography sx={{ mb: 1, fontSize: `${14 / 16}rem`, color: 'blue' }}>
				{linkWarning}
			</Typography>
			<Textfield
				name="sacramentHymnLink"
				value={content.sacramentHymnLink}
				onChange={handleChange}
				fullWidth
				label="Sacrament Hymn Link"
				sx={{ mb: 2 }}
				helperText={linkHelperText}
			/>

			<Divider sx={{ margin: '12px 0' }} />

			<Typography sx={{ mb: 1 }}>Intermediate Music</Typography>
			<Textfield
				name="title"
				// @ts-ignore
				value={content.intermediateMusic.title}
				onChange={(e) => handleChange(e, 'intermediateMusic')}
				fullWidth
				label="Title"
				sx={{ mb: 2, background: 'white' }}
			/>
			<Textfield
				name="songTitle"
				// @ts-ignore
				value={content.intermediateMusic.songTitle}
				onChange={(e) => handleChange(e, 'intermediateMusic')}
				fullWidth
				label="Song Title"
				sx={{ mb: 2 }}
			/>
			<Typography sx={{ mb: 1, fontSize: `${14 / 16}rem`, color: 'blue' }}>
				{linkWarning}
			</Typography>
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
						label="Hymn Number"
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
									handleDeleteBlockIndex('intermediateMusicPerformers', index)
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
						handleAddBlockIndex && handleAddBlockIndex('intermediateMusicPerformers')
					}
					sx={{ margin: '12px' }}
				>
					<AddIcon />
					Add Performer
				</Button>
			</div>
			<Divider sx={{ margin: '12px 0' }} />
			<Typography sx={{ mb: 1 }}>Closing Hymn</Typography>
			<Textfield
				name="closingHymn"
				value={content.closingHymn}
				onChange={handleChange}
				fullWidth
				label="Closing Hymn Number"
				sx={{ mb: 2 }}
				type="number"
			/>
			<Textfield
				name="closingHymnTitle"
				value={content.closingHymnTitle}
				onChange={handleChange}
				fullWidth
				label="Closing Hymn Title"
				sx={{ mb: 2 }}
			/>
			<Typography sx={{ mb: 1, fontSize: `${14 / 16}rem`, color: 'blue' }}>
				{linkWarning}
			</Typography>
			<Textfield
				name="closingHymnLink"
				value={content.closingHymnLink}
				onChange={handleChange}
				fullWidth
				label="Closing Hymn Link"
				sx={{ mb: 2 }}
				helperText={linkHelperText}
			/>
		</Accordion>
	);
};

export default MusicEditor;
