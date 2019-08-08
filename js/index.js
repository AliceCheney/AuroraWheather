
$(document).ready(function () {

    setInterval("nowTime()",1000);

    $('.select2').select2({

    });
});
    var clickSelectForm = false;

$('#areaLocalA').click(function () {

    if (clickSelectForm) {

        $('#selectForm').hide()
        clickSelectForm = false;
    }else {

        $('#selectForm').show()
        clickSelectForm = true;

    }
});
function nowTime(){
    //获取月日
    var time=new Date();
    var month=time.getMonth()+1;
    var day=time.getDate();
    //获取时分秒
    var h=time.getHours();
    var m=time.getMinutes();
    //检查是否小于10
    h=check(h);
    m=check(m);
    document.getElementById("nowTime").innerHTML= month+"/"+day+" ，"+h+":"+m;
}
//"当前时间："+year+"年"+month+"月"+day+"日  "+h+":"+m+":"+s;
//时间数字小于10，则在之前加个“0”补位。
function check(i){
    //方法一，用三元运算符
    var num;
    i<10?num="0"+i:num=i;
    return num;
}

