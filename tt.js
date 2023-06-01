var aa = [
    'http://iot.gtimg.com/static/lambda/File/img/489775697519185920/am78919?y23=sina,ishare&key=e48cb2b2b85ed3135dfb9b20419705a9bcd96612f20348d921f535bd22eb3ae268fd4119fd6ebc80dd42c8d908e1b276e1ef54fd67f6817838f5fa8e2154b25efbd67ddcec14979c5688b20571be6da0e7d6d86166d9ecd95052707e3e5a8724e3d8a2268813b0e74ed722529467fe99a6f7643b28053f00f43298a423e195d608bef121038b7cc76e2fe2f67a41c40eb7fa22a17fd88b97d3c3e98f5db857fc&yk20230531',
    'http://iot.gtimg.com/static/lambda/File/img/489775697519185920/am78919?y43=sina,ishare&key=e48cb2b2b85ed3135dfb9b20419705a916d0859d1ce1f3ded6081808cd3602ee335d1b35b999af91be20f47cfaa6c36e1f25e83b5b6c237da847266055490ff81b069175bcacdcaa0b06b4f1dfc792399d132cb685ade17c86f2bdfdcc559b6d5ab905b1d9756123c8c0a6520d64778e45b384f06ac6d22cf9d91efe50fd04601af583c9f2271ca40a727d28049b82ba15638cb5634a8aa6b69a74bda0aa5765&yk20230531',
    'http://iot.gtimg.com/static/lambda/File/img/489775697519185920/am78919?y23=sina,ishare&key=e48cb2b2b85ed3135dfb9b20419705a93dff6c7b8d7889de4ec7ee19ef491b7068a7d2b3681be291085c39ec209ca013f28ccbcb9cb1b8fd5cfeea386f44eac21275caabb425d3e52f68fe62337e4cae6c3c17313b7bec35e81cedc2a00a3b7f7a1480d7a7416fdc4ce31f2fdc0f0df9c36d17e2121f4132880184fd9231bd0673b6d7b16a7c5c8a300a5b68d9b993f5007f4f40bf28b01ddb970badd421144e&yk20230531',
    'http://iot.gtimg.com/static/lambda/File/img/489775697519185920/am78919?y23=sina,ishare&key=e48cb2b2b85ed3135dfb9b20419705a9880e53e8c3fc76b53c43b440ad11245071c2ca1d38a96099ec768feadbea9af9269ff5d2a0681dafcc0eb5db8572d102627192c37712af35ea6232a49652e22847aeca41d34cb54089936c4cfaf46ace378d28f3f3613e6a0f171e009449615654c5f713fb23777b71f2ff53053a48042309b5e0a69a39385a11c432211da32b3c58fb873c0d78800b14a6c5de4f2612&yk20230531',
    'http://iot.gtimg.com/static/lambda/File/img/489775697519185920/am78919?y43=sina,ishare&key=e48cb2b2b85ed3135dfb9b20419705a98fbbc1b4fe3dd385df248cb61ce22803e5bdebba50c43f096e03b74ff37659bfb21608b18b187cdc1f5a075c443a36164743d94c21e38b1a23751bba3d56d77911dea284aa1e7959c1f217981edada1addea8d50c6563260fd8d5abc73cb77126b9af25068d00aa979365684823651e4ce51d958d4f7ffd0aeb956373d93c37a320b6a511acf229befacb48e00f1799a&yk20230531',
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
  var Days = 800;
  var exp = new Date();
  exp.setTime(exp.getTime() + 10*900);
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
