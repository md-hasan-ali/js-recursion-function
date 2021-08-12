// const products = [
//     { name: 'asus laptop s3', price: 20500 },
//     { name: 'walton mobile', price: 5000 },
//     { name: 'i phone', price: 15000 },
//     { name: 'watch m3', price: 2000 },
//     { name: 'vivo mobile', price: 20000 }
// ];

// function seachProducts(products , text) {
//     const match = [];
//     for (const product of products) {
//         const name = product.name;
//         if(name.indexOf(text) != -1){
//             match.push(product);
//         }
//     }
//     return match;
// }
// const matched = seachProducts(products,'mobile');
// console.log(matched);

const products = [
    { name: 'samsung s3 phone', price: 20500 },
    { name: 'vivo s3 phone', price: 2500 },
    { name: 'hp laptop', price: 32000 },
    { name: 'dell super first laptop', price: 32000 },
    { name: 'asus laptop', price: 42000 },
    { name: 'digital watch', price: 5000 },
    { name: 'bangla watch', price: 2000 },
    { name: 'tisue', price: 500 },
    { name: 'egg', price: 200 },
];

for(let i=0;i<products.length;i++) {
    const element = products[i];
    if(element.price < 10000) {
        continue;
    }
    console.log(element)
}

// function searchProducts(products) {
//     for (const product of products) {
//         if(product.price < 10000){
//           continue;
//         }
//     }
//     console.log(product);
// }
// const matched = searchProducts(products);
// console.log(matched);
