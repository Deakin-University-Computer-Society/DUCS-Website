import { QuickHeader } from "../QuickHeader";
import { Footer } from "../Footer";
import { Separator } from "@radix-ui/react-separator";
import { ReactNode, useEffect, useState } from "react";
import {
	Carousel,
	CarouselApi,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

import QRHome from "@/assets/QRCodes/qr_ducs_home.png";
import QRlinks from "@/assets/QRCodes/qr_ducs_links.png";
import QRJoin from "@/assets/QRCodes/qr_ducs_join.png";

const qr_style = cn("w-[90%] aspect-square mx-auto dark:invert");

const QRCodes: {
	name: string;
	QRCode: ReactNode;
}[] = [
	{
		name: "DUCS Homepage",
		QRCode: (
			<img
				src={QRHome}
				alt="DUCS Logo"
				width={"auto"}
				className={qr_style}
			/>
		),
	},
	{
		name: "DUCS Quick Links",
		QRCode: (
			<img
				src={QRlinks}
				alt="DUCS Logo"
				width={"auto"}
				className={qr_style}
			/>
		),
	},
	{
		name: "DUCS Sign Up",
		QRCode: (
			<img
				src={QRJoin}
				alt="DUCS Logo"
				width={"auto"}
				className={qr_style}
			/>
		),
	},
];

function QRCodeCarousel() {
	const [api, setApi] = useState<CarouselApi>();
	const [current, setCurrent] = useState(0);
	const [count, setCount] = useState(0);

	useEffect(() => {
		if (!api) {
			return;
		}

		setCount(api.scrollSnapList().length);
		setCurrent(api.selectedScrollSnap() + 1);

		api.on("select", () => {
			setCurrent(api.selectedScrollSnap() + 1);
		});
	}, [api]);

	return (
		<div className="flex flex-col mx-auto my-16 w-full">
			<Carousel className="w-full max-w-lg mx-auto " setApi={setApi}>
				<CarouselContent>
					{QRCodes.map((val, index) => (
						<CarouselItem key={index} className="w-full max-w-full">
							<Card className=" w-full max-w-full">
								<CardContent className="grid gap-4 w-full">
									<h3 className="text-2xl sm:text-3xl font-semibold mx-auto mt-6">
										{val.name}
									</h3>
									<div className="w-full mx-auto">
										{val.QRCode}
									</div>
								</CardContent>
							</Card>
						</CarouselItem>
					))}
				</CarouselContent>

				{/* Hides arrows on small screens (mobile) */}
				<CarouselPrevious className="hidden sm:inline-flex" />
				<CarouselNext className="hidden sm:inline-flex" />
			</Carousel>
			<div className="py-2 text-center text-sm text-muted-foreground">
				{current} of {count}
			</div>
		</div>
	);
}

export function QuickQRCodesPage() {
	return (
		<div className="flex flex-col my-12">
			<QuickHeader title="DUCS QR Codes" />

			<QRCodeCarousel />

			<div className="max-w-[70ch] w-full px-6 mx-auto gap-16 flex flex-col text-justify">
				<Separator className="w-full h-[1px] bg-secondary" />
				<Footer />
			</div>
		</div>
	);
}
