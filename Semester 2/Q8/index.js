const form = document.querySelector('form');

form.addEventListener("submit", e =>{
    const pass = document.querySelector('#password').value;
    
    if(pass === "admin"){
        document.write(`
            <h1 style="color: green; text-align: center; margin-top: 100px;"> Login Successful </h1>
        `);
    }else{
        document.write(`
            <h1 style="color: red; text-align: center; margin-top: 100px;"> Login Failed </h1>
        `);
    }
    
    e.preventDefault();
});