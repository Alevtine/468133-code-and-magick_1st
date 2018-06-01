'use strict';

(function () {

  var fileChooser = document.querySelector('.upload input');
  var dialogHandle = document.querySelector('.setup-user-pic');
  var dropArea = document.querySelector('.upload');


  fileChooser.addEventListener('change', function () {
    window.util.fileReader(fileChooser.files[0], dialogHandle);
  });

  dropArea.addEventListener('dragenter', function (evt) {
    evt.preventDefault();
  });

  dropArea.addEventListener('dragover', function (evt) {
    evt.preventDefault();
  });

  dropArea.addEventListener('drop', function (evt) {
    evt.preventDefault();
    window.util.fileReader(evt.dataTransfer.files[0], dialogHandle);
  });

})();
