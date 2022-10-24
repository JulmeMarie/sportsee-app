import { ActivityModel } from "../models/ActivityModel";

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

        let url = "http://localhost:3000/user/" + userId + "/activity";

        return new Promise((resolve, reject) => {
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