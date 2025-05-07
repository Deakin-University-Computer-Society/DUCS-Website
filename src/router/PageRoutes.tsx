import { ExecutivePositionsPage } from "@/app/TempHomeContent/ExecutivePositionsPage";
import { QuickLinksPage } from "@/app/TempHomeContent/QuickLinks/QuickLinksPage";
import { QuickQRCodesPage } from "@/app/TempHomeContent/QuickQRCode/QuickQRCodes";
import { TempHome } from "@/app/TempHomeContent/TempHome";
// import { NavBar } from "@/components/custom/nav_bar";
import { Error404, ErrorRouteHandler } from "@/error/error_pages";

import { BrowserRouter, Route, Routes } from "react-router-dom";

export function PageRoutes() {
	return (
		<BrowserRouter>
			{/* <NavBar /> */}
			<Routes>
				{/* The 404 page is the default page is a page isnt found */}
				<Route path="*" element={<Error404 />}></Route>
				{/* The error path is for additional error codes direct access */}
				<Route path="/error/:ErrorID" element={<ErrorRouteHandler />} />
				{/* <Route path="/projects/">
                    <Route path="*" element={<Error404 />}></Route>
                    <Route path="ducs-app" element={<ProjectDUCSApp />} />
                    <Route path="ducs-website" element={<ProjectDUCSWebsite />} />
                </Route>
                <Route path="/" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/join" element={<Join />}></Route> */}

				<Route path="/" element={<TempHome />}></Route>
				<Route path="/links" element={<QuickLinksPage />}></Route>
				<Route path="/qrcodes" element={<QuickQRCodesPage />}></Route>
				<Route
					path="/executives"
					element={<ExecutivePositionsPage />}
				></Route>
			</Routes>
		</BrowserRouter>
	);
}
