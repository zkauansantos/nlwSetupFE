import * as Checkbox from '@radix-ui/react-checkbox';
import dayjs from 'dayjs';
import { Check } from 'phosphor-react';
import { useEffect, useState } from 'react';
import { api } from '../../lib/axios';
import {  HabitsInfo } from '../../types/HabitsInfo';

interface HabitListProps {
  date: Date
}


export default function HabitList ({ date }: HabitListProps) {
	const [habitsInfo, setHabitsInfo] = useState<HabitsInfo>();
	const dateIsPast = dayjs(date).endOf('day').isBefore(new Date());

	useEffect(() => {
		api.get('/day', { params: { date: date.toISOString() } })
			.then((response) => {
				setHabitsInfo(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);


	async function handleToggleCheckChange(habitId: string) {
		await api.patch((`/habits/${habitId}/toggle`));

		const isHabitCompleted = habitsInfo!.completedHabits.includes(habitId);

		let completedHabits: string[] = [];

		if(isHabitCompleted) {
			completedHabits = habitsInfo!.completedHabits.filter(
				(id) => (id !== habitId	),
			);
		}else{
			completedHabits = [...habitsInfo!.completedHabits, habitId];
		}

		setHabitsInfo((prevState) => ({
			...prevState!,
			completedHabits,
		}));
	}


	return (
		<div className="mt-6 flex flex-col gap-3">
			{habitsInfo?.possibleHabits.map((habit) => (
				<Checkbox.Root
					onCheckedChange={() => handleToggleCheckChange(habit.id)}
					key={habit.id}
					className='flex items-center gap-3 group'
					defaultChecked={habitsInfo.completedHabits.includes(habit.id)}
					disabled={dateIsPast}
				>
					<div className='h-8 w-8 rounded-lg flex items-center justify-center bg-zinc-900 border-2 border-zinc-800 group-data-[state=checked]:bg-green-500  group-data-[state=checked]:border-green-900'>
						<Checkbox.Indicator>
							<Check size={20} className='text-white'/>
						</Checkbox.Indicator>
					</div>

					<span className='font-semibold text-xl text-white leading-tight group-data-[state=checked]:line-through  group-data-[state=checked]:text-zinc-400'>
						{habit.title}
					</span>
				</Checkbox.Root>
			))}
		</div>
	);
}