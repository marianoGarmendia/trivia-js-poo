//@ts-check

import { Controller } from "./controller.js";
import { View } from "./view.js";

//Esta respuesta vendria del boton clickeado
// let respuesta = "kaak";

function main() {
  //   controller.render();
  //   const response = respuesta;
  const controller = new Controller();
  //   controller.answerCheck;

  controller.render();

  //   console.log("desde el main");

  //   main();
}
main();
