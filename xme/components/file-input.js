var FileInputComponent = Ember.TextField.extend({
  type: 'file',
  attributeBindings: ['name'],
  change: function(evt) {
    var input, reader;
    input = evt.target;
    if (input.files && input.files[0]) {
      reader = new FileReader();
      reader.onload = (function(_this) {
        return function(e) {
          var uploadedFile;
          uploadedFile = e.srcElement.result;
          console.log("got file!");
          return _this.sendAction('action', uploadedFile);
        };
      })(this);
      return reader.readAsText(input.files[0],'CP1252');
    }
  }
});

export default FileInputComponent;
