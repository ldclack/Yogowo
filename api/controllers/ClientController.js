/**
 * ClientController
 *
 * @description :: Server-side logic for managing clients
 * 
 */

module.exports = {
    getClientWithNum: function(req, res) {
		let clientNum = req.params.num;
        return res.json({ client: clientService.getClientWithNum(clientNum) });
    },
	
	createClient: function(req, res) {
		let clientName = req.params.name;
		let clientNum = req.params.num;
        return res.json({ client: clientService.createClient(clientName,clientNum) });
    }
};
