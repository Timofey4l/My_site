let a=0;

function newContent()
{
    alert("Завантажується новий контент");
    document.open();
    document.write("<h1> Щоб показати старий контент натисніть або Alt + F4 або два рази натисніть F5 </h1>"); 
    a=1;
    document.close();
}

if(a===1)

alert("Перш ніж дивитися сайт подивіться !Обов'язково для перегляду!");

///   Непрацює((((((((((((((((((((((((((