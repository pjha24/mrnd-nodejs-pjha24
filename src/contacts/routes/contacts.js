var express = require('express');
var router = express.Router();
var records = [];
var count = 0;


/* GET contacts */
router.get('/:id', function(req, res, next) {
	id = req.params.id;
	//console.log(id);
	res.statusCode = 200;
	res.send(records[id]);
});

router.post('/', function(req, res, next) {
	var obj = new Object();
	obj.firstName = req.body.firstName;
	obj.lastName = req.body.lastName;
	obj.phone = req.body.phone;
	records[count] = obj;
  	console.log(records);
  	res.send(""+count);
  	count += 1;
});

router.put('/:id', function(req, res, next) {
	var id = req.params.id;
	if(req.body.firstName != undefined )
		records[id].firstName = req.body.firstName;
	if(req.body.lastName != undefined )
		records[id].lastName = req.body.lastName;
	if(req.body.phone != undefined )
		records[id].phone = req.body.phone;

	res.statusCode = 200;
  //console.log(req.body);
  res.send(records[id]);
});

module.exports = router;
