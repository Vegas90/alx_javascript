function changeMode(size, weight ,transform, background, color) {
    return function() {
     // Set the styles for the entire page
    document.body.style.fontSize = size + 'px';
    document.body.style.fontWeight = weight;
    document.body.style.textTransform = transform;
    document.body.style.backgroundColor = background;
    document.body.style.color = color;
      }

}
function main(){
  var spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
  var darkMode = changeMode(12, 'bold', 'capitilize', 'black', 'white');
  var screamMode = changeMode(12, 'normal', 'lowecase', 'white', 'black');
  
  // Create a paragraph element with the text "Welcome Holberton!"
  var paragraph = document.createElement("p");
  paragraph.textContent = "Welcome Holberton!";
  document.body.appendChild(paragraph);

  // Create buttons for different themes
  var spookyButton = createButton("Spooky");
  var darkModeButton = createButton("Dark mode");
  var screamModeButton = createButton("Scream mode");

  // Add event listeners to the buttons
  spookyButton.addEventListener("click", spooky);
  darkModeButton.addEventListener("click", darkMode);
  screamModeButton.addEventListener("click", screamMode);

  // Append buttons to the body
  document.body.appendChild(spookyButton);
  document.body.appendChild(darkModeButton);
  document.body.appendChild(screamModeButton);
  
}

main();

