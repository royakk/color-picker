 
    window.addEventListener("click",console.log("hi"));
    document.getElementById('RDiv').addEventListener("click", scrlR);
    document.getElementById('GDiv').addEventListener("click", scrlG);
    document.getElementById('BDiv').addEventListener("click", scrlB);

    document.getElementById('numR').addEventListener("onchang", change);
    document.getElementById('numG').addEventListener("onchang", change);
    document.getElementById('numB').addEventListener("onchang", change);
    
    function scrlR(){
        let pos1=this.clientX;
        movingR( event);
    }
    function scrlG(){
        let pos1=this.clientX;
        movingG( event);     
        
          
    }
    function scrlB(){
        let pos1=this.clientX;
        movingB( event);
        
    }

    function movingR(e){
        e.preventDefault();
        elmnt = document.getElementById("scrollR");
        bigDiv = document.getElementById("RDiv");
        
        pos1= e.clientX;
        if (pos1>0 && pos1 <= 255){
        elmnt.style.left = ( pos1 - bigDiv.offsetLeft) + "px";
        document.getElementById('numR').value=pos1
        change();
        }
    }
    function movingG(e){
        e.preventDefault();
        pos1= e.clientX;
        elmnt = document.getElementById("scrollG");
        bigDiv = document.getElementById("GDiv");
        document.getElementById('numG').value=pos1

        
        pos1= e.clientX;
        if (pos1>0 && pos1 <= 255){
        elmnt.style.left = ( pos1 - bigDiv.offsetLeft) + "px";
        change();
        }
    }
    function movingB(e){
        e.preventDefault();
        elmnt = document.getElementById("scrollB");
        bigDiv = document.getElementById("BDiv");
        pos1= e.clientX;{
        if (pos1>0 && pos1 <= 255)
        elmnt.style.left = ( pos1 - bigDiv.offsetLeft) + "px";
        document.getElementById('numB').value=pos1

        change();
        }
    }
    
    
    function rgb(R,G,B){
        let bgColor = "rgb(" + R + "," + G + "," + B + ")";
        document.getElementById('lable1').style.backgroundColor= bgColor
    }
    
    function change(){
        let R= document.getElementById('numR').value;
        let G= document.getElementById('numG').value;
        let B= document.getElementById('numB').value;
      if (R==null || R=="" ){
            R=0;
           
        }
         if(G==null || G==""  ){
            G=0;
        }
         if(B==null || B==""){
            B=0;
        }
         { 
           document.getElementById('lable1').style.backgroundColor=rgb(R,G,B);
}
    }