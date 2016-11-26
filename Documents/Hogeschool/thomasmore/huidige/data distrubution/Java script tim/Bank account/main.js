//var account = new Object();
var account = function(mail, balance){
    this.mail = mail;
    this.balance = balance;
};
//account.balance = 0;
var geld = function (amount){
    this.deposit += parseInt(amount);
    //this.withdraw -= parseInt(amount);
};
console.log('dat is uw balance ' + geld1);
console.log('dat is uw balance ' + geld2);
console.log('dat is uw balance ' + geld3);
var geld1= new geld(100);
var geld2= new geld (-50);
var geld3= new geld();
/*geld();
geld.deposit=100;
geld();
geld.withdraw=-50;
geld();*/
//oef2
var accounts = [{mail: "account3@hotmail.com", balance: 10}, {mail: "account4@hotmail.com", balance: 10}];

function createAccount(account)
{
    accounts.push(account);
}

var acc1= new account("account1@hotmail.com", 10);
var acc2= new account("account2@hotmail.com", 30);

function getAccount(username)
{
    var rtnAccount;
    accounts.forEach(function (acc) {
        if (acc.mail === username) {
            rtnAccount = acc;
        }
        console.log(acc.mail);
    });
    return rtnAccount;
}

console.log(acc1, acc2, accounts);