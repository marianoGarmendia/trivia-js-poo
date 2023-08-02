//@ts-check

import { Controller } from "./controller.js";

function main() {
  const controller = new Controller();

  // Renderizo la primer pregunta con sus opciones
  controller.render();
}
main();
