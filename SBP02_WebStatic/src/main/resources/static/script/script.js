$(function(){
	
	// 메인 => 서브
	$("span#goSubMain").click(()=>{
		location.href="/sub/subMain.html";
	});
	
	// 서브 => 메인
	$("span#goMain").click(()=>{
		location.href="/";
	});
	
});