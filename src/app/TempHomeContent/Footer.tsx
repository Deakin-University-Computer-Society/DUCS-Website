import { Link } from "react-router-dom";

export function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="flex flex-col gap-4 text-sm">
			<p>© {currentYear} Darcy O'Neill</p>
			<p>Logo © {currentYear} Deakin University Computer Society</p>
			<div className="flex flex-row gap-4">
				<Link to="/" className="hover:underline">
					Home
				</Link>
				<Link to="/links" className="hover:underline">
					Quick Links
				</Link>
				<Link to="/qrcodes" className="hover:underline">
					QR Codes
				</Link>
			</div>
		</footer>
	);
}
