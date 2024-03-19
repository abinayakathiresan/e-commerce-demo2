export const mergecst = (a, b, key = "id") =>
a.filter(elem => !b.find(subElem => subElem[key] === elem[key]))
 .concat(b);

 export const dummyProducts = () => {
    let products = [];
for(let i =0; i<15; i++){
    const obj = {
        id: 101+i,
        name: "Seeds, Brown, & Red Rice"+" "+i,
        price: 32,
    };
    products.push(obj);
}
return products;
 }

 export const dummyUsers = () => {
    let users = [];
    for(let i =0; i<15; i++){
        const obj = {
            id: 101+i,
            name: "user"+i,
            email: `user${i}@gmail.com`,
            password: "test123"
        };
        users.push(obj);
    }
    return users;
 }