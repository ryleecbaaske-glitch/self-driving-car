const canvas=document.getElementById("myCanvas");
canvas.width=200;

const ctx = canvas.getContext("2d");
const road=new Road(canvas.width/2,canvas.width*0.9);
const car=new Car(road.getLaneCenter(1),100,30,50);
const microphone=new Microphone(road.getLaneCenter(1),-400);

const soundWaves = [];
setInterval(() => {
    soundWaves.push(new soundWave(car.x, car.y));
}, 1000);

animate();

function animate(){
    car.update();
    for(const soundWave of soundWaves){
        soundWave.update();
    }
microphone.recieve(soundWaves);


    canvas.height=window.innerHeight;

    ctx.save();
    ctx.translate(0,-car.y+canvas.height*0.7);

    road.draw(ctx);
    microphone.draw(ctx);
    car.draw(ctx);
    for(const soundWave of soundWaves){
        soundWave.draw(ctx);
    }

    ctx.restore();
    requestAnimationFrame(animate);
}