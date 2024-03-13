export const mergecst = (a, b, key = "id") =>
a.filter(elem => !b.find(subElem => subElem[key] === elem[key]))
 .concat(b);