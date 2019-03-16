var express = require("express");
var path = require("path");
var fs = require("fs");
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

/* GET searched data listing. */
router.post("/search", function(req, res, next) {
  connection.query(
    "SELECT * FROM `sgswift` UNION select * from`clientswift`",
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

/* GET one to many data listing. */
router.get("/onetomany", function(req, res, next) {
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

/* GSave  listing. */
router.get("/savesgdata", function(req, res, next) {
  const dirname = path.resolve(
    __dirname,
    "../Hackathon/Sample-data/OneToOneMatchingSampleData/SgOneToOneMatchingSampleData/"
  );
  fs.readdir(dirname, function(err, filenames) {
    if (err) {
      res.status(400).json(err);
      return;
    }
    filenames.forEach(function(filename) {
      fs.readFile(dirname + "/" + filename, "utf-8", function(err, data) {
        if (err) {
          console.log(err);
          return;
        }
        // console.log(data);
        var sgData = {};
        var splitList = data.toString().split("\n");
        for (var i = 1; i < splitList.length; i++) {
          // sgData["fileNumber" + i.toString()] = splitList[i];
          let splitLine = splitList[i].split(":");
          sgData[splitLine[1]] = splitLine[2];
        }
        var q =
          "INSERT INTO `sgswift`(`20`, `36`, `22A`, `22C`, `30T`, `52A`, `82A`, `87A`, `77H`, `30V`, `32B`, `56A`, `57A`, `58A`, `33B`, `53A`, `56D`, `57D`, `58D`, `24D`) VALUES (" +
          sgData["20"] +
          "," +
          sgData["20"] +
          "," +
          sgData["36"] +
          "," +
          sgData["22A"] +
          "," +
          sgData["22C"] +
          "," +
          sgData["30T"] +
          "," +
          sgData["52A"] +
          "," +
          sgData["82A"] +
          "," +
          sgData["87A"] +
          "," +
          sgData["77H"] +
          "," +
          sgData["30V"] +
          "," +
          sgData["32B"] +
          "," +
          sgData["56A"] +
          "," +
          sgData["57A"] +
          "," +
          sgData["58A"] +
          "," +
          sgData["33B"] +
          "," +
          sgData["53A"] +
          "," +
          sgData["56D"] +
          "," +
          sgData["57D"] +
          "," +
          sgData["58D"] +
          "," +
          sgData["24D"] +
          ")";
        connection.query(q, function(error, result) {
          if (error) {
            // res.send(JSON.stringify({ status: 500, error: error, response: null }));
            // res.status(404).json(error);
            //If there is error, we send the error in the error section with 500 status
          } else {
            // res.send(
            //   JSON.stringify({ status: 200, error: null, response: results })
            // );
            // res.json(result);
            //If there is no error, all is good and response is 200OK.
          }
        });
      });
    });
  });
});

module.exports = router;
