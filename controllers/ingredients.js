var amazon = require('amazon-product-api')

module.exports = (app) => {

  // LOOKUP
  app.get('/ingredients/:search', (req, res) => {
    // res.json({message: "Success!"});
    const text = req.params.search

    var awsClient = amazon.createClient({
      awsId: process.env.AWSAccessKeyId,
      awsSecret: process.env.AWSSecretKey
    });

    // BrowseNode: 11091801

    // awsClient.itemLookup({
    // idType: 'UPC',
    // itemId: '884392579524',
    // responseGroup: "ItemAttributes,BrowseNodes"
    awsClient.itemSearch({
      keywords: text,
      browseNodeId: '11091801',
      responseGroup: "ItemAttributes,BrowseNodes,Images"
    }).then(function(results){
      console.log("We got results!: ", results);
      const cleaned = results.map(item => item.ItemAttributes[0].Title[0])
      res.json(cleaned)
    }).catch(function(err){
      console.log("There was an error: ", err.Error[0].Message);
    });
  })



}
