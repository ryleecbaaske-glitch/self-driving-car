class soundwave {
    constructor (x,y) {
        this.x = x;
        this.y = y;
        this.radius = 0;
    }

    update() {
        this.radius += 10;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.strokestyle = "red";
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.stroke();
    }
}