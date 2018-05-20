'use strict';

(function () {
  var WIZARDS_QTTY = 5;
  var wizardsTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var wizardsList = document.querySelector('.setup-similar-list');
  var setupSimilar = document.querySelector('.setup-similar');

  window.render = {
    oneWizard: function (item) {
      var element = wizardsTemplate.cloneNode(true);
      element.querySelector('.setup-similar-label').textContent = item.name;
      element.querySelector('.wizard-coat').style.fill = item.colorCoat;
      element.querySelector('.wizard-eyes').style.fill = item.colorEyes;

      var artifactsBag = document.createElement('ul');

      artifactsBag.classList.add('artifacts-description');
      artifactsBag.classList.add('hidden');

      for (var i = 0; i < item.artifacts.length; i++) {
        artifactsBag.length = item.artifacts.length;
        var artifact = document.createElement('li');
        artifact.innerHTML = item.artifacts[i]['description'] + '<br>' + '<br>';
        artifactsBag.appendChild(artifact);
      }

      element.appendChild(artifactsBag);
      wizardsList.appendChild(element);

      element.addEventListener('mouseenter', function () {
        artifactsBag.classList.remove('hidden');
      });

      element.addEventListener('mouseleave', function () {
        artifactsBag.classList.add('hidden');
      });

    },

    allWizards: function (arr) {
      wizardsList.innerHTML = '';
      arr.slice(0, WIZARDS_QTTY).forEach(function (item) {
        window.render.oneWizard(item);
      });
      setupSimilar.classList.remove('hidden');
    }
  };


})();
