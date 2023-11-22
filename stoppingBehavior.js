// Do not change
document.getElementById('cat').addEventListener('click', () => {
  alert('meow!');
});

// When clicked, "More info" link should alert "Here's some info"
// instead of going to a new webpage
document.getElementById('more-info').addEventListener('click', function(event){
  // Prevent the default action of the event (going to a new webpage)
  event.preventDefault();
  alert("Here's some more info");
});


// When the bark button is clicked, should alert "Bow wow!"
// Should *not* alert "meow"
document.getElementById('dog').addEventListener('click', function(event){
  event.preventDefault();
  //
  alert("Bow wow");
});