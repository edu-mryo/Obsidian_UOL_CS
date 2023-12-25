function setup() {
    createCanvas(1024, 576);

}

function draw() {
    for(var i = 0; i < 1000; i++){
        if( i < 200){
          ellipse(random(width), random(height), 20, 20);    
        }else{
          rect(random(width), random(height), 20, 20);    
        }
        
        if(i >= 800){
          ellipse(random(width), random(height), 20, 20);
        }
      }
      
}
