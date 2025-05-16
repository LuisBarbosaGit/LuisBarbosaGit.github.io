const observer = new IntersectionObserver((items, observer) => {
  items.forEach(item => {
    if (item.isIntersecting) {
      setTimeout(() => {
        item.target.classList.add('show');
        observer.unobserve(item.target); // para parar de observar após aparecer
      }, 200);
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
  container.forEach((item =>{
    setTimeout(() => {
      observer.observe(item)
      
    }, i  * 1800);
    i++
    }))   
  }

