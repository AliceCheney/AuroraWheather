$(document).ready(function () {
    let time=new Date();
    let month=time.getMonth()+1;
    let day=time.getDate();
    //获取时分秒
    let h=time.getHours();
    let m=time.getMinutes();
   $('#nowTime').text( month+"/"+day+" ，"+h+":"+m);
    $('.select2').select2({
    });
});
let cd = 30;
let isCd = true;

$('#areaLocalDetail').click(function () {
    if ($('#selectForm').css('visibility') === 'visible'){
        $('#selectForm').css('visibility','hidden')
    } else {
        $('#selectForm').css('visibility','visible')
    }
});