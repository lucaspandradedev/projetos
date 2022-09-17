
$(function(){
    $.ajax({
        url:'https://api.b7web.com.br/cinema/',
        type: 'GET',
        dataType: 'json',
        beforeSend: function(){
            $('.filmes').html('<div class="col-md-12">Carengando...</div>');
        },
        success: function(json){
            var html = '';

            for(var i in json){
                html += '<div class="col-md-4"><div class="filme"><img class="img-fluid" src="'+json[i].avatar+'" /><h6 class="text-dark mt-3">'+json[i].titulo+'</h6></div></div>'
            }

            $('.filmes').html(html);
        }
    });
});




// html += '<div class="col-md-4"><div class="filme"><img class="img-fluid" src="'+json[i].avatar+'" /><h4>+'`${lista[i].titulo}`'+</h4></div></div>'

//outra maneira de fazer 

/*
(async function () {
    document.querySelector(".filmes").innerHTML = "carregando...";
    let req = await fetch("https://api.b7web.com.br/cinema/");
    let json = await req.json();
    console.log(json);
    montarBlog(json);
 
  function montarBlog(lista) {
    let html = "";

    for (let i in lista) {
      html +=
        `<div class="col-md-4  bg-light p-3"><div class="filme"><img class="img-thumbnail"src="${lista[i].avatar}"/><h5 class="mb-3 text-warning text-center">${lista[i].titulo}</h5></div></div>`;
    }
    document.querySelector(".filmes").innerHTML = html;
  }
})();
*/




//Abaixo eu estava apenas testando códigos
/*
(async function filmesCartaz() {
    let req = await fetch("https://api.b7web.com.br/cinema/");
    let json = await req.json();
    console.log(json);
    escreverNaTela(json);
})();

function escreverNaTela(lista){
    let html = "";

    for (let i in lista) {
      html += `<h3>`+'Título do filme'+`</h3>` + `<br>` + `<div>`+`${lista[i].titulo}`+`</div>`
    }
    document.querySelector('.teste').innerHTML = html;
};*/