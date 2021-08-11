class Shoot{
    constructor(){
       

    }

    display(){

        

        this.button = createButton("Shoot");
        this.button.position(700, 30);
        this.button.style('background', 'yellow');

        this.button.mousePressed(()=>{
            bullet = createSprite(145, 220);
            bullet.addImage(bulletImg);
            bullet.scale = 0.095;
            bullet.velocityX = 3;
        })

        
    }

}