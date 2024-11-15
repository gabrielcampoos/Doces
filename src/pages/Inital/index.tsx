import { Box, Typography, CircularProgress } from '@mui/material';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const Initial = () => {
	const navigate = useNavigate();

	useEffect(() => {
		setTimeout(() => {
			navigate('/menu');
		}, 3000);
	}, []);

	return (
		<Box
			sx={{
				width: '100dvw',
				height: '100dvh',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				backgroundColor: '#ffc1d6',
			}}
		>
			<Typography
				variant="h2"
				sx={{
					fontWeight: 'bold',
					color: '#d81b60',
					mb: 3,
				}}
			>
				Rose Doces
			</Typography>

			<Box sx={{ position: 'relative', display: 'inline-flex' }}>
				<CircularProgress
					size={80}
					thickness={4}
					sx={{
						color: '#d81b60',
					}}
				/>
				<Box
					sx={{
						top: 0,
						left: 0,
						bottom: 0,
						right: 0,
						position: 'absolute',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						fontSize: '2rem',
					}}
				>
					🧁
				</Box>
			</Box>
		</Box>
	);
};
