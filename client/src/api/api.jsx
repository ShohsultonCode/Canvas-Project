let baseUrl = "http://localhost:4000";

export const api = {

	getAllTextToImage: async () => {
		try {
			const response = await fetch(`${baseUrl}`);
			const result = await response.json();
			return result;
		}
		catch (error) {
			return 'error';
		}
	},
	gererateTextToImage: async (params) => {
		const response = await fetch(`${baseUrl}`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(params),
		});
		const result = await response.json();
		return result;
	},
	addShortUrl: async (params) => {
		const response = await fetch(`${baseUrl}`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(params),
		});
		const result = await response.json();
		return result;
	},
	addQRCode: async (params) => {
		const response = await fetch(`${baseUrl}/generateqr`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(params),
		});
		const result = await response.json();
		return result;
	},
	getHistory: async () => {
		const response = await fetch(`${baseUrl}`);
		const result = await response.json();
		return result;
	},
	clearHistory: () => {
		const response = fetch(`${baseUrl}`, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
			},
		});
		return response;
	}
};
