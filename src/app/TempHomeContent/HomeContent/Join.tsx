import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export function Join() {
	return (
		<div className="flex flex-col gap-4">
			<h2 className="text-2xl font-bold">Join Us</h2>

			<div className="flex flex-col gap-6">
				<div className="flex flex-col gap-2">
					<h2 className="text-xl font-bold">Become a Member</h2>
					<p>
						To join the Deakin University Computer Society, you must
						first register with DUSA (Deakin University Students
						Association). Once you have registered, you get
						discounts to events, access to resume projects and more
						thats coming soon.
					</p>

					<a
						href="https://www.dusa.org.au/clubs/computer-society"
						target="_blank"
						rel="noreferrer"
						className="mt-2"
					>
						<Button variant="outline" className="flex gap-2 w-40">
							<span className="my-auto">Join with DUSA</span>
							<ExternalLink className="w-4 h-4 my-auto" />
						</Button>
					</a>
				</div>

				<div className="flex flex-col gap-2">
					<h2 className="text-xl font-bold">
						Join our Discord Server
					</h2>
					<p>
						Get to know like minded students, learn about what DUCS
						has to offer and learn about fun new events and
						projects.
					</p>

					<a
						href="https://discord.gg/rFjtaf3H4m"
						target="_blank"
						rel="noreferrer"
						className="mt-2"
					>
						<Button variant="outline" className="flex gap-2 w-40">
							<span className="my-auto">Discord Invite</span>
							<ExternalLink className="w-4 h-4 my-auto" />
						</Button>
					</a>
				</div>
			</div>
		</div>
	);
}
