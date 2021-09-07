import getUser from './utils/fetchUser.js';
import displayUser from './utils/displayUsers.js';
import checkElement from './utils/checkElement.js';
const btn = checkElement('.btn');
const showUser = async () => {
	// get user from api
	const person = await getUser();
	displayUser(person);
};

window.addEventListener('DOMContentLoaded', showUser);
btn.addEventListener('click', showUser);
