import { ProxyState } from "../AppState.js"
import triviaService from "../Services/TriviaService.js"
function _drawTrivias(){
    let template = ''
    const trivia = ProxyState.trivias
    trivia.forEach(p => template += p.Template)
    document.getElementById('app').innerHTML = template
}
export default class TriviaController{
    constructor(){
        ProxyState.on('trivias', _drawTrivias)
        triviaService.getTrivias()
        }
    }
