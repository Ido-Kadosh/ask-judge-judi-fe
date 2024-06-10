import { Route, BrowserRouter, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';

function App() {
	return (
		<div>
			<BrowserRouter>
				<main>
					<Routes>
						<Route path="/" element={<HomePage />}></Route>
					</Routes>
				</main>
			</BrowserRouter>
		</div>
	);
}

export default App;
