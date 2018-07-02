import {supertypeClass} from 'amorphic';

@supertypeClass
export class Controller {
    serverInit () {
        console.log('hello world server init fired');
    }
}