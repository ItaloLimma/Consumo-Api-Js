function buscandoApi(){
    let id = document.querySelector('#txtID');
    let idNumber = Number(id.value);
    let res = document.querySelector('#resultado');

    if(idNumber > 0 && idNumber <= 500){
        fetch(`https://jsonplaceholder.typicode.com/comments/${idNumber}`)
        .then(response => response.json())
        .then(comments => {
    
        res.innerHTML = `<p>Id: ${comments.id}</p><br>  
                         <p>Nome: ${comments.name}</p><br>
                         <p>Email: ${comments.email}</p><br>
                         <p>Comentario: ${comments.body}</p>`;
            
        })
    } else {
        window.alert('Digite um valor entre 1 e 500!');

        res.innerHTML = '';
        // limpar();
    }
    id.focus();
}

function limpar(){
    let id = document.querySelector('#txtID');
    let res = document.querySelector('#resultado');
    
    id.innerHTML = '';

    res.innerHTML = `<p>Id: </p><br>  
                     <p>Nome: </p><br>
                     <p>Email: </p><br>
                     <p>Comentario: </p>`;
    
    /* Acrescentei duas formas diferentes de resetar os campos, usando esta função,
       serão setados com os dados que compõem a mensagem*/
}