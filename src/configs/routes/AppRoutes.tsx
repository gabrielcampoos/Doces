import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Initial } from '../../pages/Inital';
import { Menu } from '../../pages/Menu';

const AppRoutes: React.FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Initial />} />
				<Route path="/menu" element={<Menu />} />
			</Routes>
		</BrowserRouter>
	);
};

export default AppRoutes;
