




//.Quyidagi namunani kuzatgan holda funksiya yasang.
// Namuna:
// Namuna("div*2") ᔍ "<div></div><div></div>"
// Namuna("p*1") ᔍ "<p></p>

function atribut(qiymat){
let [teg,soni] = qiymat.split("*")
let natija="";
for(let i=0; i<Number(soni);i++){
    natija+=`<${teg}></${teg}>`;
} 
return natija;
}
console.log(atribut("div*2"));











//101.Funksiya butun son qabul qilsa, 1dan ushbu butun songacha bo’lgan sonlar yig’indisini qaytarsin.
function yigindi(son){
    let natija =0;
    for(let i=0; i<=son;i++){
      natija+=i;
    }
    return natija;
}
console.log(yigindi(3));



//102.Funskiya son va object qabul qiladi. Objectni ichida min va
// max degan propertilar mavjud. Agar ushbu son min va maxni
// oralig’ida bo’lsa funksiya true qaytarsin, aks holda false

function tekshir(son , obj){
    if(son > obj.min){
        if(son < obj.max){
            return true;
        }

    }else{
        return false;
    }

}
console.log(tekshir(4,{min:0, max:5}));



//103.Funksiya son qabul qiladi, agar ushbu sonni kvadratga
// ko’tarsak, ushbu natijaning oxirigi qiymati sonning o’ziga teng
// bo’lsa funksiya true qaytarsin, aks holda false

function daraja(son){
    let kvadrat = 0;
    let y = String(son)
    if(son == 0 ){
        return "boshqa son kiriting";
    }
     kvadrat = son*son
    if(kvadrat % (10**y.length) == son){
        return true;
    }else{
        return false;
    }
}
console.log(daraja(25));



//104.Funksiya massiv qabul qiladi. Funksiya massivning elementlariga o’sha elementning indexini qo’shgan holda yangi
// massiv qaytarsin.

function arr(massiv){

    for(let i=0; i< massiv.length;i++){
        massiv[i]=i;
    }
    return massiv;
}
console.log(arr([0,0,0,0,0]));



//105.Funksiya ichimliklar massivini qabul qiladi. Funksiya
// ichida shakari yo’q ichimlilarinigina qaytarishi kerak. Ichida
// shakari bor ichimliklar ro’yxati:
function ichimliklar(mas){
const shakarli = ["cola","fanta"];
return mas.filter((ichimlik)=> ! shakarli.includes(ichimlik));
}
console.log(ichimliklar(["fanta", "cola", "water"]));



//106.Funksiya son qabul qilsa, Funksiya ushbu sonda nechta raqam borligini qaytarsin.
function son(x){
    return String(x).length;
}
console.log(son(152));

//107.Funksiya son qabu qilsa, ushbu funksiya sonning raqamlari
// o’rni istalgancha almashtirib eng katta hosil bo’lishi mumkin
// bo’lgan sonni qaytarsin
function kson(katta){
let raqamlar = String(katta).split("");
raqamlar.sort((a,b) => b-a);
return Number(raqamlar.join(""))
}
console.log(kson(587));



//108..Funksiya 2ta sonlar oralig’ini qabul qiladi. Funksiya ushbu
// oraliqdan bironta random son qaytarsin.
function random(max,min){
    return Math.floor(Math.random()*(max-min+1)+min);
}
console.log(random(13,25));


//109..Funksiya son qabul qiladi. Ushbu funksiya ushbu son narissistik son bo’lsa true qaytarsin, aks holda false. Narissistik son
// degani sonning har bir raqamini sonning uzunligi miqdorida
// darajaga ko’tarib qo’shib chiqilganda o’ziga teng bo’lgan son.
function son(z){
    let sonlar =  String(z).split("");
    let uzunligi = sonlar.length;
    let yigindi = 0;
    for(let i=0; i<sonlar.length;i++){
        yigindi+=Number(sonlar[i])**uzunligi;
    }
    
    if(yigindi === z){
        return true;
    }else{
        return false;
    }

}
console.log(son(370));



//110.Funksiya string qabul qiladi.Funksiya ushbu stringda nechta katta harf ishtirok etganin qaytarsin.
function katta(matn){
    let soni=0;
    for(let i=0; i<matn.length; i++){
        let kottaharf=matn[i];
        if(kottaharf === kottaharf.toUpperCase()){
            if(kottaharf !== kottaharf.toLowerCase()){
                soni++;
            }
        }
    }
    return soni;
}
console.log(katta("Salom Dunyo"));



