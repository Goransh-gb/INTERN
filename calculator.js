let operator="";
let num1="0";
let display=document.querySelector("#display")
let digit=document.querySelectorAll(".digit")
let btnAdd=document.querySelector("#btnAdd")
let btnMinus=document.querySelector("#btnMinus")
let btnMult=document.querySelector("#btnMult")
let btnDivide=document.querySelector("#btnDivide")
let btnfactorial=document.querySelector("#btnFactorial")
let btnpower=document.querySelector("#btnpower")
let btnequal=document.querySelector("#btnequal")
btnAdd.addEventListener("click",Add)
btnMinus.addEventListener("click",Minus)
btnMult.addEventListener("click",Mult)
btnDivide.addEventListener("click",Divide)
btnfactorial.addEventListener("click",Factorial)
btnpower.addEventListener("click",Power)
btnequal.addEventListener("click",equal)
for (i=0;i<digit.length;i++)
{
    digit[i].addEventListener("click",clickCal)
}
function clickCal(event)
{
 if(display.value=="0")
    display.value=""

 display.value=display.value+event.target.innerText;
}
let clear=document.querySelector("#clear")
clear.addEventListener("click",clearAll)
function clearAll()
{
    display.value="0"
}
function Add()
{
    num1=parseFloat(display.value)
    operator="+"
    display.value=""
}
function Minus()
{
    num1=parseFloat(display.value)
    operator="-"
    display.value=""
}
function Mult()
{
    num1=parseFloat(display.value)
    operator="*"
    display.value=""
}
function Divide()
{
    num1=parseFloat(display.value)
    operator="/"
    display.value=""
}
function Factorial()
         
         {num1=parseFloat(display.value)
            let s=1
          for(f=1;f<=num1;f++)
          {
            s=s*f;
            
            
          }
          display.value=s
            
        }
        function Power()
        {num1=parseFloat(display.value)
           operator="^"
           display.value=""
        }
function equal()
{   
   if(operator=="+")
   {let  num2=parseFloat(display.value)
      result=num1+num2
      display.value=result;
   }
   if(operator=="-")
       {let  num2=parseFloat(display.value)
          result=num1-num2
          display.value=result;
       }

  if(operator=="*")
   {let  num2=parseFloat(display.value)
      result=num1*num2
      display.value=result;
   }
   if(operator=="/")
       {let  num2=parseFloat(display.value)
          result=num1/num2
          display.value=result;
       }
       if(operator=="^")
        {
          let num2=parseFloat(display.value)
          let p=1
             for(g=1;g<=num2;g++)
           {
             p=p*num1
           }
          display.value=p
  
        }
      }
  
