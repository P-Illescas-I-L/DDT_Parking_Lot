const ceilDiv = (num, den) => Math.ceil(num / den);

function calcValet({ minutes }) {
  const hours = minutes / 60;
  if (hours <= 5) return 12;
  if (hours <= 24) return 18;
  return Math.ceil(hours / 24) * 18; // día o fracción
}

function calcShortTerm({ minutes}) {
  // $2 la primera hora, $1 por cada 30 min adicionales, tope $24
  let cost = 2; // primera hora se cobra completa
  const extraMinutes = Math.max(0, minutes - 60);
  if (extraMinutes > 0) cost += ceilDiv(extraMinutes, 30);
  cost = Math.min(cost, 24);
}

function calcLongTermGarage({ minutes, days, extraMinutes = 0 }) {
  // $2/h, $12/día máx, $72/semana (7° día gratis)
  let cost = 0;

  if (days != null) {
    const hasExtra = extraMinutes > 0;
    if (days === 7 && !hasExtra) cost = 72;           // 7 días exactos, gratis el 7°
    else if (days >= 7 && hasExtra) cost = 72 + 12;   // semana + fracción de nuevo día
    else cost = days * 12;                             // menos de 7 días, día a día
  } else {
    const hours = Math.ceil(minutes / 60);
    cost = Math.min(hours * 2, 12);
  }

  return cost;
}

function calcLongTermSurface({ minutes, days, extraMinutes = 0 }) {
  // $2/h, $10/día máx, $60/semana (7° día gratis)
  let cost = 0;

  if (days != null) {
    const hasExtra = extraMinutes > 0;
    if (days === 7 && !hasExtra) cost = 60;
    else if (days >= 7 && hasExtra) cost = 60 + 10;
    else cost = days * 10;
  } else {
    const hours = Math.ceil(minutes / 60);
    cost = Math.min(hours * 2, 10);
  }

  return cost;
}

function calcEconomy({ minutes, days, extraMinutes = 0 }) {
  // $2/h, $9/día máx, $54/semana (7° día gratis)
  let cost = 0;

  if (days != null) {
    const hasExtra = extraMinutes > 0;
    if (days === 7 && !hasExtra) cost = 54;
    else if (days >= 7 && hasExtra) cost = 54 + 9;
    else cost = days * 9;
  } else {
    const hours = Math.ceil(minutes / 60);
    cost = Math.min(hours * 2, 9);
  }

  return cost;
}

module.export = {
  calcValet,
  calcShortTerm,
  calcLongTermGarage,
  calcLongTermSurface,
  calcEconomy
};
