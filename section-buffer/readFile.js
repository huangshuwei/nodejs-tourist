var fs = require('fs');

fs.readFile('../test/test1.txt', (err, data) => {

    if (err) {
        console.log(err);

    } else {

        console.log(data.toString())
    }
})