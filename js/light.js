// 霓虹灯效果
// 颜色数组
var arr = ["#39c5bb", "#f14747", "#f1a247", "#f1ee47", "#b347f1", "#1edbff", "#ed709b", "#5636ed"];
// 颜色索引
var idx = 0;

// 切换颜色
function changeColor() {
    // 仅夜间模式才启用
    if (document.getElementsByTagName('html')[0].getAttribute('data-theme') == 'dark') {
        if (document.getElementById("site-name"))
            document.getElementById("site-name").style.textShadow = arr[idx] + " 0 0 15px";
        if (document.getElementById("site-title"))
            document.getElementById("site-title").style.textShadow = arr[idx] + " 0 0 15px";
        if (document.getElementById("site-subtitle"))
            document.getElementById("site-subtitle").style.textShadow = arr[idx] + " 0 0 10px";
        if (document.getElementById("post-info"))
            document.getElementById("post-info").style.textShadow = arr[idx] + " 0 0 5px";
        try {
            document.getElementsByClassName("author-info__name")[0].style.textShadow = arr[idx] + " 0 0 12px";
            document.getElementsByClassName("author-info__description")[0].style.textShadow = arr[idx] + " 0 0 12px";
        } catch {
            
        }
        idx++;
        if (idx == 8) {
            idx = 0;
        }
    } else {
        // 白天模式恢复默认
        if (document.getElementById("site-name"))
            document.getElementById("site-name").style.textShadow = "#1e1e1ee0 1px 1px 1px";
        if (document.getElementById("site-title"))
            document.getElementById("site-title").style.textShadow = "#1e1e1ee0 1px 1px 1px";
        if (document.getElementById("site-subtitle"))
            document.getElementById("site-subtitle").style.textShadow = "#1e1e1ee0 1px 1px 1px";
        if (document.getElementById("post-info"))
            document.getElementById("post-info").style.textShadow = "#1e1e1ee0 1px 1px 1px";
        try {
            document.getElementsByClassName("author-info__name")[0].style.textShadow = "";
            document.getElementsByClassName("author-info__description")[0].style.textShadow = "";
        } catch {
            
        }
    }
}

// 开启计时器
window.onload = setInterval(changeColor, 1200);


// 防抖全局计时器
let TT = null;    //time用来控制事件的触发
// 防抖函数:fn->逻辑 time->防抖时间
function debounce(fn, time) {
    if (TT !== null) clearTimeout(TT);
    TT = setTimeout(fn, time);
}

// 复制提醒
document.addEventListener("copy", function () {
    debounce(function () {
        new Vue({
            data: function () {
                this.$notify({
                    title: "嘿嘿！复制成功🍬",
                    message: "若要转载请加上原文链接哦，谢谢支持！",
                    position: 'top-left',
                    offset: 50,
                    showClose: true,
                    type: "success",
                    duration: 5000
                });
            }
        })
    }, 300);
})


function switchPostChart () {
    // 这里为了统一颜色选取的是“明暗模式”下的两种字体颜色，也可以自己定义
    let color = document.documentElement.getAttribute('data-theme') === 'light' ? '#4C4948' : 'rgba(255,255,255,0.7)'
    if (document.getElementById('posts-chart') && postsOption) {
      try {
        let postsOptionNew = postsOption
        postsOptionNew.title.textStyle.color = color
        postsOptionNew.xAxis.nameTextStyle.color = color
        postsOptionNew.yAxis.nameTextStyle.color = color
        postsOptionNew.xAxis.axisLabel.color = color
        postsOptionNew.yAxis.axisLabel.color = color
        postsOptionNew.xAxis.axisLine.lineStyle.color = color
        postsOptionNew.yAxis.axisLine.lineStyle.color = color
        postsOptionNew.series[0].markLine.data[0].label.color = color
        postsChart.setOption(postsOptionNew)
      } catch (error) {
        console.log(error)
      }
    }
    if (document.getElementById('tags-chart') && tagsOption) {
      try {
        let tagsOptionNew = tagsOption
        tagsOptionNew.title.textStyle.color = color
        tagsOptionNew.xAxis.nameTextStyle.color = color
        tagsOptionNew.yAxis.nameTextStyle.color = color
        tagsOptionNew.xAxis.axisLabel.color = color
        tagsOptionNew.yAxis.axisLabel.color = color
        tagsOptionNew.xAxis.axisLine.lineStyle.color = color
        tagsOptionNew.yAxis.axisLine.lineStyle.color = color
        tagsOptionNew.series[0].markLine.data[0].label.color = color
        tagsChart.setOption(tagsOptionNew)
      } catch (error) {
        console.log(error)
      }
    }
    if (document.getElementById('categories-chart') && categoriesOption) {
      try {
        let categoriesOptionNew = categoriesOption
        categoriesOptionNew.title.textStyle.color = color
        categoriesOptionNew.legend.textStyle.color = color
        if (!categoryParentFlag) { categoriesOptionNew.series[0].label.color = color }
        categoriesChart.setOption(categoriesOptionNew)
      } catch (error) {
        console.log(error)
      }
    }
  }
  document.getElementById("mode-button").addEventListener("click", function () { setTimeout(switchPostChart, 100) })