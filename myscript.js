(function() {
    'use strict';

    var txt = "";  
    txt = document.getElementById("source").value;     //获得ID的source的内容
    for (var i=0;i<txt.length;i++)
    {
        if(txt.indexOf("\n"))txt = txt.replace("\n"," ");      //如果内容中遇到换行符就将其替换为空格
    }
    document.getElementById("source").value = txt;     //对source的内容重新赋值
})();

