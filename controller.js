// @ts-check
import { Models } from "./models.js";
import { View } from "./view.js";

var score = 0;
var questionIndex = 0;

class Controller {
  model;
  view;

  constructor() {
    this.model = new Models();
    this.view = new View();
  }

  render() {
    if (questionIndex == this.model.data.length) {
      this.view.endGame();
    } else {
      const data = this.model.getData();
      console.log(data);
      this.view.render(data);
    }
  }

  incrementScore() {
    score += 10;
  }

  getScore() {
    return score;
  }

  incrementQuestionIndex() {
    questionIndex++;
  }

  answerCheck(answer) {
    const answerChequeada = this.model.checkAnswer(answer);
    // let estado;
    if (answerChequeada) {
      this.view.isCorrect(answerChequeada);
      this.incrementScore();
      this.view.renderScore(this.getScore());
    } else {
      this.view.isCorrect(answerChequeada);
    }
    this.incrementQuestionIndex();
    // this.render();
    console.log(questionIndex);
  }

  cleanScreen() {
    this.view.clean();
  }
}

export { Controller, questionIndex };
