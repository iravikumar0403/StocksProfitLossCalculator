const currentPriceEl = document.getElementById("current-price-input")
const initialPriceEl = document.getElementById("initial-price-input")
const quantityEl = document.getElementById("quantity-input")
const errorEl = document.getElementById("error-msg")
const outputEl = document.getElementById("output")
const btn = document.getElementById("btn")

btn.addEventListener('click', handleClick)

const lossColors = {
    "--color1" : "#da6e6e",
    "--color2" : "#eb8181",
    "--color3" : "#971d1d",
}

const profitColors = {
    "--color1" : "#77da6e",
    "--color2" : "#81eba2",
    "--color3" : "#1d975a"
}

const neutralColors = {
    "--color1" : "#6edacc",
    "--color2" : "#81dfeb",
    "--color3" : "#1d9783"
}
function handleClick(){
    if(validateInputs(Number(initialPriceEl.value), Number(currentPriceEl.value), Number(quantityEl.value))){
        calculateProfitAndLoss(Number(initialPriceEl.value), Number(currentPriceEl.value), Number(quantityEl.value));
    }
}

function validateInputs(initialPrice, currentPrice, quantity){
    if(initialPrice && currentPrice && quantity){
        errorEl.innerHTML = ""
        return true
    }else{
        errorEl.innerHTML = "Please enter a valid input"
        return false
    }
}

function calculateProfitAndLoss(initialPrice, currentPrice, quantity){
    if(initialPrice < currentPrice){
        let profit = (currentPrice - initialPrice) * quantity;
        let profitPercentage = (profit/(initialPrice*quantity)) * 100;
        
        document.documentElement.style.setProperty("--color1", profitColors["--color1"])
        document.documentElement.style.setProperty("--color2", profitColors["--color2"])
        document.documentElement.style.setProperty("--color3", profitColors["--color3"])
        
        showOutput(`Your profit is ${profit.toFixed(2)} and profit percentage is ${profitPercentage.toFixed(2)}`)
    }else if(initialPrice > currentPrice){
        let loss = (initialPrice - currentPrice) * quantity;
        let lossPercentage = (loss/(initialPrice*quantity)) * 100;
        
        document.documentElement.style.setProperty("--color1", lossColors["--color1"])
        document.documentElement.style.setProperty("--color2", lossColors["--color2"])
        document.documentElement.style.setProperty("--color3", lossColors["--color3"])
        
        showOutput(`Your loss is ${loss.toFixed(2)} and loss percentage is ${lossPercentage.toFixed(2)}`)
    }else{
        showOutput("no pain no gain and no gain no pain")
        document.documentElement.style.setProperty("--color1", neutralColors["--color1"])
        document.documentElement.style.setProperty("--color2", neutralColors["--color2"])
        document.documentElement.style.setProperty("--color3", neutralColors["--color3"])
    }
}

function showOutput(message){
    outputEl.innerHTML = message
}