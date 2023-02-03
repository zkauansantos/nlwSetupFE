import HabitDay from './HabitDay';

export default function SummaryTable () {

	const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

	return (
		<div className="w-full flex">
			<div className="grid grid-rows-7 grid-flow-row gap-3 border rounded-lg border-zinc-600 mr-1">
				{weekDays.map((weekDay, index) => {
					return (
						<div key={`${weekDay} - ${index}`} className="text-zinc-400 text-xl font-bold h-10 w-10 flex items-center justify-center" >
							{weekDay}
						</div>
					);
				})}
			</div>

			<div className="grid grid-rows-7 grid-flow-col gap-3 " >
				<HabitDay />
			</div>
		</div>
	);
}