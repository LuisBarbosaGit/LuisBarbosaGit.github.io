const observer = new IntersectionObserver((items, observer) => {
  items.forEach((item, index) => {
    if (item.isIntersecting) {
      setTimeout(() => {
        item.target.classList.add('show');
        observer.unobserve(item.target); // para parar de observar após aparecer
      }, index * 1000);
    }
  });
},  {
  threshold: 0.8, // quando 20% do elemento estiver visível
});

document.addEventListener('DOMContentLoaded', () => {
    const title = document.getElementById('title');
    observer.observe(title)
})

document.addEventListener('DOMContentLoaded', () => {
    const containt = document.querySelectorAll('#tec-cards');
    showItem(containt)
})

//Função para enviar cada um dos cards com um intervalo de tempo entre si
function showItem(container) {
  let i = 1
  setTimeout(() => {
    container.forEach((item, index) =>{
      observer.observe(item)
      
      })   
  }, 400);
  }

function message() {
  document.addEventListener('click', () =>{
    window.location.href = "https://w.app/luisbarbosa"
  })
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('scroll').addEventListener('click', () => {
    const container = document.getElementById('main-tec-tittle');
    if (container) {
      setTimeout(() => {
        container.scrollIntoView({behavior: "smooth"})
      }, 100);
    }
  })
})
