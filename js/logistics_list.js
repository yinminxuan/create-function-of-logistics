//搜索、检索
//total的作用是把所有的字符都收集起来，只要其中有符合条件的，就将这条列入返回的数组中，这样可以将电话也加进去

document.querySelector("").oninput = function(e){
    create(search(e.target.value));
};
//我把这个输入框找出来，在输入的过程中，每输入一个字符就调用后面的函数一次。e.target.value是输入的所有字符，
//把它作为关键字传给了search，search返回了一个更小的数组，把这个更小的数组传给了create函数，create函数把这个更小的数组在页面中创建出来
let search = function(k){
    return database.filter(v=>{
        let total = v.name
                  + v.city
                  + v.county
                  + v.address
                  + (v.phone && v.phone.join(" "));
        return total.indexOf(k) != -1;
    })
}
//创建，根据什么创建，根据页面需要的数据（数组），也就是搜索结果或者database来创建
//创建的函数：给我一个数组，我把数组中的内容放到页面上
let create = arr=>{
    document.querySelector("").innerHTML="";
    arr.forEach(v=>{
        if(v.county){
            let content=
                `
                <a href="tel:${v.phone ? v.phone[0] : '114'}"></a>
                <h2>${v.name.concat(v.county)}</h2>
                <p>${v.address ? v.address:'暂无地址'}</p>
                <div class="font">
                <i class="iconfont icon-dianhua1"></i>
                </div>
                `
            magic('ul','li',null,content);

        }
    })
};
create(database);


//效果：每打一个字，下面就创建一次。不能只是加，还得清,在每次调用这个函数的时候，先把要创建于元素的位置清空


















//把原始数据放到页面上
// database.forEach(v => {
//     let content = `
//                     <img src="img/yuan.png" alt="">
//                     <div class="font">
//                         <p>${v.county}</p>
//                         <p class="zero">${v.address}</p>
//                     </div>
//                     <div class="iphone">
//                         <img src="img/ip" alt="" class="iphones">
//                     </div>
//                        `;
//     magic('li', null, content, '.box1 ul')
// });


//给我一个关键字，回你一个数组
// let keyword = prompt();
//
// function search(k){
//   return database.filter(v=>{
//       return (v.name && v.name.indexOf(k) != -1)
//           ||(v.city && v.city.indexOf(k) != -1)
//           ||(v.county && v.county.indexOf(k) != -1)
//           ||(v.address && v.address.indexOf(k) != -1)
//   })
// };
// let arr = search(keyword);
//
// console.table(arr);








//
//
//
//
// document.querySelector('.search').oninput = function(e){
//     create(search(e.target.value));
// }
// //搜索
// let search = function(k){
//     return date.filter( v =>{
//         let total = v.name + v.city + v.county + v.adderss + (
//             v.phone&& v.phone.join());
//         return total.indexOf(k) !=-1;
//     })
// }
// // let g = prompt();
// // console.log(search(g));
// //创建
// let create = arr =>{
//     document.querySelector('.neirong').innerHTML ='';
//     arr.forEach( v =>{
//         if(v.county){
//             let content =  `<div class="kuai">
// 						<a herf=tel:${v.phone?v.phone[0]:'114'}></a>
//     					<img src="img/定位.png" alt="" class="dw">
//     					<h3 class="shang">${v.name}</h3>
//     					<div class="dianhua">
//                         <img src="img/电话.png" alt="">
//                         </div>
//     					<h3 class="xia">${v.address}</h3>
//     				</div>`;
//             magic('div', '.box', content, '.neirong');
//         }})
// }
// create(date);