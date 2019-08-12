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

    let ct = 30;
    let fc = ct*9/5+32;

    $('#temperature').text(ct+'°');

    $('#areaLocalDetail').click(function () {
        if ($('#selectForm').css('visibility') === 'visible'){
            $('#selectForm').css('visibility','hidden')
        } else {
            $('#selectForm').css('visibility','visible')
        }
    });

    let isC = true;
    $('#clickBottom').click(function () {
        if (isC){
            $('#clickTop').text('F')
            $('#clickBottom').text('C')
            $('#temperature').text(fc+'°')
            isC = false;
        }else {
            $('#clickTop').text('C')
            $('#clickBottom').text('F')
            // f=c×9/5+32
            $('#temperature').text(ct+'°')
            isC = true;
        }
    });
});