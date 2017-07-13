var clients = require('./clients.json');

module.exports.getClientWithNum = function(num) {
	
  let k;
  let client;
  
  for (k = 0 ; k < clients.length; k++) {
	  if (clients[k].num == num) {
		  client = clients[k];
	  }
  }
  return client;
}