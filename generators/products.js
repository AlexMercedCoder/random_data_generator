const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const { faker } = require('@faker-js/faker');

// Create Writer
const csvWriter = createCsvWriter({
    path: '/home/alexmerced/development/scratch/data-generator/out/products.csv',
    header: [
        {id: 'id', title: "ID"},
        {id: 'name', title: 'NAME'}
    ]
});

// Generate Records
const records = []

for(let i = 1; i < 5001; i++){
    records.push({
        id: i,
        name: faker.name.title() + " Certification Textbook"

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