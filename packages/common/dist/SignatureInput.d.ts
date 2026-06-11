import { Input } from '@zeedhi/common';
import { ISignatureInput, ISignatureInputEvents } from './interfaces';
export declare class SignatureInput extends Input implements ISignatureInput {
    accept: string;
    backgroundColor: string;
    events: ISignatureInputEvents;
    height: number | string;
    maxFileSize: number | string;
    maxWidth: number | string;
    minWidth: number | string;
    penColor: string;
    showUpload: boolean;
    constructor(props: ISignatureInput);
    change(event?: Event, element?: any): void;
    input(event?: Event, element?: any): void;
    clear(event?: Event, element?: any): void;
    upload(file: File, event?: Event, element?: any): void;
    error(error: unknown, event?: Event, element?: any): void;
    private callSignatureEvent;
}
