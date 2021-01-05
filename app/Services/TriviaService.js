import { ProxyState } from "../AppState.js";
import Trivia from "../Models/Trivia.js";
import { tbd } from "./AxiosService.js";

export class TriviaService{
 
    async getTrivias() {
        let res = await tbd.get()
        ProxyState.trivias = res.data.results.map(p => new Trivia(p))
    }
}

const triviaService = new TriviaService();
export default triviaService