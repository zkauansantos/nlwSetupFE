import * as Popover from '@radix-ui/react-popover';
import clsx from 'clsx';
import ProgressBar from './ProgressBar';

interface HabitDayProps {
  completed: number,
  amount: number
}


export default function HabitDay ({ completed, amount } : HabitDayProps) {
	const percentageStyle = Math.round((completed / amount) * 100);

	return (
		<Popover.Root>
			<Popover.Trigger className={clsx('w-10 h-10 rounded-lg', {
				'bg-zinc-900 border-zinc-800': percentageStyle === 0,
				'bg-violet-900 border-violet-700': percentageStyle > 0 && percentageStyle < 20,
				'bg-violet-800 border-violet-600': percentageStyle >= 20 && percentageStyle < 40,
				'bg-violet-700 border-violet-500': percentageStyle >= 40 && percentageStyle < 60,
				'bg-violet-600 border-violet-400': percentageStyle >= 60 && percentageStyle < 80,
				'bg-violet-500 border-violet-300': percentageStyle >= 80,
			})} />

			<Popover.Portal>
				<Popover.Content className='min-w-[320px] w-full p-6 rounded-2xl bg-zinc-900 flex flex-col'>
					<span className='font-semibold text-zinc-400'>terça-feira</span>
					<span className='mt-1 font-extrabold leading-tight text-3xl'>17/01</span>

					<ProgressBar progress={percentageStyle} />
					<Popover.Arrow className='fill-violet-500' height={8} width={16} />
				</Popover.Content>
			</Popover.Portal>
		</Popover.Root>
	);
}