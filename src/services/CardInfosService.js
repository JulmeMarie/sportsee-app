import { CardModel } from '../models/CardModel';
import CaloriesIcon from '../images/Calories.png';
import GlucidesIcon from '../images/Glucide.png';
import LipidesIcon from '../images/Lipides.png';
import ProteinesIcon from '../images/Protéines.png';


/**
 * This class is used to process user datakeys
 */
export class CardInfosService {
    /**
     * The method 
     * @param {Object} data 
     * @returns an instance of CardModel
     */
    cumputeData(data) {
        let cardModel = null;
        switch (data.name.toLowerCase()) {
            case "calories":
                cardModel = this.createModel(data, "kCal", CaloriesIcon, "#FF0000", "rgba(255,0,0,0.1)");
                break;
            case "protéines":
                cardModel = this.createModel(data, "g", ProteinesIcon, "#4AB8FF", "rgba(74,184,255,0.1)");
                break;
            case "glucides":
                cardModel = this.createModel(data, "g", GlucidesIcon, "#FDCC0C", "rgba(253,204,12,0.1)");
                break;
            case "lipides":
                cardModel = this.createModel(data, "g", LipidesIcon, "#FD5181", "rgba(253,81,129,0.1)");
                break;
            default:
                break;
        }
        return cardModel;
    }

    /**
     * THis method allows to create a CardModel
     * @param {Object} data 
     * @param {String} unit 
     * @param {Component} icon 
     * @param {String} color 
     * @param {String} background 
     * @returns an instance of CardModel
     */
    createModel(data, unit, icon, color, background) {
        return new CardModel(
            data.name,
            data.quantity,
            unit,
            icon,
            {
                'color': color,
                "background": background
            }
        );
    }
}