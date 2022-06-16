window.onload = function () {
    if (window.hashooked === undefined) {
        window.hashooked = true;
        //更换dummy ajax Reserve拦截函数
        var origin_ajaxReserve = window.ajaxReserve;
        window.ajaxReserve = function (val, dateFrom, dayofMonday) {
            // 更换dummy post拦截请求
            var origin_ajaxpost = $.post;
            $.post = function (url, pdata, callback, type) {
                //检验是否为被拦截的请求
                if (/Reserve\/queryDeviceReserveMsg/.test(url)) {
                    origin_ajaxpost(url, pdata, function (rdata, textStatus) {
                        callback(rdata, textStatus);
                        // 拦截后执行代码
                        // console.log(rdata);
                        $("#disp_table").hide();
                        $("#disp_table > tbody").empty();
                        var ele_tr = $("#_reserve_time > tbody > tr:nth-child(2)");
                        rdata.book = rdata.book.sort(function (x, y) {
                            return new Date(x.orderdate + ' ' + x.orderbegin).getTime() - new Date(y.orderdate + ' ' + y.orderbegin).getTime();
                        });
                        for (var i = 0; i < rdata.book.length; i++) {
                            var reserv_index_start = (new Date(rdata.book[i].orderdate + ' ' + rdata.book[i].orderbegin) - new Date(rdata.book[i].orderdate + ' ' + "00:00:00")) / 900000 + 2;
                            var reserve_index_end = (new Date(rdata.book[i].orderdate + ' ' + rdata.book[i].orderend) - new Date(rdata.book[i].orderdate + ' ' + "00:00:00")) / 900000 + 1;
                            $("#disp_table > tbody").append($("<tr><td>" + rdata.book[i].orderusercard + "</td><td>" + rdata.book[i].orderusername + "</td><td>" + rdata.book[i].orderbegin + "</td><td>" + rdata.book[i].orderend + "</td></tr>"));
                            ele_tr.children("td:nth-child(n+" + reserv_index_start + "):nth-child(-n+" + reserve_index_end + ")").attr("title", "学号：" + rdata.book[i].orderusercard + "\n姓名：" + rdata.book[i].orderusername + "\n起始时间：" + rdata.book[i].orderbegin + "\n终止时间：" + rdata.book[i].orderend);
                        }
                        $("#disp_table").show();
                    }, type);
                } else {
                    origin_ajaxpost(url, pdata, callback, type);
                }
            }
            //执行原先的AjaxReserve
            origin_ajaxReserve(val, dateFrom, dayofMonday);
            //换回原先的post
            $.post = origin_ajaxpost;
        };
    }
}
