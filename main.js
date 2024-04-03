// Sidebar Animation 
let btn = document.getElementById('btn');
let toggleBar = document.getElementById('sideBar');

btn.addEventListener("click", () => {

  if (toggleBar.classList.contains('hideBar') == false) {
    toggleBar.classList.add("hideBar");
    btn.classList.remove('fa-bars');
    btn.classList.add('fa-times');
  } else {
    toggleBar.classList.remove("hideBar");
    btn.classList.remove('fa-times')
    btn.classList.add('fa-bars');

  }
})
// Text Animation 
var typed = new Typed('#element', {
  strings: ['Developer', 'Programmer', 'Designer'],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true
});


// Number Increase
let def1 = 10;
let html = 85;

let def2 = 10;
let css =  80;

let def3 = 10;
let js = 78;

let timing1 = setInterval(() => {
  def1++;
  if (def1 == html) {
    clearInterval(timing1);
  }
  document.getElementById('html').innerText = def1 + '%';
}, 24)

let timing2 = setInterval(() => {
  def2++;
  if (def2 == css) {
    clearInterval(timing2);
  }
  document.getElementById('css').innerText = def2 + '%';
}, 24)

let timing3 = setInterval(() => {
  def3++;
  if (def3 == js) {
    clearInterval(timing3);
  }
  document.getElementById('java').innerText = def3 + '%';
}, 24)


let subBtn = document.getElementById('subtn');
let popbtn = document.getElementById('ok');
popbtn.addEventListener("click", ()=>{
  document.getElementById('box').style.display = "none";
})
subBtn.addEventListener("click", () => {
  document.getElementById('box').style.display = "block";
})



//Share button
let fb = document.getElementById('fbs');
let reddit = document.getElementById('ins');
let twit = document.getElementById('yous');
let wa = document.getElementById('whats');
let pin = document.getElementById('pins');
let lindin = document.getElementById('linkdin');
let url = window.location.href;

fb.addEventListener('click', ()=>{
let fbshare =  `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;

  window.open(fbshare, '_blank');
  });
  /*
reddit.addEventListener('click', () => {
  let redshare = `https://reddit.com/submit?url=${encodeURIComponent(url)}`;

  window.open(redshare, '_blank');
});*/


twit.addEventListener('click', () => {
  let twitshare = `https://twitter.com/share?url=${encodeURIComponent(url)}`;

  window.open(twitshare, '_blank');
});


wa.addEventListener('click', () => {
  let wsshare = `https://api.whatsapp.com/send?text=${encodeURIComponent(url)}`;

  window.open(wsshare, '_blank');
});


pin.addEventListener('click', () => {
  let pinshare = `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(url)}`;

  window.open(pinshare, '_blank');
});


lindin.addEventListener('click', () => {
  let linshare = `https://www.linkedin.com/shareArticle?url=${encodeURIComponent(url)}`;

  window.open(linshare, '_blank');
});

