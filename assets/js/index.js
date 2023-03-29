const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

document.getElementById('buy-ticket-btn').disabled = "true"
document.getElementById('speaker-section').style.pointerEvents = "none"
document.getElementById('speaker-section').style.filter = "blur(10px)"

var elements = document.getElementsByClassName('twitter');
for(var i=0; i<elements.length; i++) { 
  elements[i].addEventListener('click', function() {
    window.open("https://twitter.com/TEDxMMU2023")
  })
}

