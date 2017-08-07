document.onreadystatechange = function () {
  if (document.readyState == "complete") {
    var language = window.navigator.userLanguage || window.navigator.language;
    switchLanguage(language);
  }

  addLangEventListener();
}

function addSmoothScrolling() {
  $('a').click(function(e){
      e.preventDefault();
      $('html, body').animate({
          scrollTop: $( $(this).attr('href') ).offset().top - 52 // 52px = height of fixed header
      }, 500);
      return false;
  });
}

function addLangEventListener() {
  var langButton = document.getElementById('js-lang-btn');
  
  langButton.onclick = function(){
    switchLanguage(this.getAttribute('data-lang'));
    return false;
  };
}

function switchLanguage(language) {
  var prettyLanguage = language.split('-')[0];
  var data = getBlob(prettyLanguage);

  updateLanguage(prettyLanguage);

  addNavigation(data);
  addTemplate(data);
}

function updateLanguage(language) {
  var selectedLanguage = 'en';
  var langButton = document.getElementById('js-lang-btn');

  if (language.toLowerCase() === 'en') {
    selectedLanguage = 'fr';
  } else {
    selectedLanguage = 'en';
  }

  langButton.textContent = selectedLanguage;
  langButton.setAttribute('data-lang', selectedLanguage);
}

function addNavigation(data) {
  var tpl = new LoadTemplate('js-navigation', 'nav', { data: data });
  tpl.create(function(){
    addSmoothScrolling();
  });
}

function addTemplate(data) {
  var tpl = new LoadTemplate('js-content', 'main', { data: data });
  tpl.create(function(){});
}