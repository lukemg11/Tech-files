function createParagraph(){
    const para = document.createElement("p");
    const para1 = document.createElement("p");
    const para2 = document.createElement("p");
    const para3 = document.createElement("p");
    para.textContent = "A lifelong friend told me to switch to Python when";
    para1.textContent = "I looked at him dead in the eye, said a goodbye";
    para2.textContent = "With my mind burning as hot as lava";
    para3.textContent = "I told him I would stick to Java";
    document.body.appendChild(para);
    document.body.appendChild(para1);
    document.body.appendChild(para2);
    document.body.appendChild(para3);
}

const buttons = document.querySelectorAll('button');

for(const button of buttons){
    button.addEventListener("click", createParagraph);
}