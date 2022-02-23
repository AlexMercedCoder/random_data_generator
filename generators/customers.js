const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const { faker } = require('@faker-js/faker');

// Create Writer
const csvWriter = createCsvWriter({
    path: '/home/alexmerced/development/scratch/data-generator/out/customers.csv',
    header: [
        {id: 'id', title: "ID"},
        {id: 'name', title: 'NAME'},
        {id: 'birthdate', title: 'BIRTH_DATE'},
        {id: 'phone', title: "PHONE"},
        {id: 'favColor', title:"FAVORITE_COLOR"}

    ]
});

// Generate Records
const records = []

for(let i = 1; i < 10001; i++){
    records.push({
        id: i,
        name: `${faker.name.firstName()} ${faker.name.lastName()}`,
        birthdate: faker.date.past(20,'2000-01-01T00:00:00.000Z'),
        phone: faker.phone.phoneNumber(),
        favColor: faker.vehicle.color()

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