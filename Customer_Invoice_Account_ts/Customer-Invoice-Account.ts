var custSample={
    id:1,
    name:'Prashanth',
    discount:25
}
var invoSample={
    id:4,
    amount:999
}
var accSample={
    id:8,
    balance:5000
}

interface CustomerInfo{
    id:number;
    name:string;
    discount:number;
}
interface InvoiceInfo{
    id:number;
    amount:number;
}
interface AccountInfo{
    id:number;
    balance?:number;
}

class Customer{
    id:number;
    name:string;
    discount:number;
    constructor(custDetaills:CustomerInfo)
    {
        this.id=custDetaills.id
        this.name=custDetaills.name
        this.discount=custDetaills.discount
    }
    getID():number{
        return this.id;
    }
    getName():string{
        return this.name;
    }
    getDiscount():number{
        return this.discount;
    }
    setDiscount(newDiscount:number){
        this.discount=newDiscount;
    }
    toString():string{
        return "Name: "+this.name+" - ID: "+this.id;
    }
}

var customer=new Customer(custSample);

class Invoice extends Customer{
    id:number;
    customer:Customer;
    amount:number
    constructor(invoiceDetails:InvoiceInfo,customerDetails:CustomerInfo=custSample)
    {
        super(customerDetails);
        this.id=invoiceDetails.id;
        this.customer=new Customer(customerDetails);
        this.amount=invoiceDetails.amount
    }
    getID(){
        return this.id
    }
    getCustomer(){
        return this.customer;
    }
    setCustomer(obj:CustomerInfo){
         this.customer=new Customer(obj)
    }
    getAmount():string{
          return this.amount.toString();
    }
    setAmount(amount){
        this.amount=amount;
    }
    getCustomerName():string{
        return this.customer.getName()
    }
    getAmountAfterDiscount(){
        return (this.amount-(this.amount*this.customer.discount/100)).toFixed(2)
    }
}

var invoice=new Invoice(invoSample);


class MyAccount extends Customer{
    id:number;
    customer:Customer;
    balance?:number=0.00;

    constructor(accountDetails:AccountInfo,customerDetails:CustomerInfo=custSample)
    {
        super(customerDetails)
        this.id=accountDetails.id;
        this.customer=new Customer(customerDetails);
        this.balance=accountDetails.balance
    }
    getID():number{
        return this.id;
    }
    getCustomer(){
        return this.customer
    }
    getBalance():number{
        return this.balance;
    }
    setBalance(newBalance){
        this.balance=newBalance;
    }
    toString():string{
        return `${this.customer.toString()}  balance=$${this.getBalance()}`;
    }
    getCustomerName():string{
        return this.customer.getName();
    }
    deposit(amount){
        this.balance=this.balance+amount;
        alert("Amount Deposited");
    }
    withdraw(amount){
        if(this.balance>=amount)
        {
            this.balance=this.balance-amount
            alert("Your balance is: "+(this.balance));
        }
        else
            alert("Insuffient funds");
    }

}
var account=new MyAccount(accSample);


var display=document.createElement('div');
display.setAttribute('class','container');
document.body.append(display);

display.innerHTML=`
        <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Customer</h5>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${customer.id}</li>
            <li class="list-group-item">Name: ${customer.name}</li>
            <li class="list-group-item" id="discount">Discount: ${customer.discount}%
        </ul>
        <div class="card-body">
        
        <button type="button" class="btn btn-danger" data-container="body" data-trigger="focus"  data-toggle="popover" data-placement="top" data-content="${customer.id}">
        Get ID
        </button><br>
        <button type="button" class="btn btn-danger" data-container="body" data-trigger="focus" data-toggle="popover" data-placement="top" data-content="${customer.name}">
        Get Name
        </button><br>
        <button type="button" class="btn btn-danger" data-container="body" data-trigger="focus" data-toggle="popover" data-placement="top" data-content="${customer.discount}" id="getDiscount">
            Get Discount
        </button><br>
        <button type="button" class="btn btn-danger" data-container="body" data-trigger="focus" data-toggle="popover" data-placement="top" onclick=SetDiscount() >
            Set Discount
        </button><br>
        <button type="button" class="btn btn-danger" data-container="body" data-trigger="focus" data-toggle="popover" data-placement="top" data-content="${customer.toString()}">
            To string
        </button><br>
        </div>
        </div>`

display.innerHTML+=`
        <div class="card" style="width: 18rem; margin-top:90px">
        <div class="card-body">
            <h5 class="card-title">Invoice</h5>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${invoice.id}</li>
            <li class="list-group-item">Customer: ${invoice.customer.name}</li>
            <li class="list-group-item" id="amount">Amount: ${invoice.amount}</li>
        </ul>
        <div class="card-body">
        <button type="button" class="btn btn-danger" data-container="body" data-trigger="focus" data-toggle="popover" data-placement="top" data-content="${invoice.id}">
            Get ID
        </button><br>
        <button type="button" id="getCustomer" class="btn btn-danger" data-container="body" data-trigger="focus" data-toggle="popover" data-placement="top" data-content="ID: ${invoice.customer.id} - Name: ${invoice.customer.getName()} - Discount: ${invoice.customer.getDiscount()}">
            Get Customer
        </button><br>
        <button type="button" class="btn btn-danger" data-container="body" data-toggle="popover" data-trigger="focus" data-placement="top" data-content="${invoice.getAmount()}" id="getAmount">
            Get Amount
        </button><br>
        <button type="button" class="btn btn-danger" data-container="body" data-toggle="popover" data-trigger="focus" data-placement="top" onclick=SetAmount() >
            Set Amount
        </button><br>
        <button type="button" class="btn btn-danger" data-container="body" data-toggle="popover" data-trigger="focus" data-placement="top" data-content="${invoice.getAmountAfterDiscount()}" id="afterDiscount">
            Get Amount After Discount
        </button><br><br>
        </div>
        </div>`

display.innerHTML+=`
        <div class="card" style="width: 18rem; margin-top:90px">
        <div class="card-body">
            <h5 class="card-title">Account</h5> 
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${account.id}</li>
            <li class="list-group-item">Customer: ${account.customer.name}</li>
            <li class="list-group-item" id="balance">Balance: ${account.balance}</li>
        </ul>
        <div class="card-body">
        <button type="button" class="btn btn-danger" data-container="body" data-toggle="popover" data-trigger="focus" data-placement="top" data-content="${account.id}">
        Get ID
        </button><br>
        <button type="button" id="getCustomer2" class="btn btn-danger" data-container="body" data-toggle="popover" data-trigger="focus"  data-placement="top" data-content="ID: ${account.customer.id} - Name: ${account.customer.getName()} - Discount: ${account.customer.getDiscount()}">
            Get Customer
        </button><br>
        <button type="button" class="btn btn-danger" data-container="body" data-toggle="popover" data-trigger="focus"  data-placement="top" data-content="${account.getBalance()}"id="getBalance">
            Get Balance
        </button><br>
        <button type="button" class="btn btn-danger" data-container="body" data-trigger="focus"  data-placement="top" onclick=SetBalance()>
            Set Balance
        </button><br>
        <button type="button" class="btn btn-danger" data-container="body" data-toggle="popover" data-trigger="focus" data-placement="top" data-content="${account.toString()}" id="tostring">
            To string
        </button><br>
        <button type="button" class="btn btn-danger" data-container="body" data-toggle="popover" data-trigger="focus"  data-placement="top"  id="deposit" onclick=deposit()>
            Deposit
        </button><br>
        <button type="button" class="btn btn-danger" data-container="body" data-toggle="popover" data-trigger="focus" data-placement="top"  id="withdraw" onclick=withdraw()>
            Withdraw
        </button><br>
        </div>
        </div>`


var SetDiscount=()=>{
            var value=prompt("Enter the discount");
            if(parseInt(value)>=0){
                customer.setDiscount(parseInt(value))
            }
            var discount=document.getElementById('discount')
            discount.innerHTML=`Discount: ${customer.getDiscount()}%`
            var getDiscount=document.getElementById('getDiscount');
            getDiscount.setAttribute("data-content",`${customer.getDiscount()}`);
            custSample.discount=parseInt(value);
            invoice=new Invoice(invoSample);
            var getCustomer=document.getElementById('getCustomer');
            getCustomer.setAttribute("data-content",`ID: ${invoice.customer.id} - Name: ${invoice.customer.getName()} - Discount: ${invoice.customer.getDiscount()}`);
            var afterDiscount=document.getElementById('afterDiscount');
            afterDiscount.setAttribute("data-content",`${invoice.getAmountAfterDiscount()}`);
            account=new MyAccount(accSample)
            var getCustomer2=document.getElementById('getCustomer2');
            getCustomer2.setAttribute("data-content",`ID: ${account.customer.id} - Name: ${account.customer.getName()} - Discount: ${account.customer.getDiscount()}`);
            
}

var SetAmount=()=>{
            var value=prompt("Enter the Amount");
            if(parseInt(value)>=0){
                invoice.setAmount(parseInt(value));
            }
            var amount=document.getElementById('amount')
            amount.innerHTML=`Amount: ${invoice.getAmount()}`;
            invoSample.amount=parseInt(value);
            var getAmount=document.getElementById('getAmount');
            getAmount.setAttribute("data-content",`${invoice.getAmount()}`);
            var afterDiscount=document.getElementById('afterDiscount');
            afterDiscount.setAttribute("data-content",`${invoice.getAmountAfterDiscount()}`);
     
}
var SetBalance=()=>{
            var value=prompt("Enter the Amount");
            if(parseInt(value)>=0){
                account.setBalance(+value);
            }
            var balance=document.getElementById('balance');
            balance.innerHTML=`Balance: ${account.getBalance()}`;
            accSample.balance=parseInt(value);
            var getBalance=document.getElementById('getBalance');
            getBalance.setAttribute("data-content",`${account.getBalance()}`);
            var tostr=document.getElementById('tostring');
            tostr.setAttribute("data-content",`${account.toString()}`);
    
}  
var deposit=()=>{
        var value=prompt("Enter the amount");
        if(parseInt(value)>=0){
            account.deposit(+value);
        }
        var balance=document.getElementById('balance');
        balance.innerHTML=`Balance: ${account.getBalance()}`;
        accSample.balance=parseInt(value);
        var getBalance=document.getElementById('getBalance');
        getBalance.setAttribute("data-content",`${account.getBalance()}`);
        var tostr=document.getElementById('tostring');
        tostr.setAttribute("data-content",`${account.toString()}`);
    
}
var withdraw=()=>{
        var value=prompt("Enter the amount");
        if(parseInt(value)>=0){
            account.withdraw(+value);
        }
        var balance=document.getElementById('balance');
        balance.innerHTML=`Balance: ${account.getBalance()}`;
        accSample.balance=parseInt(value);
        var getBalance=document.getElementById('getBalance');
        getBalance.setAttribute("data-content",`${account.getBalance()}`);
        var tostr=document.getElementById('tostring');
        tostr.setAttribute("data-content",`${account.toString()}`);
        
}
 