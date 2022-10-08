
     "use strict";

     var form = document.querySelector("#myform");

     form.addEventListener("submit", function (e) {
         e.preventDefault();
         var search = document.querySelector("#search").value;
         var originalName = search.split(' ').join('')
         //alert(originalName)
         fetch("https://api.github.com/users/" + originalName).then(res => res.json()).then(i => {
             console.log(i)
             document.querySelector("#result").innerHTML = `
            <a href="https://github.com/${originalName}" target="_blank"><img src="${i.avatar_url}"></a>
            <p class="id">Id : ${i.id}</p>
            <h2>Name : ${i.name}</h2>
            <p class="bio">Bio : ${i.bio}</p>
            <p>Location : ${i.location}</p>
            <p class="login">Login id: <a href="https://github.com/${originalName}" target="_blank">${i.login}</a></p>
            `
         })
     })

