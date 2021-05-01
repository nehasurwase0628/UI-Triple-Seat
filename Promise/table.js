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
const tableDiv = document.querySelector("#tabledata");



btn.onclick = () => {
  var data = loadData("http://jsonplaceholder.typicode.com/posts");
  data.then(
    (res) => {
      // console.log(res);
      //  document.write(res);
      const result = JSON.parse(res);
      //  document.write(result);
      var data = JSON.stringify(result); 
      // document.write(data);

      
      var table = '<table> <thead><tr> <th> USERID </th> <th> ID </th> <th> TITLE </th> <th> BODY </th> </tr> </thead><tbody>';
      result.forEach(obj => {
        table = `${table} <tr> 
          <td> ${obj.userId} </td> 
          <td> ${obj.id} </td> 
          <td> ${obj.title} </td> 
          <td> ${obj.body} </td> 
          </tr>`;
      });
      table = table + "</table>";
      tableDiv.innerHTML = table;
    },
    (err) => {
      console.log(err);
    }
  );
};


