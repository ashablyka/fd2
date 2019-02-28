let months = {
    january: {label: 'январь', days: 31},
    february: {label: 'февраль', days: 28},
    march: {label: 'март', days: 31},
    april: {label: 'апрель', days: 30},
    may: {label: 'май', days: 31},
    june: {label: 'июнь', days: 30},
    july: {label: 'июль', days: 31},
    august: {label: 'август', days: 31},
    september: {label: 'сентябрь', days: 30},
    october: {label: 'октябрь', days: 31},
    november: {label: 'ноябрь', days: 30},
    december: {label: 'декабрь', days: 31}
};
let result = [];
/*for (let monthName of Object.keys(months)) {
    let month = months[monthName];
    if (month.days === 31){
        result.push(month.label);
    }
}*/
/*for (let {days, label} of Object.values(months)) {
    if (days === 31){
        result.push(label);
    }
}*/
for (let [monthName, {days, label}] of Object.entries(months)) {
    if (days === 31){
        result.push(`${monthName} - ${label}`);
    }
}
alert(result.join('\n'));