import Renderable from './renderable.js.js'

export default class GameObject {
    constructor() {
        this.position = [0,0];
        this.children = [];
    }
    addChaild(child){
        this.children.push(child)
    }

    draw(context){
        context.save();

        context.translate(this.position[0], this.position[1]);
        


        this.children.forEach(child =>{
            if(child instanceof GameObject){
                child.draw(context)
            }
            if(child instanceof Renderable){
                child.draw(context)
            }
        })
        
        context.restore();
    }
}