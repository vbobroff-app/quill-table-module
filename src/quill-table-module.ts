import DEFAULT_OPTIONS from "./defaults";

import Quill from '@typing/quill';


class Module {
    quill: Quill;
    options: boolean | any;
    static DEFAULTS: any;
    constructor(quill: Quill, options: boolean | any) {
        this.quill = quill;
        this.options = Object.assign(DEFAULT_OPTIONS, options);
    }
}

