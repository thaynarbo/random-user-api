const URL = 'https://randomuser.me/api/';
const getUser = async () => {
	const response = await fetch(URL);
	const data = await response.json();
	// destructure
	const person = data.results[0];
	const {
		phone,
		email,
		picture: { large: image },
		login: { password: pass },
		name: { first: firstName, last: lastName },
		dob: { age },
		location: {
			street: { number, name: streetName },
		},
	} = person;
	return {
		phone,
		email,
		image,
		pass,
		firstName,
		lastName,
		age,
		street: `${number} ${streetName}`,
		name: `${firstName} ${lastName} `,
	};
};

export default getUser;
