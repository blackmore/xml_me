var ProgramController = Ember.ArrayController.extend({


  
  parseData: function(programData, template) {
    var progObj = scheduleMapper.buildProgramObj(programData, template);

    if (progObj) {
      var model   = this.get('model');
      model.pushObject(progObj);
      // console.log(model.get('length'));
    }
  },

  totalPrograms: function () {
    var model   = this.get('model');
      // model.pushObject(progObj);
      // console.log(model.get('length'));
      // console.log(model.get('length'));
      return model.get('length');
      // return model.get('length');
      // return "this has to be asid";
      // var model   = this.get('model');
      // return this.filterBy('isCompleted', false).get('length');
      // return model.length;
    }.property('@each.totalPrograms'),

  getTemplate: function (xmlDoc) {
    var tempName
    if (xmlDoc.find('sendername:first')) {
      tempName =  xmlDoc.find('sendername:first').text();
    } else if (xmlDoc.find('mainchannel:first')) {
      tempName =  xmlDoc.find('mainchannel:first').text();
    };
    

    switch(tempName)
    {
    case 'SCIFI':
    case 'UNIVERSAL':
    case 'HISTORY':
    case '13TH STREET Universal':
      console.log(tempName);
      return "universal"
      break;

    case 'BOOMERANG':
    case 'GLITZ':
    case 'CARTOONDE':
    case 'TNT SERIE':
    case 'TNTFILM':
      console.log("turner");
      return "turner"
      break;
      
    case 'DISNEY':
      console.log("disney");
      return "disney"
      break;
    default:
      console.log("unknown template");
    }

  },



  //
  // Actions --------------------------------------------------
  //
  actions: {

  /**
  parseSourceXML reads thesource XML and will read the header to deturning which mapping to apply.
  Surpotted maps:

  */
    parseSourceXML: function(sourceXML) {
      var xmlDoc, self = this;
      var template

      try {
        xmlDoc = $($.parseXML(sourceXML));
        template = self.getTemplate(xmlDoc);
        
        // console.log(template);

        $.each(xmlDoc.find(scheduleMapper.program(template)), function () {}).map(
        (function(_this) {
          return function(i, u) {
            var program = $(u);
            return self.parseData(program, template);
          };
        })(this));
      
      // to catach an intermitent error trowing an Uncaught Error: Invalid XML: 
      } catch (ex){  
        return false;
      };
      

    }
    

  }

});

export default ProgramController;
