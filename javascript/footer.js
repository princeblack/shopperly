const help = document.querySelector('.help');
const footerHelpList = document.querySelectorAll('.footerHelp li');
const img = document.querySelector('.help img');

// toggle show help items
help.addEventListener('click',()=>{
    for (let index = 0; index < footerHelpList.length; index++) {
        footerHelpList[index].classList.toggle('show')
    }
    if (img.src.includes("remove.svg")) {
        img.src ="../image/add.svg";
    } else {
        img.src ="../image/remove.svg";
    }
})


const about = document.querySelector('.about')
const footerAboutList = document.querySelectorAll('.footerAbout li');
const imgAbout = document.querySelector('.about img');

// toggle show About items
about.addEventListener('click',()=>{
    for (let index = 0; index < footerAboutList.length; index++) {
        footerAboutList[index].classList.toggle('show')
    }
    if (imgAbout.src.includes("remove.svg")) {
        imgAbout.src ="../image/add.svg";
    } else {
        imgAbout.src ="../image/remove.svg";
    }
})

