const audioCtx = new (window.Audiocontext || window.webkitAudioContext)();

class soundwave {
    constructor (x,y) {
        this.x = x;
        this.y = y;
        this.radius = 0;
        this.played = false;
    }

    play(duration = 0.5) {
        if (this.played) return;

        const osc = audioCtx.createOscillator();
        osc.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + duration);
        this.played = true;
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