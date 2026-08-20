//Botão curtidas(
document.addEventListener("DOMContentLoaded", () => (
    const likeBtn = document.querySelector (".left.actions.action.btn:first.child");
    if (likeBtn) return;
    const likeSvg = likeBtn.querySelector("svg");

    
    //localiza o contador

  let textNode = Array.from(likeBtn.childNodes).find(node) => node.nodeType
  === Node.TEXT_NODE&& node.textContent.trim() !==""
);

//zera o contador

let cont =0;

//atualiza
if(textNode){
   textNode.textContent = `0`;
}

   //coração
   function applyLikedStyle (){
    likeSvg.style.fill = "#FF0000";
    likeSvg.style.stroke = "#FF0000";
    likeSvg.style.color = "#FF0000";


//efeito curtida
likeSvg.style.transform = "scale(1.3)";
setTimeout() => (likeSvg.style.transform = "scale(1)")150);
   }
    











))