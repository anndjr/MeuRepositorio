<canvas id="canvas" width="360" height="360"></canvas>

    window.onload = function(){
        ctx = canvas.getContext("2d");
        canvas = document.getElementById("canvas");
        document.addEventListener("keydown", function(e){
            console.log(e.keyCode);
            
            if (e.keyCode===37 ){
                     velX = -1;
                     velY = 0;
            }
                      else if (e.keyCode===38 ){
                     velY = -1;
                     velX = 0;
                     }
                     else if(e.keyCode===39 ){
                     velX = 1;
                     velY = 0;
                     }
                     if (e.keyCode===40 ){
                     velY = 1;
                     velX= 0;
                     }
    
        });
        setInterval(jogo, 100);
    }
    positionX = 10;
    positionY = 10;
    foodX = 15;
    foodY = 15;
    velX = 0;
    velY = 0;
    grid = 20;
    snake = [];
    tam = 5;
    function jogo(){
        positionX += velX;
        positionY +=velY;
        console.log(positionX);
        if(positionX < 0){
            positionX = grid;
        }
        if(positionX > grid){
            positionX = 0; 
        }
        if(positionY < 0){
            positionY = grid;
        }
        if(positionY > grid){
            positionY = 0; 
        }
        
        ctx.fillStyle = "#1568db";
        ctx.fillRect(0,0, canvas.width, canvas.height);
        
        
        ctx.fillStyle = "black";
        for(var i=0; i < snake.length; i ++){
            ctx.fillRect(snake[i].x * grid, snake[i].y * grid, grid - 1 , grid - 1);
            if(snake[i].x == positionX && snake[i].y == positionY){
                tam = 5;
            }
        }  
        snake.push({x: positionX, y: positionY});
        while(snake.length > tam){
            snake.shift();
        }
        ctx.fillStyle = "red";
        ctx.fillRect(foodX* grid, foodY * grid, grid - 1, grid - 1);
        if(positionX == foodX && positionY == foodY){
            tam++;
            foodX = Math.floor(Math.random() * grid);
            foodY = Math.floor(Math.random() * grid);
        }
        
    }
