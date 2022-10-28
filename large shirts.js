function make_shirt(size = "large", message = "I love web designing"){
    console.log(`Size of the shirt should be ${size}. And should contain a message ${size === "large" || size === "medium"? "I love web designing" : message}`)
}

make_shirt("medium", "Time is money")
