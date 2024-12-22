const emails = {
	default: "deakincomputersociety@gmail.com",
	general: "deakincomputersociety@gmail.com",
	president: "president@ducs.club",
	treasurer: "treasurer@ducs.club",
	secretary: "secretary@ducs.club",
};

export function EmailLink({
	type = "default",
}: {
	type?: "default" | "general" | "president" | "treasurer" | "secretary";
}) {
	return (
		<a href={`mailto:${emails[type]}`} className="hover:underline">
			{emails[type]}
		</a>
	);
}
