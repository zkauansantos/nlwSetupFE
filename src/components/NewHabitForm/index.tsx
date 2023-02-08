import { Check } from 'phosphor-react';
import * as Checkbox from '@radix-ui/react-checkbox';
import { FormEvent, useState } from 'react';
import { api } from '../../lib/axios';

export default function NewHabitForm () {
	const [title, setTitle] = useState<string>('');
	const [weekDays, setWeekDays] = useState<number[]>([]);
	const availableWeekDays = [
		'Domingo',
		'Segunda-Feira',
		'Terça-Feira',
		'Quarta-Feira',
		'Quinta-Feira',
		'Sexta-Feira',
		'Sábado',
	];

	async function handleSubmit (e: FormEvent) {
		e.preventDefault();

		if (!title || weekDays.length === 0) return;

		await api.post('/habits', { title, weekDays });

		alert('Hábito criado com sucesso');
	}

	function handleToggleCheckDay (weekDay: number){
		if(weekDays.includes(weekDay)) {
			setWeekDays(weekDays.filter((day) => day !== weekDay));
			return;
		}

		setWeekDays((prevState) => [...prevState, weekDay]);
	}

	return (
		<form className='w-full flex flex-col mt-6' onSubmit={handleSubmit}>
			<label htmlFor="title" className='font-semibold leading-tight'>
        Qual seu compromentimento?
			</label>

			<input type="text"
				id="title"
				placeholder="Ex.: Exercícios, dormir bem, etc..."
				autoFocus
				className='p-4 rounded-lg mt-3 bg-zinc-800 text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2
        focus: ring-violet-700 focus:ring-offset-2 focus:ring-offset-zinc-800'
				onChange={(e) => setTitle(e.target.value)}
			/>

			<label htmlFor="" className='font-semibold leading-tight mt-4'>
      Qual a recorrência
			</label>

			<div className="flex flex-col gap-2 mt-3 ">
				{availableWeekDays.map((day, index) => (
					<Checkbox.Root
						key={day}
						onCheckedChange={() => handleToggleCheckDay(index)}
						className='flex items-center gap-3 group focus:outline-none'
					>
						<div
							className='
              h-8 w-8 rounded-lg flex items-center justify-center
             bg-zinc-900 border-2 border-zinc-800 group-data-[state=checked]:bg-green-500
             group-data-[state=checked]:border-green-900 transition-colors group-focus:ring-2
             group-focus: ring-violet-700 group-focus:ring-offset-2 group-focus:ring-offset-background'>
							<Checkbox.Indicator className=''>
								<Check size={20} className='text-white'/>
							</Checkbox.Indicator>
						</div>

						<span className='text-white leading-tight'>
							{day}
						</span>
					</Checkbox.Root>
				))}
			</div>

			<button
				type="submit"
				className='mt-6 rounded-lg p-4 gap-3 flex items-center justify-center font-semibold bg-green-600 hover:bg-green-400 transition-colors focus:ring-2
        focus: ring-green-600 focus:ring-offset-2 focus:ring-offset-zinc-800 focus:outline-none'>
				<Check size={20} weight="bold" />
        Confirmar
			</button>
		</form>
	);
}