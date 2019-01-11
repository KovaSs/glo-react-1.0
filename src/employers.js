
class Employers {
  constructor(employer){
    this.employer
  }
  getNames(){
    this.employer.filter( el => {
      return el != ''
    }).map(el => el.toLowerCase().trim());
  }
}

export default Employers

