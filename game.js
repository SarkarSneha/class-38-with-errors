class Game{
    constructor(){

    }
    getState(){
        var gamestateRef=database.ref('gamestate').on("value",(data)=>{
            gamestate=data.val()
        })
    }
    update (state){
        database.ref('/').update({
            gamestate:state
        })
    }
    start(){
    if (gamestate===0)
    {
        player=new Player()
        player.getCount()
        form=new Form()
        form.display() 
    }
    car1=createSprite(100,200)
    car2=createSprite(300,200)
    car3=createSprite(500,200)
    car4=createSprite(700,200)
    cars=[car1,car2,car3,car4]
    }
    play(){
        form.hide()
        text("GAME START",120,100)
        Player.getPlayerInfo()
        if(allPlayers!==undefined){
          // var displayPos=130
          var index=0,x=0,y
            for(var i in allPlayers){
              index= index+1
              x=x+200
              y=displayHeight-allPlayers[i].distance
              cars[index-1].x=x
              cars[index-1].y=y
              if(index===player.index){
                  cars[index-1].shapeColor="red"
              }
        }
        }
        if(keyIsDown(UP_ARROW )&&player.index!==null){
       player.distance=player.distance+50
       player.update()
        }
        drawSprites()
    }
}