import Browser from '../browser/Browser'
import ParkingLotPage from '../page/ParkingLotPage';
import chai from 'chai';
import calcEconomy from '../utils/timeCalcLP'

describe('Parking Lot Calculator Task', function(){
    before('The web page is opened', async() =>{
        await Browser.openUrl('https://www.shino.de/parkcalc/')
    })
    it('should verify Valet Parkig values', async() =>{
        await ParkingLotPage.parkingType('Valet');
    })
});

