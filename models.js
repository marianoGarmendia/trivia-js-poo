import { data } from "./data.js";

class Models {
  data;
  questionIndex = 0;
  constructor() {
    this.data = data;
  }

  getData() {
    return data[this.questionIndex];
  }

  checkAnswer(answer) {
    if (answer == this.data[this.questionIndex].answer) {
      return true;
    } else {
      return false;
    }
  }

  questionIndexIncrement() {
    this.questionIndex++;
  }
}

export { Models };
