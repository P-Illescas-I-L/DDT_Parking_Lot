import Browser from '../browser/Browser'
import PLMain from '../page/ParkingLotPage';
import chai from 'chai';
import calcValet from '../utils/timeCalcLP'
import timeinput from '../data/timeinput.json'

describe('Parking Lot Calculator Task', function(){
    before('The web page is opened', async() =>{
        await Browser.openUrl('https://www.shino.de/parkcalc/')
    })
    timeinput.forEach(({name, time, expected}) => {
            it(name, async() =>{
                await PLMain.parkingType('Valet');
                await PLMain.typeInDate('01/22/2026')
                await PLMain.typeInHour('00:00')
                await PLMain.typeOutDate('01/22/2026')
        })

    })
})