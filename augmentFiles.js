'use strict';
const fs = require('fs');
const FILE_PATH_FR = './cv.html';
const FILE_PATH_EN = './resume.html'

let fileContentsFr = fs.readFileSync(FILE_PATH_FR, { encoding: 'utf-8' });
let fileContentsEn = fs.readFileSync(FILE_PATH_EN, { encoding: 'utf-8' });

const translations = {
  'About': 'À propos',
  'Work Experience': 'Expérience Professionnelle',
  'Education': 'Formation',
  'Skills': 'Compétences',
  'Languages': 'Langues',
  'Interests': 'Centres d\'intérêts',
  '<div>Courses</div>': '',
  'January': 'Janvier',
  'February': 'Février',
  'March': 'Mars',
  'April': 'Avril',
  'May': 'Mai',
  'June': 'Juin',
  'July': 'Juillet',
  'August': 'Août',
  'September': 'Septembre',
  'October': 'Octobre',
  'November': 'Novembre',
  'December': 'Décembre'
};

const fixes = {
  '<div class="highlights">Highlights</div>': '',
  'Resume of Hugo Agbonon': 'Hugo Agbonon'
}

Object.keys(translations).forEach(key => {
  fileContentsFr = fileContentsFr.replace(new RegExp(key, 'g'), translations[key])
});

Object.keys(fixes).forEach(key => {
  fileContentsFr = fileContentsFr.replace(new RegExp(key, 'g'), fixes[key])
  fileContentsEn = fileContentsEn.replace(new RegExp(key, 'g'), fixes[key])
});


const anonScript = `<script>
if (window.location.toString().indexOf('anon') !== -1) {
  document.querySelector('h1').innerHTML = document.querySelector('h1').innerHTML.replace('Hugo Agbonon', 'Hugo A.');
  a = document.querySelectorAll('.contact-item');
  for (i = 0; i < a.length; i++) a[i].remove();
  document.querySelector('#photo img').style.display = 'none';
}
</script>`;


fs.writeFileSync(FILE_PATH_FR, fileContentsFr.concat(anonScript), { encoding: 'utf-8' });
fs.writeFileSync(FILE_PATH_EN, fileContentsEn.concat(anonScript), { encoding: 'utf-8' });
