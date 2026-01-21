import BasePage from "./BasePage";

import{Button, Input, Dropdown, Label} from '../elements/BaseElement';
import {PreciseLocatorText} from '../../framework/utils/locatorHelper';

class PLMain extends BasePage{
    constructor(){
        super(new Label(PreciseLocatorText('PARKING COST CALCULATOR')) , 'Parking Cost main Page');

        this.CalculateButton = new Button('input[type="submit"]', 'Calculate Button');
        this.ParkingValue = new Dropdown('#ParkingLot', 'Parking Lot Dropdown');
        this.inDate = new Input('#StartingDate', 'Entry Input Value ');
        this.outDate = new Input('#LeavingDate','Leaving Input Date');
        this.inHours = new Input('#StartingTime','Entry Input Hour');
        this.outHours = new Input('#LeavingTime','Leaving Input Hour');
        this.tariff = new Label('.SubHead','Tariff Label');
    }

    async parkingType(value){
        await this.ParkingValue.selectOptionByValue(value);
    }

    async typeInDate(date){
        await this.inDate.typeText(date);   
    }

    async typeOutDate(date){
        await this.outDate.typeText(date);   
    }

    async typeInHour(time){
        await this.inHours.typeText(time);   
    }

    async typeOutHour(time){
        await this.outHours.typeText(time);   
    }

    async getTariff(){
        return this.tariff.state().isDisplayed();
    }

}
export default new PLMain()