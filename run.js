const request = require('request');
const cheerio = require('cheerio');
request('https://google.com', (error, response, html) => {
  if (!error && response.statusCode === 200) {
    const $ = cheerio.load(html);
    const pageContent = $.text();
    console.log(`Page content: ${pageContent}`);
  } else {
    console.error('Error fetching website content:', error);
  }
});
