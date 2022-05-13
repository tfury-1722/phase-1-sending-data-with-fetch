//const { bodyParser } = require("json-server");

document.addEventListener(
  "DOMContentLoaded",
  submitData("Baxter", "bax2pup@dogwalker.com")
);
const infoContent = {
  name: this.name,
  email: this.email,
};

const configObject = {
  method: "POST",
  headers: {
    "Content-type": "application/json",
    Accept: "application/json",
  },
  body: JSON.stringify(`${infoContent}`),
};

function buildResponseElement(object) {
  console.log(object.id);
  const body = document.querySelector("body");
  const theList = document.createElement("ul");
  const item = document.createElement("li");
  theList.innerHTML = `<h4>CHECK LIST</h4>`;
  item.innerHTML = `${object.id}`;
  theList.appendChild(item);
  body.appendChild(theList);
  return body;
}

function handleError(error) {
  const p = document.createElement("p");
  const bd = document.querySelector("body");
  p.innerHTML = `${error.message}`;
  return bd.appendChild(p);
}

// Add your code here
function submitData(name, email) {
  const userInfo = {
    name: name,
    email: email,
  };
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(userInfo),
  })
    .then((response) => response.json())
    .then((data) => buildResponseElement(data))
    .catch((e) => handleError(e));
}
