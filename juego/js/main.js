import Renderable from './renderable.js'

class Game {
    constructor() {
        this.posicion = [0,0];
        this.children = [];
    }
    pintar(context){
        context.save();
        context.clearRect(0,0, canvas.width, canvas.height);
        context.translate(this.posicion[0],this.posicion[1]);

        context.fillStyle='red';
        context.fillRect(0,50,30,30);

        context.restore();
        
        this.posicion[0] += 1;
        this.posicion[1] += 1;
    }
}
let fotoImg = '/img/player.png';
async function main(canvas) {
    const context = canvas.getContext('2d'); 
    let lastTime = new Date().getTime(); 

    
    let foto = new Renderable(fotoImg,18,7,9,4,14);


    // const input = new Input();
    function update(){
        let time = new Date().getTime();
        let dt = (time - lastTime) / 1000;
 
        // console.log(dt);

        
        context.clearRect(0,0, canvas.width, canvas.height);
        
        foto.pintar(context);
       




        // if (input.isKeyDown('ArrowUp')){
        //     if(jugador.margenes(this.x,this.y + 0.1) == false){
        //         jugador.y -= 0.1
        //     }
        // }
        // if (input.isKeyDown('ArrowLeft')){
        //     jugador.x -= 0.1
        // }
        // if (input.isKeyDown('ArrowRight')){
        //     jugador.x += 0.1
        // }
        // if (input.isKeyDown('ArrowDown')){
        //     jugador.y += 0.1
        // }

        lastTime = time   
        requestAnimationFrame(update);
    } 
    update()
}
const canvas = document.getElementById('canvas');
main(canvas);

// ArrowLeft 
// ArrowUp 
// ArrowRight 
// ArrowDown


