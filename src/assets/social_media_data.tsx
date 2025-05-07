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

export type SocialMediaLinkType = {
	name: string;
	url: string;
	logo: React.ReactNode;
	new?: boolean;
};

export const social_media_data: SocialMediaLinkType[] = [
	{
		name: "Instagram",
		url: "https://www.instagram.com/deakincomputersociety/",
		logo: <Instagram />,
	},
	{
		name: "Facebook",
		url: "https://www.facebook.com/deakincomputersociety/",
		logo: <Facebook />,
	},
	{
		name: "Discord",
		url: "https://discord.gg/rFjtaf3H4m",
		logo: <Discord />,
	},
	{
		name: "LinkedIn",
		url: "https://au.linkedin.com/company/deakincomputersociety",
		logo: <LinkedIn />,
	},
	{
		name: "Github",
		url: "https://github.com/Deakin-University-Computer-Society",
		logo: <Github />,
	},
	{
		name: "Bluesky",
		url: "https://bsky.app/profile/ducs.club",
		logo: <Bluesky />,
		new: true,
	},
	{
		name: "Threads",
		url: "https://www.threads.net/@deakincomputersociety",
		logo: <Threads />,
		new: true,
	},
	{
		name: "DUSA",
		url: "https://www.dusa.org.au/clubs/computer-society",
		logo: <DUSA />,
	},
];
