var generators = require('yeoman-generator');

module.exports = generators.Base.extend({

  method1: function () {
    console.log('we heard you liked generators...');
  },
  //method2: function () {
  //  console.log('method 2 just ran');
  //}
});