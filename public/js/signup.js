
const signupForm = document.querySelector('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')


signupForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    const UserName = username.value
    const Email = email.value
    const Password = password.value



    const url = "/signup_submit?username="+UserName+"&email="+Email+"&password="+Password
    //window.open(url)

    fetch(url).then((response)=>{
        response.json().then((data)=>{
            if(data.error){
                console.log(data.error)
            }
            else{
                window.open("/sucess")
            }
           
        })
    })
 


})



