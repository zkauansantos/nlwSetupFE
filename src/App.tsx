import './assets/styles/global.css';
import Habit from './components/Habit';

export default function App() {

	return (
		<>
			<Habit completed={3}/>
			<Habit completed={3}/>
			<Habit completed={3}/>
			<Habit completed={3}/>
		</>
	);
}

