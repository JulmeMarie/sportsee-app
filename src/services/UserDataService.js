import { USER_MAIN_DATA_MOCK } from '../store/mockStore';
import { KPIModel } from '../models/KPIModel';
import { UserDataModel } from '../models/UserDataModel';

/**
 * This class is used to process user data
 */
export class UserDataService {

    /**
     * This method allows to get users list
     * @returns a list of users
     */
    getListUsers() {
        let users = [
            { id: 12, firstName: 'Karl' },
            { id: 18, firstName: 'Cécilia' }
        ]
        return users;
    }

    /**
     * This method allows to get user data
     * @param {Number} userId 
     * @returns a Promise
     */
    getUserMainDataById(userId) {

        let url = "http://localhost:3000/user/" + userId;

        return new Promise((resolve, reject) => {
            fetch(url).then(response => {
                response.json().then(data => {
                    let dataFromBack = data.data;
                    let model = new UserDataModel(dataFromBack.id, dataFromBack.keyData, dataFromBack.todayScore, dataFromBack.userInfos);
                    resolve(model);
                })
            }).catch(err => {
                console.log(err);
                reject(err);
            })
        });
    }

    /**
    * This method allows to get user data from mock data file
    * @returns an Array
    */
    getUserMainDataMockById() {

        let dataMock = USER_MAIN_DATA_MOCK;
        let model = new UserDataModel(dataMock.id, dataMock.keyData, dataMock.todayScore, dataMock.userInfos);
        return model;
    }

    /**
     * This method allows to get KPIModel 
     * @param {Number} score 
     * @returns an instance of KPIModel
     */
    getKPIModel(score) {
        let percent = Number(score) * 100;
        const maxAngle = 360;
        let userAngle = (percent * maxAngle) / 100;
        let leftAngle = maxAngle - userAngle;
        return new KPIModel(percent, leftAngle);
    }
}