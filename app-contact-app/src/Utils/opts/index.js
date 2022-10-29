export const utilsOpts = (body, auth) => {
	if (!body) {
		return {
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
				Authorization: `Bearer ${auth}`,
			},
		};
	} else {
		return {
			body: body,
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
				Authorization: `Bearer ${auth}`,
			},
		};
	}
};
