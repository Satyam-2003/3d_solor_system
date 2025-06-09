// Scene setup
let scene, camera, renderer, raycaster, mouse;
let isAnimating = true;
let isDarkTheme = true;
let planets = [];
let stars = [];
let sun;

// Planet data with realistic properties
const planetData = [
  {
    name: "Mercury",
    size: 0.8,
    distance: 15,
    speed: 4.7,
    color: 0x8c7853,
  },
  { name: "Venus", size: 1.2, distance: 20, speed: 3.5, color: 0xffc649 },
  { name: "Earth", size: 1.3, distance: 25, speed: 3.0, color: 0x6b93d6 },
  { name: "Mars", size: 1.0, distance: 30, speed: 2.4, color: 0xc1440e },
  {
    name: "Jupiter",
    size: 3.5,
    distance: 40,
    speed: 1.3,
    color: 0xd8ca9d,
  },
  {
    name: "Saturn",
    size: 3.0,
    distance: 50,
    speed: 1.0,
    color: 0xfad5a5,
  },
  {
    name: "Uranus",
    size: 2.0,
    distance: 60,
    speed: 0.7,
    color: 0x4fd0e4,
  },
  {
    name: "Neptune",
    size: 2.0,
    distance: 70,
    speed: 0.5,
    color: 0x4b70dd,
  },
];

function init() {
  // Scene
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x000011);

  // Camera
  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.set(0, 30, 80);

  // Renderer
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  document.getElementById("canvas-container").appendChild(renderer.domElement);

  // Raycaster for mouse interaction
  raycaster = new THREE.Raycaster();
  mouse = new THREE.Vector2();

  // Lighting
  setupLighting();

  // Create stars
  createStars();

  // Create sun
  createSun();

  // Create planets
  createPlanets();

  // Create controls UI
  createControlsUI();

  // Event listeners
  setupEventListeners();

  // Start animation
  animate();
}

function setupLighting() {
  // Ambient light
  const ambientLight = new THREE.AmbientLight(0x404040, 0.1);
  scene.add(ambientLight);

  // Sun light
  const sunLight = new THREE.PointLight(0xffffff, 2, 200);
  sunLight.position.set(0, 0, 0);
  sunLight.castShadow = true;
  sunLight.shadow.mapSize.width = 2048;
  sunLight.shadow.mapSize.height = 2048;
  scene.add(sunLight);
}

function createStars() {
  const starsGeometry = new THREE.BufferGeometry();
  const starsCount = 2000;
  const positions = new Float32Array(starsCount * 3);

  for (let i = 0; i < starsCount * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 400;
  }

  starsGeometry.setAttribute(
    "position",
    new THREE.BufferAttribute(positions, 3)
  );
  const starsMaterial = new THREE.PointsMaterial({
    color: 0xffffff,
    size: 1,
  });
  const starsField = new THREE.Points(starsGeometry, starsMaterial);
  scene.add(starsField);
  stars.push(starsField);
}

function createSun() {
  const sunGeometry = new THREE.SphereGeometry(4, 32, 32);
  const sunMaterial = new THREE.MeshBasicMaterial({
    color: 0xffaa00,
    emissive: 0xffaa00,
    emissiveIntensity: 0.5,
  });
  sun = new THREE.Mesh(sunGeometry, sunMaterial);
  scene.add(sun);
}

function createPlanets() {
  planetData.forEach((data, index) => {
    // Create planet
    const planetGeometry = new THREE.SphereGeometry(data.size, 32, 32);
    const planetMaterial = new THREE.MeshLambertMaterial({
      color: data.color,
    });
    const planet = new THREE.Mesh(planetGeometry, planetMaterial);

    // Position planet
    planet.position.x = data.distance;
    planet.castShadow = true;
    planet.receiveShadow = true;

    // Store planet data
    planet.userData = {
      name: data.name,
      distance: data.distance,
      speed: data.speed,
      angle: Math.random() * Math.PI * 2,
      originalSpeed: data.speed,
      color: data.color,
    };

    // Create orbit line
    const orbitGeometry = new THREE.RingGeometry(
      data.distance - 0.1,
      data.distance + 0.1,
      64
    );
    const orbitMaterial = new THREE.MeshBasicMaterial({
      color: 0x444444,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.3,
    });
    const orbit = new THREE.Mesh(orbitGeometry, orbitMaterial);
    orbit.rotation.x = -Math.PI / 2;
    scene.add(orbit);

    scene.add(planet);
    planets.push(planet);
  });
}

function createControlsUI() {
  const controlsContainer = document.getElementById("planet-controls");
  const colorsContainer = document.getElementById("planet-colors");

  planets.forEach((planet, index) => {
    // Create planet control
    const controlDiv = document.createElement("div");
    controlDiv.className = "planet-control";

    const label = document.createElement("label");
    label.textContent = planet.userData.name;

    const sliderContainer = document.createElement("div");
    sliderContainer.className = "slider-container";

    const slider = document.createElement("input");
    slider.type = "range";
    slider.min = "0";
    slider.max = "10";
    slider.step = "0.1";
    slider.value = planet.userData.speed;
    slider.className = "slider";
    slider.id = `speed-${index}`;

    const speedValue = document.createElement("span");
    speedValue.className = "speed-value";
    speedValue.textContent = planet.userData.speed.toFixed(1);
    speedValue.id = `value-${index}`;

    slider.addEventListener("input", (e) => {
      const newSpeed = parseFloat(e.target.value);
      planet.userData.speed = newSpeed;
      speedValue.textContent = newSpeed.toFixed(1);
    });

    sliderContainer.appendChild(slider);
    sliderContainer.appendChild(speedValue);
    controlDiv.appendChild(label);
    controlDiv.appendChild(sliderContainer);
    controlsContainer.appendChild(controlDiv);

    // Create color indicator
    const colorDiv = document.createElement("div");
    colorDiv.className = "color-indicator";
    colorDiv.style.backgroundColor = `#${planet.userData.color
      .toString(16)
      .padStart(6, "0")}`;
    colorDiv.title = planet.userData.name;
    colorsContainer.appendChild(colorDiv);
  });
}

function setupEventListeners() {
  // Pause/Resume button
  document.getElementById("pauseBtn").addEventListener("click", () => {
    isAnimating = !isAnimating;
    const btn = document.getElementById("pauseBtn");
    btn.textContent = isAnimating ? "⏸️ Pause" : "▶️ Resume";
  });

  // Theme toggle
  document.getElementById("themeBtn").addEventListener("click", () => {
    isDarkTheme = !isDarkTheme;
    document.body.classList.toggle("light-theme");
    const btn = document.getElementById("themeBtn");
    btn.textContent = isDarkTheme ? "🌙 Dark" : "☀️ Light";

    // Update scene background
    scene.background = new THREE.Color(isDarkTheme ? 0x000011 : 0x87ceeb);
  });

  // Mouse events
  renderer.domElement.addEventListener("mousemove", onMouseMove);
  renderer.domElement.addEventListener("click", onMouseClick);
  renderer.domElement.addEventListener("wheel", onMouseWheel);

  // Window resize
  window.addEventListener("resize", onWindowResize);
}

function onMouseMove(event) {
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  // Raycasting for tooltips
  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObjects(planets);

  const tooltip = document.getElementById("tooltip");

  if (intersects.length > 0) {
    const planet = intersects[0].object;
    tooltip.innerHTML = `
                    <strong>${planet.userData.name}</strong><br>
                    Distance: ${planet.userData.distance} AU<br>
                    Speed: ${planet.userData.speed.toFixed(1)}x
                `;
    tooltip.style.left = event.clientX + 10 + "px";
    tooltip.style.top = event.clientY - 10 + "px";
    tooltip.classList.add("show");
    document.body.style.cursor = "pointer";
  } else {
    tooltip.classList.remove("show");
    document.body.style.cursor = "default";
  }
}

function onMouseClick(event) {
  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObjects(planets);

  if (intersects.length > 0) {
    const planet = intersects[0].object;
    focusOnPlanet(planet);
  }
}

function focusOnPlanet(planet) {
  const targetPosition = new THREE.Vector3();
  targetPosition.copy(planet.position);
  targetPosition.z += planet.userData.distance * 0.3;
  targetPosition.y += 10;

  // Smooth camera transition
  const startPosition = camera.position.clone();
  const duration = 2000;
  const startTime = Date.now();

  function animateCamera() {
    const elapsed = Date.now() - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // Ease out cubic

    camera.position.lerpVectors(startPosition, targetPosition, eased);
    camera.lookAt(planet.position);

    if (progress < 1) {
      requestAnimationFrame(animateCamera);
    }
  }

  animateCamera();
}

function onMouseWheel(event) {
  const zoomSpeed = 0.1;
  const minDistance = 20;
  const maxDistance = 150;

  camera.position.multiplyScalar(1 + event.deltaY * zoomSpeed * 0.001);

  const distance = camera.position.length();
  if (distance < minDistance) {
    camera.position.normalize().multiplyScalar(minDistance);
  } else if (distance > maxDistance) {
    camera.position.normalize().multiplyScalar(maxDistance);
  }
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
  requestAnimationFrame(animate);

  if (isAnimating) {
    // Rotate sun
    sun.rotation.y += 0.01;

    // Animate planets
    planets.forEach((planet) => {
      // Orbital motion
      planet.userData.angle += planet.userData.speed * 0.01;
      planet.position.x =
        Math.cos(planet.userData.angle) * planet.userData.distance;
      planet.position.z =
        Math.sin(planet.userData.angle) * planet.userData.distance;

      // Planet rotation
      planet.rotation.y += 0.02;
    });

    // Gentle camera orbit
    const time = Date.now() * 0.0001;
    camera.position.x = Math.cos(time) * camera.position.length() * 0.1;
    camera.lookAt(scene.position);
  }

  renderer.render(scene, camera);
}

// Initialize the solar system
init();
