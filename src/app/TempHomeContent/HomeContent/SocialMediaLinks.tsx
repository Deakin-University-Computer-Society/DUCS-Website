import {
	social_media_data,
	SocialMediaLinkType,
} from "@/assets/social_media_data";
import { NewNotification } from "@/components/custom/newNotification";
import { Link } from "react-router-dom";

export function SocaialMediaLinks() {
	function SocialMediaComponent(value: SocialMediaLinkType) {
		return (
			<Link
				target="_blank"
				rel="noreferrer"
				to={value.url}
				className="flex items-center gap-2 text-sm"
			>
				<div
					style={{ width: 24, height: 24 }}
					className="flex items-center justify-center"
				>
					{value.logo}
				</div>
			</Link>
		);
	}

	return (
		<div className="flex flex-row gap-4 mx-auto flex-wrap">
			{social_media_data.map((value, i) => {
				if (value.new) {
					return (
						<span key={i}>
							<NewNotification width={4}>
								{SocialMediaComponent(value)}
							</NewNotification>
						</span>
					);
				}
				return <span key={i}>{SocialMediaComponent(value)}</span>;
			})}
		</div>
	);
}
