// complete the function such that it returns true if an object or any of its
// subobjects have any falsy values and false otherwise
// HINT: recursion may help here

const hasFalsyValue = obj => {
  for (key in obj)
  {
    if (typeof obj[key] == "object")
    {
      hasFalsyValue(obj[key]);
    }
    else
    {
      if (obj[key] == false)
      {
        return true;
      }
    }
  }
  return false;
};

const test = {
  a: 0,
  b: null,
  c:
  {
    lol: 0
  }
}

console.log(hasFalsyValue(test));