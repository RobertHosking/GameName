//The Player object & its methods
class Player {
  
    constructor(){
        //Setting to 16 if we want 16 bit game
        this.width = 16;
        this.height = 16;
        //Initalize position in middle of the screen
        this.pos = createVector(width/2, height/2);
        this.moveSpeed = 5;
    }

    controls(){
        if(keyIsDown(RIGHT_ARROW)){
            this.pos.x += this.moveSpeed;
        } else if(keyIsDown(LEFT_ARROW)){
            this.pos.x -= this.moveSpeed;
        } else if(keyIsDown(UP_ARROW)){
            this.pos.y -= this.moveSpeed;
        } else if(keyIsDown(DOWN_ARROW)){
            this.pos.y += this.moveSpeed;
        }
    }

    //Players render function to be called on each draw 
    render() {
        this.controls();
        rect(this.pos.x, this.pos.y, this.width, this.height);
    }
}
