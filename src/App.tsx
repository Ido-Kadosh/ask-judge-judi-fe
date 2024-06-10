import { Route, BrowserRouter, Routes } from 'react-router-dom';
import AppHeader from './cmps/AppHeader';
import ChatIndex from './pages/ChatIndex';

function App() {
	return (
		<div>
			<BrowserRouter>
				<AppHeader />
				<main>
					<Routes>
						<Route path="/" element={<ChatIndex />}></Route>
					</Routes>
				</main>
			</BrowserRouter>
		</div>
	);
}

export default App;
