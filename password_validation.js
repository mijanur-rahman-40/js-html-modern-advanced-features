const validateString = (str) => {
    const regex = new RegExp("[A-Z]+");
    if (regex.test(str)) {
        const regex = new RegExp('[a-z]+');
        if (regex.test(str)) {
            const regex = new RegExp('[0-9]+');
            if (regex.test(str)) {
                let regex = new RegExp("[!@#$%^&*_]+");
                if (regex.test(str)) {
                    if (str.length >= 8 || str.length <= 16)
                        return 'yes'
                    return '5'
                }
                return '4'
            }
            return '3';
        }
        return '2';
    }
    return '1';
}

const hardChecking = (str) => {
    // have to minimum one decimal
    // have to minimum one Uppercase letter
    // have to minimum one lowercase letter
    // have to minimum one special character
    // have to length 8 to 20 
    let regex = /^(?=.*\d)(?=.*[!@#$%^&*_])(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
    return regex.test(str)
}

console.log(validateString('8dAs$_ADb'));
console.log(hardChecking('8dA$_ADb'));
