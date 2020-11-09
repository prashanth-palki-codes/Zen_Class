var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var custSample = {
    id: 1,
    name: 'Prashanth',
    discount: 25
};
var invoSample = {
    id: 4,
    amount: 999
};
var accSample = {
    id: 8,
    balance: 5000
};
var Customer = /** @class */ (function () {
    function Customer(custDetaills) {
        this.id = custDetaills.id;
        this.name = custDetaills.name;
        this.discount = custDetaills.discount;
    }
    Customer.prototype.getID = function () {
        return this.id;
    };
    Customer.prototype.getName = function () {
        return this.name;
    };
    Customer.prototype.getDiscount = function () {
        return this.discount;
    };
    Customer.prototype.setDiscount = function (newDiscount) {
        this.discount = newDiscount;
    };
    Customer.prototype.toString = function () {
        return "Name: " + this.name + " - ID: " + this.id;
    };
    return Customer;
}());
var customer = new Customer(custSample);
var Invoice = /** @class */ (function (_super) {
    __extends(Invoice, _super);
    function Invoice(invoiceDetails, customerDetails) {
        if (customerDetails === void 0) { customerDetails = custSample; }
        var _this = _super.call(this, customerDetails) || this;
        _this.id = invoiceDetails.id;
        _this.customer = new Customer(customerDetails);
        _this.amount = invoiceDetails.amount;
        return _this;
    }
    Invoice.prototype.getID = function () {
        return this.id;
    };
    Invoice.prototype.getCustomer = function () {
        return this.customer;
    };
    Invoice.prototype.setCustomer = function (obj) {
        this.customer = new Customer(obj);
    };
    Invoice.prototype.getAmount = function () {
        return this.amount.toString();
    };
    Invoice.prototype.setAmount = function (amount) {
        this.amount = amount;
    };
    Invoice.prototype.getCustomerName = function () {
        return this.customer.getName();
    };
    Invoice.prototype.getAmountAfterDiscount = function () {
        return (this.amount - (this.amount * this.customer.discount / 100)).toFixed(2);
    };
    return Invoice;
}(Customer));
var invoice = new Invoice(invoSample);
var MyAccount = /** @class */ (function (_super) {
    __extends(MyAccount, _super);
    function MyAccount(accountDetails, customerDetails) {
        if (customerDetails === void 0) { customerDetails = custSample; }
        var _this = _super.call(this, customerDetails) || this;
        _this.balance = 0.00;
        _this.id = accountDetails.id;
        _this.customer = new Customer(customerDetails);
        _this.balance = accountDetails.balance;
        return _this;
    }
    MyAccount.prototype.getID = function () {
        return this.id;
    };
    MyAccount.prototype.getCustomer = function () {
        return this.customer;
    };
    MyAccount.prototype.getBalance = function () {
        return this.balance;
    };
    MyAccount.prototype.setBalance = function (newBalance) {
        this.balance = newBalance;
    };
    MyAccount.prototype.toString = function () {
        return this.customer.toString() + "  balance=$" + this.getBalance();
    };
    MyAccount.prototype.getCustomerName = function () {
        return this.customer.getName();
    };
    MyAccount.prototype.deposit = function (amount) {
        this.balance = this.balance + amount;
        alert("Amount Deposited");
    };
    MyAccount.prototype.withdraw = function (amount) {
        if (this.balance >= amount) {
            this.balance = this.balance - amount;
            alert("Your balance is: " + (this.balance));
        }
        else
            alert("Insuffient funds");
    };
    return MyAccount;
}(Customer));
var account = new MyAccount(accSample);
var display = document.createElement('div');
display.setAttribute('class', 'container');
document.body.append(display);
display.innerHTML = "\n        <div class=\"card\" style=\"width: 18rem;\">\n        <div class=\"card-body\">\n            <h5 class=\"card-title\">Customer</h5>\n        </div>\n        <ul class=\"list-group list-group-flush\">\n            <li class=\"list-group-item\">ID: " + customer.id + "</li>\n            <li class=\"list-group-item\">Name: " + customer.name + "</li>\n            <li class=\"list-group-item\" id=\"discount\">Discount: " + customer.discount + "%\n        </ul>\n        <div class=\"card-body\">\n        \n        <button type=\"button\" class=\"btn btn-danger\" data-container=\"body\" data-trigger=\"focus\"  data-toggle=\"popover\" data-placement=\"top\" data-content=\"" + customer.id + "\">\n        Get ID\n        </button><br>\n        <button type=\"button\" class=\"btn btn-danger\" data-container=\"body\" data-trigger=\"focus\" data-toggle=\"popover\" data-placement=\"top\" data-content=\"" + customer.name + "\">\n        Get Name\n        </button><br>\n        <button type=\"button\" class=\"btn btn-danger\" data-container=\"body\" data-trigger=\"focus\" data-toggle=\"popover\" data-placement=\"top\" data-content=\"" + customer.discount + "\" id=\"getDiscount\">\n            Get Discount\n        </button><br>\n        <button type=\"button\" class=\"btn btn-danger\" data-container=\"body\" data-trigger=\"focus\" data-toggle=\"popover\" data-placement=\"top\" onclick=SetDiscount() >\n            Set Discount\n        </button><br>\n        <button type=\"button\" class=\"btn btn-danger\" data-container=\"body\" data-trigger=\"focus\" data-toggle=\"popover\" data-placement=\"top\" data-content=\"" + customer.toString() + "\">\n            To string\n        </button><br>\n        </div>\n        </div>";
display.innerHTML += "\n        <div class=\"card\" style=\"width: 18rem; margin-top:90px\">\n        <div class=\"card-body\">\n            <h5 class=\"card-title\">Invoice</h5>\n        </div>\n        <ul class=\"list-group list-group-flush\">\n            <li class=\"list-group-item\">ID: " + invoice.id + "</li>\n            <li class=\"list-group-item\">Customer: " + invoice.customer.name + "</li>\n            <li class=\"list-group-item\" id=\"amount\">Amount: " + invoice.amount + "</li>\n        </ul>\n        <div class=\"card-body\">\n        <button type=\"button\" class=\"btn btn-danger\" data-container=\"body\" data-trigger=\"focus\" data-toggle=\"popover\" data-placement=\"top\" data-content=\"" + invoice.id + "\">\n            Get ID\n        </button><br>\n        <button type=\"button\" id=\"getCustomer\" class=\"btn btn-danger\" data-container=\"body\" data-trigger=\"focus\" data-toggle=\"popover\" data-placement=\"top\" data-content=\"ID: " + invoice.customer.id + " - Name: " + invoice.customer.getName() + " - Discount: " + invoice.customer.getDiscount() + "\">\n            Get Customer\n        </button><br>\n        <button type=\"button\" class=\"btn btn-danger\" data-container=\"body\" data-toggle=\"popover\" data-trigger=\"focus\" data-placement=\"top\" data-content=\"" + invoice.getAmount() + "\" id=\"getAmount\">\n            Get Amount\n        </button><br>\n        <button type=\"button\" class=\"btn btn-danger\" data-container=\"body\" data-toggle=\"popover\" data-trigger=\"focus\" data-placement=\"top\" onclick=SetAmount() >\n            Set Amount\n        </button><br>\n        <button type=\"button\" class=\"btn btn-danger\" data-container=\"body\" data-toggle=\"popover\" data-trigger=\"focus\" data-placement=\"top\" data-content=\"" + invoice.getAmountAfterDiscount() + "\" id=\"afterDiscount\">\n            Get Amount After Discount\n        </button><br><br>\n        </div>\n        </div>";
display.innerHTML += "\n        <div class=\"card\" style=\"width: 18rem; margin-top:90px\">\n        <div class=\"card-body\">\n            <h5 class=\"card-title\">Account</h5> \n        </div>\n        <ul class=\"list-group list-group-flush\">\n            <li class=\"list-group-item\">ID: " + account.id + "</li>\n            <li class=\"list-group-item\">Customer: " + account.customer.name + "</li>\n            <li class=\"list-group-item\" id=\"balance\">Balance: " + account.balance + "</li>\n        </ul>\n        <div class=\"card-body\">\n        <button type=\"button\" class=\"btn btn-danger\" data-container=\"body\" data-toggle=\"popover\" data-trigger=\"focus\" data-placement=\"top\" data-content=\"" + account.id + "\">\n        Get ID\n        </button><br>\n        <button type=\"button\" id=\"getCustomer2\" class=\"btn btn-danger\" data-container=\"body\" data-toggle=\"popover\" data-trigger=\"focus\"  data-placement=\"top\" data-content=\"ID: " + account.customer.id + " - Name: " + account.customer.getName() + " - Discount: " + account.customer.getDiscount() + "\">\n            Get Customer\n        </button><br>\n        <button type=\"button\" class=\"btn btn-danger\" data-container=\"body\" data-toggle=\"popover\" data-trigger=\"focus\"  data-placement=\"top\" data-content=\"" + account.getBalance() + "\"id=\"getBalance\">\n            Get Balance\n        </button><br>\n        <button type=\"button\" class=\"btn btn-danger\" data-container=\"body\" data-trigger=\"focus\"  data-placement=\"top\" onclick=SetBalance()>\n            Set Balance\n        </button><br>\n        <button type=\"button\" class=\"btn btn-danger\" data-container=\"body\" data-toggle=\"popover\" data-trigger=\"focus\" data-placement=\"top\" data-content=\"" + account.toString() + "\" id=\"tostring\">\n            To string\n        </button><br>\n        <button type=\"button\" class=\"btn btn-danger\" data-container=\"body\" data-toggle=\"popover\" data-trigger=\"focus\"  data-placement=\"top\"  id=\"deposit\" onclick=deposit()>\n            Deposit\n        </button><br>\n        <button type=\"button\" class=\"btn btn-danger\" data-container=\"body\" data-toggle=\"popover\" data-trigger=\"focus\" data-placement=\"top\"  id=\"withdraw\" onclick=withdraw()>\n            Withdraw\n        </button><br>\n        </div>\n        </div>";
var SetDiscount = function () {
    var value = prompt("Enter the discount");
    if (parseInt(value) >= 0) {
        customer.setDiscount(parseInt(value));
    }
    var discount = document.getElementById('discount');
    discount.innerHTML = "Discount: " + customer.getDiscount() + "%";
    var getDiscount = document.getElementById('getDiscount');
    getDiscount.setAttribute("data-content", "" + customer.getDiscount());
    custSample.discount = parseInt(value);
    invoice = new Invoice(invoSample);
    var getCustomer = document.getElementById('getCustomer');
    getCustomer.setAttribute("data-content", "ID: " + invoice.customer.id + " - Name: " + invoice.customer.getName() + " - Discount: " + invoice.customer.getDiscount());
    var afterDiscount = document.getElementById('afterDiscount');
    afterDiscount.setAttribute("data-content", "" + invoice.getAmountAfterDiscount());
    account = new MyAccount(accSample);
    var getCustomer2 = document.getElementById('getCustomer2');
    getCustomer2.setAttribute("data-content", "ID: " + account.customer.id + " - Name: " + account.customer.getName() + " - Discount: " + account.customer.getDiscount());
};
var SetAmount = function () {
    var value = prompt("Enter the Amount");
    if (parseInt(value) >= 0) {
        invoice.setAmount(parseInt(value));
    }
    var amount = document.getElementById('amount');
    amount.innerHTML = "Amount: " + invoice.getAmount();
    invoSample.amount = parseInt(value);
    var getAmount = document.getElementById('getAmount');
    getAmount.setAttribute("data-content", "" + invoice.getAmount());
    var afterDiscount = document.getElementById('afterDiscount');
    afterDiscount.setAttribute("data-content", "" + invoice.getAmountAfterDiscount());
};
var SetBalance = function () {
    var value = prompt("Enter the Amount");
    if (parseInt(value) >= 0) {
        account.setBalance(+value);
    }
    var balance = document.getElementById('balance');
    balance.innerHTML = "Balance: " + account.getBalance();
    accSample.balance = parseInt(value);
    var getBalance = document.getElementById('getBalance');
    getBalance.setAttribute("data-content", "" + account.getBalance());
    var tostr = document.getElementById('tostring');
    tostr.setAttribute("data-content", "" + account.toString());
};
var deposit = function () {
    var value = prompt("Enter the amount");
    if (parseInt(value) >= 0) {
        account.deposit(+value);
    }
    var balance = document.getElementById('balance');
    balance.innerHTML = "Balance: " + account.getBalance();
    accSample.balance = parseInt(value);
    var getBalance = document.getElementById('getBalance');
    getBalance.setAttribute("data-content", "" + account.getBalance());
    var tostr = document.getElementById('tostring');
    tostr.setAttribute("data-content", "" + account.toString());
};
var withdraw = function () {
    var value = prompt("Enter the amount");
    if (parseInt(value) >= 0) {
        account.withdraw(+value);
    }
    var balance = document.getElementById('balance');
    balance.innerHTML = "Balance: " + account.getBalance();
    accSample.balance = parseInt(value);
    var getBalance = document.getElementById('getBalance');
    getBalance.setAttribute("data-content", "" + account.getBalance());
    var tostr = document.getElementById('tostring');
    tostr.setAttribute("data-content", "" + account.toString());
};
