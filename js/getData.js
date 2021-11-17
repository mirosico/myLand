const data = [];
let tbody = document.getElementById("get_data")

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => response.json())
.then((json) => data.push(...json)).then( () => {
        for(let i = 0; i < 5; i++) {
            let tr = document.createElement("tr");
            let td1 = document.createElement("td");
            td1.innerHTML = data[i].username;
            tr.appendChild(td1);
            let td2 = document.createElement("td");
            td2.innerHTML = data[i].id;
            tr.appendChild(td2);
            let td3 = document.createElement("td");
            td3.innerHTML = data[i].name;
            tr.appendChild(td3);
            let td4 = document.createElement("td");
            td4.innerHTML = data[i].email;
            tr.appendChild(td4);
            tbody.appendChild(tr);
        }
})

let loadMore = () => {
    let nextData = $('#table tbody tr').length;
    if(data.length < nextData + 2) alert("No more element!")
    else {
        for(let i = nextData; i < nextData + 2; i++) {
            let tr2 = document.createElement("tr");
            let td1 = document.createElement("td");
            td1.innerHTML = data[i].username;
            tr2.appendChild(td1);
            let td2 = document.createElement("td");
            td2.innerHTML = data[i].id;
            tr2.appendChild(td2);
            let td3 = document.createElement("td");
            td3.innerHTML = data[i].name;
            tr2.appendChild(td3);
            let td4 = document.createElement("td");
            td4.innerHTML = data[i].email;
            tr2.appendChild(td4);
            tbody.appendChild(tr2);
        }
    }
}




