#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.blue.bold("\n\t Welcome to \ Ali Akbar Brohi \ ATM Machine\n"));



let myBalance=50000

let myPin=1234


let pinAns=await inquirer.prompt([
    {
        message:chalk.yellow.bold("Enter Your Pin code"),
        type:"number",
        name:"pin"
    }
]);
if (pinAns.pin===myPin){
    console.log(chalk.green("\n\t Pin is Correct! successfully login\n\t"))

let ansopera=await inquirer.prompt([
    {
       message:"select one operation",
       name:"operation",
       type:"list",
       choices:["WithDraw","CheckBalance"]
    }
]);

if (ansopera.operation==="CheckBalance"){
    console.log(chalk.green.bold(`Your current balance is ${myBalance}`))
}
if (ansopera.operation==="WithDraw"){

let withdrrawAns=await inquirer.prompt([{

name:"WithDrawMethod",
type:"list",
message:"select a WithDRawl Method",
choices:["Fast Cash","Enter amount"]

}])

if(withdrrawAns.WithDrawMethod==="Fast Cash"){

    let  fastCash1 =await inquirer.prompt([{
name:"fastCash",
type:"list",
message:"select the amount",
choices:[1000,2000,5000,10000,20000,50000,100000]


    }])

    if(fastCash1.fastCash>myBalance){
        console.log(chalk.red.bold("Insufficient Balance"))
    }else{
        myBalance-=fastCash1.fastCash
        console.log(chalk.green(`\n${fastCash1.fastCash} Your amount has been withdraw successfully\n`));
    console.log(`Your remaining Balance is ${myBalance}`)
    }
    
}


if(withdrrawAns.WithDrawMethod==="Enter amount"){


    let amountAns=await inquirer.prompt ([
        {
            message:"please enter your amount to WithDraw",
            name:"Amount",
            type:"number",

    }])
    if (amountAns.Amount>myBalance){
        console.log(chalk.red.bold("Insufficient Balance"))
    }else{
        myBalance-=amountAns.Amount
        console.log(chalk.green(`\n\t${amountAns.Amount}  Your amount has been WithDraw successfully\n`));
        console.log(`Your remaing balance is ${myBalance}`)
    }
}





}} 
else{
    console.log(chalk.red.bold("incorrect pin code try again"));
}









