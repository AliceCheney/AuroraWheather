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

    $.ajax({
        url:"https://www.tianqiapi.com/api/?version=v1&cityid=101100000",
        type:"get",
        success:function (success) {
            console.log(success.data);
            $('#week1').text(success.data[0].week);
            $('#weatherText1').text(success.data[0].air_tips);
            $('#maxTemperature1').text(success.data[0].tem1);
            $('#minTemperature1').text(success.data[0].tem2);
        //    2
            $('#week2').text(success.data[1].week);
            $('#weatherText2').text(success.data[1].index[1].desc);
            $('#maxTemperature2').text(success.data[1].tem1);
            $('#minTemperature2').text(success.data[1].tem2);
        //    3
            $('#week3').text(success.data[2].week);
            $('#weatherText3').text(success.data[2].index[1].desc);
            $('#maxTemperature3').text(success.data[2].tem1);
            $('#minTemperature3').text(success.data[2].tem2);
        //    4
            $('#week4').text(success.data[3].week);
            $('#weatherText4').text(success.data[3].index[1].desc);
            $('#maxTemperature4').text(success.data[3].tem1);
            $('#minTemperature4').text(success.data[3].tem2);
        },
        error:function (error) {
            console.log(error.statusText)
        }
    })
});
    let weather1 = false;
    let weather2 = false;
    let weather3 = false;
    let weather4 = false;
    let weather5 = false;
    let weather6 = false;
    let weather7 = false;
    $('#clickWeatherDayDetails1').click(function () {
        if (weather1){
            $('.weatherStyle').css('display','none');
            weather1 = false;
        }else {
            $('.weatherStyle').css('display','block');
            weather1 = true;
        }
    });

    $('#clickWeatherDayDetails2').click(function () {
        if (weather2){
            $('#weatherStyle2').css('display','none');
            weather2 = false;
        }else {
            $('#weatherStyle2').css('display','block');
            weather2 = true;
        }
    });
    $('#clickWeatherDayDetails3').click(function () {
        if (weather3){
            $('#weatherStyle3').css('display','none');
            weather3 = false;
        }else {
            $('#weatherStyle3').css('display','block');
            weather3 = true;
        }
    });
$('#clickWeatherDayDetails4').click(function () {
    if (weather4){
        $('#weatherStyle4').css('display','none');
        weather4 = false;
    }else {
        $('#weatherStyle4').css('display','block');
        weather4 = true;
    }
});