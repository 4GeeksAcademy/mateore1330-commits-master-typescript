"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addToBackOfNew(arr, element) {
    // your code here
    let newArr = [];
    arr.forEach(e => {
        newArr.push(e);
    });
    newArr.push(element);
    return newArr;
}
