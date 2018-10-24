var moment = require('moment');

console.log(moment().format());


var now = moment();
console.log('current timestamp', now.unix());

var timestamp = 1540351330;

var currentMoment = moment.unix(timestamp);
console.log('current moment', currentMoment.format('MMM D, YY @ h:mm a'));

console.log('current moment', currentMoment.format('MMMM Do, YYYY @ h:mm A'));