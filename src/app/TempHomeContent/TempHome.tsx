import { Separator } from "@/components/ui/separator";
import { ModeToggle } from "@/components/theme/theme-toggle";
import { About } from "./HomeContent/About";
import { Sponsors } from "./HomeContent/Sponsors";
import { Join } from "./HomeContent/Join";
import { Contact } from "./HomeContent/Contact";
import { Positions } from "./HomeContent/Positions";
import { Footer } from "./Footer";
import { Header } from "./HomeContent/Header";

export function TempHome() {
	return (
		<div className="w-full mx-auto my-12">
			<div className="max-w-[70ch] px-6 box-content mx-auto gap-16 flex flex-col text-justify">
				<span className="ml-auto w-fit">
					<ModeToggle />
				</span>

				<Header />

				<div className="flex flex-col gap-14">
					<About />
					<Separator />

					<Sponsors />
					<Separator />

					<Join />
					<Separator />

					<Contact />
					<Separator />

					<Positions />
					<Separator />

					<Footer />
				</div>
			</div>
		</div>
	);
}
