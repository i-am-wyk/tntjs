// tnt.js
/* 
	bugduck Organization
	v-0.1
	time:2022
*/
var tnt_data_house_ = {
    test:444,
    log: function (x)
    {

    }
}

function tnt_value(reg)
{
    //此函数用于运算表达式中的值,以下是示例,此函数可能是使用频率最高的函数
    /* 输入 "\"Hello\""
        输出 "Hello"
        输入 "666"
        输出 666
        输入 变量x
        输出 x的值
        输入 变量x == 3
        输出 true或者false
    */
   //正则表达式
    let isstring = /(\"|\').+(\"|\')/;
    let isnumber = /[0-9]+/;
    let isbool = /(true|false)/
    if(isnumber.test(reg)){//数字类型处理 
        return Number(reg)
    }
    else if(isstring.test(reg)){
        //预留
    }
    else if (isbool.test(reg))
    {
        return Boolean(reg)
    }
    else{
        return tnt_data_house_[reg]
    }
}

function boom(codeList)
{
    for(code in codeList)
    {
        // ...arguments.length.toFixed.apply.call.bind.call.bind.call.bind.call.
        if(/([A-z0-9])+ ?= ?.+/.test(code)){//变量赋值语句
            let v = /^(([A-z0-9])+ ?= ?)/.exec(code);
            let name = /[^? =]/.exec(/([A-z0-9])+ ?=/.exec(code))
            tnt_data_house_[name] = v
        }
    }
}

function tnt(code){
    var word="";
	var linecode="";
	var linecodes=[];
	var isinstr=false;
	for(word in code){
		if (isinstr){
			if (word == "\""){
				""
			}
			else{
				if(word == ";"){
					linecodes.unshift(linecode);
				}
				else if(word=="\""){
					isinstr = true
				}
				else{
					linecode = linecode + word
				}
			}
        }
	}
}

//这里处理了html中的v标签 将他们替换成值
function v()
{
    let val = document.getElementsByTagName("v");
    for(va in val){
        let re = tnt_value(va.innerHTML);
        // document.write(val[vnd].innerHTML)
        va.innerHTML = re;
    }
}

function tntag(){
    tnt_codes = document.getElementsByTagName("tnt");
    for(tnt_code in tnt_codes)
    {
        boom(tnt(tnt_code.innerHTML));
    }
}

v();
tntag()