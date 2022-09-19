class Validator {
    static validateUserName(name) {
        const isTrueCharact = /^[\w-]{3,}$/.test(name);
        const isNotThreeNumb = !/\d{3}/.test(name);
        const isStartCharactCorrect = !/^[\d_-]/.test(name);
        const isEndCharactCorrect = !/[\d_-]$/.test(name);

        return (
            isTrueCharact && isNotThreeNumb && isStartCharactCorrect && isEndCharactCorrect
        );
    }
}

export default Validator;