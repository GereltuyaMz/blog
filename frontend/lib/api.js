import qs from "qs";

export function getStrapiURL(path = "") {
	return `${
		process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"
	}${path}`;
}
export async function fetchAPI(path, urlParamsObject = {}, options = {}) {
  
	const mergedOptions = {
		header: {
			"Content-Type": "application/json",
		},
		...options,
	};

	//Build request url
	const queryString = qs.stringify(urlParamsObject); // URL params object, will be stringified
	const requestUrl = `${getStrapiURL(
		`/api${path}${queryString ? `?${queryString}` : ""}`
	)}`;

	// Trigger API call
	const response = await fetch(requestUrl, mergedOptions);

	// Handle response
	if (!response.ok) {
		console.error(response.statusText);
		throw new Error(`An error occured please try again`);
	}
	const data = await response.json();
	return data;
}
