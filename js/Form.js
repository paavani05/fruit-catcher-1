class Form{
    constructor(){
       this.input = createInput("enter name");
       this.button = createButton('play');
       this.greeting = createElement('h2');
       this.title = createElement('h2');
    }
    hide() {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
    }
    display() {
        this.title.html("FRUIT CATCHER");
        this.title.position(480, 200);
        this.title.style('font-size', '70px');
        this.title.style('color', 'lightyellow');
        this.input.position(653, 400);
        this.input.style('width', '200px');
        this.input.style('height', '20px');
        this.input.style('background', 'skyblue');
        this.button.position(651, 450);
        this.button.style('width', '210px');
        this.button.style('height', '40px');
        this.button.style('background', 'lightpink');

        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("hello " + player.name)
            this.greeting.position(480, 300);
            this.greeting.style('color', 'pink');
            this.greeting.style('font-size', '70px');
        });

    }
}