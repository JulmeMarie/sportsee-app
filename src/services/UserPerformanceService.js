import { PerformanceModel } from '../models/PerformanceModel';
import { USER_PERFORMANCE_MOCK } from '../store/mockStore';
/**
 * This class is used to process user performance
 */
export class UserPeformanceService {

    /**
     * This method allows to get user performance
     * @param {Number} userId 
     * @returns a Promise
     */
    getDataByUserId(userId) {
        let url = "http://localhost:3000/user/" + userId + "/performance";

        return new Promise((resolve, reject) => {
            fetch(url).then(response => {
                response.json().then(data => {
                    let kindObject = data.data.kind;
                    let performances = [];
                    data.data.data.forEach(performance => {
                        performances.push(new PerformanceModel(performance.value, kindObject[performance.kind]));
                    });
                    resolve(performances);
                })
            }).catch(error => {
                console.log(error);
                reject(error);
            })
        })

    }

    /**
     * MOCK
     * This method allows to get user performance from mock data file
     * @returns an Array
     */
    getDataMockByUserId() {
        let kindObject = USER_PERFORMANCE_MOCK.kind;
        let performances = [];
        USER_PERFORMANCE_MOCK.data.forEach(performance => {
            performances.push(new PerformanceModel(performance.value, kindObject[performance.kind]));
        });
        return performances;
    }
}