const textBoxes = document.querySelectorAll('.text-box');
const textArray = ['Pyotr', 'Ilyich', 'Tchaikovsky', '[n', '2]', '(/tʃaɪˈkɒfski/', 'chy-KOF-skee;[2]', '7', 'May', '1840', '–', '6', 'November', '1893)[n', '3]', 'was', 'a', 'Russian', 'composer', 'of', 'the', 'Romantic', 'period.', 'He', 'was', 'the', 'first', 'Russian', 'composer', 'whose', 'music', 'would', 'make', 'a', 'lasting', 'impression', 'internationally.', 'Tchaikovsky', 'wrote', 'some', 'of', 'the', 'most', 'popular', 'concert', 'and', 'theatrical', 'music', 'in', 'the', 'current', 'classical', 'repertoire,', 'including', 'the', 'ballets', 'Swan', 'Lake', 'and', 'The', 'Nutcracker,', 'the', '1812', 'Overture,', 'his', 'First', 'Piano', 'Concerto,', 'Violin', 'Concerto,', 'the', 'Romeo', 'and', 'Juliet', 'Overture-Fantasy,', 'several', 'symphonies,', 'and', 'the', 'opera', 'Eugene', 'Onegin.', 'Although', 'musically', 'precocious,', 'Tchaikovsky', 'was', 'educated', 'for', 'a', 'career', 'as', 'a', 'civil', 'servant', 'as', 'there', 'was', 'little', 'opportunity', 'for', 'a', 'musical', 'career', 'in', 'Russia', 'at', 'the', 'time', 'and', 'no', 'system', 'of', 'public', 'music', 'education.', 'When', 'an', 'opportunity', 'for', 'such', 'an', 'education', 'arose,', 'he', 'entered', 'the', 'nascent', 'Saint', 'Petersburg', 'Conservatory,', 'from', 'which', 'he', 'graduated', 'in', '1865.', 'The', 'formal', 'Western-oriented', 'teaching', 'that', 'Tchaikovsky', 'received', 'there', 'set', 'him', 'apart', 'from', 'composers', 'of', 'the', 'contemporary', 'nationalist', 'movement', 'embodied', 'by', 'the', 'Russian', 'composers', 'of', 'The', 'Five', 'with', 'whom', 'his', 'professional', 'relationship', 'was', 'mixed.',
'The', 'Sleeping', 'Beauty', 'Is', '(Спящая', 'красавица),', ' Op. 66', '(TH 13 ;',  'ČW 13),', 'was', 'the', 'second', 'of', 'Tchaikovskys',  'three', 'ballet', 'scores,', 'based', 'on', 'the', 'fairy', 'tale', 'by', 'Charles', 'Perrault.', 'It', 'was', 'composed', 'and', 'orchestrated', 'from', 'October', '1888', 'to', 'August', '1889,', 'with', 'minor', 'revisions', 'during', 'stage', 'rehearsals', 'in', 'the', 'last', 'three', 'months', 'of', '1889.', 
'Jerry', 'and', 'Tuffy,', 'who', 'have', 'turned','on', 'the', 'water,', 'cause', 'the', 'kitchen', 'and', 'then', 'freeze', 'the', 'water', 'with', 'a refrigerator', 'electrode.', 'Jerry', 'dances', 'on', 'the', 'ice,', 'He', 'dances', 'with', 'Tuffy.', 'Tom', 'arrives,', 'and', 'Tuffy', 'hooks', 'on', 'to', 'his', 'whiskers.', 'Jerry', 'cut', 'Toms', 'claws', 'and', 'the', 'cat', 'is', 'sent', 'flying', 'far', 'out', 'into', 'the', 'distance', 'by', 'the', 'two', 'mice.'];

let currentText = 0;

window.addEventListener('wheel', (event) => {
  event.preventDefault();

  const delta = Math.sign(event.deltaY);

  if (delta === -1 && currentText > 0) {
    currentText--;
  } else if (delta === 1 && currentText < textArray.length - 24) {
    currentText++;
  }

  for (let i = 0; i < textBoxes.length; i++) {
    textBoxes[i].textContent = textArray[i + currentText];
  }
});

for (let i = 0; i < textBoxes.length; i++) {
  textBoxes[i].textContent = textArray[i];
}


// audio part
var audio = $(".audio")[0];

$(document).on("mousemove", function(e) {
  var y = e.pageY;
  var height = $(window).height();
  var volume = 1 - (y / height);
  audio.volume = volume;
});

$(document).click(function() {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
});

$(document).ready(function() {
  var audio = $(".audio")[0];
  var initialSpeed = audio.playbackRate; // get the initial speed

  $(document).mousemove(function(e) {
    var speed = initialSpeed + e.pageY / 700; // calculate new speed based on mouse position

    // set a minimum and maximum speed for the audio
    if (speed < 0.2) {
      speed = 0.2;
    } else if (speed > 10) {
      speed = 10;
    }

    audio.playbackRate = speed; // set the new speed
    console.log("Speed:", speed.toFixed(10));
  });
});