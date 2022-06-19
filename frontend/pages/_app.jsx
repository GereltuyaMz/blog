import App from "next/app";
import Head from "next/head";
import { createContext } from "react";
import { fetchAPI } from "../lib/api";
import { getStrapiMedia } from "../lib/media";
import "../styles/globals.css";
import { Navbar } from "../components/layout/Navbar";

export const GlobalContext = createContext({});

function MyApp({ Component, pageProps }) {
	const { global } = pageProps;
	return (
		<>
			<Head>
				<link
					rel="shortcut icon"
					href={getStrapiMedia(global.attributes.favicon)}
				/>
			</Head>
			<GlobalContext.Provider value={global.attributes}>
				<Navbar />
				<Component {...pageProps} />
			</GlobalContext.Provider>
		</>
	);
}

MyApp.getInitialProps = async (ctx) => {
	const appProps = await App.getInitialProps(ctx);

	const globalRes = await fetchAPI("/global", {
		populate: {
			favicon: "*",
			defaultSeo: {
				populate: "*",
			},
		},
	});

	return { ...appProps, pageProps: { global: globalRes.data } };
};

export default MyApp;
