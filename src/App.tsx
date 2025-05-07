import { ThemeProvider } from "./components/theme/theme-provider";
import { PageRoutes } from "./router/PageRoutes";

function App() {
	return (
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			<div className="flex flex-col min-h-[100dvh] w-full">
				<PageRoutes />
			</div>
		</ThemeProvider>
	);
}

export default App;
