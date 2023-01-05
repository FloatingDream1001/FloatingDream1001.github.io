new Vue({
    data: function () {
        this.$notify({
            // notify: message,
            title: "欢迎光临😜",
            message: "程序员，在扒源码也记住要遵循GPL协议哦！",
            position: 'top-left',
            offset: 50,
            showClose: true,
            type: "warning",
            duration: 5000
        });
    }
})


