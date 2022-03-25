class sound{
    constructor(filename) {
        this.filename=filename;
        this.loaded=false;
        this.audio=new Audio('sound/'+ this.filename);
        this.audio.addEventListener('canplaythrough',()=> {
            this.loaded=true;
        });
        // this.audio.addEventListener('canplaythrough',()=>{
        //     this.loaded=true;
        // })
    }
    start( onEndCallback){
        if(this.loaded){
            this.audio.play();
            if(typeof onEndCallback == "function"){
                this.audio.onended=onEndCallback;
            }
        }
    }
    stop(){
      this.audio.pause()
    }
    onEnd(){

    }
}