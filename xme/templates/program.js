export default Ember.Handlebars.compile("\n<div>\n  {{file-input action=\"parseSourceXML\"}}\n</div>\n<p>this is the total:{{totalPrograms}}</p>\n\n{{view \"list-item\" contentBinding=\"content\"}}\n\n");
