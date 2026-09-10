document.addEventListener("DOMContentLoaded", () => {
  // 1. Seleciona os elementos corretos do HTML
  const likeBtn = document.querySelector(".left-actions .action-btn:first-child");
  const postMedia = document.querySelector(".post-media");
  const bookmarkBtn = document.querySelector(".post-actions > .action-btn"); // Último botão (salvar)

  if (!likeBtn) return;

  // 2. Variáveis de estado inicial
  let baseLikes = 259000000; // Valor inicial correspondente aos 259M do HTML
  let isLiked = false;

  // Garante que o texto dentro do botão esteja em uma <span> para fácil manipulação
  let likesCountSpan = likeBtn.querySelector(".likes-count");
  if (!likesCountSpan) {
    likesCountSpan = document.createElement("span");
    likesCountSpan.className = "likes-count";
    
    // Extrai o nó de texto "259M" do botão e move para dentro da <span>
    const textNode = Array.from(likeBtn.childNodes).find(
      (node) => node.nodeType === Node.TEXT_NODE && node.textContent.trim() !== ""
    );
    if (textNode) {
      likesCountSpan.textContent = textNode.textContent.trim();
      textNode.remove();
    }
    likeBtn.appendChild(likesCountSpan);
  }

  // 3. Função para formatar números grandes (ex: 1.5K, 259M)
  function formatLikes(num) {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1).replace(/\.0$/, "") + "K";
    }
    return num.toString();
  }

  // 4. Animação de "bounce" no ícone do botão
  function animateIcon(btn) {
    const svg = btn.querySelector("svg");
    if (svg) {
      svg.style.transform = "scale(1.3)";
      setTimeout(() => {
        svg.style.transform = "scale(1)";
      }, 150);
    }
  }

  // 5. Função para adicionar curtida
  function addLike() {
    if (!isLiked) {
      baseLikes++;
      isLiked = true;
      likeBtn.classList.add("liked");
      likesCountSpan.textContent = formatLikes(baseLikes);
      animateIcon(likeBtn);
    }
  }

  // 6. Evento de clique no botão de curtir (Toggle: Curte / Descurte)
  likeBtn.addEventListener("click", (e) => {
    e.stopPropagation();

    if (isLiked) {
      isLiked = false;
      baseLikes = Math.max(0, baseLikes - 1);
      likeBtn.classList.remove("liked");
      likesCountSpan.textContent = formatLikes(baseLikes);
      animateIcon(likeBtn);
    } else {
      addLike();
    }
  });

  // 7. Clique na mídia (imagem/vídeo) adiciona curtida
  if (postMedia) {
    postMedia.addEventListener("click", () => {
      addLike();
    });
  }

  // 8. Evento do botão Salvar (Bookmark)
  if (bookmarkBtn) {
    let isBookmarked = false;
    bookmarkBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      isBookmarked = !isBookmarked;
      bookmarkBtn.classList.toggle("bookmarked", isBookmarked);
      animateIcon(bookmarkBtn);
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
const likeBtn = document.querySelector(".like-btn");
const postMedia = document.querySelector(".post-media");
if (!likeBtn) return;

const likesCountSpan = likeBtn.querySelector(".likes-count");
const bookmarkBtn = document.querySelector(".bookmark-btn");

let isLiked = false;
let baseLikes = 0; // Inicializa o contador zerado

// Atualiza o texto visual inicial para 0[cite: 1]
if (likesCountSpan) {
likesCountSpan.textContent = "0";
}

// Formata números grandes (ex: 1000 -> 1.0K)[cite: 1]
function formatLikes(num) {
if (num >= 1000) {
return (num / 1000).toFixed(1) + "K";
}
return num.toString();
}

// Função para Incrementar a Curtida
function addLike() {
baseLikes++;
isLiked = true;
likeBtn.classList.add("liked");

if (likesCountSpan) {
likesCountSpan.textContent = formatLikes(baseLikes);
}

// Efeito visual de animação (bounce) no coração[cite: 1]
const svg = likeBtn.querySelector("svg");
if (svg) {
svg.style.transform = "scale(1.4)";
setTimeout(() => {
svg.style.transform = "scale(1)";
}, 150);
}
}

// Evento de clique no BOTÃO DE CORAÇÃO (Curte ou Descurte)
likeBtn.addEventListener("click", (e) => {
e.stopPropagation();

if (isLiked) {
// Se já estava curtido, descurte (-1)
isLiked = false;
baseLikes = Math.max(0, baseLikes - 1);
likeBtn.classList.remove("liked");
if (likesCountSpan) {
likesCountSpan.textContent = formatLikes(baseLikes);
}
} else {
// Se não estava curtido, adiciona curtida
addLike();
}
});

// Evento de clique na IMAGEM PRINCIPAL (Sempre aumenta likes)
if (postMedia) {
postMedia.addEventListener("click", (e) => {
e.stopPropagation();
addLike();
});
}

// Evento no botão de SALVAR (Bookmark)[cite: 1]
if (bookmarkBtn) {
let isBookmarked = false;
bookmarkBtn.addEventListener("click", (e) => {
e.stopPropagation();
isBookmarked = !isBookmarked;
bookmarkBtn.classList.toggle("bookmarked", isBookmarked);

const svg = bookmarkBtn.querySelector("svg");
if (svg) {
svg.style.transform = "scale(1.2)";
setTimeout(() => {
svg.style.transform = "scale(1)";
}, 150);
}
});
}
});
                  
