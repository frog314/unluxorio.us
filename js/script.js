window.onload = function() {
  document.getElementById("pagetrans").classList.add("load");
}

window.BeforeUnloadEvent = function(){
  document.getElementById("pagetrans").classList.remove("load");
  document.getElementById("pagetrans").classList.add("leave");
}

function shop(){
    window.location="/shop.html";
}

function faq(){
    window.location="/faq.html";
}

function home(){
    window.location="/index.html";
}

function show(){
  document.getElementById("dark").style.display = "block";
}

function hide(){
  document.getElementById("dark").style.display = "none";
}


function copyy() {
  // Get the text field
  var copyText = "frog@frog.com";


   // Copy the text inside the text field
  navigator.clipboard.writeText(copyText);

  // Alert the copied text
  alert("Copied the text: " + copyText);
}

/*
function getMouseCoords(e) {
    var e = e || window.event;
    document.getElementById('container').innerHTML = e.clientX + ', ' +
      e.clientY + '<br>' + e.screenX + ', ' + e.screenY;
  }
  
  
  var followCursor = (function() {
    var s = document.createElement('div');
    s.style.position = 'absolute';
    s.style.margin = '0';
    s.style.padding = '5px';
    s.style.pointerEvents = 'none';
    s.textContent = "🚀"

  
    return {
      init: function() {
        document.body.appendChild(s);
      },
  
      run: function(e) {
        var e = e || window.event;
        s.style.left = (e.clientX - 5) + 'px';
        s.style.top = (e.clientY - 5) + 'px';
        getMouseCoords(e);
      }
    };
  }());
  
  window.onload = function() {
    followCursor.init();
    document.body.onmousemove = followCursor.run;
  }
  */