// JavaScript File

const returnKeycode = 13;

function CelsiusToFahrenheit() 
{
    if(event.keycode == returnKeycode || event.which == returnKeycode)
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
                }, 850);

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
        
        let fahrenheit;
        fahrenheit = (celsius/(5/9))+32;
        
        newItem.innerHTML = celsius.toFixed(1) + " Celsius is " +
                fahrenheit.toFixed(1) + " Fahrenheit.  ";
        newItem.appendChild(removeButton);
        conversionResultList.appendChild(newItem);
        
        removeButton.addEventListener("click",function(){conversionResultList.removeChild(newItem)});

        inputBox.value = "";
    }
    
}

function FahrenheitToCelsius()
{
    if(event.keycode == returnKeycode || event.which == returnKeycode)
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
                }, 850);

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
        
        let celsius;
        celsius = (fahrenheit-32)*(5/9);
        
        newItem.innerHTML = fahrenheit.toFixed(1) + " Fahrenheit is " +
                celsius.toFixed(1) + " Celsius.  ";
        newItem.appendChild(removeButton);
        conversionResultList.appendChild(newItem);
        
        removeButton.addEventListener("click",function(){conversionResultList.removeChild(newItem)});

        inputBox.value = "";
    }
    
}