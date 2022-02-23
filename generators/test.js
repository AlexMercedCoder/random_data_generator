const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const { faker } = require('@faker-js/faker');

// Create Writer
const csvWriter = createCsvWriter({
    path: '/home/alexmerced/development/scratch/data-generator/out/test.csv',
    header: [
        {id: 'name', title: 'NAME'},
        {id: 'lang', title: 'LANGUAGE'}
    ]
});

// Generate Records
const records = [
    {name: 'Bob',  lang: 'French, English'},
    {name: 'Mary', lang: 'English'}
];
 
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