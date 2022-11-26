const mongoose = require('mongoose');

async function main() {
    await mongoose.connect('mongodb+srv://jawad:mongo%40db@cluster0.ldnr5ju.mongodb.net/?retryWrites=true&w=majority').then(() => {
      console.log('Connected to Database');
    });
}

main().catch(err => console.log(err));