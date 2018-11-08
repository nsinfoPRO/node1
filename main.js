const express=require('express');
const hbs=require('hbs');


var app=express();
hbs.registerPartials(__dirname+'/views/partials');  //gde stoje templati koje cemo ubacivati u druge template
app.set('view engine','hbs');
app.use(express.static(__dirname+'/public'));

app.use((req,res,next)=>{                        //ukoliko zelimo da vidimo informacije o zahtevima ka serveru
    var now=new Date().toString();
    console.log(now+"  metod :"+req.method+' putanja:'+req.url);
    next();
});

hbs.registerHelper('mesec',()=>{
    return new Date().getMonth();
});

hbs.registerHelper('malaSlovaUVelika',(text)=>{
    return text.toUpperCase();
});

app.get(('/'),(req,res)=>{
    //res.send('<h1>Odgovor na zahtev</h1>');
    res.send(
            {
                ime:"Pera",
                reciNeke:["sdasd","sadsadddsad","sadasdawwwwwwww"]
            }
            );
});
app.get(('/about'),(req,res)=>{
    
    res.render('about.hbs',{
        pageTitle:"naslov neki",
        trenutnaGodina:new Date().getFullYear()
    });
});
app.listen(3000,()=>{
    console.log('server je podignut');
});

