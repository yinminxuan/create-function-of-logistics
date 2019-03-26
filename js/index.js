//把原始数据做个变形，把多个变成有限的几个。需要市和县。对数据变不变形，取决于页面要什么样的数据，要给页面提供合适的数据。

//遍历数据用 forEach ，遍历对象用 for in 。

let f =arr=>{
    let o = {};
    arr.forEach(v=>{
        let key = v.city;
        let value = v.county;
        if(!o[key]){
            o[key] ={}
        }
        if(!o[key][value]){
            o[key][value] = true
        }
    });
    return o;
};

//  调用这个函数 对数据做变形 得到合适的数据
let t = f(database);
// console.table(t);

//  遍历得到的合适的数据 创建元素放到页面上
for(let city in t){
    let county0bj = t[city];
    magic('section','h2','city',city);
    for(let county in county0bj){
        if(county !== 'undefined'){
            magic('section','li','county',county);
        }
    }
}


var mun = 12;
var num;