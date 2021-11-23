const faker = require('faker')

/**
 * Stock class
 * @param {*} price 
 * @param {*} date 
 */
const Stock = class {
    constructor(price, date) {
        this.price = price
        this.date = date
    }
    price(date) {
        return this.stocks.filter(stock => stock.date === date)
    }
}

/**
 * Protfolio class
 * @param {*} stocks 
 */
const Portfolio = class {
    constructor(stocks) {
        this.stocks = stocks
    }
    profit(date1, date2) {
        return this.stocks.filter(stock => stock.date > date1 && stock.date < date2)
    }
    profitBonusTrack(date1, date2) {
        return this.stocks.filter(stock => stock.date > date1 && stock.date < date2).reduce((r,stock) => {
            r[stock.date.getFullYear()] = r[stock.date.getFullYear()] || [];
            r[stock.date.getFullYear()].push(stock);
            return r;
        }, Object.create(null))
    }
}

/* Datos de Prueba */
let stocks = new Array
for (let index = 0; index < 100; index++) 
    stocks.push(new Stock(faker.datatype.number(), faker.date.past(10)))
let portfolio = new Portfolio(stocks)
let date1 = faker.date.past(5)
let date2 = faker.date.soon()

console.log("stocks => ", stocks)
console.log("portfolio => ", portfolio)
console.log("date1 => ", date1)
console.log("date2 => ", date2)
console.log("portfolio.profit => ", portfolio.profit(date1, date2))
console.log("portfolio.profitBonusTrack => ", portfolio.profitBonusTrack(date1, date2))