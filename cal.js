var ans="";
var num1 = "";
var num2 = "";
var opAvailable = false;
var dotNum1 = false;
var dotNum2 = false;
// var ePresent = false;    

document.addEventListener('keydown', function(event){
    if(event.key <='9' && event.key >='0'){
        show(event.key);
    }
    else if(event.keyCode == 8 || event.keyCode == 46){
        backspace();
    }
    else if(event.key == 'Enter'){
        equal();
    }
    else if(event.key == 'c' || event.key == 'KeyC'){
        performs('c');
    }
    else if(event.key == '*'){
        performs('*');
    }
    else if(event.key == '/'){
        performs('/');
    }
    else if(event.key == '+'){
        performs('+');
    }
    else if(event.key == '-'){
        performs('-');
    }
    else if(event.key == '%'){
        performs('%');
    }
    else if(event.key == '^'){
        performs('^');
    }
    else if(event.key == 's'){
        performs('s');
    }
    else if(event.key == '.'){
        show('.');
    }
    else if(event.key == 'p'){
        performs('p');
    }
    else if(event.key == 'e'){
        show('e');
    }
})

function show(x){
    if(num1==""){
        num1 = x;
    }
    else if(opAvailable == false && dotNum1 == false){
        if(x=='.'){
            dotNum1 = true;
        }
        num1 = num1.toString() + x;
    }
    else if(opAvailable==false && dotNum1 == true){
        if(x == '.'){
            alert("Decimal point already present");
        }
        else{
            num1 = num1.toString() + x;
        }
    }
    else{
        if(num1.length == 1){
            alert("Wrong format");
        }
        else if(num2 ==""){
            num2 = x;
        }
        else{
            if(x=='.'){
                if(dotNum2 == true){
                    alert("Decimal point already present");
                }
                else{
                    dotNum2 = true;
                    num2 = num2.toString() + x;
                }
            }
            else{
                num2 = num2.toString() + x;
            }
        }
    }
    ans = num1+num2;
    document.getElementById('solution').innerHTML = ans;
    document.getElementById('ans').innerHTML = " Ans = " + ans;
    document.getElementById('num1').innerHTML = " Num1 = " + num1;
    document.getElementById('num2').innerHTML = "Num2 = " + num2;
    document.getElementById('opAv').innerHTML = "Operator = " + opAvailable;
    document.getElementById('dot1').innerHTML = "DotNum1 = " + dotNum1;
    document.getElementById('dot2').innerHTML = "DotNum2 = " + dotNum2;
}

function performs(op, x){
    if(op == 'c'){
        num1 = "";
        ans="";
        num2="";
        opAvailable = false;
        dotNum2=false;
        dotNum1=false;
    }
    // else if(op == 's'){
    //     if(opAvailable == true && num2 == ""){
    //         backspace();
    //     }
    //     else if(opAvailable == true && num2 != ""){
    //         equal();
    //     }
    //     // num1 = num1 + op;
    //     opAvailable = true;
    // }
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
    document.getElementById('dot1').innerHTML = "DotNum1 = " + dotNum1;
    document.getElementById('dot2').innerHTML = "DotNum2 = " + dotNum2;
}

function backspace(){
    if(ans == ""){
        return;
    }
    x=ans.length;
    y = num1.length;
    z = num2.length;
    if(opAvailable == false && dotNum1 == true){
        if(num1[y-1] == '.'){
            dotNum1 = false;
        }
    }
    else if(num2 == "" && opAvailable == true){
        opAvailable = false;
    }
    else if(dotNum2 == true){
        if(num2[z-1] == '.'){
            dotNum2 = false;
        }
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
    document.getElementById('dot1').innerHTML = "DotNum1 = " + dotNum1;
    document.getElementById('dot2').innerHTML = "DotNum2 = " + dotNum2;
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
        ans = Math.sqrt(parseFloat(num2));
        num1 = "";
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
    else if(num1[l-1] == 'p'){
        ans = Math.pow(parseFloat(num1.slice(0,l)), parseFloat(num2));
    }
    if(ans % 1 == 0){
        dotNum1 = false;
    }
    else{
        dotNum1 = true;
    }
    ans = ans.toString();
    num1=ans;
    num2 = "";
    dotNum2 = false;
    opAvailable = false;
    document.getElementById('solution').innerHTML = ans;
    document.getElementById('ans').innerHTML = " Ans = " + ans;
    document.getElementById('num1').innerHTML = " Num1 = " + num1;
    document.getElementById('num2').innerHTML = "Num2 = " + num2;
    document.getElementById('opAv').innerHTML = "Operator = " + opAvailable;
    document.getElementById('dot1').innerHTML = "DotNum1 = " + dotNum1;
    document.getElementById('dot2').innerHTML = "DotNum2 = " + dotNum2;
}