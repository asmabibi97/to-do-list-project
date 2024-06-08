#!/usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let addtask = await inquirer.prompt([
        {
            name: "todo",
            type: "input",
            message: "what you want to add in your list?",
        },
        {
            name: "addmore",
            type: "confirm",
            message: "do you want to add more items in list?",
        }
    ]);
    todos.push(addtask.todo);
    condition = addtask.addmore;
    console.log(todos);
}
