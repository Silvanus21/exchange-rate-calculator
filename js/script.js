const curr_one = document.querySelector("#currency-one")
const curr_two = document.querySelector("#currency-two")
const amount_one = document.querySelector("#amount-one")
const amount_two = document.querySelector("#amount-two")

const rate = document.querySelector("#rate")
const swap = document.querySelector("#swap")

//fetch exchange rates and update 
function calculate(){
    const currency_one = curr_one.value
    const currency_two = curr_two.value

    fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
    .then(res => res.json())
    .then(data => {
        const rateOfCurrency = data.rates[currency_two]
        rate.innerText = `1 ${currency_one} = ${rateOfCurrency} ${currency_two}`

        amount_two.value = ( amount_one.value * rateOfCurrency ).toFixed(2)
    })
}

//event listeners
curr_one.addEventListener("change", calculate)
amount_one.addEventListener("input", calculate)
curr_two.addEventListener("change", calculate)
amount_two.addEventListener("input", calculate)

swap.addEventListener("click", () => {
    const temp = curr_one.value
    curr_one.value = curr_two.value
    curr_two.value = temp

    calculate()
})


calculate()