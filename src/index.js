import Sponsors from './sponsors'
import Employers from './employers'


const data = {
	employers : ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'],
	sponsors : {
		cash: [40000, 5000, 30400, 12000],
		eu: ['SRL', 'PLO', 'J&K'],
		rus: ['RusAuto', 'SBO']
	}
}


class makeBusiness {
  constructor(owner, director = 'Victor', cash, emp){
    this.owner = owner
    this.director = director
    this.cash = cash
    this.emp = emp
  }
  
  getInfo() {
    const { owner, director, cash, emp } = this;
    const sumSponsors = [...eu, ...rus, 'unexpected sponsor'];
    console.log(`We have a business. Owner: ${owner}, director: ${director}. Our budget: ${cash}. And our employers: ${emp} \nAnd we have a sponsors: \n${sumSponsors.join(' ')} \nNote. Be careful with ${eu[0]}. It's a huge risk.`);
  }
}
const {employers, sponsors : {cash, eu, rus}} = data;


const employer = new Employers(employers);
const employersNames = employer.getNames();
const money = new Sponsors(null, cash);
const businiess = new makeBusiness(...['Sam', , money.calcCash(), employersNames]);

businiess.getInfo();