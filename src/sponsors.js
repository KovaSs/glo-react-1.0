export const sponsors = {
  cash: [40000, 5000, 30400, 12000],
  eu: ['SRL', 'PLO', 'J&K'],
  rus: ['RusAuto', 'SBO']
}

export const {cash, eu, rus} = sponsors

export const calcCash = (own = 0, ...everyCash) => {
	[everyCash] = everyCash;
	const total = everyCash.reduce((total, current) => {return total + current},  + own);
	return total;
}

export const money = calcCash(null, cash);