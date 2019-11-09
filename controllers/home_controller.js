//|------------------------------------------------------------------------
//#region module dependencies

const appRoot      =  require('app-root-path');
const async        =  require('async')
const helper       =  require(appRoot + '/lib/helper');
const rp           =  require('request-promise')
const Scrape       =  require(appRoot + '/models/scrape');

require('express-async-errors');
//#endregion
//|------------------------------------------------------------------------


//|------------------------------------------------------------------------
//#region | LIVE | Display home page | index
/**
|--------------------------------------------------------------------------
|  index
|--------------------------------------------------------------------------
|
*/

exports.index = function(req, res) {
  
  async.parallel({
    scrape_count: function(callback) {
      Scrape.countDocuments({}, callback);
    },
  }, function(err, results) {
    res.render('index', { title: "Scraping Reddit", error: err, data: results });
  })
};
//#endregion
//|------------------------------------------------------------------------




//|------------------------------------------------------------------------
//#region | BLANK | description | function_name
/**
|--------------------------------------------------------------------------
|  function_name
|--------------------------------------------------------------------------
|
*/

// exports.function_name = function(req, res, next) {
//   res.render('scrape_form', 
//   {
//     title: 'Create Scrape'
//   }
//   );
// };

//#endregion
//|------------------------------------------------------------------------