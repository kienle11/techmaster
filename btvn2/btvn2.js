let products = [
    {
        name: "Iphone 13 Pro Max", // Tên sản phẩm
        price: 3000000, // Giá mỗi sản phẩm
        brand: "Apple", // Thương hiệu
        count: 2, // Số lượng sản phẩm trong giỏ hàng
    },
    {
        name: "Samsung Galaxy Z Fold3",
        price: 41000000,
        brand: "Samsung",
        count: 1,
    },
    {
        name: "IPhone 11",
        price: 15500000,
        brand: "Apple",
        count: 1,
    },
    {
        name: "OPPO Find X3 Pro",
        price: 19500000,
        brand: "OPPO",
        count: 3,
    },
]
// in ra ten cac sp
products.forEach(product =>{
console.log(`${product.name} - ${product.price} - ${product.brand} - ${product.count}`)
})

//tong tien tat ca cac sp 
let total=0;
products.forEach(product=>{
    let totalPrice= product.price*product.count
    total+= totalPrice
})
console.log(total)

//tim cac sp cua apple
function findApple(arr) {
    return arr.filter((arr) => arr.brand === 'Apple');
}
console.log(findApple(products));

//tim cac sp price>20000000
function findPrice(arr) {
    return arr.filter((arr) => arr.price > 20000000);
}
console.log(findPrice(products))

//tim cac sp co chu pro
function findPro(arr) {
    return arr.filter((product) => product.name.toLowerCase().includes('pro'));
}
console.log(findPro(products))

//them 1 sp moi 
let newProduct={
    name: "Google Pixel 6 Pro",
    price: 25000000,
    brand: "Google",
    count: 5,
};
products.push(newProduct);
console.log(products[4])

//xoa cac san pham co thuong hieu samsung
function deleteSamsung(arr){
    return arr.filter(product => product.brand.toLowerCase() !== 'samsung')
}
console.log(deleteSamsung(products))

//sap xep gio hang price giam dan 
 function priceDecrease(arr){
    arr.sort((a, b) => b.price - a.price);
    console.log(arr)
 }
 console.log(priceDecrease(products))

//sap xep tang dan
function priceDecrease(arr){
    arr.sort((a, b) => a.price - b.price);
    console.log(arr)
 }
 console.log(priceDecrease(products))
 
 //lay ra 2 san pham bat ky 
 function pickRandom(arr, a, b) {
    if (a >= 0 && a < arr.length && b >= 0 && b < arr.length) {
        return [arr[a], arr[b]];
    } else {
        return "Chỉ số không hợp lệ";
    }
}
 console.log(pickRandom(products,0,3))
