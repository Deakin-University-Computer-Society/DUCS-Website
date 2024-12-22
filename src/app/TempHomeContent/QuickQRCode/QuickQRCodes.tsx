import { QuickHeader } from "../QuickHeader";
import { Footer } from "../Footer";
import { Separator } from "@radix-ui/react-separator";
import { ReactNode } from "react";
import {
	Carousel,
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

const qr_style = cn("w-[90%] aspect-square mx-auto rounded-3xl");

const QRCodes: {
	name: string;
	QRCode: ReactNode;
}[] = [
	{
		name: "DUCS Homepage",
		QRCode: <img src={QRHome} alt="DUCS Logo" className={qr_style} />,
	},
	{
		name: "DUCS Quick Links",
		QRCode: <img src={QRlinks} alt="DUCS Logo" className={qr_style} />,
	},
	{
		name: "DUCS Sign Up",
		QRCode: <img src={QRJoin} alt="DUCS Logo" className={qr_style} />,
	},
];

export function QuickQRCodesPage() {
	return (
		<div className="flex flex-col my-12">
			<QuickHeader title="DUCS QR Codes" />
			<div className="flex mx-auto my-16">
				<Carousel className="w-full max-w-lg">
					<CarouselContent className="-ml-1">
						{QRCodes.map((val, index) => (
							<CarouselItem key={index}>
								<div className="p-1">
									<Card>
										<CardContent className="grid aspect-square w-full">
											<h3 className="text-2xl font-semibold mx-auto  mt-3">
												{val.name}
											</h3>
											{val.QRCode}
										</CardContent>
									</Card>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious />
					<CarouselNext />
				</Carousel>
			</div>

			<div className="max-w-[70ch] w-full px-6 box-content mx-auto gap-16 flex flex-col text-justify">
				<Separator className="w-full h-[1px] bg-secondary" />
				<Footer />
			</div>
		</div>
	);
}
