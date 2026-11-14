/* =========================================
   BEYOND THE SIGNAL
   MARS + MOON ROVER EXPERIENCE
========================================= */

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const selectionScreen = document.getElementById("selectionScreen");
const gameScreen = document.getElementById("gameScreen");

const startScreen = document.getElementById("startScreen");
const completeScreen = document.getElementById("completeScreen");

const startButton = document.getElementById("startButton");
const replayButton = document.getElementById("replayButton");
const exitButton = document.getElementById("exitButton");
const menuButton = document.getElementById("menuButton");

const timerDisplay = document.getElementById("timer");
const positionDisplay = document.getElementById("position");
const progressText = document.getElementById("progressText");
const progressBar = document.getElementById("progressBar");
const objectiveStatus = document.getElementById("objectiveStatus");
const surfaceCondition = document.getElementById("surfaceCondition");

const missionTitle = document.getElementById("missionTitle");
const missionCode = document.getElementById("missionCode");
const briefingTitle = document.getElementById("briefingTitle");
const briefingText = document.getElementById("briefingText");
const finalTime = document.getElementById("finalTime");


/* =========================================
   1. GAME CONFIGURATION
========================================= */

const WORLD_WIDTH = 2700;
const WORLD_HEIGHT = 600;
const DESTINATION_X = 2500;

let selectedPlanet = "mars";
let gameState = "ready";

let cameraX = 0;
let startTime = 0;
let elapsedTime = 0;
let lastFrame = 0;

const keys = {};

const rover = {
    x: 120,
    y: 430,
    speed: 0,
    angle: 0,
    radius: 23
};

let rocks = [];
let particles = [];

const planetSettings = {
    mars: {
        title: "MARS SURFACE OPERATIONS",
        code: "MISSION 01 / MARS",
        briefingTitle: "MARS EXPEDITION",
        briefingText:
            "A remote exploration zone has been identified ahead. Navigate the rocky Martian surface and reach the destination.",
        surface: "DUSTY / ROCKY",
        acceleration: 0.105,
        maxSpeed: 3.5,
        friction: 0.965,
        skyTop: "#100d12",
        skyBottom: "#39201b",
        ground: "#30201d",
        groundLight: "#493027",
        mountain: "#241816",
        rock: "#796052",
        dust: "#c77c54",
        accent: "#e69a68"
    },

    moon: {
        title: "LUNAR SURFACE OPERATIONS",
        code: "MISSION 02 / MOON",
        briefingTitle: "LUNAR EXPEDITION",
        briefingText:
            "The lunar research zone lies beyond the crater field. Cross the silent grey landscape and reach the destination.",
        surface: "LUNAR REGOLITH",
        acceleration: 0.075,
        maxSpeed: 3.0,
        friction: 0.982,
        skyTop: "#02040a",
        skyBottom: "#101725",
        ground: "#252a32",
        groundLight: "#414650",
        mountain: "#111722",
        rock: "#737985",
        dust: "#aeb7c7",
        accent: "#c7d3e3"
    }
};


/* =========================================
   2. WORLD GENERATION
========================================= */

function createWorld() {
    rocks = [];

    // Obstacles are placed along the rover's route.
    const positions = [
        [390, 390, 25],
        [590, 480, 32],
        [790, 345, 23],
        [1010, 430, 34],
        [1210, 355, 27],
        [1400, 490, 32],
        [1610, 390, 25],
        [1810, 470, 35],
        [2030, 345, 28],
        [2220, 455, 32]
    ];

    positions.forEach(([x, y, radius]) => {
        rocks.push({ x, y, radius });
    });

    particles = [];

    for (let i = 0; i < 45; i++) {
        particles.push({
            x: Math.random() * WORLD_WIDTH,
            y: 260 + Math.random() * 300,
            size: Math.random() * 2 + 0.5,
            alpha: Math.random() * 0.25 + 0.05,
            speed: Math.random() * 0.3 + 0.1
        });
    }
}


/* =========================================
   3. MISSION SELECTION
========================================= */

document.querySelectorAll(".launch-button").forEach(button => {
    button.addEventListener("click", () => {
        selectedPlanet = button.dataset.planet;

        const settings = planetSettings[selectedPlanet];

        selectionScreen.classList.add("hidden");
        gameScreen.classList.remove("hidden");

        missionTitle.textContent = settings.title;
        missionCode.textContent = settings.code;
        briefingTitle.textContent = settings.briefingTitle;
        briefingText.textContent = settings.briefingText;
        surfaceCondition.textContent = settings.surface;

        resetMission();

        startScreen.classList.remove("hidden");
        completeScreen.classList.add("hidden");

        drawGame();
    });
});


/* =========================================
   4. RESET MISSION
========================================= */

function resetMission() {
    rover.x = 120;
    rover.y = 430;
    rover.speed = 0;
    rover.angle = 0;

    cameraX = 0;
    elapsedTime = 0;

    gameState = "ready";

    createWorld();
    updateTelemetry();

    timerDisplay.textContent = "00:00";
    objectiveStatus.textContent = "AWAITING DEPLOYMENT";
}


/* =========================================
   5. START / REPLAY / EXIT
========================================= */

startButton.addEventListener("click", startMission);

replayButton.addEventListener("click", () => {
    resetMission();
    startMission();
});

exitButton.addEventListener("click", returnToMenu);
menuButton.addEventListener("click", returnToMenu);

function startMission() {
    resetMission();

    gameState = "running";
    startTime = performance.now();

    startScreen.classList.add("hidden");
    completeScreen.classList.add("hidden");

    objectiveStatus.textContent = "DESTINATION AHEAD";
}

function returnToMenu() {
    gameState = "ready";

    for (const key in keys) {
        keys[key] = false;
    }

    gameScreen.classList.add("hidden");
    selectionScreen.classList.remove("hidden");
}


/* =========================================
   6. KEYBOARD CONTROLS
========================================= */

window.addEventListener("keydown", event => {
    const key = event.key.toLowerCase();

    if (
        ["arrowup", "arrowdown", "arrowleft", "arrowright"].includes(key)
    ) {
        event.preventDefault();
    }

    keys[key] = true;
});

window.addEventListener("keyup", event => {
    keys[event.key.toLowerCase()] = false;
});

window.addEventListener("blur", () => {
    for (const key in keys) {
        keys[key] = false;
    }
});


/* =========================================
   7. MOBILE CONTROLS
========================================= */

document.querySelectorAll(".mobile-controls button").forEach(button => {
    const key = button.dataset.key.toLowerCase();

    button.addEventListener("pointerdown", event => {
        event.preventDefault();
        keys[key] = true;
    });

    button.addEventListener("pointerup", () => {
        keys[key] = false;
    });

    button.addEventListener("pointerleave", () => {
        keys[key] = false;
    });

    button.addEventListener("pointercancel", () => {
        keys[key] = false;
    });
});


/* =========================================
   8. ROVER MOVEMENT
========================================= */

function updateRover() {
    if (gameState !== "running") return;

    const settings = planetSettings[selectedPlanet];

    const forward = keys["w"] || keys["arrowup"];
    const reverse = keys["s"] || keys["arrowdown"];
    const left = keys["a"] || keys["arrowleft"];
    const right = keys["d"] || keys["arrowright"];

    if (forward) {
        rover.speed += settings.acceleration;
    }

    if (reverse) {
        rover.speed -= settings.acceleration;
    }

    rover.speed *= settings.friction;

    rover.speed = Math.max(
        -settings.maxSpeed * 0.55,
        Math.min(settings.maxSpeed, rover.speed)
    );

    if (Math.abs(rover.speed) > 0.08) {
        const steering = rover.speed > 0 ? 1 : -1;

        if (left) rover.angle -= 0.035 * steering;
        if (right) rover.angle += 0.035 * steering;
    }

    const previousX = rover.x;
    const previousY = rover.y;

    rover.x += Math.cos(rover.angle) * rover.speed;
    rover.y += Math.sin(rover.angle) * rover.speed;

    // Keep the rover inside the drivable area.
    rover.x = Math.max(35, Math.min(DESTINATION_X + 50, rover.x));
    rover.y = Math.max(290, Math.min(555, rover.y));

    // Rock collision detection.
    for (const rock of rocks) {
        const dx = rover.x - rock.x;
        const dy = rover.y - rock.y;

        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < rover.radius + rock.radius * 0.75) {
            rover.x = previousX;
            rover.y = previousY;
            rover.speed *= -0.25;
            break;
        }
    }

    // Camera follows the rover.
    cameraX = rover.x - 300;
    cameraX = Math.max(0, Math.min(WORLD_WIDTH - canvas.width, cameraX));

    // Mission completion.
    if (rover.x >= DESTINATION_X) {
        completeMission();
    }

    updateTelemetry();
}


/* =========================================
   9. TELEMETRY
========================================= */

function updateTelemetry() {
    const progress = Math.min(
        100,
        Math.max(0, ((rover.x - 120) / (DESTINATION_X - 120)) * 100)
    );

    progressText.textContent = Math.floor(progress) + "%";
    progressBar.style.width = progress + "%";

    positionDisplay.textContent =
        `X: ${Math.floor(rover.x)} / Y: ${Math.floor(rover.y)}`;

    if (gameState === "running") {
        const seconds = Math.floor(elapsedTime / 1000);
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;

        timerDisplay.textContent =
            `${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;
    }
}


/* =========================================
   10. MISSION COMPLETION
========================================= */

function completeMission() {
    gameState = "completed";
    rover.speed = 0;

    const seconds = Math.floor(elapsedTime / 1000);
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    finalTime.textContent =
        `${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;

    objectiveStatus.textContent = "DESTINATION REACHED";

    completeScreen.classList.remove("hidden");
}


/* =========================================
   11. BACKGROUND AND LANDSCAPE
========================================= */

function drawBackground() {
    const settings = planetSettings[selectedPlanet];

    const sky = ctx.createLinearGradient(0, 0, 0, 300);
    sky.addColorStop(0, settings.skyTop);
    sky.addColorStop(1, settings.skyBottom);

    ctx.fillStyle = sky;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Moon stars.
    if (selectedPlanet === "moon") {
        for (let i = 0; i < 85; i++) {
            const x = (i * 137.5) % canvas.width;
            const y = (i * 53.7) % 210;

            ctx.fillStyle = `rgba(220,230,245,${0.2 + (i % 4) * 0.12})`;
            ctx.fillRect(x, y, 1.5, 1.5);
        }

        // Distant Earth.
        ctx.beginPath();
        ctx.arc(820, 95, 25, 0, Math.PI * 2);
        ctx.fillStyle = "#8fa9c7";
        ctx.shadowColor = "#7e9fc8";
        ctx.shadowBlur = 22;
        ctx.fill();
        ctx.shadowBlur = 0;

        ctx.beginPath();
        ctx.arc(820, 95, 19, 0, Math.PI * 2);
        ctx.fillStyle = "#253d60";
        ctx.fill();
    }

    // Distant mountains.
    ctx.beginPath();
    ctx.moveTo(0, 290);

    for (let x = 0; x <= canvas.width + 30; x += 30) {
        const worldX = x + cameraX * 0.25;
        const height =
            235 +
            Math.sin(worldX * 0.008) * 35 +
            Math.sin(worldX * 0.021) * 18;

        ctx.lineTo(x, height);
    }

    ctx.lineTo(canvas.width, 390);
    ctx.lineTo(0, 390);
    ctx.closePath();

    ctx.fillStyle = settings.mountain;
    ctx.fill();

    // Ground.
    const ground = ctx.createLinearGradient(0, 300, 0, 600);
    ground.addColorStop(0, settings.groundLight);
    ground.addColorStop(1, settings.ground);

    ctx.fillStyle = ground;
    ctx.fillRect(0, 290, canvas.width, 310);

    // Horizon glow.
    const glow = ctx.createRadialGradient(
        500, 290, 5,
        500, 290, 450
    );

    glow.addColorStop(0, selectedPlanet === "mars"
        ? "rgba(174,85,52,0.14)"
        : "rgba(170,185,210,0.09)");

    glow.addColorStop(1, "rgba(0,0,0,0)");

    ctx.fillStyle = glow;
    ctx.fillRect(0, 180, canvas.width, 250);
}


/* =========================================
   12. SURFACE DETAILS
========================================= */

function drawSurface() {
    const settings = planetSettings[selectedPlanet];

    // Surface texture.
    for (let i = 0; i < 100; i++) {
        const worldX = (i * 83) % WORLD_WIDTH;
        const screenX = worldX - cameraX;

        if (screenX < -20 || screenX > canvas.width + 20) continue;

        const y = 310 + ((i * 47) % 275);

        ctx.beginPath();
        ctx.ellipse(
            screenX,
            y,
            2 + (i % 5),
            1 + (i % 3),
            0,
            0,
            Math.PI * 2
        );

        ctx.fillStyle = i % 2 === 0
            ? "rgba(220,220,220,0.08)"
            : "rgba(0,0,0,0.15)";

        ctx.fill();
    }

    // Craters / surface depressions.
    for (let i = 0; i < 18; i++) {
        const worldX = 180 + i * 145;
        const screenX = worldX - cameraX;

        if (screenX < -100 || screenX > canvas.width + 100) continue;

        const y = 350 + ((i * 67) % 190);
        const radius = 18 + (i % 4) * 9;

        ctx.beginPath();
        ctx.ellipse(
            screenX,
            y,
            radius,
            radius * 0.45,
            0,
            0,
            Math.PI * 2
        );

        ctx.fillStyle = "rgba(0,0,0,0.19)";
        ctx.fill();

        ctx.beginPath();
        ctx.ellipse(
            screenX - 3,
            y - 3,
            radius * 0.8,
            radius * 0.32,
            0,
            0,
            Math.PI * 2
        );

        ctx.strokeStyle = "rgba(210,210,210,0.09)";
        ctx.lineWidth = 2;
        ctx.stroke();
    }

    // Dust / lunar particles.
    particles.forEach(particle => {
        const x = particle.x - cameraX * particle.speed;

        if (x < -10 || x > canvas.width + 10) return;

        ctx.beginPath();
        ctx.arc(x, particle.y, particle.size, 0, Math.PI * 2);

        ctx.fillStyle = `rgba(220,220,220,${particle.alpha})`;
        ctx.fill();
    });

    // Slightly darker lower vignette.
    const vignette = ctx.createLinearGradient(0, 400, 0, 600);
    vignette.addColorStop(0, "rgba(0,0,0,0)");
    vignette.addColorStop(1, "rgba(0,0,0,0.35)");

    ctx.fillStyle = vignette;
    ctx.fillRect(0, 400, canvas.width, 200);
}


/* =========================================
   13. ROCKS
========================================= */

function drawRocks() {
    const settings = planetSettings[selectedPlanet];

    rocks.forEach(rock => {
        const x = rock.x - cameraX;

        if (x < -80 || x > canvas.width + 80) return;

        // Shadow.
        ctx.beginPath();
        ctx.ellipse(
            x + 5,
            rock.y + 12,
            rock.radius * 1.2,
            rock.radius * 0.5,
            0,
            0,
            Math.PI * 2
        );

        ctx.fillStyle = "rgba(0,0,0,0.38)";
        ctx.fill();

        // Rock shape.
        ctx.beginPath();
        ctx.moveTo(x - rock.radius, rock.y + 5);
        ctx.lineTo(x - rock.radius * 0.75, rock.y - rock.radius * 0.6);
        ctx.lineTo(x - rock.radius * 0.15, rock.y - rock.radius);
        ctx.lineTo(x + rock.radius * 0.55, rock.y - rock.radius * 0.65);
        ctx.lineTo(x + rock.radius, rock.y + 3);
        ctx.lineTo(x + rock.radius * 0.45, rock.y + rock.radius * 0.5);
        ctx.lineTo(x - rock.radius * 0.65, rock.y + rock.radius * 0.45);
        ctx.closePath();

        ctx.fillStyle = settings.rock;
        ctx.fill();

        ctx.strokeStyle = "rgba(255,255,255,0.12)";
        ctx.lineWidth = 1;
        ctx.stroke();

        // Rock highlight.
        ctx.beginPath();
        ctx.moveTo(x - rock.radius * 0.6, rock.y);
        ctx.lineTo(x - rock.radius * 0.15, rock.y - rock.radius * 0.7);
        ctx.lineTo(x + rock.radius * 0.4, rock.y - rock.radius * 0.5);

        ctx.strokeStyle = "rgba(255,255,255,0.15)";
        ctx.stroke();
    });
}


/* =========================================
   14. DESTINATION MARKER
========================================= */

function drawDestination() {
    const x = DESTINATION_X - cameraX;
    const y = 410;

    if (x < -100 || x > canvas.width + 100) return;

    const pulse = Math.sin(performance.now() * 0.003) * 5;

    ctx.save();

    ctx.shadowColor = "#8ce6ee";
    ctx.shadowBlur = 25;

    ctx.strokeStyle = "#8ce6ee";
    ctx.lineWidth = 2;

    ctx.beginPath();
    ctx.arc(x, y, 30 + pulse, 0, Math.PI * 2);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(x, y, 12, 0, Math.PI * 2);
    ctx.stroke();

    ctx.restore();

    ctx.fillStyle = "#d8fbff";
    ctx.font = "10px DM Mono";
    ctx.textAlign = "center";
    ctx.fillText("RESEARCH ZONE", x, y - 48);

    ctx.fillStyle = "rgba(140,230,238,0.15)";
    ctx.fillRect(x - 35, y + 35, 70, 2);
}


/* =========================================
   15. ROVER DRAWING
========================================= */

function drawRover() {
    const screenX = rover.x - cameraX;
    const screenY = rover.y;

    ctx.save();

    ctx.translate(screenX, screenY);
    ctx.rotate(rover.angle);

    // Rover shadow.
    ctx.beginPath();
    ctx.ellipse(0, 7, 38, 25, 0, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(0,0,0,0.45)";
    ctx.fill();

    // Wheels.
    const wheelPositions = [
        [-23, -20], [-23, 0], [-23, 20],
        [23, -20], [23, 0], [23, 20]
    ];

    wheelPositions.forEach(([x, y]) => {
        ctx.fillStyle = "#080b10";
        ctx.fillRect(x - 5, y - 8, 11, 16);

        ctx.strokeStyle = "#718093";
        ctx.lineWidth = 1;
        ctx.strokeRect(x - 5, y - 8, 11, 16);

        ctx.beginPath();
        ctx.moveTo(x - 3, y - 5);
        ctx.lineTo(x + 3, y + 5);
        ctx.strokeStyle = "rgba(255,255,255,0.2)";
        ctx.stroke();
    });

    // Main rover body.
    ctx.fillStyle = "#9ca8b7";
    ctx.fillRect(-21, -15, 42, 30);

    ctx.strokeStyle = "#d4e0ed";
    ctx.lineWidth = 1.5;
    ctx.strokeRect(-21, -15, 42, 30);

    // Body details.
    ctx.fillStyle = "#34465b";
    ctx.fillRect(-12, -9, 24, 18);

    ctx.fillStyle = "#8bbcff";
    ctx.fillRect(-7, -5, 14, 10);

    // Camera mast.
    ctx.fillStyle = "#b9c7d6";
    ctx.fillRect(10, -4, 13, 8);

    ctx.fillStyle = "#101b2a";
    ctx.beginPath();
    ctx.arc(24, 0, 5, 0, Math.PI * 2);
    ctx.fill();

    ctx.strokeStyle = "#8bbcff";
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // Front lights.
    ctx.fillStyle = "#d9f5ff";
    ctx.shadowColor = "#9cdbff";
    ctx.shadowBlur = 12;

    ctx.beginPath();
    ctx.arc(20, -10, 3, 0, Math.PI * 2);
    ctx.arc(20, 10, 3, 0, Math.PI * 2);
    ctx.fill();

    ctx.shadowBlur = 0;

    ctx.restore();
}


/* =========================================
   16. HUD OVERLAY ON CANVAS
========================================= */

function drawCanvasHUD() {
    ctx.fillStyle = "rgba(4,7,12,0.65)";
    ctx.fillRect(20, 20, 210, 47);

    ctx.strokeStyle = "rgba(150,180,220,0.25)";
    ctx.strokeRect(20, 20, 210, 47);

    ctx.fillStyle = "#8ce6ee";
    ctx.font = "10px DM Mono";
    ctx.textAlign = "left";
    ctx.fillText("SURFACE NAVIGATION", 34, 39);

    ctx.fillStyle = "#d5e0ee";
    ctx.font = "12px DM Mono";
    ctx.fillText(
        selectedPlanet === "mars" ? "MARS / TERRAIN 01" : "MOON / TERRAIN 01",
        34,
        55
    );

    // Compass.
    ctx.beginPath();
    ctx.arc(945, 50, 22, 0, Math.PI * 2);
    ctx.strokeStyle = "rgba(200,220,240,0.4)";
    ctx.stroke();

    ctx.fillStyle = "#dce8f6";
    ctx.font = "10px DM Mono";
    ctx.textAlign = "center";
    ctx.fillText("N", 945, 34);

    ctx.beginPath();
    ctx.moveTo(945, 40);
    ctx.lineTo(940, 55);
    ctx.lineTo(950, 55);
    ctx.closePath();
    ctx.fill();
}


/* =========================================
   17. RENDER GAME
========================================= */

function drawGame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawBackground();
    drawSurface();
    drawRocks();
    drawDestination();
    drawRover();
    drawCanvasHUD();
}


/* =========================================
   18. GAME LOOP
========================================= */

function gameLoop(timestamp) {
    const delta = Math.min(timestamp - (lastFrame || timestamp), 40);
    lastFrame = timestamp;

    if (gameState === "running") {
        elapsedTime = timestamp - startTime;
        updateRover();
    }

    drawGame();

    requestAnimationFrame(gameLoop);
}


/* =========================================
   19. INITIAL SETUP
========================================= */

createWorld();
drawGame();
requestAnimationFrame(gameLoop);