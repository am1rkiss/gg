let particles = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    for (let i = 0; i < 300; i++) {
        particles.push(new Particle());
    }
}

function draw() {
    background(0);
    for (let p of particles) {
        p.update();
        p.show();
    }
}

class Particle {
    constructor() {
        this.angle = random(TWO_PI);
        this.radius = random(50, 150);
        this.x = width / 2 + this.radius * cos(this.angle);
        this.y = height / 2 + this.radius * sin(this.angle);
        this.size = random(5, 15);
        this.speed = random(0.01, 0.05);
    }

    update() {
        this.angle += this.speed;
        this.x = width / 2 + this.radius * cos(this.angle) * (1 - sin(this.angle) * sin(this.angle));
        this.y = height / 2 - this.radius * sin(this.angle) * (abs(cos(this.angle)) ** 0.5);
    }

    show() {
        fill(255, 20, 147);
        noStroke();
        ellipse(this.x, this.y, this.size);
    }
}
