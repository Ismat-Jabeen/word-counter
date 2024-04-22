#! /usr/bin/env node
import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter your message to count the word"
    }
]);
// when there are whitespaces between the words ,it also counts the spaces with words to
// trim method is used to remove whitespaces between words means spaces will not be counted
// split method is used to convert the sentence into array(" "),the space between quotation tells to put commas between the spaces of words
const words = answers.Sentence.trim().split(" ");
// Print the array of words to the console
console.log(words);
// Print the word count of the sentence to the console
console.log(`Your sentence word count is ${words.length}`);
