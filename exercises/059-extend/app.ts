function extend(obj1: any, obj2: any): any {
  // your code here
  for (let key in obj2) {
    if (!(key in obj1)) {
      obj1[key] = obj2[key]
    }
  }
    return obj1;
}

export {};
