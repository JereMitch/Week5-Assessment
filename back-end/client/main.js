

function sound(e, link){
    let audio = document.getElementById("surprise")
    let src = document.createElement("source")
    src.src = link.href;
    audio.appendChild(src);
    audio.play();
    e.preventDefault();
  }
  

