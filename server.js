require('express')().use(require('express').static(__dirname + '/js')).listen(8080, () => {
  console.log('liv 8080');
})
