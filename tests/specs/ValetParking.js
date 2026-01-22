import Browser from '../../framework/browser/Browser.js'
import PLMain from '../../framework/page/ParkingLotPage';
import {assert} from 'chai';
import {valet} from '../../data/timeinput.json'

describe('Parking Lot Calculator Task', function(){
    before('The web page is opened', async() =>{
        await Browser.openUrl('https://www.shino.de/parkcalc/')
    })
    valet.forEach(({name, input_date, output_date, input_time, output_time, expected}) => {
            it(name, async() =>{
                await PLMain.parkingType('Valet');

                await PLMain.typeInDate(input_date);
                await PLMain.typeOutDate(output_date);
                await PLMain.typeInHour(input_time);
                await PLMain.typeOutHour(output_time);
                await PLMain.clickCalculateButton();
                assert.strictEqual(await PLMain.getTariff() ,expected)

        })

    })
})