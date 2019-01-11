// Номе Task

const data = {
	employers : ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'],
	sponsors : {
		cash: [40000, 5000, 30400, 12000],
		eu: ['SRL', 'PLO', 'J&K'],
		rus: ['RusAuto', 'SBO']
	}
}

const {employers, sponsors : {cash, eu, rus}} = data;

const employersNames = employers.filter( el => {
	return el != ''
}).map(el => el.toLowerCase().trim())

calcCash = (own = 0, ...everyCash) => {
	[everyCash] = everyCash;
	const total = everyCash.reduce((total, current) => {return total + current},  + own);
	return total;
}

const money = calcCash(null, cash);


makeBusiness = (owner, director = 'Victor', cash, emp) => {
	const sumSponsors = [...eu, ...rus, 'unexpected sponsor'];
	console.log(`We have a business. Owner: ${owner}, director: ${director}. Our budget: ${cash}. And our employers: ${emp} \nAnd we have a sponsors: \n${sumSponsors.join(' ')} \nNote. Be careful with ${eu[0]}. It's a huge risk.`);
}
makeBusiness(...['Sam', , money, employersNames]);