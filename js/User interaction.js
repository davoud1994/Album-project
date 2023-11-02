document.addEventListener('DOMContentLoaded', function() {
let images = [
  '../pic/da1b2400-322b-459b-97b0-0c557f05d017-a3d1899c3344.webp',
  '../pic/download (2).jpeg',
  '../pic/David-Malan.webp',
  '../pic/images.jpeg',
  '../pic/images.png',
  // Creating a list of available photos
];
// Get the necessary elements
let m_Photo = document.getElementById('image');
let p_Button = document.getElementById('p-btn');
let n_Button = document.getElementById('n-btn');
let i_Button = document.getElementById('i-Button');
let de_Button = document.getElementById('de-Button');
let zI_Button = document.getElementById('z-i-button');
let zO_Button = document.getElementById('z-o-button');
let l_pic = document.querySelectorAll('.little-pic');

// The initial values of the elements that are important must be created
m_Photo.src = images[0];
let brightness = 100;
let currentPhoto = 0;

// A function to change photos
function change(tap) {
  // When the photo change button is pressed, it must be added to its variable values
  currentPhoto += tap;
  
  // Checking whether we are in the last picture or not
  if (currentPhoto >= images.length) {
    // If we have reached the last photo, the list should start from the photo with index one 
    currentPhoto = 0;
  } else if (currentPhoto < 0) {
    //If the index of the counter is less than one, the length must be updated so that the index of the first photo does not appear 
    currentPhoto= images.length - 1;
  }

  // Update the index of the current photo
  m_Photo.src = images[currentPhoto];
}
// Function to increase brightness
function i() {
  // The amount of brightness increase
  brightness += 20;
  // Apply filters and update photos
  m_Photo.style.filter = `brightness(${brightness}%)`;
}

// Function to decrease brightness
function de() {
  // The amount of brightness reduction
  brightness -= 20;
    // Apply filters and update photos
  m_Photo.style.filter = `brightness(${brightness}%)`;
}

// Initial scale value
let Scale = 1; 
// Function to zoom in
function zoomIn() {
  // Set the zoom range
  if (Scale < 4) { 
    Scale += 0.1;
    //  After completing the steps entered in this function, the photo will be updated based on zooming in or zooming out
    Zoom();
  }
}
// Function to zoom out
function zoomOut() {
  if (Scale > 1) { 
    Scale -= 0.1; 
    Zoom();
  }
}
// Function to apply the zoom
function Zoom() {
  if (Scale >= 1){ 
      if(Scale <= 2){ 
        // update photo
    m_Photo.style.transform = `scale(${Scale})`;}
  }
}
// All small photos can be displayed on a larger screen with a mouse click
l_pic.forEach(function(littlepic, main){
  littlepic.addEventListener('click', function() {
    m_Photo.src = images[main];
  });
});
// To check which event is taking place and what reaction should be done afterwards
p_Button.addEventListener('click', () => change(-1));
n_Button.addEventListener('click', () => change(1));
i_Button.addEventListener('click', i);
de_Button.addEventListener('click', de);
zI_Button.addEventListener('click', zoomIn);
zO_Button.addEventListener('click', zoomOut);})