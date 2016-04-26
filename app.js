const args = require('yargs').argv;
const gm = require('gm');

const text = args.text;

var test = gm('./images/manatee.png')
  .resize(500, 500)
  .fontSize(20)
  .fill('white')
  .drawText(20, 20, text, 'Center')
  .toBuffer('PNG', (err, buffer) => {
    if (err) return console.log('### err: ',err);

    console.log(`<img src="data:image/png;base64,${buffer.toString('base64')}" />`)
  });

