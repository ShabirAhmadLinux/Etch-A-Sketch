function createGrid(n=16){
    for(let i=0;i<n;i++){
        let rowdiv=document.createElement("div");
        rowdiv.classList.add("rowdiv")
        sketchPad.appendChild(rowdiv);
        for(let j=0;j<n;j++){
            let cellBlock=document.createElement("div");
            cellBlock.classList.add("cell");
            rowdiv.appendChild(cellBlock);
        }
    }
}
let sketchPad=document.querySelector(".container");
let gridSizeButton=document.querySelector(".gridSizeButton")
createGrid();
gridSizeButton.addEventListener('click',e=>{
  let num=parseInt(prompt("Enter number(0 to 100) for number x number grid"));  
  if(num>-1&&num<101){
    while(sketchPad.hasChildNodes()){
    sketchPad.removeChild(sketchPad.lastChild);
  }
    createGrid(num);
  }
  else{
    alert("Dude it should be a number between 0 to 100");
  }
});

    function changeBackground(e){
     
        if(e.target.className==="cell"){
          e.target.style.backgroundColor="green";
        }
    }
    sketchPad.addEventListener("mousedown",()=>{
      sketchPad.addEventListener("mouseover",changeBackground);
      sketchPad.addEventListener("mouseup",()=>{
        sketchPad.removeEventListener("mouseover",changeBackground);
      });
    });
  
     
