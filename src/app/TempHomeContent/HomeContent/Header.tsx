import { SocaialMediaLinks } from "./SocialMediaLinks";
import Logo from "@/assets/logo.png";

export function Header() {
	return (
		<header className="flex flex-col gap-8 ">
			<img
				src={Logo}
				alt="DUCS Logo"
				className="w-[160px] h-[176px] mx-auto"
			/>

			<h1 className="text-3xl font-bold text-center">
				Deakin University Computer Society
			</h1>

			<SocaialMediaLinks />
		</header>
	);
}
