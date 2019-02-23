import React from "react";
import * as THREE from "three";
import WEBGL from "../three/WebGL";
import scrollToElement from "scroll-to-element";

export default class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  /* load three.js */
  componentDidMount = () => {
    if (WEBGL.isWebGLAvailable() === false) {
      document.body.appendChild(WEBGL.getWebGLErrorMessage());
    }
    var container, camera, scene, renderer;
    init();
    animate();
    function init() {
      container = document.getElementById("three-container");
      camera = new THREE.PerspectiveCamera(
        50,
        window.innerWidth / window.innerHeight,
        1,
        10
      );
      camera.position.z = 2;
      scene = new THREE.Scene();
      // geometry
      var vector = new THREE.Vector4();
      var instances = 5000;
      var positions = [];
      var offsets = [];
      var colors = [];
      var orientationsStart = [];
      var orientationsEnd = [];
      positions.push(0.025, -0.025, 0);
      positions.push(-0.025, 0.025, 0);
      positions.push(0, 0, 0.025);
      // instanced attributes
      for (var i = 0; i < instances; i++) {
        // offsets
        offsets.push(
          Math.random() - 0.2,
          Math.random() - 0.2,
          Math.random() - 0.2
        );
        // colors
        colors.push(0.2, 0.2, 0.3, 0.2);
        // orientation start
        vector.set(
          Math.random() * 2 - 1,
          Math.random() * 2 - 1,
          Math.random() * 2 - 1,
          Math.random() * 2 - 1
        );
        vector.normalize();
        orientationsStart.push(vector.x, vector.y, vector.z, vector.w);
        // orientation end
        vector.set(
          Math.random() * 2 - 1,
          Math.random() * 2 - 1,
          Math.random() * 2 - 1,
          Math.random() * 2 - 1
        );
        vector.normalize();
        orientationsEnd.push(vector.x, vector.y, vector.z, vector.w);
      }
      var geometry = new THREE.InstancedBufferGeometry();
      geometry.maxInstancedCount = instances; // set so its initalized for dat.GUI, will be set in first draw otherwise
      geometry.addAttribute(
        "position",
        new THREE.Float32BufferAttribute(positions, 3)
      );
      geometry.addAttribute(
        "offset",
        new THREE.InstancedBufferAttribute(new Float32Array(offsets), 3)
      );
      geometry.addAttribute(
        "color",
        new THREE.InstancedBufferAttribute(new Float32Array(colors), 4)
      );
      geometry.addAttribute(
        "orientationStart",
        new THREE.InstancedBufferAttribute(
          new Float32Array(orientationsStart),
          4
        )
      );
      geometry.addAttribute(
        "orientationEnd",
        new THREE.InstancedBufferAttribute(new Float32Array(orientationsEnd), 4)
      );
      // material
      var material = new THREE.RawShaderMaterial({
        uniforms: {
          time: { value: 1.0 },
          sineTime: { value: 1.0 }
        },
        vertexShader: document.getElementById("vertexShader").textContent,
        fragmentShader: document.getElementById("fragmentShader").textContent,
        side: THREE.DoubleSide,
        transparent: true
      });
      //
      var mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);
      //
      renderer = new THREE.WebGLRenderer();
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setClearColor(0xffffff);
      container.appendChild(renderer.domElement);
      if (renderer.extensions.get("ANGLE_instanced_arrays") === null) {
        document.getElementById("notSupported").style.display = "";
        return;
      }

      //
      window.addEventListener("resize", onWindowResize, false);
    }
    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }
    //
    function animate() {
      requestAnimationFrame(animate);
      render();
    }
    function render() {
      var time = performance.now();
      var object = scene.children[0];
      object.rotation.y = time * 0.0005;
      object.material.uniforms["sineTime"].value = Math.sin(
        object.material.uniforms["time"].value * 0.05
      );
      renderer.render(scene, camera);
    }
  };

  onGotoProfile = () => {
    scrollToElement(".profile", {
      offset: 0,
      ease: "inCube",
      duration: 1000
    });
  };

  render() {
    return (
      <div className="index" id="three-container">
        <div className="index-box text-center">
          <div className="index-name">LYNCH</div>
          <div className="index-intro">Junior CS Student/Web Developer</div>
          <div class="arrow index-intro-2" onClick={this.onGotoProfile}>
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
    );
  }
}
