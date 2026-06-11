"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignatureInput = void 0;
const common_1 = require("@zeedhi/common");
class SignatureInput extends common_1.Input {
    constructor(props) {
        super(props);
        this.accept = '.png,.jpg,.jpeg,image/png,image/jpeg';
        this.backgroundColor = 'rgba(0, 0, 0, 0)';
        this.height = 220;
        this.maxFileSize = 0;
        this.maxWidth = 2.5;
        this.minWidth = 0.5;
        this.penColor = '#111827';
        this.showUpload = true;
        this.accept = this.getInitValue('accept', props.accept, this.accept);
        this.backgroundColor = this.getInitValue('backgroundColor', props.backgroundColor, this.backgroundColor);
        this.height = this.getInitValue('height', props.height, this.height);
        this.maxFileSize = this.getInitValue('maxFileSize', props.maxFileSize, this.maxFileSize);
        this.maxWidth = this.getInitValue('maxWidth', props.maxWidth, this.maxWidth);
        this.minWidth = this.getInitValue('minWidth', props.minWidth, this.minWidth);
        this.penColor = this.getInitValue('penColor', props.penColor, this.penColor);
        this.showUpload = this.getInitValue('showUpload', props.showUpload, this.showUpload);
        this.createAccessors();
    }
    change(event, element) {
        this.callEvent('change', {
            component: this,
            element,
            event,
            value: this.value,
        });
    }
    input(event, element) {
        if (this.value === this.lastInputValue)
            return;
        this.lastInputValue = this.value;
        this.callInputEvent({
            component: this,
            element,
            event,
            value: this.value,
        });
    }
    clear(event, element) {
        this.callSignatureEvent('clear', 'clear', undefined, undefined, event, element);
    }
    upload(file, event, element) {
        this.callSignatureEvent('upload', 'upload', file, undefined, event, element);
    }
    error(error, event, element) {
        this.callSignatureEvent('error', undefined, undefined, error, event, element);
    }
    callSignatureEvent(eventName, source, file, error, event, element) {
        const params = {
            component: this,
            element,
            error,
            event,
            file,
            source,
            value: this.value,
        };
        this.callEvent(eventName, params);
    }
}
exports.SignatureInput = SignatureInput;
//# sourceMappingURL=SignatureInput.js.map