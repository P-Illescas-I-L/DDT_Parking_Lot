const ValetParking= [
    {'entrada': new Date("2026-01-01 00:00"), 'salida' : new Date("2026-01-01 01:00")},
    {'entrada': new Date("2026-01-02 00:00"), 'salida' : new Date("2026-01-02 01:30")},
    {'entrada': new Date("2026-01-03 00:00"), 'salida' : new Date("2026-01-03 00:59")},
    {'entrada': new Date("2026-01-04 00:00"), 'salida' : new Date("2026-01-04 01:00")},
    {'entrada': new Date("2026-01-05 00:00"), 'salida' : new Date("2026-01-05 01:01")},
    {'entrada': new Date("2026-01-06 00:00"), 'salida' : new Date("2026-01-06 04:59")},
    {'entrada': new Date("2026-01-07 00:00"), 'salida' : new Date("2026-01-07 05:00")},
    {'entrada': new Date("2026-01-08 00:00"), 'salida' : new Date("2026-01-08 05:01")},
    {'entrada': new Date("2026-01-09 00:00"), 'salida' : new Date("2026-01-09 06:00")},
    {'entrada': new Date("2026-01-10 00:00"), 'salida' : new Date("2026-01-10 23:59")},
    {'entrada': new Date("2026-01-11 00:00"), 'salida' : new Date("2026-01-11 00:00")},
    {'entrada': new Date("2026-01-12 00:00"), 'salida' : new Date("2026-01-13 00:01")},
];

function substraction(){
    const resultado = ValetParking.entrada - ValetParking.salida;
    const perDay = 18;
    const fiveHrsOrLess = 12;
    if(resultado >= 0 && resultado == 5){
        console.log("Your tariff is: ", fiveHrsOrLess);
    } else {
        console.log("Your tariff is: ", perDay);
    }
}

function mainloop(){
    ValetParking.forEach((tiempo) => {

    })
}