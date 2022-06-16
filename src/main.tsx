import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import Main from "./components/Main";
import { store } from "./redux/store";
import './index.css';
import { CssBaseline } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Countries from "./components/Countries";

const CurrentCountry = React.lazy(() => import("./components/CurrentCountry"));

const container = ReactDOM.createRoot(document.getElementById("root") as HTMLElement );
container.render(
  <React.StrictMode>
		<Provider store={store}>
			<CssBaseline />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Main />} >
						<Route index element={<Countries />} />
						<Route path=":country" element={
							<Suspense fallback={<>loading</>}>
								<CurrentCountry />
							</Suspense>
						} />
					</Route>
				</Routes>
			</BrowserRouter>
		</Provider>
  </React.StrictMode>
);