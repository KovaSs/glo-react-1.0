
class Employers {
  constructor(emp){
    this.emp = emp
  }
  getNames(){
    let {emp} = this
    emp = emp.filter( el => {
      return el != ''
    }).map(el => el.toLowerCase().trim());
    return emp
  }
}

export default Employers

