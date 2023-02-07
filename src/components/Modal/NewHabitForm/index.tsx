import { Check } from 'phosphor-react';

export default function NewHabitForm () {
	const weekDays = [
		'Domingo',
		'Segunda-Feira',
		'Terça-Feira',
		'Quarta-Feira',
		'Quinta-Feira',
		'Sexta-Feira',
		'Sábado',
	];


	return (
		<form className='w-full flex flex-col mt-6'>
			<label htmlFor="title" className='font-semibold leading-tight'>
        Qual seu compromentimento?
			</label>

			<input type="text"
				id="title"
				placeholder="Ex.: Exercícios, dormir bem, etc..."
				autoFocus
				className='p-4 rounded-lg mt-3 bg-zinc-800 text-white placeholder:text-zinc-400'
			/>

			<label htmlFor="" className='font-semibold leading-tight mt-4'>
      Qual a recorrência
			</label>

			{weekDays.map((day, i) => (
				<label key={`${day} - ${i}`}>
					<input type="checkbox" name="" id="" />
				</label>
			))}


			<button type="submit" className='mt-6 rounded-lg p-4 gap-3 flex items-center justify-center font-semibold bg-green-600 hover:bg-green-400'>
				<Check size={20} weight="bold" />
        Confirmar
			</button>

		</form>
	);
}