import { DefaultCameraSettings } from "kgengine/Engine/Cameras/DefaultCameraSettings.js";
import { CreateScene } from "kgengine/Engine/OtherScripts/CreateScene.js";
import { WebGLEngine } from "kgengine/Engine/VisualEngineConfigs/WebGLEngine.js";

const scene = new CreateScene();
const camera = DefaultCameraSettings();

const renderer = WebGLEngine();

document.body.appendChild(renderer.domElement);

const animate = () => {
  renderer.render(scene.scene, camera);
  requestAnimationFrame(animate);
};

animate();s