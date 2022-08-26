const image_input = document.querySelector("#image_input");
const text_input = document.querySelector("#text_input");
const change_btn = document.querySelector("#change_text");
const text_output = document.querySelector("p");
var uploaded_image = "";

image_input.addEventListener("change", function(){
    const reader = new FileReader();
    reader.addEventListener("load", () =>{
        uploaded_image = reader.result;
        document.querySelector("#imagem").src = reader.result;
    });
    reader.readAsDataURL(this.files[0]);
})

change_btn.addEventListener("click", function(){
    text_output.innerHTML = text_input.value;
})