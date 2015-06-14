/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /members              ->  index
 * POST    /members              ->  create
 * GET     /members/:id          ->  show
 * PUT     /members/:id          ->  update
 * DELETE  /members/:id          ->  destroy
 */




'use strict';

var _ = require('lodash');
var USER = require('./member.model');

// Get list of members
exports.index = function(req, res) {

var queryParameter = {};
    USER.getModels('mst_user', queryParameter, function(error, data) {
     if (error) {
        console.log(error);  
       return res.json(500, error)
     }
     else
       return res.json(200, data);
   });

};

exports.show = function(req, res) {
  res.json([{
    name: '田中_2'
  }, {
    name: '鈴木_2'
  }]);
};