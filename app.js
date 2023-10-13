function confirmPswd(){
    let password = document.getElementById('password').value;
    let confirmation = document.getElementById('confirm').value;

    if (password == ""){
        alert('Please enter a password.')
        return false
    }else if (password != confirmation){
        alert('Passwords do not match.')
    }
}
