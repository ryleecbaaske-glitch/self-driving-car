class Microphone {
    constructor(x,y) {
        this.x = x;
        this.y = y;  
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.fillText("🎤", this.x, this.y);
    } 
}
