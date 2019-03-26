## 文件名与对应的内容
* index.html：首页，显示山西省内有业务的市和县
* logistics_list.html：检索关键字以及显示具体物流信息
* data.js:提供优化后的原始数据和创建元素的函数
* index.js：根据需求过滤数据，并将过滤后的数据显示到页面上
* logistics_list.js：获取需要检索的关键字，并将检索到的数据或原始数据显示到页面上
* rem.js：移动端布局使用的函数

## 函数的创建
目的：将数组 arr 变为对象 o 。

    arr= [
        {city:'A',county:'A-1'},
        {city:'B',county:'B-1'},
        {city:'C',county:'B-2'}
    ];
    
    o ={
        A:{'A-1':true},
        B:{'B-1':true,'B-2':true}
    };

> 写函数需要关注的两个关键点：**参数**、**返回值**。参数一般不宜超过三个，最好是一个。
一、首先确定参数（数组）和返回值（对象）。

    let fn = function(arr){
        let o = {};
        return o;
    }

二、 忘掉循环，给对象o填入想要的值

    let fn = function(arr){
        let o = {};
        o[ "A" ] = [ "A-1" ];
        o[ "B" ] = [ "B-1" ];
        o[ "B" ] = [ "B-2" ];
        return o;
    }

三、 将填入的值，用（已知的值），替换

    let fn = function(arr){
        let o = {};
        o[ arr[0].city ] = [ arr[0].county ];
        o[ arr[1].city ] = [ arr[1].county ];
        o[ arr[2].city ] = [ arr[2].county ];
        return o;
    }

四、 由于arr[1].city == arr[2].city，
并且想要的最终值为"B": ["B-1","B-2"]
因此继续用等价值替换
加入新的方法

    let fn = function(arr){
      let o = {};
      o[ arr[0].city ] = [];
      o[ arr[0].city ].push(arr[0].county);
    
      o[ arr[1].city ] = [];
      o[ arr[1].city ].push(arr[1].county);
    
      o[ arr[2].city ].push(arr[2].county);
    
        return o;
    }

五、 优化代码第一步

    let fn = function(arr){
        let o = {};
    
        let k,v;
    
        k = arr[0].city;
        v = arr[0].county
        o[ k ] = [];
        o[ k ].push(v);
    
        k = arr[1].city;
        v = arr[1].county
        o[ k ] = [];
        o[ k ].push(v);
    
        k = arr[2].city;
        v = arr[2].county
    
        o[ k ].push(v);
    
        return o;
    }

六、 优化代码第二步 加一个判断

    let fn = function(arr){
        let k,v,o = {};
    
        k = arr[0].city;  v = arr[0].county;
        if( !o[ k ] ){ o[ k ] = [] };
        o[ k ].push(v);
    
        k = arr[1].city; v = arr[1].county;
        if( !o[ k ] ){ o[ k ] = [] };
        o[ k ].push(v);
    
        k = arr[2].city; v = arr[2].county;
        if( !o[ k ] ){ o[ k ] = [] };
        o[ k ].push(v);
    
        return o;
    }

七、 优化代码第三步 变为循环语句

    let fn = function(arr){
        let k, v, o = {};
        arr.forEach( item => {
            k = item.city;
            v = item.county;
            if( !o[k] ){
                o[k] = [];
            }
            o[k].push(v);
        })
   
        return o;
    }


   
    var arr = [
        {"city": "A","county": "A-1"},
        {"city": "B","county": "B-1"},
        {"city": "B","county": "B-2"},
        {"city": "A","county": "A-2"},
    ]
   
    let o = fn(arr);

    var o = {
        "A": ["A-1"],
        "B": ["B-1","B-2"]
    }

    for(let key in o){
        console.log(key);
        o[key].forEach( v => console.log(v) );
    }


## 怎么做搜索功能