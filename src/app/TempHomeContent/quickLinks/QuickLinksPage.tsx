import { DUSA } from "@/assets/dusa-icon";
import {
	Bluesky,
	Discord,
	Facebook,
	Github,
	Instagram,
	LinkedIn,
	Threads,
} from "@/assets/svgl-icons";
import { cn } from "@/lib/utils";
import { Footer } from "../Footer";
import { Separator } from "@radix-ui/react-separator";
import { NewNotification } from "@/components/custom/newNotification";
import { QuickHeader } from "../QuickHeader";

const icon_size = cn("w-8 h-8 my-auto");

const links: {
	name: string;
	link: string;
	icon: React.ReactNode;
	new?: boolean;
}[] = [
	{
		name: "Instagram",
		link: "https://www.instagram.com/deakincomputersociety/",
		icon: <Instagram className={icon_size} />,
	},
	{
		name: "Facebook",
		link: "https://www.facebook.com/deakincomputersociety/",
		icon: <Facebook className={icon_size} />,
	},
	{
		name: "Discord",
		link: "https://discord.gg/rFjtaf3H4m",
		icon: <Discord className={icon_size} />,
	},
	{
		name: "LinkedIn",
		link: "https://au.linkedin.com/company/deakincomputersociety",
		icon: <LinkedIn className={icon_size} />,
	},
	{
		name: "Github Organisation",
		link: "https://github.com/Deakin-University-Computer-Society",
		icon: <Github className={icon_size} />,
	},
	{
		name: "Bluesky",
		link: "https://bsky.app/profile/ducs.club",
		icon: <Bluesky className={icon_size} />,
		new: true,
	},
	{
		name: "Threads",
		link: "https://www.threads.net/@deakincomputersociety",
		icon: <Threads className={icon_size} />,
		new: true,
	},
	{
		name: "DUSA",
		link: "https://www.dusa.org.au/clubs/computer-society",
		icon: <DUSA className={icon_size} />,
	},
];

export function QuickLinksPage() {
	return (
		<div className="flex flex-col my-12">
			<QuickHeader title="DUCS Quick Links" />
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto my-16">
				{links.map((l, i) => {
					return (
						<a
							key={i}
							target="_blank"
							rel="noreferrer"
							href={l.link}
							className="bg-secondary rounded-[1.6rem] p-4 flex items-center justify-center w-72 h-20"
						>
							<div className="w-full flex flex-row gap-6 h-full mx-8">
								{l.new ? (
									<div className="w-8 h-full flex">
										<NewNotification
											className="w-8 h-8 flex m-auto"
											width={6}
										>
											{l.icon}
										</NewNotification>
									</div>
								) : (
									<div className="w-8 h-full flex">
										{l.icon}
									</div>
								)}

								<p className="w-full text-center my-auto">
									{l.name}
								</p>
							</div>
						</a>
					);
				})}
			</div>

			<div className="max-w-[70ch] w-full px-6 box-content mx-auto gap-16 flex flex-col text-justify">
				<Separator className="w-full h-[1px] bg-secondary" />
				<Footer />
			</div>
		</div>
	);
}
