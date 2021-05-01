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

btn.onclick = () => {
  var data = loadData("http://jsonplaceholder.typicode.com/users");
  data.then(
    (res) => {
      console.log(res);

      const result = JSON.parse(res);
      var list = "<ul>";
      result.forEach((obj) => {
        list = `${list} <li> ${obj.name} </li>`;
      });

      list = list + "</ul>";
      listDiv.innerHTML = list;
    },
    (err) => {
      console.log(err);
    }
  );
};


