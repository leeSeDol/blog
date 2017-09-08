window.onload = function(){
	var eleTextarea = document.querySelector('textarea');
	var eleButton = document.querySelector('input[type="button"]');

	//下载文件方法
	function funDownload(content,filename){
		var eleLink = document.createElement('a');
		eleLink.download = filename;
		eleLink.style.display = 'block';

		//将字符内容变成Blob地址
		var blob = new Blob([content]);
		eleLink.href = URL.createObjectURL(blob);
		//触发点击
		document.body.appendChild(eleLink);
		eleLink.click();
		//然后移除
		document.body.removeChild(eleLink);
	}
	if( 'download' in document.createElement('a') ){
		//作为test.html下载
		eleButton.addEventListener("click",function(){
			funDownload(eleTextarea.value,"test.html");
		});
	}else{
		//浏览器不支持
		eleButton.onclick = function(){
			alert("浏览器不支持");
		}
	}
};
