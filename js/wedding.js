$(document).ready(function() {
  var language = window.navigator.userLanguage || window.navigator.language,
      data = getBlob(language.split('-')[0]);

  addNav(data.links);
  addTitle(data.subtitle);
});

function addNav(data) {
  var tpl = new LoadTemplate('main-nav', 'nav', {links: data});
  tpl.create(function(){});
}

function addTitle(data) {
  var tpl = new LoadTemplate('title-container', 'title', {subtitle: data});
  tpl.create(function(){});
}