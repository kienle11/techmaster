const para = document.getElementById('text')
console.log(para)
para.style.color='#777'
para.style.fontSize='2rem'
para.innerHTML='Tôi có thể làm <em> bất cứ điều gì </em> tôi muốn với JavaScript.'

//Cau 2 
const ul1 = para.nextElementSibling;
const li = ul1.querySelectorAll('li')
console.log(li)
Array.from(li).map(ele => ele.style.color='blue')
// Thêm 3 thẻ <li> mới vào cuối danh sách
const list = document.getElementById('list');

for (let i = 8; i <= 10; i++) {
    const newItem = document.createElement('li');
    newItem.textContent = `Item ${i}`;
    list.appendChild(newItem);
} 
// Sửa nội dung của thẻ <li> đầu tiên thành màu đỏ
const firstItem = document.querySelector('#list li:nth-child(1)');
firstItem.style.color = 'red';

// Sửa background của thẻ <li> thứ 3 thành màu xanh
const thirdItem = document.querySelector('#list li:nth-child(3)');
thirdItem.style.backgroundColor = 'blue';

// Xóa thẻ <li> thứ 4
const fourthItem = document.querySelector('#list li:nth-child(4)');
fourthItem.remove();

// Thêm thẻ <li> mới để thay thế thẻ <li> thứ 4 đã bị xóa
const replaceItem = document.createElement('li');
replaceItem.textContent = 'Replace Item';
list.insertBefore(replaceItem, list.children[3]);

