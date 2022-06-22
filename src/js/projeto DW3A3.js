const btn = document.querySelector("#botao_id");

btn.addEventListener("click", function(e) {
    
    e.preventDefault(); /*para parar o envio do formulário. */

    const firstname_id = document.querySelector("#firstname_id"); /* pegando o valor do nome. */

    const lastname_id = document.querySelector("#lastname_id"); /* pegando o valor do sobrenome. */

    const birthdate_id = document.querySelector("#birthdate_id"); /* pegando o valor da data de aniversário. */

    const state_id = document.querySelector("#state_id"); /* pegando o valor do estado. */

    const texto_id = document.querySelector("#texto_id"); /* pegando o valor da caixa de texto. */

    const radio_input = document.querySelector('input[name="criterioavaliacao"]:checked'); /* pegando qual valor o usuario escolheu. */

    /* Atribuindo os valores para as variáveis. */

    const value = firstname_id.value;

    const value2 = lastname_id.value;

    const value3 = birthdate_id.value;

    const value4 = state_id.value;

    const value5 = texto_id.value;

    const value6 = radio_input.value;

    /* Mostrando os valores no Console. */

    console.log(value);

    console.log(value2);

    console.log(value3);

    console.log(value4);

    console.log(value5);

    console.log(value6);

});