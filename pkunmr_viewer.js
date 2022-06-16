var hook_js = document.createElement("script");
hook_js.type = "text/javascript";
hook_js.src = chrome.runtime.getURL('patch-ajaxReserve.js');
document.getElementById("form1").appendChild(hook_js);

var disp_table = document.createElement("table");
disp_table.id = "disp_table";
disp_table.innerHTML = "<thead><th>学号</th><th>姓名</th><th>起始时间</th><th>终止时间</th></thead><tbody></tbody></table>";
disp_table.style.marginTop = "50px";
disp_table.style.display = "none";
disp_table.style.width="100%";
disp_table.style.textAlign="center";
document.querySelector("div.content_txt").appendChild(disp_table);