class Microphone {
    constructor(x,y) {
        this.x = x;
        this.y = y;  
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.font = "50px Arial";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText("🎤", this.x, this.y);
    } 
}
