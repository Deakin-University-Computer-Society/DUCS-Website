import { Button } from "@/components/ui/button";
import { Link, useParams } from "react-router-dom";

const error_data: {
	[key: number]: { description: string };
} = {
	400: {
		description: "Bad Request",
	},
	401: {
		description: "Unauthorized",
	},
	403: {
		description: "Forbidden",
	},
	404: {
		description: "Page Cannot Be Found",
	},
	418: {
		description: "Im a teapot go find a coffee machine",
	},
	500: {
		description: "Internal Server Error",
	},
	502: {
		description: "Bad Gateway",
	},
	503: {
		description: "Service Unavailable",
	},

	// i dont know if we need anymore error codes, but i added the basics.
};

// for direct use when pages just dont exist.
export function Error404() {
	return (
		<ErrorDisplay code={404} description={error_data[404].description} />
	);
}

export function ErrorRouteHandler() {
	// Get the ErrorID param from the URL.
	const { ErrorID } = useParams<{ ErrorID?: string }>();

	if (ErrorID) {
		const errorCode = Number(ErrorID);
		if (error_data[errorCode]) {
			return (
				<ErrorDisplay
					code={errorCode}
					description={error_data[errorCode].description}
				/>
			);
		}
	}

	return (
		<ErrorDisplay
			code={"owo"}
			description={
				"This error code doesn't exist, or we don't let it exist"
			}
		/>
	);
}
// the default component for displaying error pages
export function ErrorDisplay(pass: {
	code: number | string;
	description: string;
}) {
	return (
		<div className="w-fit mx-auto text-center space-y-4 flex flex-col mt-[10vh]">
			<h1 className="text-7xl font-black">Error {pass.code}</h1>
			<p>{pass.description}</p>
			<Link to="/" className="rq-btn-a">
				<Button className="rq-btn-sm">Return Home</Button>
			</Link>
		</div>
	);
}
