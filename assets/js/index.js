const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

document.getElementById('buy-ticket-btn').href='https://linktr.ee/tedxmmu2023'
document.getElementById('speaker-section').style.pointerEvents = "none"
document.getElementById('speaker-section').style.filter = "blur(10px)"

var elements = document.getElementsByClassName('twitter');
for(var i=0; i<elements.length; i++) { 
  elements[i].addEventListener('click', function() {
    window.open("https://twitter.com/TEDxMMU2023")
  })
}

var elements1 = document.getElementsByClassName('linkedin');
for(var i=0; i<elements1.length; i++) { 
  elements1[i].addEventListener('click', function() {
    window.open("https://www.linkedin.com/company/tedxmmu/")
  })
}

var elements2 = document.getElementsByClassName('facebook');
for(var i=0; i<elements2.length; i++) { 
  elements2[i].addEventListener('click', function() {
    window.open("https://www.facebook.com/TEDxMMU2023")
  })
}

var elements3 = document.getElementsByClassName('youtube');
for(var i=0; i<elements3.length; i++) { 
  elements3[i].addEventListener('click', function() {
    window.open("https://www.youtube.com/@tedxmmu")
  })
}