class Player{
    constructor(){
        this.index=null;
        this.distance=0;
        this.name=null;
    }
    getcount(){
        var pref=database.ref('playercount')
        pref.on("value",(data)=>{
            playercount=data.val()
        }
        )

    }

    updatecount(count){
        database.ref('/').update({
            playercount:count
        })

    }
    update(){
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
          name:this.name,
          distance:this.distance
        });
      }
      static getplayerinfo(){
          var gpi=database.ref('players')
          gpi.on("value",(data)=>{
              allplayers=data.val()
          })

      }
}