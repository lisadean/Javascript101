function hello(name='world') {
    return `Hello, ${name}!`;
}

function madlib(name, subject) {

    return `${name}'s favorite subject in school is ${subject}.`
}

function tipAmount(billAmount, levelOfService) {
    var GOOD_SERVICE = .20;
    var FAIR_SERVICE = .15;
    var BAD_SERVICE = .10;
    
    levelOfService = levelOfService || 'fair';

    levelOfService = levelOfService.toUpperCase();
    if (levelOfService == 'GOOD') {
        tipPercentage = GOOD_SERVICE;
    } else if (levelOfService == 'BAD') {
        tipPercentage = BAD_SERVICE;
    } else {
        tipPercentage = FAIR_SERVICE;
    }


    return billAmount * tipPercentage;
}

function totalAmount(billAmount, levelOfService) {
    var tip = tipAmount(billAmount, levelOfService);
    return billAmount + tip;
}

function splitAmount(billAmount, levelOfService, numPeople) {
    var total = totalAmount(billAmount, levelOfService);
    return total / numPeople;
}

console.log('Hello function');
console.log(hello('Mustache'));
console.log(hello());

console.log('Madlib function');
console.log(madlib('Lisa', 'math'));

console.log('tipAmount function');
console.log(tipAmount(100, 'good'));
console.log(tipAmount(100));
console.log(tipAmount(100, 'bad'));

console.log('totalAmount function');
console.log(totalAmount(100, 'good'));
console.log(totalAmount(100));
console.log(totalAmount(100, 'bad'));

console.log ('splitAmount function');
console.log(splitAmount(100, 'good', 5));
console.log(splitAmount(100, undefined, 5));
console.log(splitAmount(100, 'bad', 2));