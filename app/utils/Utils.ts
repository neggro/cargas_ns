class Utils {

    private isNight () {
        let hours = new Date().getHours();
        return hours < 7 || hours > 19;
    }

    public getBackgroundClass() {
        let className = this.isNight() ? 'n-' : 'd-';
        return className + new Date().getDay();
    }
}
export let utils = new Utils();
