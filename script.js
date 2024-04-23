
const getInputFieldValue=(id)=>{
    return document.getElementById(id).value
}
const handleLogin=()=>{
    event.preventDefault()

    let fullName = getInputFieldValue("fullName")
    let Rollnumber= getInputFieldValue("Rollnumber")
    let Batch = getInputFieldValue("Batch")

    if(Rollnumber.length < 3){
        return alert("plz enter your right Roll Number")
    }

    if(fullName.length < 3){
        return alert("plz enter your full Name")
    }
    if(!Batch){
        return alert("plz enter your Batch")
    }
    // document.getElementById("loginCard").style.display="none"
    // document.getElementById("loginButton").style.display="none"
    // document.getElementById("homePage").style.display="block"
    // document.getElementById("logoutButton").style.display="block"
    // document.getElementById("fullNamePreview").innerHTML=fullName
   let rollNumber = document.getElementById("Rollnumber").value;
   let name = document.getElementById("fullName").value;
    let batch = document.getElementById("Batch").value;
    let section = document.getElementById("section").value;

   
    const studentDetails = {
        rollNumber: rollNumber,
        name: name,
        batch: batch,
        section: section
    };
    sessionStorage.setItem('studentDetails', JSON.stringify(studentDetails));

    form.reset();

        alert('Student details submitted successfully!');
    
}
// const handleLogout=()=>{
//     document.getElementById("loginCard").style.display="block"
//     document.getElementById("loginButton").style.display="block"
//     document.getElementById("homePage").style.display="none"
//     document.getElementById("logoutButton").style.display="none"
//  }
window.onload=()=>{
    let year=new Date().getFullYear()
    document.getElementById("year").innerText=year
}
const form = document.getElementById('studentform');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const rollNumber = document.getElementById('rollNumber').value;
    const name = document.getElementById('name').value;
    const batch = document.getElementById('batch').value;
    const section = document.getElementById('section').value;

    const studentDetails = {
        rollNumber: rollNumber,
        name: name,
        batch: batch,
        section: section
    };

    // Store data in session storage
    sessionStorage.setItem('studentDetails', JSON.stringify(studentDetails));

    // Optionally, you can clear the form after submission
    form.reset();

    alert('Student details submitted successfully!');
});