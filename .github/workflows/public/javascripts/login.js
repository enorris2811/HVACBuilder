function newUser() {
    var tempUserName = document.getElementById('userNameNew').value;
    var tempPassword = document.getElementById('passwordNew').value;
    var tempEmail = document.getElementById('emailNew').value;
    $.post('/newuser', { tempUserName, tempPassword,tempEmail }, function (data, status) {
        console.log(data.auth);
        window.location.reload();
    });
}

function login() {
    var tempUserName = document.getElementById('userName').value;
    var tempPassword = document.getElementById('password').value;
    

    var temp = document.getElementById('loginLink');
    $.post('/login', { tempUserName, tempPassword }, function (data, status) {
        console.log(data);
        if (data.auth == true) {
            temp.textContent = data.userName;
            sessionStorage.setItem('user', data.result.userName);
            sessionStorage.setItem('userID', data.result._id);
            sessionStorage.setItem('email',data.result.email);
            //location.reload();
            getUserData(data.userID);
            //helper(data.user);
            //location.reload(true);
           // updateSidebar();
          //location.reload();
        } else {
            alert('login failed!');
        }
    });
    $('#modalLoginForm').modal('hide');
}
    

function logOut() {
    sessionStorage.clear();
    console.log('seesion storage cleared');
    window.location.reload();
}