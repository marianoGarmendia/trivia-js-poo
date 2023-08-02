import { Controller } from "./controller.js";

class View {
  constructor() {}
  render(data) {
    if (document !== undefined) {
      let div = document.getElementById("pregunta");
      div.innerText = data.question;
      let divCHoices = document.createElement("div");
      divCHoices.id = "choices";

      data.choices.forEach((choice) => {
        const button = document.createElement("button");
        button.innerText = choice;
        button.value = choice;
        button.className = "button";
        divCHoices.appendChild(button);
        button.addEventListener("click", () => {
          const controller = new Controller();
          controller.answerCheck(button.value);
          console.log(button.value);
        });
        // console.log(button);
        // console.log(button);
      });

      document.getElementById("caja-choices").appendChild(divCHoices);
      //   console.log(divCHoices);

      // document.getElementById("respuesta")?.innerText(data.question);
    }
    // console.log(span);
    // console.log(data.question);
  }

  clean() {
    let div = document.getElementById("choices");
    let cajaPadre = document.getElementById("caja-choices");
    cajaPadre.removeChild(div);
  }

  isCorrect(answer) {
    if (answer) {
      document.getElementById("respuesta").innerText = "correct";
      //   console.log("Correct");
      //   controller.score;
    } else {
      document.getElementById("respuesta").innerText = "Incorrect";

      //   document.getElementById("respuesta").innerText("Incorrect");
      console.log("Incorrect");
    }
  }

  renderScore(score) {
    const controller = new Controller();

    document.getElementById("score").innerText = score;
    console.log(score);
  }
}

export { View };
