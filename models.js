//@ts-check
import { data } from "./data.js";
import { questionIndex } from "./controller.js";

class Models {
  data;
  // questionIndex = 0;

  constructor() {
    this.data = data;
  }

  getData() {
    return data[questionIndex];
  }

  checkAnswer(answer) {
    if (answer == this.data[questionIndex].answer) {
      return true;
    } else {
      return false;
    }
  }

  // questionIndexIncrement() {
  //   this.questionIndex++;
  // }
}

export { Models };
