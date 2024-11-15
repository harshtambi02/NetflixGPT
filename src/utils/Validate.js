// in this we will validate the data and if data is not valid it will show an error message using regex.

const checkValidData = (email, password, name) => {
    // eslint-disable-next-line no-useless-escape
    const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
   

    if(!isEmailValid) return "Email ID is not valid!"
    if(!isPasswordValid) return "Password is not Valid"
    

    return null

}

export default checkValidData