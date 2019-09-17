let isCc = 0;
let isFf = 0;
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
    let isC = true;
    $('#clickBottom').click(function () {
        if (isC){
            $('#clickTop').text('F')
            $('#clickBottom').text('C')
            $('#temperature').text(isFf+"°");
            isC = false;
        }else {
            $('#clickTop').text('C')
            $('#clickBottom').text('F')
            // f=c×9/5+32
            $('#temperature').text(isCc+"°");
            // $('#temperature').text(isCc.replace(''));
            isC = true;
        }
    });

    $.ajax({
        url:"https://www.tianqiapi.com/api/?version=v1&cityid=101100000,&appid=[14567854]&appsecret=[e1h73Axv]",
        type:"get",
        // async:false,
        success:function (success) {
            console.log(success.data[0]);
            console.log(success.data);
            isCc = parseInt(success.data[0].tem1);
            isFf = parseInt(success.data[0].tem1)*9/5+32;
            $('#temperature').text(parseInt(success.data[0].tem1)+"°");

            $('#topMaxWeather').text(success.data[0].tem1);

            $('#topMinWeather').text(success.data[0].tem2);

            for ( let i in  success.data){
                $('#weatherDay').append(
                    '<span onclick="clickWeatherDayDetails(this)" style="cursor: pointer;">' +
                    '<span>'+ success.data[i].week +'</span>' +
                    '<span class="weatherDaySpan">' +
                    '<img class="weatherBarImg" src="../img/rain.png" alt="">' +
                    '</span>' +
                    '<span class="weatherDaySpan">' +
                    '<img style="width: 40px;height: 40px" src="../img/rain_ico_10@2x.png" alt="">' +
                    '<span >10%</span>' +
                    '</span>' +
                    '<span class="weatherDaySpan" style="font-size: 28px">'+ success.data[i].tem1+'</span>' +
                    '<span style="font-size: 28px;color: #5bc0de">'+ success.data[i].tem2+'</span>' +
                    '<div class="weatherStyle" >' +
                    '<span id="weatherText">'+ success.data[i].index[0].desc + '</span>' +
                    //success.data[i].index[i].desc
                    '</div>' +
                    '<hr style="border: 0.2px dashed #ccc;  height: 1px;">' +
                    '</span>');
            }
            //详情循环
            console.log(success.data)
            for (let a in  success.data[0].index){
                // console.log(success.data[0].index[a])
                if (success.data[0].index[a].level == null){continue;}
                $('#DetailsUlLi').append(
                    '<li style="float: left;padding: 10px 0 0 0">'+ success.data[0].index[a].title +'</li>\n'+
                    '<li style="float: right;padding: 10px 0 0 0">'+ success.data[0].index[a].level +'</li>\n'+
                    '<li>................................................</li>'
                )
            }
        },
        error:function (error) {
            console.log(error.statusText)
        }
    })
});

function clickWeatherDayDetails(e) {
    $('.weatherStyle').slideUp("first")
    $(e).children('.weatherStyle').slideDown("first");
}