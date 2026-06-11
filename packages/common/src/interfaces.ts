import { IEvent, IEventParam } from '@zeedhi/core';
import { IInput, IInputEvents } from '@zeedhi/common';
import type { SignatureInput } from './SignatureInput';

export type SignatureInputSource = 'draw' | 'upload' | 'clear';

export interface ISignatureInputEventParam extends IEventParam<SignatureInput> {
  error?: unknown;
  file?: File;
  source?: SignatureInputSource;
  value?: string;
}

type SignatureInputEventDef<T> = IEvent<T> | string | Array<IEvent<T> | string>;

export interface ISignatureInputEvents<T = ISignatureInputEventParam> extends IInputEvents<T> {
  clear?: SignatureInputEventDef<T>;
  error?: SignatureInputEventDef<T>;
  upload?: SignatureInputEventDef<T>;
}

export interface ISignatureInput extends IInput {
  accept?: string;
  backgroundColor?: string;
  events?: ISignatureInputEvents;
  height?: number | string;
  maxFileSize?: number | string;
  maxWidth?: number | string;
  minWidth?: number | string;
  penColor?: string;
  showUpload?: boolean;
}

