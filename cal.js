var ans="";
var num1 = "";
var num2 = "";
var opAvailable = false;

document.addEventListener('keypress', function(event){
    if(event.key <='9' && event.key >='0'){
        show(event.key);
    }
    else if(event.key == 'Backspace'){
        backspace();
    }
    else if(event.key == 'Enter'){
        equal();
    }
    else if(event.key == 'c' || event.key == 'KeyC'){
        performs(c);
    }
})

function show(x){
    if(num1==""){
        num1 = x;
    }
    else if(opAvailable == false){
        num1 = num1.toString() + x;
    }
    else{
        
        if(num2 ==""){
            num2 = x;
        }
        else{
            num2 = num2.toString() + x;
        }
    }
    ans = num1+num2;
    document.getElementById('solution').innerHTML = ans;
    document.getElementById('ans').innerHTML = " Ans = " + ans;
    document.getElementById('num1').innerHTML = " Num1 = " + num1;
    document.getElementById('num2').innerHTML = "Num2 = " + num2;
    document.getElementById('opAv').innerHTML = "Operator = " + opAvailable;
}

function performs(op, x){
    if(op == 'c'){
        num1 = "";
        ans="";
        num2="";
        opAvailable = false;
    }
    else if(op == '*' && x == -1){
        if(num2==""){
            num1 = (parseFloat(num1)*-1).toString();
        }
        else{
            num2 = (parseFloat(num2)*-1).toString();
        }
    }
    else{
        if(opAvailable == true && num2 == ""){
            backspace();
        }
        else if(opAvailable == true && num2 != ""){
            equal();
        }
        opAvailable = true;
        num1 = num1 + op;
    }

    ans = num1+num2;

    if(ans != ""){
        document.getElementById('solution').innerHTML = num1;
    }
    else{
        document.getElementById('solution').innerHTML = "0";
    }
    
    document.getElementById('ans').innerHTML = " Ans = " + ans;
    document.getElementById('num1').innerHTML = " Num1 = " + num1;
    document.getElementById('num2').innerHTML = "Num2 = " + num2;
    document.getElementById('opAv').innerHTML = "Operator = " + opAvailable;
}

function backspace(){
    if(ans == ""){
        return;
    }
    x=ans.length;
    y = num1.length;
    z = num2.length;
    if(num2 == "" && opAvailable == true){
        opAvailable = false;
    }
    ans = ans.slice(0,x-1);
    if(num2 != ""){
        num2 = num2.slice(0,z-1);
    }
    else{
        num1 = num1.slice(0,y-1);
    }

    if(ans != ""){
        document.getElementById('solution').innerHTML = num1;
    }
    else{
        document.getElementById('solution').innerHTML = "0";
    }
    
    document.getElementById('ans').innerHTML = " Ans = " + ans;
    document.getElementById('num1').innerHTML = " Num1 = " + num1;
    document.getElementById('num2').innerHTML = "Num2 = " + num2;
    document.getElementById('opAv').innerHTML = "Operator = " + opAvailable;
}
function equal(){
    l = num1.length;

    if(opAvailable==false){
        return;
    }
    else if(opAvailable == true && num2 == ""){
        alert("Wrong format!!");
        return;
    }
    else if(num1[0] == 's'){
        ans = sqrt(parseFloat(num1.slice(0,l)));
    }
    else if(num1[l-1] == '*'){
        ans = parseFloat(num1.slice(0,l)) * parseFloat(num2);
    }
    else if(num1[l-1] == '/'){
        ans = parseFloat(num1.slice(0,l)) / parseFloat(num2);
    }
    else if(num1[l-1] == '+'){
        ans = parseFloat(num1.slice(0,l)) + parseFloat(num2);
    }
    else if(num1[l-1] == '-'){
        ans = parseFloat(num1.slice(0,l)) - parseFloat(num2);
    }
    else if(num1[l-1] == '%'){
        ans = parseFloat(num1.slice(0,l)) % parseFloat(num2);
    }
    else if(num1[l-1] == '^'){
        ans = parseFloat(num1.slice(0,l)) ^ parseFloat(num2);
    }
    ans = ans.toString();
    num1=ans;
    num2 = "";
    opAvailable = false;
    document.getElementById('solution').innerHTML = ans;
    document.getElementById('ans').innerHTML = " Ans = " + ans;
    document.getElementById('num1').innerHTML = " Num1 = " + num1;
    document.getElementById('num2').innerHTML = "Num2 = " + num2;
    document.getElementById('opAv').innerHTML = "Operator = " + opAvailable;

}