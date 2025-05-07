import { Separator } from "@radix-ui/react-separator";
import { QuickHeader } from "./QuickHeader";
import { Footer } from "./Footer";
import { EmailLink } from "./HomeContent/EmailLink";
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableFooter,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

type ExecutiveData = {
	year: {
		start: number;
		end: number;
	};
	month?: {
		start?: number;
		end?: number;
	};
	executives: {
		name: string;
		position: string;
	}[];
};

const executives_data: ExecutiveData[] = [
	{
		year: { start: 2024, end: 2025 },
		month: { start: 9 },
		executives: [
			{ name: "Oliver Quail", position: "President" },
			{ name: "Sam Stajnko", position: "Treasurer" },
			{ name: "Darcy O'Neill", position: "Secretary" },
		],
	},
	{
		year: { start: 2023, end: 2024 },
		month: { end: 9 },
		executives: [
			{ name: "Oliver Quail", position: "President" },
			{ name: "Millar Mcloud", position: "Treasurer" },
			{ name: "Cate Young", position: "Secretary" },
		],
	},
	{
		year: { start: 2022, end: 2023 },
		month: { start: 9 },
		executives: [
			{ name: "Haley Hughes", position: "President" },
			{ name: "Lachlan Ferguson", position: "Treasurer" },
			{ name: "Cate Young", position: "Secretary" },
		],
	},
];

export function ExecutivePositionsPage() {
	return (
		<div className="flex flex-col my-12">
			<QuickHeader title="DUCS Executive Positions" />

			<div className="max-w-[60ch] w-full mx-auto my-12 gap-12 flex flex-col">
				{/* <h1 className="text-4xl font-bold">DUCS Executive Positions</h1> */}

				<p>
					The Deakin University Computer Society is a student-run
					organisation, and as such, we have a small group of
					executives who are responsible for the day-to-day running of
					the society.
				</p>

				<section className="flex flex-col gap-4">
					<h2 className="text-2xl font-bold">
						Current Executives Positions
					</h2>

					<p>
						The current executives are the ones for todays current
						opertations of the society.
					</p>

					<div className="flex gap-3 flex-col flex-wrap">
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
				</section>

				<section className="flex flex-col gap-4">
					<h2 className="text-2xl font-bold">Past Executives</h2>
					<p>
						The Past executives are the ones who have left the
						society but we thank for their contributions. The
						society today would not be what it was without their
						contributions.
					</p>

					<div className="flex flex-col gap-6">
						<Table>
							<TableCaption>
								A list of all executives. 2019-2022 are missing.
							</TableCaption>
							<TableHeader>
								<TableRow>
									<TableHead className="w-[200px]">
										Year
									</TableHead>
									<TableHead>Name</TableHead>
									<TableHead>Position</TableHead>
								</TableRow>
							</TableHeader>
							{executives_data.map((val, i) => {
								return (
									<>
										<TableFooter>
											<TableRow>
												<TableCell colSpan={3}>
													{i} Year: {val.year.start}{" "}
													to {val.year.end}
												</TableCell>
											</TableRow>
										</TableFooter>
										{val.executives.map((e, i) => {
											return (
												<TableBody>
													<TableRow key={i}>
														<TableCell>
															{val.year.start}
														</TableCell>
														<TableCell>
															{e.name}
														</TableCell>
														<TableCell>
															{e.position}
														</TableCell>
													</TableRow>
												</TableBody>
											);
										})}
									</>
								);
							})}
						</Table>
					</div>
				</section>
			</div>

			<div className="max-w-[70ch] w-full px-6 mx-auto gap-16 flex flex-col text-justify">
				<Separator className="w-full h-[1px] bg-secondary" />
				<Footer />
			</div>
		</div>
	);
}
