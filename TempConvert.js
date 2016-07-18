// JavaScript File

const WAIT_TIME = 850;
const RETURN_KEY_CODE = 13;
const PRECISION =1;
const degree = "\xB0";

function CelsiusToFahrenheit() 
{
    if(event.keycode == RETURN_KEY_CODE || event.which == RETURN_KEY_CODE)
    {
        let inputBox = document.getElementById("cToFBox");
        let errorMessenger = document.getElementById("ErrorMessenger");
        
        let celsius = parseFloat(inputBox.value);
        //let intNum = parseInt(num, 10);
        
        if(isNaN(celsius))
        {
            if (errorMessenger.className == "isError")
            {
                errorMessenger.className = "anotherError";
                setTimeout(function(){
                    errorMessenger.className = "isError";
                }, WAIT_TIME);

            }
            else
            {
                errorMessenger.innerHTML  = "Enter a number";
                errorMessenger.className = "isError";
            }
            
            inputBox.value = "";
            return;
        }
        errorMessenger.className = "noError";
        errorMessenger.innerHTML = "";
        
        
        let conversionResultList = document.getElementById("CToFList");
        let newItem = document.createElement("li");
        let removeButton = document.createElement("button");
        
        removeButton.innerHTML = "Remove";
        removeButton.className = "ConversionRemoveButton";
        
        let fahrenheit = getFahrenheit(celsius);
        
        newItem.innerHTML = celsius.toFixed(PRECISION) + degree + " Celsius is " +
                fahrenheit.toFixed(PRECISION) + degree + " Fahrenheit.  ";
        newItem.appendChild(removeButton);
        conversionResultList.appendChild(newItem);
        
        removeButton.addEventListener("click",function(){conversionResultList.removeChild(newItem)});

        inputBox.value = "";
    }
    
}

function FahrenheitToCelsius()
{
    if(event.keycode == RETURN_KEY_CODE || event.which == RETURN_KEY_CODE)
    {
        let inputBox = document.getElementById("fToCBox");
        let errorMessenger = document.getElementById("ErrorMessenger");
        
        let fahrenheit = parseFloat(inputBox.value);
        //let intNum = parseInt(num, 10);
        
        if(isNaN(fahrenheit))
        {
            if (errorMessenger.className == "isError")
            {
                errorMessenger.className = "anotherError";
                setTimeout(function(){
                    errorMessenger.className = "isError";
                }, WAIT_TIME);

            }
            else
            {
                errorMessenger.innerHTML  = "Enter a number";
                errorMessenger.className = "isError";
            }
            
            inputBox.value = "";
            return;
        }
        errorMessenger.className = "noError";
        errorMessenger.innerHTML = "";
        
        let conversionResultList = document.getElementById("FToCList");
        let newItem = document.createElement("li");
        let removeButton = document.createElement("button");
        
        removeButton.innerHTML = "Remove";
        removeButton.className = "ConversionRemoveButton";
        
        var celsius = getCelcius(fahrenheit)
        
        newItem.innerHTML = fahrenheit.toFixed(PRECISION) + degree + " Fahrenheit is " +
                celsius.toFixed(PRECISION) + degree + " Celsius.  ";
        newItem.appendChild(removeButton);
        conversionResultList.appendChild(newItem);
        
        removeButton.addEventListener("click",function(){conversionResultList.removeChild(newItem)});

        inputBox.value = "";
    }
}

function getCelcius(fahrenheit)
{
    return (fahrenheit-32)*(5/9);
}

function getFahrenheit(celsius)
{
    return (celsius/(5/9))+32;
}