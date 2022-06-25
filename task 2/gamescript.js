function draw() {
    const canvas = document.getElementById('game');
    if (canvas.getContext) {
      const ctx = canvas.getContext('2d');
      for (var i =0; i<10; i++){
        for(var j=0; j<10; j++){
          ctx.beginPath();
          ctx.moveTo(j*30, 1.5);
          ctx.lineTo((j+1)*30, 1.5);
          ctx.lineTo(15*(2*j+1),20.5);
          ctx.fillStyle='red';
          ctx.fill();
          ctx.fillRect(0,0,800,1.5+0.2*j);

        
    }
  }
    }
   

}

function tile(){
  const canvas = document.getElementById('game');
  if(canvas.getContext){}
  const dw = canvas.getContext('2d');
  for(var j=0; j<8; j++){
    const dw=canvas.getContext("2d");
    setTimeout(() => {
      for(var k=0; k<8; k++){
     
        dw.fillStyle='red';
        dw.fill();
        dw.fillRect((Math.random()*800),(Math.random()*509)+41,(Math.random()*21)+15,3);
  
    }
    }, 100);
}
}
function platform(){
  const canva = document.getElementById('game');
  if (canva.getContext){
      const ct = canva.getContext('2d');
      ct.beginPath();
      ct.arc(135,40,6,0,0.5*Math.PI)
      ct.arc(135,40,6,0.5*Math.PI, Math.PI)
      ct.arc(135,40,6,Math.PI,1.5*Math.PI)
      ct.arc(135,40,6,1.5*Math.PI,2*Math.PI)
      ct.fillStyle= "blue";
      ct.fill();
}
}
// function draws() {
//   const canvas = document.getElementById('game');
  
//     const ctx = canvas.getContext('2d');

//     // Cubic curves example
//     ctx.beginPath();
//     ctx.moveTo(20, 25);
//     ctx.bezierCurveTo(20, 22, 18, 25, 14, 25);
//     ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
//     ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
//     ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
//     ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
//     ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);
//     ctx.fill();
//     ctx.fillStyle='blue'
//   }


  
  platform();
  
  tile();
  draw();
  // for(var i=0; i<8;i++){
  // setTimeout(platform,100)
  // // }
