import {Injectable} from '@angular/core';

function _window(): any {
    // return the global native browser window object
    return window;
}

@Injectable()
export class WindowService {
    public grecaptcha: any;
    public reCaptchaLoad: () => void;
    public reCaptchaLoadInv: () => void;

    get nativeWindow(): any {
        return _window();
    }
}
