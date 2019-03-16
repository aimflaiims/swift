var express = require("express");
var router = express.Router();

/* GET matched data listing. */
router.get("/", function(req, res, next) {
  connection.query(
    "SELECT sgswift.20 as sg_ref, clientswift.`20` as cref FROM `sgswift` join`clientswift` on`sgswift`.`82A` = `clientswift`.`87A` and sgswift.87A = clientswift.82A and`sgswift`.`77H` = `clientswift`.`77H` and`sgswift`.`30T` = `clientswift`.`30T` and`sgswift`.`30V` = `clientswift`.`30V` and`sgswift`.`36` = `clientswift`.`36` and`sgswift`.`32B` = `clientswift`.`33B` and`sgswift`.`56A` = `clientswift`.`56D` and`sgswift`.`57A` = `clientswift`.`57D` and`sgswift`.`58A` = `clientswift`.`58D` and`sgswift`.`33B` = `clientswift`.`32B`",
    function(error, results, fields) {
      if (error) {
        // res.send(JSON.stringify({ status: 500, error: error, response: null }));
        res.status(404).json(error);
        //If there is error, we send the error in the error section with 500 status
      } else {
        // res.send(
        //   JSON.stringify({ status: 200, error: null, response: results })
        // );
        res.json(results);
        //If there is no error, all is good and response is 200OK.
      }
    }
  );
});

/* GET closefit data listing. */
router.get("/closefit", function(req, res, next) {
  connection.query(
    "SELECT sgswift.20 as sg_ref, clientswift.`20` as cref, ((`sgswift`.`30V` = `clientswift`.`30V`)+(`sgswift`.`36` = `clientswift`.`36`)+(`sgswift`.`32B` = `clientswift`.`33B`)+(`sgswift`.`33B` = `clientswift`.`32B`)) as matches FROM `sgswift` join`clientswift` on`sgswift`.`82A` = `clientswift`.`87A` and sgswift.87A = clientswift.82A and`sgswift`.`77H` = `clientswift`.`77H` and`sgswift`.`30T` = `clientswift`.`30T` and`sgswift`.`56A` = `clientswift`.`56D` and`sgswift`.`57A` = `clientswift`.`57D` and`sgswift`.`58A` = `clientswift`.`58D` HAVING matches > 1 and matches < 4",
    function(error, results, fields) {
      if (error) {
        res.status(404).json(error);
        //If there is error, we send the error in the error section with 500 status
      } else {
        res.json(results);
        //If there is no error, all is good and response is 200OK.
      }
    }
  );
});

/* GET users listing. */
router.get("/savedata", function(req, res, next) {
  connection.query(
    "SELECT sgswift.20 as sg_ref, clientswift.`20` as cref FROM `sgswift` join`clientswift` on`sgswift`.`82A` = `clientswift`.`87A` and sgswift.87A = clientswift.82A and`sgswift`.`77H` = `clientswift`.`77H` and`sgswift`.`30T` = `clientswift`.`30T` and`sgswift`.`30V` = `clientswift`.`30V` and`sgswift`.`36` = `clientswift`.`36` and`sgswift`.`32B` = `clientswift`.`33B` and`sgswift`.`56A` = `clientswift`.`56D` and`sgswift`.`57A` = `clientswift`.`57D` and`sgswift`.`58A` = `clientswift`.`58D` and`sgswift`.`33B` = `clientswift`.`32B`",
    function(error, results, fields) {
      if (error) {
        // res.send(JSON.stringify({ status: 500, error: error, response: null }));
        res.status(404).json(error);
        //If there is error, we send the error in the error section with 500 status
      } else {
        // res.send(
        //   JSON.stringify({ status: 200, error: null, response: results })
        // );
        res.json(results);
        //If there is no error, all is good and response is 200OK.
      }
    }
  );
});

module.exports = router;
