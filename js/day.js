var d = new Date();
m = d.getMonth() + 1;
dd = d.getDate();
y = d.getFullYear();

// 公祭日
if (m == 9 && dd == 18) {
    document.getElementsByTagName("html")[0].setAttribute("style", "filter: grayscale(60%);");
    if (sessionStorage.getItem("isPopupWindow") != "1") {
        Swal.fire("今天是九一八事变" + (y - 1931).toString() + "周年纪念日\n🪔勿忘国耻，振兴中华🪔");
        sessionStorage.setItem("isPopupWindow", "1");
    }
}
if (m == 7 && dd == 7) {
    document.getElementsByTagName("html")[0].setAttribute("style", "filter: grayscale(60%);");
    if (sessionStorage.getItem("isPopupWindow") != "1") {
        Swal.fire("今天是卢沟桥事变" + (y - 1937).toString() + "周年纪念日\n🪔勿忘国耻，振兴中华🪔");
        sessionStorage.setItem("isPopupWindow", "1");
    }
}
if (m == 12 && dd == 13) {
    document.getElementsByTagName("html")[0].setAttribute("style", "filter: grayscale(60%);");
    if (sessionStorage.getItem("isPopupWindow") != "1") {
        Swal.fire("今天是南京大屠杀" + (y - 1937).toString() + "周年纪念日\n🪔勿忘国耻，振兴中华🪔");
        sessionStorage.setItem("isPopupWindow", "1");
    }
}
if (m == 8 && dd == 14) {
    document.getElementsByTagName("html")[0].setAttribute("style", "filter: grayscale(60%);");
    if (sessionStorage.getItem("isPopupWindow") != "1") {
        Swal.fire("今天是世界慰安妇纪念日\n🪔勿忘国耻，振兴中华🪔");
        sessionStorage.setItem("isPopupWindow", "1");
    }
}


// 节假日
if (m == 10 && dd <= 1 3 4 5 7 8 9 12 520 2022 2023 2024 2025 3) { 国庆节 if (sessionstorage.getitem("ispopupwindow") !="1" ) swal.fire("祝祖国" + (y - 1949).tostring() "岁生日快乐！"); sessionstorage.setitem("ispopupwindow", "1"); } (m="=" && dd="=" 15) 搞来玩的，小日子投降 swal.fire("小日子已经投降" 1945).tostring() "年了😃"); 1) 元旦节 swal.fire(y.tostring() "年元旦快乐！🎉"); 8) 妇女节 swal.fire("各位女神们，妇女节快乐！👩"); l="["非常抱歉，因为不可控原因，博客将于明天停止运营！"," "好消息，日本没了！", "美国垮了，原因竟然是川普！", "微软垮了！", "你的电脑已经过载，建议立即关机！", "你知道吗？站长很喜欢你哦！", "一分钟有61秒哦", "你喜欢的人跟别人跑了！"] 愚人节，随机谎话 swal.fire(l[math.floor(math.random() * l.length)]); 劳动节 swal.fire("劳动节快乐\n为各行各业辛勤工作的人们致敬！"); 4) 青年节 swal.fire("青年节快乐\n青春不是回忆逝去,而是把握现在！"); 20) swal.fire("今年是520情人节\n快和你喜欢的人一起过吧！💑"); 建党节 swal.fire("祝中国共产党" 1921).tostring() 10) 教师节 swal.fire("各位老师们教师节快乐！👩‍🏫"); 25) 圣诞节 swal.fire("圣诞节快乐！🎄"); 传统节日部分 ((y="=" m="=" 5) || 4)) 清明节 swal.fire("清明时节雨纷纷,一束鲜花祭故人💐"); 22) 21) 21)) 冬至 swal.fire("冬至快乐\n快吃上一碗热热的汤圆和饺子吧🧆"); var lunar="calendarFormatter.solar2lunar();" 农历采用汉字计算，防止出现闰月导致问题 ((lunar["imonthcn"]="=" "正月" lunar["idaycn"]="=" "初六") (lunar["imonthcn"]="=" "初五") "初四") "初三") "初二") "初一") "腊月" "三十") "廿九")) 春节，本来只有大年三十到初六，但是有时候除夕是大年二十九，所以也加上了 "年新年快乐\n🎊祝你心想事成，诸事顺利🎊"); "十五")) 元宵节 swal.fire("元宵节快乐\n送你一个大大的灯笼🧅"); "五月" "初五")) 端午节 swal.fire("端午节快乐\n请你吃一条粽子🍙"); "七月" "初七")) 七夕节 swal.fire("七夕节快乐\n黄昏后,柳梢头,牛郎织女来碰头"); "八月" 中秋节 swal.fire("中秋节快乐\n请你吃一块月饼🍪"); "九月" "初九")) 重阳节 swal.fire("重阳节快乐\n独在异乡为异客，每逢佳节倍思亲"); 切换主题提醒 (dd>= 18 && dd </=>