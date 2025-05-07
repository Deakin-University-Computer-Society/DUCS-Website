import { Footer } from "../Footer";
import { Separator } from "@radix-ui/react-separator";
import { NewNotification } from "@/components/custom/newNotification";
import { QuickHeader } from "../QuickHeader";
import {
	social_media_data,
	SocialMediaLinkType,
} from "@/assets/social_media_data";
import { Link } from "react-router-dom";

export function QuickLinksPage() {
	function SocialMediaComponent(value: SocialMediaLinkType) {
		return (
			<Link
				target="_blank"
				rel="noreferrer"
				to={value.url}
				className="flex flex-row items-center justify-center gap-6 text-sm rounded-3xl bg-secondary p-4 px-12 w-full h-20 max-w-72"
			>
				{value.new ? (
					<NewNotification className="w-8 h-8 flex m-auto" width={6}>
						<div
							style={{ minWidth: 32, minHeight: 32 }}
							className="flex items-center justify-center"
						>
							{value.logo}
						</div>
					</NewNotification>
				) : (
					<div
						style={{ minWidth: 32, minHeight: 32 }}
						className="flex items-center justify-center"
					>
						{value.logo}
					</div>
				)}
				<p className="text-center my-auto text-base w-full">
					{value.name}
				</p>
			</Link>
		);
	}

	return (
		<div className="flex flex-col my-12 w-full">
			<QuickHeader title="DUCS Quick Links" />
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto my-16">
				{social_media_data.map((l, i) => {
					return <div key={i}>{SocialMediaComponent(l)}</div>;
				})}
			</div>

			<div className="max-w-[70ch] w-full px-6 mx-auto gap-16 flex flex-col text-justify">
				<Separator className="w-full h-[1px] bg-secondary" />
				<Footer />
			</div>
		</div>
	);
}
