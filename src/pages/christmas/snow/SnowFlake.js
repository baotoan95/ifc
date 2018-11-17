class Snowflake {
    flakes;
    flakesTotal = 250;
    static wind = 0;
    mouseX;
    mouseY;

    constructor(size, x, y, vx, vy) {
        this.size = size;
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.div = document.createElement('div');
        this.div.classList.add('snowflake');
        this.div.style.width = this.size + 'px';
        this.div.style.height = this.size + 'px';
    }

    move = () => {

        this.x += this.vx + Math.min(Math.max(Snowflake.wind, -10), 10);
        this.y += this.vy;

        // Wrap the snowflake to within the bounds of the page
        if (this.x > window.innerWidth + this.size) {
            this.x -= window.innerWidth + this.size;
        }

        if (this.x < -this.size) {
            this.x += window.innerWidth + this.size;
        }

        if (this.y > window.innerHeight + this.size) {
            this.x = Math.random() * window.innerWidth;
            this.y -= window.innerHeight + this.size * 2;
        }
    };

    draw = () => {
        this.div.style.transform =
            this.div.style.MozTransform =
            this.div.style.webkitTransform =
            'translate3d('.concat(this.x).concat('px').concat(',').concat(this.y).concat('px,0)');
    };

    update = () => {
        for (var i = this.flakes.length; i--;) {
            var flake = this.flakes[i];
            flake.move();
            flake.draw();
        }
        requestAnimationFrame(this.update);
    }

    init = (container) => {
        this.flakes = [];

        for (var i = this.flakesTotal; i--;) {
            var size = (Math.random() + 0.2) * 5 + 1;
            var flake = new Snowflake(
                size,
                Math.random() * window.innerWidth,
                Math.random() * window.innerHeight,
                Math.random() - 0.5,
                size * 0.3
            );
            container.appendChild(flake.div);
            this.flakes.push(flake);
        }

        container.onmousemove = (event) => {
            this.mouseX = event.clientX;
            this.mouseY = event.clientY;
            Snowflake.wind = (this.mouseX - window.innerWidth / 2) / window.innerWidth * 6;
        };

        container.ontouchstart = (event) => {
            this.mouseX = event.targetTouches[0].clientX;
            this.mouseY = event.targetTouches[0].clientY;
            event.preventDefault();
        };

        window.ondeviceorientation = (event) => {
            if (event) {
                Snowflake.wind = event.gamma / 10;
            }
        };

        this.update();
    }
}

export default Snowflake;