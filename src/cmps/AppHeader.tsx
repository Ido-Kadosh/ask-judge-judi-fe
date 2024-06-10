import Logo from '../assets/logo.jpg';

const AppHeader = () => {
	return (
		<header className="h-14 bg-[#003474] w-full p-2">
			<img src={Logo} alt="logo" className="h-full" />
		</header>
	);
};

export default AppHeader;
