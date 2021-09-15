document.getElementsByTagName("button")[0].addEventListener("click",checkCredential)
function checkCredential(event)
{   
    var fname=document.getElementsByTagName("input")[0].value
    var lname=document.getElementsByTagName("input")[1].value
    var pwd=document.getElementsByTagName("input")[3].value
    var mail=CheckEmail()
    if(fname=="")
    {
        event.preventDefault()
        document.getElementsByTagName("input")[0].classList.add("error-style-input")
        document.getElementsByClassName("error-div")[0].style.display="flex"
        document.getElementsByClassName("error-div")[0].classList.add("error-style-div")
        
    }
    else{
        document.getElementsByClassName("error-div")[0].style.display="none"
        document.getElementsByTagName("input")[0].classList.remove("error-style-input")
    }
    if(lname=="")
    {
        event.preventDefault()
        document.getElementsByTagName("input")[1].classList.add("error-style-input")
        document.getElementsByClassName("error-div")[1].style.display="flex"
        document.getElementsByClassName("error-div")[1].classList.add("error-style-div")
    }
    else{
        document.getElementsByClassName("error-div")[1].style.display="none"
        document.getElementsByTagName("input")[1].classList.remove("error-style-input")
    }
    if(pwd=="")
    {
        event.preventDefault()
        document.getElementsByTagName("input")[3].classList.add("error-style-input")
        document.getElementsByClassName("error-div")[3].style.display="flex"
        document.getElementsByClassName("error-div")[3].classList.add("error-style-div")
    }
    else{
        document.getElementsByClassName("error-div")[3].style.display="none"
        document.getElementsByTagName("input")[3].classList.remove("error-style-input")
    }
    if(mail===false)
    {
        event.preventDefault()
    }

}
function CheckEmail()
{
    var email=document.getElementsByTagName("input")[2].value
    var regex=/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/
    if(email=="")
    {
            document.getElementsByTagName("input")[2].classList.add("error-style-input")
            document.getElementsByClassName("error-div")[2].style.display="flex"
            document.getElementsByClassName("error-div")[2].classList.add("error-style-div")
            return false
    }
    if (email!="")
    {    
        if(regex.test(email)===true)
        {
            document.getElementsByTagName("input")[2].classList.remove("error-style-input")
            document.getElementsByClassName("error-div")[2].classList.remove("error-style-div")
            document.getElementsByTagName("input")[2].classList.add("success-style-input")
            document.getElementsByClassName("error-div")[2].classList.add("success-style-div")
            document.getElementsByClassName("error-div")[2].style.display="flex"
            document.getElementsByClassName("error-div")[2].innerHTML="Valid Email address"
            return true
        }
        else if(regex.test(email)===false)
        {
            document.getElementsByTagName("input")[2].classList.remove("success-style-input")
            document.getElementsByClassName("error-div")[2].classList.remove("success-style-div")
            document.getElementsByTagName("input")[2].classList.add("error-style-input")
            document.getElementsByClassName("error-div")[2].classList.add("error-style-div")
            document.getElementsByClassName("error-div")[2].style.display="flex"
            document.getElementsByClassName("error-div")[2].innerHTML="Invalid Email address"
            return false
            
        }
   }
}
document.getElementsByTagName("span")[3].addEventListener("click",loadweb)
function loadweb()
{
    window.open("https://www.frontendmentor.io/","_blank")
}
document.getElementsByTagName("span")[4].addEventListener("click",loadaccount)
function loadaccount()
{
    window.open("https://github.com/Rohit-Patran","_blank")
}
