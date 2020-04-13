class Form {
    constructor(){
      this.input=createInput("name")
        this.button=createButton("start")
        this.greeting = createElement('h3');
        this.title=createElement('h2')
    }
    hide(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
      this.title.hide() ;
    }
    display(){
        
        this.title.html("car racing")
        this.title.position(130,0)
        
        this.input.position(130,160)
       this.button.position(250,200)

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
      
             player.name = this.input.value();
            
            playercount=playercount+1;
            player.index=playercount
            player.update()
            player.updatecount(playercount);
            
           this.greeting.html("Hello " + player.name )
            this.greeting.position(130, 100)
          });
      
        }
    }

