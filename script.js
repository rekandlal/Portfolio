// === Dynamic Date ===
function updateDateTime() {
  const now = new Date();
  const formatted = now.toLocaleString('en-IN', {
    dateStyle: 'short',
    timeStyle: 'medium',
  });
  document.getElementById('datetime').textContent = formatted;
}
updateDateTime();
setInterval(updateDateTime, 1000);

// === Terminal Commands ===
const input = document.getElementById("terminal-input");
const history = document.getElementById("history");

const commands = {
  welcome: `Hi, I'm Abhishekh Vishwakarma, a Software Engineer.\nWelcome to my interactive portfolio terminal!\nType 'help' to see available commands.`,
  help: `Available commands:\nabout - Learn about me\nprojects - View my projects\nskills - See my technical skills\nexperience - My work experience\ncontact - How to reach me\neducation - My educational background\ncertifications - View my certifications\nleadership - Leadership and community involvement\nclear - Clear the terminal`,
  about: `👨‍💻 I'm Abhishekh Vishwakarma, an IT student passionate about scalable software.`,
  contact: `📧 Email: abhishekh@example.com\n📱 LinkedIn: linkedin.com/in/abhishekh`,
  clear: 'clear',
  unknown: `bash: command not found\nType 'help' to see available commands.`,
};

function addToHistory(command, output) {
  if (output === 'clear') {
    history.innerHTML = '';
    return;
  }

  const cmdBlock = document.createElement('div');
  cmdBlock.classList.add('mb-4');
  cmdBlock.innerHTML = `
    <div class="command-line">
      <span class="prompt">abhi@portfolio:~$</span><span>${command}</span>
    </div>
    <div class="response mt-1 text-white whitespace-pre-wrap">${output}</div>
  `;
  history.appendChild(cmdBlock);
  history.scrollTop = history.scrollHeight;
}

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const cmd = input.value.trim().toLowerCase();
    input.value = "";
    addToHistory(cmd, commands[cmd] || commands["unknown"]);
  }
});

// === Three.js Card (Use your uploaded image) ===
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(50, 0.4 * window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(0.4 * window.innerWidth, window.innerHeight);
document.getElementById("canvas-container").appendChild(renderer.domElement);

const light = new THREE.PointLight(0xffffff, 1);
light.position.set(5, 5, 5);
scene.add(light);

// Use your image here:
const textureLoader = new THREE.TextureLoader();
textureLoader.load('9b1d259b-1679-4ca8-b774-77d725a25797.png', (texture) => {
  const geometry = new THREE.PlaneGeometry(3, 4);
  const material = new THREE.MeshBasicMaterial({ map: texture });
  const card = new THREE.Mesh(geometry, material);
  scene.add(card);

  document.addEventListener('mousemove', (event) => {
    const x = (event.clientX / window.innerWidth) * 2 - 1;
    const y = -(event.clientY / window.innerHeight) * 2 + 1;
    card.rotation.y = x * 0.4;
    card.rotation.x = y * 0.4;
  });

  function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  }
  animate();
});
