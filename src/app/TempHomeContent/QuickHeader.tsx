import Logo from "@/assets/logo.png";
import { ModeToggle } from "@/components/theme/theme-toggle";
import { Link } from "react-router-dom";

export function QuickHeader({ title }: { title: string }) {
	return (
		<header className="flex flex-col sm:flex-row max-w-[70ch] sm:w-10/12 mx-auto gap-6 sm:gap-12 w-full px-8 ">
			<Link to="/" className="mx-auto sm:mx-0">
				<img
					src={Logo}
					alt="DUCS Logo"
					className="w-[100px] h-[109px] sm:w-[65px] sm:h-[71px]"
				/>
			</Link>

			<h1 className="text-xl font-bold text-center my-auto">{title}</h1>
			<div className="ml-auto my-auto h-fit sm:block hidden">
				<ModeToggle />
			</div>
		</header>
	);
}
