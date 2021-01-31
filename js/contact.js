var firebaseConfig = {
    apiKey: "AIzaSyBCNAW67G2VyVrdzhgA0edgmlYVYGYunM4",
    authDomain: "contact-form-11a34.firebaseapp.com",
    projectId: "contact-form-11a34",
    storageBucket: "contact-form-11a34.appspot.com",
    messagingSenderId: "158657372165",
    appId: "1:158657372165:web:4d1843d731712e8ee9bc6c"
  };
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 let contactInfo=firebase.database().ref("information");
document.querySelector(".contactform").addEventListener("submit",submitform);
function submitform(e){
    e.preventDefault();
    let name=document.querySelector("#name").value;
    let email=document.querySelector("#email").value;
    let subject=document.querySelector("#sub").value;
    let message=document.querySelector("#message").value;
    savecontactinfo(name,email,subject,message);
}

function savecontactinfo(name,email,subject,message){
    let newContactinfo=contactInfo.push();
    newContactinfo.set({
        Username:name,
        email:email,
        subject:subject,
        message:message,
    });
};

const submit=document.getElementById("submit");
submit.addEventListener("click",()=>{
    submit.innerHTML="Thankyou!!!";
    
})