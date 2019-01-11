// export const {cash, eu, rus} = sponsors

class Sponsors {
  constructor(sponsors, own = 0, ...everyCash){
    this.sponsors
    this.own 
    this.everyCash
  }
  calcCash () {
    const {everyCash, own} = this
    [everyCash] = everyCash;
    const total = everyCash.reduce((total, current) => {return total + current},  + own);
    return total;
  }
}

export default Sponsors



// export const money = calcCash(null, cash);