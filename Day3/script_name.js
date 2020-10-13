var request=new XMLHttpRequest();
request.open('GET','https://api.openweathermap.org/data/2.5/weather?q=chennai&appid=65803ead8f1fa7a51f1a404137052b41',true);
request.send();
request.onload=function(){
	var data=JSON.parse(this.response);
	console.log(data);
};