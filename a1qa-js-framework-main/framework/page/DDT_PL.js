/*Casos de interés
 diferencia = 4:59
 diferencia = 05
 diferencia = 05:01 
 diferencia = 23:59  
 diferencia = 1 día
 diferencia = 1 día + 01 minuto 
 diferencia = 1 día + 01 u hora
 diferencia = 1 día, 2 días, ...
  */

const ValetParking= [
    {'entrada': new Date("2026-01-06 00:00:00"), 'salida' : new Date("2026-01-06 04:59:00")},
    {'entrada': new Date("2026-01-07 00:00:00"), 'salida' : new Date("2026-01-07 05:00:00")},
    {'entrada': new Date("2026-01-08 00:00:00"), 'salida' : new Date("2026-01-08 05:01:00")},
    {'entrada': new Date("2026-01-10 00:00:00"), 'salida' : new Date("2026-01-10 23:59:00")},
    {'entrada': new Date("2026-01-11 00:00:00"), 'salida' : new Date("2026-01-12 00:00:00")},
    {'entrada': new Date("2026-01-12 00:00:00"), 'salida' : new Date("2026-01-13 00:01:00")},
    {'entrada': new Date("2026-01-12 00:00:00"), 'salida' : new Date("2026-01-14 00:00:00")},
];

function diffMinutes(a,b){
    return Math.round((b-a)/60000);
} 

//descarta el uso de floor --> puedes hacer aproximaciones desde los ms para ser mas certero 

function minutesToDHM(totalMinutes){
    const sign = totalMinutes < 0 ? '-': '';
    let m = Math.abs(totalMinutes);
    const d = Math.floor(m/1440);
    m -= d * 1440;
    const h = Math.floor(m/60);
    m -= h * 60;
    const min = m;
    return `${sign}${d}d ${String(h).padStart(2,'0')}h ${String(min).padStart(2,'0')}m`;
}

 ValetParking.forEach((item,i) => {
    const minutos = diffMinutes(item.entrada, item.salida);
    const detalle = minutesToDHM(minutos);
    const menorACinco = 12;
    const mayorACinco = 18;
    //trabajar en lógica
    if(minutos >= 0.0 && minutos <= 300){
        console.log(`Tarifa: ${menorACinco}`);
    } else if(minutos > 300 && minutos < 4880){
        console.log(`Tarifa: ${mayorACinco}`);
    } else if(minutos == 2880) {
       let resultado = mayorACinco + 18 ;
        console.log(`Tarifa: ${resultado}`)
    }

    
console.log(
    `#${i+1} minutos=${minutos},  dias=${detalle}`);
 });

