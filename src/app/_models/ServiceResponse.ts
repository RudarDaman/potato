import { PotatoType } from './PotatoType';

export interface ServiceResponse {
    message?: string;
    errorMessage?: string;
    data?: SuccessMessage;
}

export interface SuccessMessage {
    potatoTypes: PotatoType[];
}
