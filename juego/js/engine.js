import GameObject from './gameObject.js'

export default class Engine {
    constructor() {
        document.body.style.margin ="0px";
        document.body.style.overflow = "hidden";
        this.canvas = document.createElement("canvas");
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        document.body.appendChild(this.canvas);

        this.context = this.canvas.getContext("2d");

        this.lastTime = new Date().getTime();

        this.objs = [];

        window.requestAnimationFrame(this.loop.bind(this))
    }
    addObject(obj){
        if(obj instanceof GameObject){
            this.objs.push(obj)
        }else{
            console.error('Objeto adjuntado es invalido.no esta en el Gameobject');           
        }
    }
    loop(){
        const time = new Date().getTime();
        let dt = (time - this.lastTime)/1000;

        this.context.fillStyle='#303030';
        this.context.fillRect(0,0,this.canvas.width,this.canvas.height);

        this.objs.forEach(obj =>{
            obj.draw(this.context)
        })
        
        this.lastTime = time;
        window.requestAnimationFrame(this.loop.bind(this))
    } 
}