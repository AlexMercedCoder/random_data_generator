const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const { faker } = require('@faker-js/faker');

// Create Writer
const csvWriter = createCsvWriter({
    path: '/home/alexmerced/development/scratch/data-generator/out/sales.csv',
    header: [
        {id: 'id', title: "sale_id"},
        {id: 'purchaseDate', title: 'order_ts'},
        {id: 'custId', title: 'customer_id'},
        {id: 'productId', title: 'product_id'},
        {id: 'productQty', title: 'product_qty'}
    ]
});

// Generate Records
const records = []

// function to generate a random customer id
const randCust = () => Math.floor(Math.random() * 10000) + 1

// function to generate a random product id
const randProd = () => Math.floor(Math.random() * 5000) + 1

for(let i = 1; i < 100001; i++){
    records.push({
        id: i,
        purchaseDate: faker.date.past(1),
        custId: randCust(),
        productId: randProd(),
        productQty: Math.floor(Math.random() * 9) + 1
    })
}
 
// Write CSV
csvWriter.writeRecords(records)       // returns a promise
    .then(() => {
        console.log('...Done');
    });

// This will produce a file path/to/file.csv with following contents:
//
//   NAME,LANGUAGE
//   Bob,"French, English"
//   Mary,English