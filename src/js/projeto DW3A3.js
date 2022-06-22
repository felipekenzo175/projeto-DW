const btn = document.querySelector("#botao_id");

btn.addEventListener("click", function(e) {
    
    e.preventDefault(); /*para parar o envio do formulário */

    const firstname_id = document.querySelector("#firstname_id");

    const lastname_id = document.querySelector("#lastname_id");

    const birthdate_id = document.querySelector("#birthdate_id");

    const state_id = document.querySelector("#state_id");

    const texto_id = document.querySelector("#texto_id");

    const radio_input = document.querySelector('input[name="criterioavaliacao"]:checked');

    const value = firstname_id.value;

    const value2 = lastname_id.value;

    const value3 = birthdate_id.value;

    const value4 = state_id.value;

    const value5 = texto_id.value;

    const value6 = radio_input.value;

    console.log(value);

    console.log(value2);

    console.log(value3);

    console.log(value4);

    console.log(value5);

    console.log(value6);

});