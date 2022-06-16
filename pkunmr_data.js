var wrapper = document.createElement("span");
wrapper.innerHTML = "账号：<input type='text' id='ddname' style='width: 100px;' /> " +
    "<a href='http://222.29.46.228/admin/outbox/send' target='_blank'>检索账号</a> &nbsp; &nbsp; " +
    "样品名：<input type='text' id='ddsample' style='width: 200px;' /> &nbsp; &nbsp; " +
    "编号：<input type='number' id='ddno' style='width: 50px;' value='1' /> &nbsp; &nbsp; " +
    "<button type='button' onclick='window.open(\"http://222.29.46.228/uploads/86/\"+document.getElementById(\"ddname\").value+" +
    "\"/\"+document.getElementById(\"ddsample\").value+\".\"+document.getElementById(\"ddno\").value+\".zip\");'>下载</button>";
document.getElementById("tb").appendChild(wrapper);