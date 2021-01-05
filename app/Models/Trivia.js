import { generateId } from "../Utils/GenerateId.js"

export default class Trivia{
    constructor({category, question, correct_answer}) {
        this.category = category
        this.question = question
        this.correct = correct_answer
    }

    get Template (){
        return /*html*/`
            <div class="col-4">
                <div class = "card my-3 border-primary shadow">
                    <div class = "card-header bg-primary">
                        <h2><b>CATEGORY:</b> ${this.category}</h2>
                    </div>
                    <div class = "card-body">
                        <h4>${this.question}</h4>
                        <div class="text-center">
                        <button type="button" class="btn btn-dark" ${this.correct === "True" ? `onclick="alert('You are correct! the answer is ${this.correct}.')"` : `onclick="alert('You are wrong! the answer is ${this.correct}.')"`}>True</button>
                        <button type="button" class="btn btn-warning" ${this.correct === "False" ? `onclick="alert('You are correct! The answer is ${this.correct}.')"` : `onclick="alert('You are wrong! The answer is ${this.correct}.')"`}>False</button>
                        </div>
                    </div>
                </div>
            </div>
    `
    }
}