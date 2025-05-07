import { cn } from "@/lib/utils";

export function NewNotification({
	children,
	className,
	width,
}: {
	children: React.ReactNode;
	className?: string;
	width: number;
}) {
	return (
		<div className={cn("relative group flex", className)}>
			<div
				className={
					"w-3 h-3 dark:bg-orange-500/80 bg-orange-600/80 top-0 absolute rounded-full translate-x-[0.3rem] -translate-y-[0.3rem] text-[0.5rem] group-hover:w-6 flex z-10 transition-all"
				}
				style={{ left: width / 4 + "rem" }}
			>
				<p className="w-0 group-hover:w-full overflow-hidden m-auto h-2 leading-none text-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
					New
				</p>
			</div>
			{children}
		</div>
	);
}
