import { money } from './src/sponsors'
import { employersNames } from './src/employers'

class business {
  constructor(){

  }
  makeBusiness = (owner, director = 'Victor', cash, emp) => {
    const sumSponsors = [...eu, ...rus, 'unexpected sponsor'];
    console.log(`We have a business. Owner: ${owner}, director: ${director}. Our budget: ${cash}. And our employers: ${emp} \nAnd we have a sponsors: \n${sumSponsors.join(' ')} \nNote. Be careful with ${eu[0]}. It's a huge risk.`);
  }
}

makeBusiness(...['Sam', , money, employersNames]);