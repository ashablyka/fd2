class Validation {

    constructor(conditions) {
        this.conditions = conditions;
        this.conditionsToMap();
    }

    conditionsToMap() {
        this.conditionsMap = new Map();
        this.conditions.forEach((condition) => {
            this.conditionsMap.set(condition, true);
        });
        return this.conditionsMap;
    }

    toggleValidator(name, state) {
        for (let [key, val] of this.conditionsMap) {
            if (key.name === name) {
                if (state === undefined) {
                    this.conditionsMap.set(key, !val);
                } else this.conditionsMap.set(key, state);
            }
        }
    }

    validate(value) {
        let errorsMap = new Map(),
            validation = true;

        for (let [key, val] of this.conditionsMap) {
            if (val === true && key.check(value) === false) {
                validation = false;
                errorsMap.set(key.name, key.message(value));
            }
        }
        return {
            valid: validation,
            errors: errorsMap
        }
    }

}

let validation = new Validation([
    {
        name: 'More than 10',
        check: value => value > 10,
        message: function (value) {
            if (!this.check(value)) {
                return `${value} не прошло проверку`;
            }
        }
    },
    {
        name: 'More than 100',
        check: value => value > 100,
        message: function (value) {
            if (!this.check(value)) {
                return `${value} не прошло проверку`;
            }
        }
    }]);

let validation2 = new Validation([
    {
        name: 'More than 20',
        check: value => value > 20,
        message: function (value) {
            if (!this.check(value)) {
                return `${value} не прошло проверку`;
            }
        }
    },
    {
        name: 'More than 200',
        check: value => value > 200,
        message: function (value) {
            if (!this.check(value)) {
                return `${value} не прошло проверку`;
            }
        }
    }]);