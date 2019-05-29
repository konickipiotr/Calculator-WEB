var first = null;
var second = 0;
var symb = null;
var oldsymbo = null;
var all = "";
var endOper = true;
var cleanscrean = false;
var dot = false

function insert(num){
    
    if(num == '.'){
        if(second == null)
            return;
        
        if(dot == true)
            return;
        
        second += num;
        document.calc.display.value = second;
        dot = true;
        return;
    }
    
    if(cleanscrean == true){
        document.calc.display.value = "";
        cleanscrean = false;
    }
    
    if(endOper == true){
        document.calc.display.value = "";
        document.calc.operation.value = ""; 
        endOper = false;
    }
    
    second = document.calc.display.value+num;
    document.calc.display.value = second;
    document.calc.operation.value = all + second;
}

function operation(op){  
    if(second == null){
        return;
    }
    else if(first == null && second != null){
        symb = op;
        all = second+symb;
        first = second;
        second = null;
        document.calc.operation.value = all;
        document.calc.display.value = "";
        dot = false;
        
    }else if(first != null && second != null){
        if(oldsymbo != null){
            oldsymbo = symb;
            symb = op;
        }else{
            oldsymbo = op;
            symb = op;
        }
        
        all += second+op;
        document.calc.operation.value = all;
        
        equalX();
        
        function equalX(){
        if(first != null && second != null){  

            var x = first + oldsymbo + second;
            var result = eval(x);
            document.calc.display.value = result; 
            
            cleanscrean = true;
            first = result;
            second = null;
            dot = false
        }
        }
    }
}


function equal(){
    if(first != null && second != null){
        var x = first + symb + second;
        var result = eval(x);
        document.calc.display.value = result;    
        document.calc.operation.value = result;
        first = null;
        second = result;
        dot = false
    }
}

function clean(){
    document.calc.display.value = "0";
    document.calc.operation.value = "";
    first = null;
    second = 0;
    symb = null;
    oldsymbo = null;
    all = "";
    endOper = true;
    dot = false
}

function back(){
    var x = document.calc.display.value;
    document.calc.display.value = x.substring(0,x.length-1);
}