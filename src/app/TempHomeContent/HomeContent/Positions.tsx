import { EmailLink } from "./EmailLink";

export function Positions() {
	return (
		<div className="flex flex-col gap-4">
			<h2 className="text-2xl font-bold">Executive Positions</h2>

			<div className="flex gap-14 flex-wrap">
				<div>
					<h3 className="font-bold text-xl">President</h3>
					<p>Oliver Quail</p>
					<EmailLink type="president" />
				</div>

				<div>
					<h3 className="font-bold text-xl">Treasurer</h3>
					<p>Sam Stajnko</p>
					<EmailLink type="treasurer" />
				</div>

				<div>
					<h3 className="font-bold text-xl">Secretary</h3>
					<p>Darcy O'Neill</p>
					<EmailLink type="secretary" />
				</div>
			</div>
		</div>
	);
}
