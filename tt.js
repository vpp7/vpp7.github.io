var aa = [
    'http://iot.gtimg.com/static/lambda/File/img/489775697519185920/am78919?y23=sina,ishare&key=e48cb2b2b85ed3135dfb9b20419705a9bcd96612f20348d921f535bd22eb3ae268fd4119fd6ebc80dd42c8d908e1b276e1ef54fd67f6817838f5fa8e2154b25efbd67ddcec14979c5688b20571be6da0e7d6d86166d9ecd95052707e3e5a8724e3d8a2268813b0e74ed722529467fe99a6f7643b28053f00f43298a423e195d608bef121038b7cc76e2fe2f67a41c40eb7fa22a17fd88b97d3c3e98f5db857fc&yk20230531',
    '', 
    '', 
    '', 
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',   
    '',    
    '',
    '',  
    '',
    '',  
    '',  
    '',  
    '',  
    '',  
    '', 
  
  
  
  
    ];
var sj = aa[Math.floor(Math.random()*aa.length)];

function setCookie(name,value){
  var Days = 400;
  var exp = new Date();
  exp.setTime(exp.getTime() + 10*400);
  document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
}
function getCookie(name){
  var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
  if(arr=document.cookie.match(reg))
    return unescape(arr[2]);
  else
    return null;
}
function sz(){
    if(!getCookie("http_R")){
        setCookie("http_R",sj);
        
        return sj ;
     //   window.open(sj)
    }else{
    var url=getCookie("http_R");
    return url ;
     //   window.open(url)
    }
}
