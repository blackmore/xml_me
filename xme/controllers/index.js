var IndexController = Ember.ArrayController.extend({
  content: [],

  addUsers: function(users) {
    this.set('content', [])
    this.content.addObjects(users)
  },
  
  parseUPS: function(user) {
    return {
          sender: user.find('sender:first').text(),
          date: user.find('datum:first').text(),
          time: user.find('zeit:first').text(),
          audio: user.find('stereo:first').text(),
          breit: user.find('breit:first').text(),
          name: user.find('titel:first').text(),
          folge: user.find('folge:first').text(),
          charakter: user.find('charakter:first').text(),
          char: user.find('char:first').text(),
          jahr: user.find('jahr:first').text(),
          ut: user.find('ut:first').text(),
          otepis: user.find('otepis:first').text(),
          origt: user.find('origt:first').text(),
          text: user.find('text:first').text(),
          altersempfehlung: user.find('altersempfehlung:first').text(),
          hintergrund: user.find('hintergrund:first').text()
        }
  },

  actions: {

    addUsersFromXML: function(xmlData) {
      var users,
          xmlDoc,
          self = this;

      xmlDoc = $($.parseXML(xmlData));

      users = $.each(xmlDoc.find('sendung'), function () {}).map(
        (function(_this) {
        
        return function(i, u) {
          var user = $(u);
          return self.parseUPS(user);
        };

      })(this));

      self.addUsers(users);

    }

  } 
});

export default IndexController;
