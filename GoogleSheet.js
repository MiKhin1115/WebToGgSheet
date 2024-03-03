const scriptURL = 'https://script.google.com/macros/s/AKfycbxwX0Exikv5xHR3PbzohcIT6HAqTBK8vmU7IL5dBJSjT4RUP7hET4s74b3MaTn0UyU/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, {method: 'POST' , body:new FormData(form)})
    .then( playVoiceLikeSound())
    .then(()=>{window.location.reload();})
    .catch(error => console.error('Error!', error.message))
})

function playVoiceLikeSound() {
    // Check if the browser supports the Web Audio API
    if ('AudioContext' in window || 'webkitAudioContext' in window) {
      const context = new (window.AudioContext || window.webkitAudioContext)();
  
      // Create an oscillator node (a basic sound generator)
      const oscillator = context.createOscillator();
  
      // Set the frequency and type of the oscillator (adjust as needed)
      oscillator.frequency.value = 20; // Frequency in hertz
      oscillator.type = 'sine'; // Type of waveform ('sine', 'square', 'sawtooth', 'triangle', etc.)
  
      // Connect the oscillator to the audio output
      oscillator.connect(context.destination);
  
      // Start the oscillator to generate sound
      oscillator.start();
  
      // Stop the oscillator after a certain duration (adjust as needed)
      oscillator.stop(context.currentTime + 1); // Stop after 1 second
    } else {
      console.error('Web Audio API is not supported in this browser.');
    }}