// export const {cash, eu, rus} = sponsors

class Sponsors {
  constructor(own = 0, ...everyCash){
    this.own = own
    this.everyCash = everyCash
  }
  calcCash() {
    let {everyCash, own} = this;
    [everyCash] = everyCash;
    let total = everyCash.reduce((total, current) => {return total + current},  + own);
    return total;
  }
  getMoney(cash) {
    return calcCash(null, cash);
  }
}

export default Sponsors



// export const money = calcCash(null, cash);