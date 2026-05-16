function addToBackOfNew(arr: unknown[], element: number): unknown[] {
  // your code here
  let newArr = []
  arr.forEach(e=>{
    newArr.push(e)
  })
  newArr.push(element)
  return newArr;
}

export {};
