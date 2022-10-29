import { USER_AVERAGE_SESSIONS_MOCK } from '../store/mockStore';
import { ObjectifModel } from '../models/ObjectifModel';

/**
 * This class is used to process average user sessions
 */
export class UserAverageSessionService {
    /**
     * This method converts days into strings
     * @param {Number} day 
     * @returns a character as day
     */
    getDay(day) {
        if (isNaN(day)) return day;
        const days = ["L", "M", "M", "J", "V", "S", "D"];
        return days[day - 1];
    }
    /**
     * This method allows to recover user data
     * @param {Number} userId 
     * @returns a Promise
     */
    getAverageSessionData(userId) {
        let url = "http://localhost:3000/user/" + userId + "/average-sessions";

        return new Promise((resolve, reject) => {
            fetch(url).then(response => {
                response.json().then(json => {
                    let theObjectives = [];
                    json.data.sessions.forEach(session => {
                        theObjectives.push(new ObjectifModel(this.getDay(session.day), session.sessionLength));
                    });
                    resolve(theObjectives);
                })
            }).catch(err => {
                console.log("Erreur while calling the back")
            })
        });
    }

    /**
     * This method allows to get user data from the data mock file
     * @returns an Array
     */
    getAverageSessionDataMock() {
        let theObjectives = [];
        USER_AVERAGE_SESSIONS_MOCK.sessions.forEach(session => {
            theObjectives.push(new ObjectifModel(this.getDay(session.day), session.sessionLength));
        });
        return theObjectives;
    }
}