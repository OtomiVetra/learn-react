import logo from "./logo.svg";
import "./App.css";
// тут впринципе везде используется декларативный стиль)
export const App = () => {
	//хочу текущую дату, а язык уже нам ее предоставляет
	const currentDate = new Date().toLocaleDateString();
	return (
		//описываем как выглядит желаемый компонент, тоже декларативный стиль
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
					<p>{currentDate}</p>
				</a>
			</header>
		</div>
	);
};
