const checkElement = (element) => {
	const selectedElement = document.querySelector(element);
	if (selectedElement) return selectedElement;
	throw new Error('no element selected');
};

export default checkElement;
