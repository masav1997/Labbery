import AOS from 'aos/dist/aos.js';
import 'aos/dist/aos.css';

export default class Aos {
    constructor() {
        this.init();
    }

    init(){
        AOS.init();
    }
}