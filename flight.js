//
//
// mrlong 2013
//
//

var $ = require('jquery');
var validator = require('validator');
var request = require('request');
var fs = require('fs');

// request('http://www.mangocity.com', function (error, response, body) {
//   if (!error && response.statusCode == 200) {
//     console.log(body) // Print the google web page.
//   }
// })

var options = {
    url: 'http://flight.mangocity.com/flights-search.shtml',
    method: 'post',
    headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:25.0) Gecko/20100101 Firefox/25.0'
    },
    form: {
      'tvlReq.childCount':'0',
      'tvlReq.seatType':'Y',
      'queryPara.depAirport':'',
      'queryPara.arrAirport':'',
      'tvlReq.psgType':'ADT',
      'queryPara.lineType':'wo',
      'queryPara.depCity':'HGH',
      'queryPara.arrCity':'HAK',
      'queryPara.depDate':'2013-12-25'
    }
};

request.post(options,function (error, response, body) {
  if (!error && response.statusCode == 200) {
    var v = $(body).find("input").value;
    console.log(v);

    //console.log(body) // Print the google web page.
    fs.writeFile('a.html', body, function (err) {
      if (err) throw err;
      console.log('It\'s saved!');
    });
  }
});


// var option2 ={
//   url:'http://flight.mangocity.com/oneway-Cheapest.shtml',
//   method: 'post',
//     headers: {
//         'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:25.0) Gecko/20100101 Firefox/25.0'
//     },
//     form: {
//       queryParamVO:'3c8591ca6dc3ba18692de5806a3e6b8f9cf12140dae9b696a3877e95793f4afc163390d4392f3957d7144c449c51b0591c510d4b120faf6adfc07434270104d542748311773d24750dfde98ab3e07b697a4024c0d3777619f63642b680117d177a4024c0d3777619632568d4cc46a3e83a1c5c9e742f2da63cf5ddecb69bf642acffe53dae43d92dc1cedfa775845791b1633601a8e644730176f1a465443a61c95628d250187d8eaea7c0d93fd578992c203fab80fdfa4e66d67fbdc4de76ec570a3f3d1c564db44275c616d61a009e89f5f07455e9823bba31d036e0d5e2d863f743140ee70d404b64214f2fbf7dfb298857a5f7c8ffb3be6f9672f916c6359109e3050864480e0f653941967f4c53cf8ebccb7a53bd2200a9772ee80e0f5562a395e4d8db75ab10a2cd8757c19926864003f1c49b5c584f1b579791ffc902'
//     },
// };

// request.post(options,function (error, response, body) {
//   if (!error && response.statusCode == 200) {
//     //console.log(body) // Print the google web page.
//     fs.writeFile('b.html', body, function (err) {
//       if (err) throw err;
//       console.log('It\'s saved!');
//     });
//   }
// });