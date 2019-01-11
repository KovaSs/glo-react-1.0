
export const 	employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];
export const employersNames = employers.filter( el => {
	return el != ''
}).map(el => el.toLowerCase().trim());

