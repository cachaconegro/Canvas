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