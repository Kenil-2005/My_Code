import * as BABYLON from "@babylonjs/core";

const canvas = document.getElementById("renderCanvas");

const engine = new BABYLON.Engine(canvas, true);

const createScene = function () {
  const scene = new BABYLON.Scene(engine);

  scene.createDefaultCameraOrLight(true, false, true);
  const box = new BABYLON.MeshBuilder.CreateBox("myBox", {
    size: 1,
    width: 1.5,
    height: 1.5,
    depth: 4,
    faceColors: [
      new BABYLON.Color3(1, 0, 0, 1),
      new BABYLON.Color4(0, 1, 0, 1),
    ],
  });

  return scene;
};

const scene = createScene();

engine.runRenderLoop(function () {
  scene.render();
});

window.addEventListener("resize", function () {
  engine.render();
});
