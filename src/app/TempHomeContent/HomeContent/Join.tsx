import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

export function Join() {
	return (
		<div className="flex flex-col gap-4">
			<h2 className="text-2xl font-bold">Join Us</h2>

			<div className="flex flex-col gap-14">
				<div className="flex flex-col gap-2">
					<h2 className="text-xl font-bold">Become a Member</h2>
					<p>
						To join the Deakin University Computer Society, you must
						first register though DUSA (Deakin University Students
						Association). Once you have registered, you will gain
						access to member only events, discounts on event, access
						to resume projects and more thats coming soon.
					</p>

					<Link
						to="https://www.dusa.org.au/clubs/computer-society"
						target="_blank"
						rel="noreferrer"
						className="mt-2 w-fit"
					>
						<Button className="flex gap-2 w-40">
							<span className="my-auto">Join with DUSA</span>
							<ExternalLink className="w-4 h-4 my-auto" />
						</Button>
					</Link>
				</div>

				<div className="flex flex-col gap-2">
					<h2 className="text-xl font-bold">
						Join our Discord Server
					</h2>
					<p>
						Stay up to date with DUCS events, projects and more by
						joining our Discord server. We have a wide variety
						channels to help you get the most out of DUCS. Get to
						know like minded students, learn about what DUCS has to
						offer and
					</p>

					<Link
						to="https://discord.gg/rFjtaf3H4m"
						target="_blank"
						rel="noreferrer"
						className="mt-2 w-fit"
					>
						<Button variant="outline" className="flex gap-2 w-40">
							<span className="my-auto">Discord Invite</span>
							<ExternalLink className="w-4 h-4 my-auto" />
						</Button>
					</Link>
				</div>
			</div>
		</div>
	);
}
