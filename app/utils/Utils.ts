import * as application from 'application';
import * as platform from 'platform';

export class Utils {

    private static isNight () {
        let hours = new Date().getHours();
        return hours < 7 || hours > 19;
    }

    static getBackgroundClass() {
        let className = this.isNight() ? 'n-' : 'd-';
        return className + new Date().getDay();
    }

    static isAndroidOldSDK() {
        if (application.android && platform.device.sdkVersion < '21') {
            return true;
        }
        return false;
    }
}
