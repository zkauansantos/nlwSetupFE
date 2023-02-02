interface HabitProps {
  completed: number
}

export default function Habit({ completed } : HabitProps) {
	return (
		<div className="bg-zinc-900 w w-10 h-10 text-white rounded m-2 text-center flex items-center justify-center">
			{completed}
		</div>
	);
}