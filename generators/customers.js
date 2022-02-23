const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const { faker } = require('@faker-js/faker');

// Create Writer
const csvWriter = createCsvWriter({
    path: '/home/alexmerced/development/scratch/data-generator/out/customers.csv',
    header: [
        {id: 'id', title: "customer_id"},
        {id: 'firstName', title: 'first_name'},
        {id: 'lastName', title: 'last_name'},
        {id: 'streetAddress', title: "street_address"},
        {id: 'city', title:"city"},
        {id: 'state', title:"state"}

    ]
});

// Generate Records
const records = []

for(let i = 1; i < 10001; i++){
    records.push({
        id: i,
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        streetAddress: faker.address.streetAddress(),
        city: faker.address.city(),
        state: faker.address.stateAbbr()

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