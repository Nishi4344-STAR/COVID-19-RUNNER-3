class Game{
constructor(){}


getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
    doctor = createSprite(200,390);
    covid19 = createSprite(500,390);
    doctor.addImage(doctor1);
    covid19.addImage(covid191);
    doctor.scale = 0.5;
    covid19.scale = 0.5;
}
}