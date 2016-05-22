(function(){
    var hintText={user_email:{hint:"邮箱是您登录的唯一账号，请谨慎填写",right:"邮箱格式正确",wrong:"邮箱格式有误，请重新输入"},
            user_name:{hint:"请输入3-12个字符的用户名（包括字母/数字/下划线）",right:"用户名格式正确",wrong:"用户名格式有误，请重新输入"},
            passward:{hint:"请输入6位以上密码",right:"密码格式正确",wrong:"请输入符合格式的密码"},
            repassward:{hint:"请再次输入密码",right:"再次输入密码正确",wrong:"两次输入不一致，请重新输入或密码格式不正确"}};
    var regEvent=function(node, event, func){
        if (node.addEventListener)
            node.addEventListener(event, func);
        else if (node.attachEvent)
            node.attachEvent("on" + event, func);
        else
            node["on" + event] = func;
        };
    function regValue(id){
        var flag=false,
        input=document.getElementById(id),
        value=input.value;
        switch (id){
            case "user_name":
                flag=/^[a-zA-Z0-9_]{4,16}$/.test(value.replace(/[\u0391-\uFFE5]/g,"nn"));
                break;
            case "passward":
                flag=/^\S{4,16}$/.test(value);
                break;
            case "repassward":
                flag=document.getElementById("passward").value==value && value !="" && value !=null;
                break;
            case "user_email":
                flag=/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}/.test(value);
                break;
        }
            if(flag) {
                input.className="right";
                hint.className="hint hint_right";
                hint.innerHTML=hintText[id].right;
            }else{
                input.className="wrong";
                hint.className="hint hint_wrong";
                hint.innerHTML=hintText[id].wrong;
                index+=1;
            }
    };
    var inputs=document.getElementsByTagName("input"),
    id,
    hint,
    index=0;
    for(let i=1;i<inputs.length-1;i++){
        regEvent(inputs[i],"focus",function(){
        	hint=inputs[i].nextSibling.nextSibling;
            hint.style.visibility="visible";
            id=inputs[i].id;
        });
        regEvent(inputs[i],"blur",function(){regValue(id)});
    }
    regEvent(document.getElementById("submit"),"click",function(e){
    	if(index !== 0){
	    	e.preventDefault();
            return false;
	    	alert("您的输入有误，请检查并重新输入！");
	   	}  
	});	
   
})();