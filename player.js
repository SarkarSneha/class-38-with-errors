class Player{
    constructor(){
        this.index=null;
        this.name=null;
        this.distance=0;
    }
    getCount(){
        var playerCountRef=database.ref('playercount').on("value",(data)=>{
            playercount=data.val()
        })
    }
    updateCount(count){
        database.ref('/').update({
            playercount:count
        })
    }
    update(){
    var playerIndex="players/player"+this.index
    database.ref(playerIndex).set({
        name:this.name,
        distance:this.distance
    })    
    }
    static getPlayerInfo(){
        var playerInfo= database.ref('players').on("value",(data) =>{
allPlayers=data.val()
        })
    }
}