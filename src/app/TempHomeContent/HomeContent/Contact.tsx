import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@radix-ui/react-collapsible";
import { ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { EmailLink } from "./EmailLink";

export function Contact() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="flex flex-col gap-4">
			<h2 className="text-2xl font-bold">Contact Us</h2>
			<p>
				For any general enquiries, please contact us our gmail below. If
				you have any specific enquiries, please contact the position
				holder directly by finding the correct email in "more".
			</p>

			<div className="gap-4 flex flex-col border-l-[3px] pl-4 border-border mt-2">
				<div className="grid">
					<p className="font-bold">General:</p>
					<EmailLink />
				</div>
				<Collapsible open={isOpen} onOpenChange={setIsOpen}>
					<CollapsibleTrigger className="flex gap-2 items-center font-bold">
						More
						<motion.div
							animate={{ rotate: isOpen ? 90 : 0 }}
							transition={{ duration: 0.2 }}
						>
							<ChevronRight size="1rem" className="my-auto" />
						</motion.div>
					</CollapsibleTrigger>

					<AnimatePresence>
						{isOpen && (
							<motion.div
								key="collapsible-content"
								initial={{ height: 0, opacity: 0 }}
								animate={{ height: "auto", opacity: 1 }}
								exit={{ height: 0, opacity: 0 }}
								transition={{
									duration: 0.3,
									ease: "easeInOut",
								}}
							>
								<CollapsibleContent>
									<ul className="list-disc list-inside flex flex-col gap-2 my-1">
										{[
											"president",
											"treasurer",
											"secretary",
										].map((type, index) => (
											<motion.li
												key={index}
												initial={{ opacity: 0, x: -20 }}
												animate={{ opacity: 1, x: 0 }}
												exit={{ opacity: 0, x: -20 }}
												transition={{
													delay: 0.1 * index + 0.1,
												}}
											>
												<EmailLink
													type={
														type as
															| "president"
															| "treasurer"
															| "secretary"
													}
												/>
											</motion.li>
										))}
									</ul>
								</CollapsibleContent>
							</motion.div>
						)}
					</AnimatePresence>
				</Collapsible>
			</div>
		</div>
	);
}
