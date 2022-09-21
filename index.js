var allowedHeaders = ['Authorization', 'Content-Type', 'x-api-key'];
var records = require('./records.json');
const requestHandler = (request, response) => {
  var body = [];
  request.on("data", function (chunk) {
    body.push(chunk);
  });
  request.addListener("end", function () {
    let { method } = request;
    var url = new URL('http://' + request.headers.host + request.url);
    let params = url.searchParams;
    let requestBody = {};
    response.setHeader('Access-Control-Allow-Origin', request.headers.origin || '*');
    response.setHeader('Access-Control-Allow-Headers', allowedHeaders.join(','));
    response.setHeader('Access-Control-Allow-Methods', 'GET,POST,DELETE,PATCH, OPTIONS');
    response.setHeader('Access-Control-Allow-Credentials', true);
    response.writeHead(200, {
        'Content-Type': 'application/json'
    });
    if (method === 'OPTIONS') {
      response.end();
      return;
    }
    if(method === 'POST') {
      requestBody = JSON.parse(body);
      if(requestBody['id']) {
        let itemToUpdate = records.find(x => x.id === requestBody['id']);
        Object.keys(requestBody).forEach(x => {
          itemToUpdate[x] = requestBody[x];
        });
      } else {
        requestBody['id'] = (new Date()).getTime();
        records.push(requestBody);
      }
    }
    
    if(request.url.indexOf('reset') >= 0){
      records = require('./records.json');
    }
    if(params.get('id')) {
      if(method === 'DELETE') {
        records = records.filter(x => x.id !== params.get('id'));
      } else {
        response.end(JSON.stringify({
          status: true,
          data: records.filter(x => x.id === params.get('id'))
        }));
        return;
      }
    }
    response.end(JSON.stringify({
      status: true,
      data: records
    }));
  }).resume();
};
require("http").createServer(requestHandler).listen(3434, () => {
  console.log('Server listening 3434');
});
