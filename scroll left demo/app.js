// get scroller element
var scroller = document.getElementById('scroller');

// on button click
var button = document.getElementById('button');

// button event listener on click
button.addEventListener('click', function(e) {

    console.log("clicked");

    const divId = document.getElementById("input").value;

    console.log(divId);

    // constant to scroll to
    const element = document.getElementById('d'+divId);
    
    // retrieve its position relative to its parent
    var position = element.offsetLeft;

    console.log(position);

    scroller.scrollLeft = position;
});


