'use strict';

const array = ['apple','strawberry','lemon','orange','banana'];

//-------------------------Task 1---------------------------------

const convertToUpper = array => array.map(item => item.toUpperCase());

const sortArray = array => array.sort();

function transformStrings(array,calledFunction) {
    return new Promise((resolve, reject) => {
        const isAllString = array.every(item => typeof(item) === 'string');
        console.log(isAllString);
        if(isAllString) {
            try {
                resolve(calledFunction(array));
            } catch {
                console.error('Something went wrong with sorting words.');
            }
        } else {
            reject(Error('Not all items in the array are strings!'));
        }
    })
    
}

function show(arr,task) {
    document.body.insertAdjacentHTML('beforeend', `<h3>Task ${task}</h3>`);
    const text = arr.reduce((prev, curr) => prev += `<p>${curr}</p>`);
    document.body.insertAdjacentHTML('beforeend', text);
}

transformStrings(array,convertToUpper).then(data => show(data,1));
//transformStrings(array).catch(console.log);

//-------------------------Task 2---------------------------------


transformStrings(array,sortArray).then(data => show(data,2));
//transformStrings(array).catch(console.log);

