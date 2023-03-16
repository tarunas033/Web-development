// index.js

//  import the crypto module

const crypto = require('crypto');


const args = process.argv.slice(2);



if (args.length < 1) {

  console.log('Please provide an operation and at least one number.');

  process.exit(1);
}


const operation = args[0];

const nums = args.slice(1).map(Number);

switch (operation) {

  case 'add':
    console.log(nums.reduce((a, b) => a + b));
    break;

  case 'sub':
    console.log(nums.reduce((a, b) => a - b));
    break;

  case 'mult':
    console.log(nums.reduce((a, b) => a * b));
    break;

  case 'divide':
    console.log(nums.reduce((a, b) => a / b));
    break;
  case 'sin':
    console.log(Math.sin(nums[0]));
    break;

  case 'cos':
    console.log(Math.cos(nums[0]));
    break;

  case 'tan':
    console.log(Math.tan(nums[0]));
    break;

  case 'random':
   const length = nums[0];

    if (!length) {
      console.log('Please provide a length for random number generation.');
      process.exit(1);
    }

    const randBytes = crypto.randomBytes(Math.ceil(length / 2));

    const randNum = parseInt(randBytes.toString('hex').slice(0, length), 16);

    console.log(randNum);

    break;

  default:

    console.log("Invalid operation");

    process.exit(1);
}

