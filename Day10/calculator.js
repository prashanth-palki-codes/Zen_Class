var v=0;
function dis(val)
{
    if(val>=0 && val<=9 || val==='(' || val===')')
    {
        document.getElementById("result").innerText+=val;
        document.getElementById("answer").innerText="";
        v=0;
    }
    else if(v===0)
    {
        document.getElementById("result").innerText+=val;
        document.getElementById("answer").innerText="";   
        v=1;
    }
    else
    {
        document.getElementById("answer").setAttribute('style','color:red');
        document.getElementById("answer").innerText="Invalid, You can't enter multiple operators side by side";
    }   
}

function solve() 
{ 
    if(document.getElementById('result').innerText.length>0) 
    {
        document.getElementById("answer").setAttribute('style','color:green');
        document.getElementById("answer").innerText="RESULT";
        let x = document.getElementById("result").innerText; 
        let y = eval(x);
        document.getElementById("result").innerText = y;
    }
    else
    {
        document.getElementById("answer").setAttribute('style','color:red');
        document.getElementById("answer").innerText="PLEASE ENTER SOME VALUES";
    }
        
} 

function clear() 
{ 
    document.getElementById("result").innerText= "";
    document.getElementById("answer").innerText=""; 
} 

function cancelOne()
{
    document.getElementById("answer").innerText="";
    var str=document.getElementById("result").innerText;
    var len=document.getElementById('result').innerText.length;
    var resultantString=str.slice(0,len-1);
    document.getElementById("result").innerText=resultantString;
}

function keysPress()
{
    onkeydown=function(e){
        var x=e.keyCode;
        var y=e.key;
        if(x>=42 && x<=57 || y==='/' || y==='*' || y==='-' || y==='+' || y==='.' || y==='(' || y===')')
        dis(y);
        else if(x===13 || y==='=')
        solve();
        else if(x===8)
        cancelOne();
        else
        window.alert("Please enter a valid character");
    }
}
keysPress();


var container=document.createElement('div');
container.setAttribute('class','container');
container.setAttribute('id','cont');
var ans=document.createElement('b');
ans.classList.add('row');
ans.setAttribute('id','answer');
var textBox=document.createElement('div');
textBox.classList.add('row');
textBox.setAttribute('id','result');
textBox.setAttribute('style','border:5px solid black;border-radius:20px;padding:10px;height:50px;width:600px');
container.append(ans,textBox);


var buttonsTop=document.createElement('div');
buttonsTop.classList.add('row');
buttonsTop.setAttribute('style','margin-top:30px;margin-left:30px;');
var buttonClear=document.createElement('button');
buttonClear.classList.add('col-2');
buttonClear.innerText="C";
buttonClear.addEventListener('click',function(){
    clear();
});
var buttonBack=document.createElement('button');
buttonBack.classList.add('col-2');
buttonBack.innerText="<-";
buttonBack.addEventListener('click',function(){
    cancelOne();
})
buttonsTop.append(buttonClear,buttonBack);
container.append(buttonsTop);



var buttons1=document.createElement('div');
buttons1.classList.add('row');
buttons1.setAttribute('style','margin-top:30px');
var button1=document.createElement('button');
button1.classList.add('col-1');
button1.innerText="1";
button1.addEventListener('click',function(){
    dis('1');
});
var button2=document.createElement('button');
button2.classList.add('col-1');
button2.innerText="2";
button2.addEventListener('click',function(){
    dis('2');
});
var button3=document.createElement('button');
button3.classList.add('col-1');
button3.innerText="3";
button3.addEventListener('click',function(){
    dis('3');
});
var buttonAdd=document.createElement('button');
buttonAdd.classList.add('col-1');
buttonAdd.innerText="+";
buttonAdd.addEventListener('click',function(){
    dis('+');
});
buttons1.append(button1,button2,button3,buttonAdd);
container.append(buttons1);


var buttons2=document.createElement('div');
buttons2.classList.add('row');
buttons2.setAttribute('style','margin-top:30px');
var button4=document.createElement('button');
button4.classList.add('col-1');
button4.innerText="4";
button4.addEventListener('click',function(){
    dis('4');
});
var button5=document.createElement('button');
button5.classList.add('col-1');
button5.innerText="5";
button5.addEventListener('click',function(){
    dis('5');
});
var button6=document.createElement('button');
button6.classList.add('col-1');
button6.innerText="6";
button6.addEventListener('click',function(){
    dis('6');
});
var buttonSub=document.createElement('button');
buttonSub.classList.add('col-1');
buttonSub.innerText="-";
buttonSub.addEventListener('click',function(){
    dis('-');
});
buttons2.append(button4,button5,button6,buttonSub);
container.append(buttons2);





var buttons3=document.createElement('div');
buttons3.classList.add('row');
buttons3.setAttribute('style','margin-top:30px');
var button7=document.createElement('button');
button7.classList.add('col-1');
button7.innerText="7";
button7.addEventListener('click',function(){
    dis('7');
});
var button8=document.createElement('button');
button8.classList.add('col-1');
button8.innerText="8";
button8.addEventListener('click',function(){
    dis('8');
});
var button9=document.createElement('button');
button9.classList.add('col-1');
button9.innerText="9";
button9.addEventListener('click',function(){
    dis('9');
});
var buttonMul=document.createElement('button');
buttonMul.classList.add('col-1');
buttonMul.innerText="*";
buttonMul.addEventListener('click',function(){
    dis('*');
});
buttons3.append(button7,button8,button9,buttonMul);
container.append(buttons3);



var buttons4=document.createElement('div');
buttons4.classList.add('row');
buttons4.setAttribute('style','margin-top:30px');
var buttonDot=document.createElement('button');
buttonDot.classList.add('col-1');
buttonDot.innerText=".";
buttonDot.addEventListener('click',function(){
    dis('.');
});
var button0=document.createElement('button');
button0.classList.add('col-1');
button0.innerText="0";
button0.addEventListener('click',function(){
    dis('0');
});
var buttonDiv=document.createElement('button');
buttonDiv.classList.add('col-1');
buttonDiv.innerText="/";
buttonDiv.addEventListener('click',function(){
    dis('/');
});
var buttonEq=document.createElement('button');
buttonEq.classList.add('col-1');
buttonEq.setAttribute('style','background-color:#81F7F3');
buttonEq.innerText="=";
buttonEq.addEventListener('click',function(){
    solve();
});
buttons4.append(buttonDot,button0,buttonDiv,buttonEq);
container.append(buttons4);


document.body.append(container);