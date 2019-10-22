import Renderable from './renderable.js'

const fotoImg = '/img/player.png';

const main = (canvas) => {

    const context = canvas.getContext('2d'); 
    
    let lastTime = new Date().getTime(); 

    const foto = new Renderable(fotoImg,18,7,9,4,14);

    const update = () => {
        
        let time = new Date().getTime();

        const {width, height} = canvas

        context.clearRect(0,0, width, height);
        
        foto.pintar(context);

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


