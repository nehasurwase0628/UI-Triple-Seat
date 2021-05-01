function loadData(url) {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.onreadystatechange = (e) => {
      if (request.readyState === 4) {
        if (request.status === 200) {
          resolve(request.response);
        } else {
          reject(request.status);
        }
      }
    };

    request.open("GET", url);
    request.send();
  });
}

const btn = document.querySelector("#btnGet");
const msg = document.querySelector("#message");
const listDiv = document.querySelector("#list");

// btn.onclick = () => {
// var data = loadData("http://jsonplaceholder.typicode.com/posts/1");
// data.then(res => {
//     console.log(res);
//     const result = JSON.parse(res);
//     msg.innerHTML = result.title;
// }, err => {
//     console.log(err);
// })
// };

// btn.onclick = () => {
//   var data = loadData("http://jsonplaceholder.typicode.com/photos");
//   data.then(
//     (res) => {
//       console.log(res);

//       const result = JSON.parse(res);
//       var div = "<div>";
//       result.forEach((obj) => {
//           var objjj = JSON.stringify(obj)
//           var img = document.createElement('img');
//           img.src = objjj.thumbnailUrl;
//         div = `${div} ${img}`;
//       });

//       div = div + "</div>";
//       listDiv.innerHTML = div;
//     // listDiv.appendChild(div)
//     },
//     (err) => {
//       console.log(err);
//     }
//   );
// };

btn.onclick = () => {
  var data = loadData("http://jsonplaceholder.typicode.com/photos");
  data.then(
    (res) => {
      // console.log(res);

      const result = JSON.parse(res);
      var objjj = JSON.stringify(result);
     // console.log(objjj);
     // document.write(objjj);
      // result.forEach(function(obj){
      //   document.write(obj.thumbnailUrl);
      // })
      
      var div = "<div>";
      result.forEach(function(obj){
        var ele = document.createElement("span");
        var img = document.createElement("img");
        img.setAttribute("src", obj.thumbnailUrl);
        ele.appendChild(img);
        // var elem = document.getElementById('list').appendChild(ele);
        var elem = listDiv.appendChild(ele);


        // document.write(obj.thumbnailUrl);
      })
     
      elem = elem + "</div>";
    },
    (err) => {
      console.log(err);
    }
  );
};
