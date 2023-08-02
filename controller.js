// @ts-check
import { Models } from "./models.js";
import { View } from "./view.js";
let score = 0;

class Controller {
  renderizar;
  constructor() {
    this.renderizar = true;
    this.model = new Models();
    this.view = new View();
  }

  render() {
    if (this.model.questionIndex == this.model.data.length) {
      this.renderizar = false;
      return console.log("el juego termino");
    } else {
      const data = this.model.getData();
      //   console.log(data);
      this.view.render(data);
    }
  }

  answerCheck(answer) {
    const answerChequeada = this.model.checkAnswer(answer);
    // let estado;
    if (answerChequeada) {
      score += 10;
      this.view.isCorrect(answerChequeada);
      this.view.renderScore(score);
      console.log(this.model.questionIndex);
      this.model.questionIndexIncrement();
      return true;
    } else {
      this.view.isCorrect(answerChequeada);
      this.model.questionIndexIncrement();

      return false;
    }
  }

  cleanScreen() {
    this.view.clean();
  }
}

export { Controller };
