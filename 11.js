document.getElementById('check').onclick = function () {
   let login = document.getElementById('login').value;
   let password = document.getElementById('password').value;

   if (login == 'LockyLok' && password == 'Ruchka223')
   open('main.html');
   else alert('Incorrect');
}