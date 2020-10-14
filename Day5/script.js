var request=new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload=function(){
	var data=JSON.parse(this.response);
	
	//1 Get all the countries from Asia continent using Filter function
	let asiancountries=data.filter(ele =>ele.region==="Asia");
	console.log(asiancountries);

	//2 Get all the countries with population of less than 2 lacs using Filter function
	let lessthan2lacs=data.filter(ele => ele.population<200000);
	console.log(lessthan2lacs);
	
	//3 Print the following details name, capital, flag using forEach function
	data.forEach(ele=>console.log("Name:"+ele.name+" Capital:"+ele.capital+" Flag:"+ele.flag));


	//4 Print the total population of countries using reduce function
	var totalPopulation=data.reduce((total,ele) =>{return total+ele.population},0);
	console.log(totalPopulation);

	//5 Print the total population of countries in Asia continent using reduce and filter function
	var res=data.filter(ele=>ele.region==="Asia");
	var asainTotalPopulation=res.reduce((tot,ele)=>{return tot+ele.population},0);
	console.log(asainTotalPopulation);

	//6 Print the contras which use US Dollars as currency.
	var dollarCountries=data.filter(ele=>ele.currencies[0].code==="USD")
	console.log(dollarCountries);

};