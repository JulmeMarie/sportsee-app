import { ActivityModel } from "../models/ActivityModel";
import { USER_ACTIVITY_MOCK } from '../store/mockStore';

/**
 * This class is used to process user activities
 */
export class UserActivityService {

    /** 
     * This method allows to get user activities from the back
     * @param {Number} userId 
     * @returns a Promise
     */
    getActivityData(userId) {



        return new Promise((resolve, reject) => {
            /*  let sessions = USER_ACTIVITY_MOCK.sessions;
            let ativities = [];
            sessions.forEach(sesion => {
                ativities.push(new ActivityModel(sesion.day, sesion.kilogram, sesion.calories))
            });
            resolve(ativities);  */

            let url = "http://localhost:3000/user/" + userId + "/activity";
            fetch(url).then(response => {
                response.json().then(json => {
                    let ativities = [];
                    json.data.sessions.forEach(sesion => {
                        ativities.push(new ActivityModel(sesion.day, sesion.kilogram, sesion.calories))
                    });
                    resolve(ativities);
                })
            }).catch(error => {
                reject(error);
            })
        });
    }
}