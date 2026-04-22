"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function extend(obj1, obj2) {
    // your code here
    for (let key in obj2) {
        if (!(key in obj1)) {
            obj1[key] = obj2[key];
        }
    }
    return obj1;
}
