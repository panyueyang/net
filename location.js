function locat(add,file_link)
{
  if(getQueryString("login"))
  if(add)location = file_link+"?login=true";else location=file_link+"&login=true"
     else location = file_link;
}
function getQueryString(add,name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = top.window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]); return null;
    }
