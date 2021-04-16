//declaring My Variables 

const checkboxes = document.querySelectorAll('.activities input');
const title = document.getElementById('title');
const otherJob = document.getElementById('other-job-role');
const shirtDesigns = document.getElementById('shirt-designs');
const shirtColors = document.getElementById('shirt-colors') ; 
const paymentMethod = document.querySelector('.payment-method-box')
const payment =document.getElementById('payment')
const creditCard = document.getElementById('credit-card') ; 
const paypal = document.getElementById('paypal') ; 
const bitcoin = document.getElementById('bitcoin') ; 
const form =document.getElementById('form')
const userName = form.elements['userName'] ;
const userNameHint = document.getElementById('name-hint') ; 
const email = form.elements['user-email']
const emailHint = document.getElementById('email-hint') ; 
const activitiesHint = document.getElementById('activities-hint') ;
const creditCardNumber = form.elements['user-cc-num']
const ccHint =document.getElementById('cc-hint') ;
const zipNumber = form.elements['user-zip'];
const zipHint=document.getElementById('zip-hint') ;
const cvv = form.elements['cvv'];
const cvvHint=document.getElementById('cvv-hint') ;
const activities = document.getElementById('activities')

// End declaring My Variables 


//Thats What Happens When The Form First Load
window.onload = onLoad = () =>{
    const firstField = document.getElementById('first-input');
    firstField.focus();
    otherJob.style.display = "none";
    shirtColors.style.display ="none" ; 
    creditCard.style.display ="none" ; 
    paypal.style.display ="none" ; 
    bitcoin.style.display ="none" ; 
    shirtColors.style.display ="none" ; 
    payment.value="credit-card" ;
    creditCard.style.display="block"
    
}

//Form Validation  
form.addEventListener('submit',(e)=>{
    
    if (userName.value ===""){
        e.preventDefault()
        userNameHint.style.display ='block'
        userName.parentNode.classList.add('not-valid')
        userName.parentNode.classList.remove('valid')
    }else{
        userNameHint.style.display ='none'
        userName.parentNode.classList.remove('not-valid')
        userName.parentNode.classList.add('valid')
    }
    const mailRegex = /[^@]+@[^@.]+\./i
    const reg = mailRegex.test(email.value) ;
    if(reg===false){
        e.preventDefault()
        emailHint.style.display ="block"
        email.parentNode.classList.add('not-valid')
        email.parentNode.classList.remove('valid')
    }else{
        emailHint.style.display ="none"
        email.parentNode.classList.remove('not-valid')
        email.parentNode.classList.add('valid')
    }
    if (parseInt(total)===0){
        e.preventDefault()
        activitiesHint.style.display="block"
        activities.classList.add('not-valid')
        activities.classList.remove('valid')
    }
    
    
    if(payment.value==="credit-card" ){
        e.preventDefault()
        if(creditCardNumber.value.length<13||creditCardNumber.value.length>16||isNaN(creditCardNumber.value)){
            ccHint.style.display="block"
            creditCardNumber.classList.add('not-valid')
            creditCardNumber.classList.remove('valid')
         
        }else if (creditCardNumber.value.length>13||creditCardNumber.value.length>16||isNaN(creditCardNumber.value)===false){
            ccHint.style.display="none"
            creditCardNumber.classList.remove('not-valid')
            creditCardNumber.classList.add('valid')
        }
        if(zipNumber.value.length !=5||isNaN(zipNumber.value)){
            e.preventDefault()
            zipHint.style.display="block"
            zipNumber.classList.add('not-valid')
            zipNumber.classList.remove('valid')
        }else{
            zipHint.style.display="none"
            zipNumber.classList.remove('not-valid')
            zipNumber.classList.add('valid')
        }
        if(cvv.value.length !=3 ||isNaN(cvv.value)){
            e.preventDefault()
            cvvHint.style.display="block"
            cvv.classList.add('not-valid')
            cvv.classList.remove('valid')
        }else{
            cvvHint.style.display="none"
            cvv.classList.remove('not-valid')
            cvv.classList.add('valid')
        }


    }
})


//Acessibility 


for(let i=0;i<checkboxes.length ; i++){
    checkboxes[i].addEventListener('focus',(e)=>{
        e.target.parentNode.classList.add('focus')

    })
    checkboxes[i].addEventListener('blur',(e)=>{
        e.target.parentNode.classList.remove('focus')

    })

}
   








//Event Listeners  
//selecting The Job Title Event Listener
title.addEventListener('click', (e) => {
	if (e.target.value == 'other') otherJob.style.display = 'block';
	else otherJob.style.display = 'none';
});
//selecting The Shirt Design
shirtDesigns.addEventListener('click', (e) => {
    const jsPuns = document.querySelectorAll('.js-puns')
    const heartJs = document.querySelectorAll('.heart-js')
	if (e.target.value == 'js puns') {
        shirtColors.style.display ="block" ; 
        for (let i=0 ;i<heartJs.length;i++){
            heartJs[i].style.display ="none"
        }
        for (let i=0 ;i<jsPuns.length;i++){
            jsPuns[i].style.display ="block"
        }
    }else if (e.target.value == 'heart js'){
        for (let i=0 ;i<heartJs.length;i++){
            heartJs[i].style.display ="block"
        }
        for (let i=0 ;i<jsPuns.length;i++){
            jsPuns[i].style.display ="none"
        }
    }
});
//Events Cost Calculation
let total = 0 ; 
document.querySelector('.activities').addEventListener('change', (e) => {

    
	let clicked = e.target;
	let clickedTime = clicked.getAttribute('data-day-and-time');
	let clickedCost = clicked.getAttribute('data-cost');
	for (let i = 0; i < checkboxes.length; i++) {
		let checkboxTime = checkboxes[i].getAttribute('data-day-and-time');
		if (clickedTime === checkboxTime && clicked !== checkboxes[i]) {
			if (clicked.checked) {
				checkboxes[i].disabled = true;
			} else {
				checkboxes[i].disabled = false;
			}
		}
	}
	if (clicked.checked) {
		total= total + parseInt(clickedCost);
	} else {
		total =total - parseInt(clickedCost);
	}
    const totalSpan=document.querySelector('.activities-cost')
	totalSpan.textContent = "Total: $" + total;
    if(total>0){
        activitiesHint.style.display="none"
        activities.classList.remove('not-valid')
        activities.classList.add('valid')
    }
    
});
//Selecting Your Payment Method
paymentMethod.addEventListener('click' ,(e)=>{
    if (e.target.value == "credit-card"){
        creditCard.style.display ="block" ; 
        paypal.style.display ="none" ; 
        bitcoin.style.display ="none" ;
    }else if (e.target.value == "paypal"){
        paypal.style.display ="block" ; 
        creditCard.style.display ="none" ; 
        bitcoin.style.display ="none" ;


    }else if (e.target.value == "bitcoin"){
        bitcoin.style.display ="block" ; 
        paypal.style.display ="none" ; 
        creditCard.style.display ="none" ; }


})

