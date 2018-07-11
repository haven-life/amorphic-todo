import { Injectable } from '@angular/core';
import { WindowService } from './window.service';

@Injectable()
export class AmorphicService {
    static heartBeatPoll: number = 5000;
    controller: any;

    constructor(private windowService: WindowService) {
        this.controller = this.windowService.nativeWindow.controller;
        this.controller.activity = true;
    }

    save() {
        this.controller.activity = true;
    }

}