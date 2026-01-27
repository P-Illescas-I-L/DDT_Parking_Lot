import Browser from '../../framework/browser/Browser.js'
import PLMain from '../../framework/page/ParkingLotPage.js';
import {assert} from 'chai';
import {valet} from '../../data/timeinput.json'

describe('Parking Lot Calculator Task', function(){
    before('The web page is opened', async() =>{
        await Browser.openUrl('https://www.shino.de/parkcalc/')
    })
    valet.forEach(({name, input_Date, output_Date, input_time, output_time, expected}) => {
            it(name, async() =>{
                await PLMain.parkingType('Valet');

                await PLMain.typeInDate(input_Date);
                await PLMain.typeOutDate(output_Date);
                await PLMain.typeInHour(input_time);
                await PLMain.typeOutHour(output_time);
                await PLMain.clickCalculateButton();
                assert.include(await PLMain.getTariff() ,expected)

        })

    })
})