function saveToNetwork(event) 
{
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const phoneno = event.target.phoneno.value;

    const obj = {
        name,
        email,
        phoneno
    };

    // Done a post request on axios url and sending the object which we have created
    //and when I am successfull so creating a promise axios returns a promise if the
    // promise is successfull it will show the new user on screen and if it fails I want to show the error


    axios.post("https://crudcrud.com/api/25f5a056001c4362ab75da209c8b4221/appointmentData" , obj)
    .then((response)=>{
        showUserOnScreen(response.data)
        console.log(response)
    })
    .catch((err)=>{
        document.body.innerHTML=document.body.innerHTML + "<h4> Something went Wrong!</h4>"
        console.log(err)
    })
}

window.addEventListener("DOMContentLoaded", () => {
    axios.get("https://crudcrud.com/api/25f5a056001c4362ab75da209c8b4221/appointmentData")
    .then((response)=>{
        console.log(response)
        for(let i=0;i<response.data.length;i++){
            showUserOnScreen(response.data[i])
        }
    })
    .catch((error)=>{
        console.log(error);
    })
})

function showUserOnScreen(obj){
    const parentEle = document.getElementById('listofusers');
    const childEle = document.createElement('li');
    childEle.textContent = obj.name + '-' + obj.email + '-' + obj.phoneno;

    const deleteButton = document.createElement('input');
    deleteButton.type = "button";
    deleteButton.value = "Delete";
    deleteButton.onclick = () => {
       localStorage.removeItem(obj.email);
       parentEle.removeChild(childEle);
    }
    const editButton = document.createElement('input')
    editButton.type = "button";
    editButton.value = "Edit";
    editButton.onclick = () => {
        document.getElementById('name').value = obj.name;
        document.getElementById('email').value = obj.email;
        document.getElementById('phoneno').value = obj.phoneno;
        console.log(localStorage.removeItem(obj.email));
        parentEle.removeChild(childEle);
    }
    childEle.appendChild(editButton);
    childEle.appendChild(deleteButton);
    parentEle.appendChild(childEle);

}


