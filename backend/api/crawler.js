const Crawler = require('crawler');
const fs = require('fs')

function cleanFile() {

// Read the file content
fs.readFile('page_product.html', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }

    // Remove content inside HTML tags
    const wordsOnly = data.replace(/<[^>]+>|\{(?:[^{}]|(?:\{[^}]*\}))*\}|\([^)]+\)/g, '').replace(/\s+/g, ' ').trim();



    // Write the cleaned content back to the file
    fs.writeFile('output.txt', wordsOnly, (err) => {
        if (err) {
            console.error('Error writing to file:', err);
            return;
        }
        console.log('Content has been cleaned and saved to output.txt');
    });
});

}

cleanFile()

// const c = new Crawler({
//     maxConnections: 10,
//     // This will be called for each crawled page
//     callback: (error, res, done) => {
//         if (error) {
//             console.log(error);
//         } else {
//             const $ = res.$;
//             // $ is Cheerio by default
//             // Select the element containing the main content
//             const content = $('body').text().trim();
//             console.log(content)
//             // Write content to a file
//             fs.writeFile('page_product.html', content.toString(), (err) => {
//                 if (err) {
//                     console.error('Error writing to file:', err);
//                 } else {
//                     console.log('Content has been written to page_product.html');
//                 }
//             });

//         }
//         done();
//     }
// });

// // Queue just one URL, with default callback
// c.queue('https://www.sprih.com/about');

// // Queue a list of URLs
// // c.queue(['http://www.google.com/','http://www.yahoo.com']);

// // Queue URLs with custom callbacks & parameters
// // c.queue([{
// //     uri: 'https://www.google.com/careers',
// //     jQuery: false,

// //     // The global callback won't be called
// //     callback: (error, res, done) => {
// //         if (error) {
// //             console.log(error);
// //         } else {
// //             console.log('Grabbed', res.body.length, 'bytes');
// //             console.log(res.body)
// //         }
// //         done();
// //     }
// // }]);

// // Queue some HTML code directly without grabbing (mostly for tests)
// c.queue([{
//     html: '<p>This is a <strong>test</strong></p>'
// }]);