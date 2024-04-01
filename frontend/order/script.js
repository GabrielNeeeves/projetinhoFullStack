const select = document.getElementById("produtos");
const conteudo = document.getElementById("conteudo");
const quantidade = document.getElementById("quantidade");
const addBtn = document.getElementById("addBtn");

addBtn.addEventListener('click', function(e) {
    e.preventDefault();

    if(quantidade.value == 0) {
        window.alert('Quantidade inválida. Tente novamente')
    } else {
        const listaProd = document.createElement('p');
        listaProd.textContent = `${quantidade.value}x ${select.value}`;
        
        conteudo.appendChild(listaProd);
        
        console.log(select.value);
    }
    
})
    
