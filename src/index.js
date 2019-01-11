import { money, eu, rus } from './sponsors'
import { employersNames } from './employers'

class makeBusiness {
  constructor(owner, director = 'Victor', cash, emp){
    this.owner, 
    this.director, 
    this.cash, 
    this.emp
  }

  getInfo() {
    const { owner, director, cash, emp } = this;
    const sumSponsors = [...eu, ...rus, 'unexpected sponsor'];
    console.log(`We have a business. Owner: ${owner}, director: ${director}. Our budget: ${cash}. And our employers: ${emp} \nAnd we have a sponsors: \n${sumSponsors.join(' ')} \nNote. Be careful with ${eu[0]}. It's a huge risk.`);
  }
}

const businiess = new makeBusiness(...['Sam', , money, employersNames]);

businiess.getInfo();