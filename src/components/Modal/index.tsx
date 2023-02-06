import { Check } from 'phosphor-react';
import close from '../../assets/icons/close.svg';

interface ModalProps {
  visible: boolean
  onCloseModal(): void
}

export default function Modal ({ visible, onCloseModal } : ModalProps) {
	const weekDays = [
		'Domingo',
		'Segunda',
		'Terça',
		'Quarta',
		'Quinta',
		'Sexta',
		'Sábado',
	];

	if(!visible) {
		return null;
	}

	return (
		<div className="w-screen h-screen bg-bg-modal absolute top-0 left-0 text-black z-10 flex justify-center items-center">
			<div className="min-w-w-modal min-h-h-modal bg-zinc-900 relative text-white px-10 py-10">
				<button
					className="absolute right-4 top-2 "
					onClick={onCloseModal}
				>
					<img src={close} alt="close"/>
				</button>

				<h1 className='font-bold text-large mb-6'>Criar hábito</h1>

				<header className='mb-4'>
					<strong className='mb-3 block'>Qual seu compromentimento ?</strong>
					<input
						className='bg-zinc-800 placeholder: text-zinc-400 border-2 rounded-lg border-none w-full p-4'
						type="text"
						placeholder='Exercícios, dormir bem, etc...' />
				</header>

				<div>
					<strong>Qual a recorrência?</strong>

					<form>
						{weekDays.map((day, i) => (
							<div
								className='mt-2 flex items-center'
								key={`${day} - ${i}`}
							>
								<label htmlFor={day} className="flex items-center justify-center gap-3 relative">
									<input
										className='appearance-none border-2 border-zinc-800 rounded-md focus:outline-none checked:bg-green-500 p-3 '
										type="checkbox"
										name={day}
										id={day}
									/>
									<Check className='absolute left-1.5' size={18}/>
									{day}
								</label>
							</div>
						))}

						<button
							className='w-full bg-green-600 p-3 mt-4 rounded-lg flex items-center justify-center gap-3'
							type='submit'>
							<Check size={20}/>
              Confirmar
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}