import { generateDatesFromYearBeginning } from '../../utils/generateRangeDates';
import HabitDay from './HabitDay';

export default function SummaryTable () {
	const summaryDates = generateDatesFromYearBeginning();
	const minimumSummaryDatesSize = 18 * 7;
	const amountOfDaysToFiLL = minimumSummaryDatesSize - summaryDates.length;
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
				{summaryDates.map((date) => (
					<HabitDay key={date.toString()}/>
				))}

				{amountOfDaysToFiLL > 0 && Array.from({ length: amountOfDaysToFiLL }).map(() => (
					<div key={Math.random()} className="w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg opacity-40 cursor-not-allowed"/>
				))}
			</div>
		</div>
	);
}