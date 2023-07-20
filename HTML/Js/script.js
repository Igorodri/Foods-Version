function logar(){
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;
    var alert = document.getElementById('alert').style.display ='none';
    var alert1 = document.getElementById('alert');


    if(email=="admin@gmail.com" && senha == "senha123"){
        alert1.innerHTML = "Login efetuado com sucesso!"
        email = document.getElementById('email').style.borderColor = 'green';
        senha = document.getElementById('senha').style.borderColor = 'green';
        alert = document.getElementById('alert').style.display = 'block';
        alert1 = document.getElementById('alert').style.color = 'green'

    }else{
        alert1.innerHTML = "E-mail ou Senha incorretos"
        email = document.getElementById('email').style.borderColor = 'red';
        senha = document.getElementById('senha').style.borderColor = 'red';
        alert = document.getElementById('alert').style.display = 'block';
        alert1 = document.getElementById('alert').style.color = 'red'
    }
}

function feedback(){
    var nome = document.getElementById('nome').value;
    var tel = document.getElementById('tel').value;
    var senha = document.getElementById('senha').value;
    var assunto = document.getElementById('assunto').value;
    var alert = document.getElementById('alert').style.display ='none';
    var alert1 = document.getElementById('alert');

    if(nome != "" && tel != "" && senha != "" && assunto!= ""){
        alert1.innerHTML = "Mensagem enviada com sucesso! Agradecemos o Feedback";
        alert = document.getElementById('alert').style.color = 'green';
        alert = document.getElementById('alert').style.display = 'block';
        nome = document.getElementById('nome').style.borderColor = 'green';
        email = document.getElementById('email').style.borderColor = 'green';
        senha = document.getElementById('senha').style.borderColor = 'green';
        assunto = document.getElementById('assunto').style.borderColor = 'green';
    }

    if(nome == ""){
        alert1.innerHTML = "Campo não preenchido";
        alert = document.getElementById('alert').style.color = 'red';
        alert = document.getElementById('alert').style.display = 'block';
        nome = document.getElementById('nome').style.borderColor = 'red';
    }else{
        nome = document.getElementById('nome').style.borderColor = 'green';
    }

    if(tel == ""){
        alert1.innerHTML = "Campo não preenchido";
        alert = document.getElementById('alert').style.color = 'red';
        alert = document.getElementById('alert').style.display = 'block';
        tel = document.getElementById('tel').style.borderColor = 'red';
    }else{
        tel = document.getElementById('tel').style.borderColor = 'green';
    }

    if(senha == ""){
        alert1.innerHTML = "Campo não preenchido";
        alert = document.getElementById('alert').style.color = 'red';
        alert = document.getElementById('alert').style.display = 'block';
        senha = document.getElementById('senha').style.borderColor = 'red';
    }else{
        senha = document.getElementById('senha').style.borderColor = 'green';
    }

    if(assunto == ""){
        alert1.innerHTML = "Campo não preenchido";
        alert = document.getElementById('alert').style.color = 'red';
        alert = document.getElementById('alert').style.display = 'block';
        assunto = document.getElementById('assunto').style.borderColor = 'red';
    }else{
        assunto = document.getElementById('assunto').style.borderColor = 'green';
    }

    
}