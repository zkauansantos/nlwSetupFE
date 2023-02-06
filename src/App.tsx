import { useState } from 'react';
import './assets/styles/global.css';
import Header from './components/Header';
import Modal from './components/Modal';
import SummaryTable from './components/SummaryTable';


export default function App() {
	const [visibleModal, setVisibleModal] = useState(false);

	return (
		<div className='w-screen h-screen flex justify-center items-center'>
			<div className='w-full max-w-5xl px-6 flex flex-col gap-16'>
				<Header onOpenModal={() => setVisibleModal(true)}/>
				<SummaryTable/>
				<Modal visible={visibleModal} onCloseModal={() => setVisibleModal(false)}/>
			</div>
		</div>
	);
}

