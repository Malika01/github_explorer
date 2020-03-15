function display() {
var name = document.getElementById('1').value;

if(name == '')
alert("Enter Some Username")

else
{
fetch('https://api.github.com/users/'+name)
.then(function(response) {
    return response.json()
}
)
.then(function(data) {
    if(data.id == undefined)
    alert("User not found")
    else
    {
    document.getElementById("name").innerHTML += data.name;
    document.getElementById("id").innerHTML = data.login;
    document.getElementById("followers").innerHTML = data.followers;
    document.getElementById("following").innerHTML = data.following;
    document.getElementById("repos").innerHTML = data.public_repos;
    }
}   
)
}
}