import { Controller } from "./controller.js";
import { Models } from "./models.js";

class View {
  model;

  constructor() {
    this.model = new Models();
  }
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

          this.clean();
          new Controller().render();
        });
      });

      document.getElementById("caja-choices").appendChild(divCHoices);
    }
  }

  clean() {
    let div = document.getElementById("choices");
    let cajaPadre = document.getElementById("caja-choices");
    cajaPadre.removeChild(div);
  }

  isCorrect(answer) {
    if (answer) {
      document.getElementById("respuesta").innerText = "correct";
    } else {
      document.getElementById("respuesta").innerText = "Incorrect";

      console.log("Incorrect");
    }
  }

  renderScore(score) {
    document.getElementById("score").innerText = score;
    console.log(score);
  }

  endGame() {
    const mensajeFinal = document.getElementById("pregunta");
    mensajeFinal.innerText = "El juego ha finalizado";
  }
}

export { View };
