var employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];

var employersNames = [];
for (var i = 0; i < employers.length; i++) {
	if (employers[i].length > 0 && employers[i].length != '') {
		employersNames.push(employers[i]);
	}
}
for (var i = 0; i < employersNames.length; i++) {
	employersNames[i] = employersNames[i].toLowerCase().trim();
}

var sponsors = {
	cash: [40000, 5000, 30400, 12000],
	eu: ['SRL', 'PLO', 'J&K'],
	rus: ['RusAuto', 'SBO']
};

function calcCash(own) {
	own = own || 0;
	var everyCash = Array.prototype.slice.call(arguments);
	var total = own;
	for (var i = 0; i < everyCash[1].length; i++) {
		total += +everyCash[1][i];
	}
	return total;
}

var money = calcCash(null, sponsors.cash);

function makeBusiness(owner, director, cash, emp) {
	director = director || 'Victor';
	var sumSponsors = sponsors.eu.concat(sponsors.rus, 'unexpected sponsor');
	console.log('We have a business. Owner: ' + owner + ', director: ' + director + '. Our budget: ' + cash + '. And our employers: ' + emp);
	console.log('And we have a sponsors: ');
	console.log.apply(null, sumSponsors);
	console.log('Note. Be careful with ' + sponsors.eu[0] + ". It's a huge risk.");
}
makeBusiness.apply(null, ['Sam', null, money, employersNames]);

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