'use strict';

const array = ['apple','strawberry','lemon','orange','banana'];

function transformUpperCase(array) {
    return new Promise((resolve, reject) => {
        const isAllString = array.reduce((prev, curr) => prev && (typeof (curr) === 'string'));
        if(isAllString) {
            resolve(array.map(item => item.toUpperCase()));
        } else {
            reject(Error('Not all items in the array are strings!'));
        }
    })

};

function show(arr) {
    const text = arr.reduce((prev, curr) => prev += `<p>${curr}</p>`);
    document.body.insertAdjacentHTML('afterbegin', text);
}

transformUpperCase(array).then(data => show(data));
transformUpperCase(array).catch(console.log);

//console.log(typeof ('plum'));