import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';
import { useState } from 'react';

export const Menu = () => {
	const [isFlipped, setIsFlipped] = useState(false);

	// Dados do cardápio
	const data = {
		bolos: [
			{
				nome: 'Bolo de Chocolate',
				ingredientes: 'Chocolate, Farinha, Açúcar',
				preco: 25.0,
			},
			{
				nome: 'Bolo de Cenoura',
				ingredientes: 'Cenoura, Chocolate, Farinha',
				preco: 20.0,
			},
		],
		brigadeiros: [
			{
				nome: 'Brigadeiro Tradicional',
				ingredientes: 'Chocolate, Leite Condensado',
				preco: 1.5,
			},
			{
				nome: 'Brigadeiro Gourmet',
				ingredientes: 'Chocolate Belga, Creme de Leite',
				preco: 3.0,
			},
		],
	};

	// Estilo do container com flip
	const cardContainerStyle = {
		perspective: '1000px',
		width: { xs: '90%', sm: '80%', md: '300px' },
		height: { xs: '300px', sm: '400px' },
	};

	// Estilo do card
	const cardStyle = {
		position: 'relative',
		width: '100%',
		height: '100%',
		transformStyle: 'preserve-3d',
		transition: 'transform 0.6s',
		transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
	};

	// Estilos gerais de frente e verso do card
	const sideStyle = {
		position: 'absolute',
		width: '100%',
		height: '100%',
		backfaceVisibility: 'hidden',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: '8px',
		boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
		padding: { xs: 2, sm: 3 },
	};

	// Estilos para frente e verso específicos
	const frontStyle = {
		...sideStyle,
		backgroundColor: '#ffd1e0', // Rosa claro
		color: '#4a4a4a',
	};

	const backStyle = {
		...sideStyle,
		backgroundColor: '#c5d6ff', // Azul claro
		color: '#2a2a2a',
		transform: 'rotateY(180deg)',
	};

	return (
		<Box
			sx={{
				width: '100dvw',
				height: '100dvh',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				backgroundColor: '#ffc1d6',
				padding: 2,
			}}
		>
			<Box
				sx={cardContainerStyle}
				onClick={() => setIsFlipped(!isFlipped)}
			>
				<Box sx={cardStyle}>
					{/* Frente - Bolos */}
					<Box sx={frontStyle}>
						<Typography
							variant="h5"
							sx={{
								fontSize: {
									xs: '1.5rem',
									sm: '1.8rem',
									md: '2rem',
								},
								fontWeight: 'bold',
								marginBottom: 2,
								textAlign: 'center',
							}}
						>
							Bolos
						</Typography>
						<List sx={{ width: '100%' }}>
							{data.bolos.map((item, index) => (
								<ListItem key={index} sx={{ padding: 1 }}>
									<ListItemText
										primary={item.nome}
										secondary={`Ingredientes: ${item.ingredientes} | Preço: R$${item.preco.toFixed(2)}`}
										primaryTypographyProps={{
											fontSize: '1rem',
											fontWeight: '500',
										}}
										secondaryTypographyProps={{
											fontSize: '0.875rem',
											color: '#555',
										}}
									/>
								</ListItem>
							))}
						</List>
					</Box>

					{/* Verso - Brigadeiros */}
					<Box sx={backStyle}>
						<Typography
							variant="h5"
							sx={{
								fontSize: {
									xs: '1.5rem',
									sm: '1.8rem',
									md: '2rem',
								},
								fontWeight: 'bold',
								marginBottom: 2,
								textAlign: 'center',
							}}
						>
							Brigadeiros
						</Typography>
						<List sx={{ width: '100%' }}>
							{data.brigadeiros.map((item, index) => (
								<ListItem key={index} sx={{ padding: 1 }}>
									<ListItemText
										primary={item.nome}
										secondary={`Ingredientes: ${item.ingredientes} | Preço: R$${item.preco.toFixed(2)}`}
										primaryTypographyProps={{
											fontSize: '1rem',
											fontWeight: '500',
										}}
										secondaryTypographyProps={{
											fontSize: '0.875rem',
											color: '#555',
										}}
									/>
								</ListItem>
							))}
						</List>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};
