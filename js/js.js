
let img = document.querySelector("img");
let block = document.querySelector(".img");

let forms = document.forms.forma;
let chek = forms.elements.radio;

console.log(chek);

for (let item of chek) {
  item.onclick = () => {
    let chek1 = chek[1].checked;
    let chek2 = chek[2].checked;
    if (chek2 == true) {
      block.style.opacity = 0;
      let set = setInterval(() => {
        block.style.transition = ".4s";
        block.style.opacity = 1;
        img.src = "./img/brsln.jpg";
      }, 200);
      setTimeout(() => {
        clearInterval(set);
      }, 230);
    } else if (chek1 == true) {
      block.style.opacity = 0;
      let set = setInterval(() => {
        block.style.transition = ".4s";
        block.style.opacity = 1;
        img.src = "./img/whsalon.jpg";
      }, 200);
      setTimeout(() => {
        clearInterval(set);
      }, 230);
    } else {
      block.style.opacity = 0;
      let set = setInterval(() => {
        block.style.transition = ".4s";
        block.style.opacity = 1;
        img.src = "./img/blsalon.jpg";
      }, 200);
      setTimeout(() => {
        clearInterval(set);
      }, 230);
    }
  };
}

const toggleSwitch = document.querySelector('#toggleSwitch')

toggleSwitch.addEventListener('change', () => {
  if (toggleSwitch.checked) {
    document.body.classList.add('page-transition-exit')
    setTimeout(() => {
      window.location.href = 'index.html';
    }, 500)
  }
});

