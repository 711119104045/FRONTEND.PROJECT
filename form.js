validateInput=()=>{
    const usernameVal=username.value.trim()
    const emailVal=email.value.trim()
    const passwordVal=password.value.trim()
    const cpasswordVal=cpassword.value.trim()


const form=document.querySelector('#form');
const username=document.querySelector('#username');
const email=document.querySelector('#email');
const password=document.querySelector('#password');
const cpassword=document.querySelector('#cpassword');

form.addEventListener("click",
    validateInput()
);
console.log(validateInput);

setError=(element,message)=>{
    const findErrorElement=element.parentElement;
    const errorElement=findErrorElement.querySelector('.error')


    errorElement.innertext=message;
    findErrorElement.classList.add('error')
    findErrorElement.classList.remove('success')
}
setSuccess=(element)=>{
    const findErrorElement=element.parentElement;
    const errorElement=findErrorElement.querySelector('.error')


    errorElement.innertext='';
    findErrorElement.classList.add('succees')
    findErrorElement.classList.remove('error')
}


    if(username==''){
        setError(username,'username is required')
    }
    else
        setSuccess(success)

    if(email==''){
        setError(email,'email is required')  
    }
    else if(!validateEmail(isValidEmail)){
        setError(email,'please enter a valid email')}

    else
        setSuccess(success) 


   
    if(password===''){
        setError(password,'password is required')
    }
    else if(password.length<8){
        setError(password,'password should have atleast 8 digit')
    }
    else
        setSuccess(success)


    if(cpassword===''){
        setError(cpassword,'cpassword is required')
    }
    else if(cpassword!==password){
        setError(cpassword,'password does not match')
    }
    else
        setSuccess(success)
}

