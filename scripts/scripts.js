
function BankAccount(){
    this.transactions=[]
    this.currentId=0;
}
BankAccount.prototype.addTransaction = function(transaction){
    this.transactions.push(transaction);
}
BankAccount.prototype.getBalance = function(initialDeposit,index){
    return (initialDeposit + this.transactions[index].depositAmount);
}
function Transaction(withdrawalAmount, depositAmount){
    this.withdrawalAmount = withdrawalAmount,
    this.depositAmount = depositAmount,
    this.Id = -1;
    // this.date=date
}
Transaction.prototype.getId = function()
{
    this.Id ++;
}

$(document).ready(function() {
    initialDeposit = parseInt(prompt("Welcome to your new bank. What's your initial deposit?"));
  $("form#transactions").submit(function(event) {
    event.preventDefault();
    var withdrawalAmount = parseInt($("input#withdrawal").val());
    var depositAmount = parseInt($("input#deposit").val());
    // alert(add(depositAmount,initialDeposit));
    var ourBankAccount = new BankAccount(newTransaction);
    var newTransaction = new Transaction (withdrawalAmount, depositAmount)
    newTransaction.getId();
    
    ourBankAccount.addTransaction(newTransaction);
    alert(ourBankAccount.getBalance(initialDeposit,newTransaction.Id));
  });
});