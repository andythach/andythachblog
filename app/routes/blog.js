var express = require('express');
var router = express.Router();


router.get('/blogs', function (req, res){
  var dataFile = req.app.get('appData');
  var blogsData = dataFile.blogs;

  res.render('blogs', {
    pageTitle: 'Blogs',
    blogs: blogsData,
    pageID: 'blogs'
  });
});


module.exports = router;
