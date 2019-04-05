class Validation {

    validators;
    disabledValidators = new Set();

    constructor(...validators) {
        this.validators = new Map((validators || []).map(item => [item.name, item]));
    }

    toggleValidator(name, state = !this.disabledValidators.has(name)) {
        if (this.validators.has(name)) {
            if (state) {
                this.disabledValidators.delete(name);
            } else {
                this.disabledValidators.add(name);
            }
        }
    }

    validate(value) {
        return [...this.validators.values()]
            .filter(validator => !this.disabledValidators.has(validator.name))
            .reduce((result, validator) => {
                let checkResult = validator.check(value);
                result.valid = result.valid && checkResult;
                if (!checkResult) {
                    result.errors.set(validator.name, validator.message(value));
                }
                return result;
            }, {valid: true, errors: new Map()})
    }

}
