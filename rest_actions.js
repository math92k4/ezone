
const headers = {
    "Content-Type": "application/json",
    "x-apikey": "60740776f592f7113340ef9b", 
    "cache-control": "no-cache",
}; 


export function get(url) {
fetch(url, {
  method: "get",
  headers: 
    headers,
})
.then(e => e.json())
  .then((data) => console.log(data));
}


export function post(data) {
  const postData = JSON.stringify(data); 
  fetch(url, {
    method: "post",
    headers: headers,
    body: postData,
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}

