
export namespace Interfaces {

    export interface HTTPResponseObject {
        err: any;
        response: any;
    }

    export interface RequestOptionsInterface {
        method: string;
        url: string;
        headers?: SBGRequestHeadersInterface;
    }


    export interface SBGRequestHeadersInterface {
        'X-SBG-Auth-Token': string;
    }

    export interface ApiInterface {
        request: Function;
    }

    export interface ClientConfigInterface {

    }

    export interface SBGConfigInterface {
        'X-SBG-Auth-Token': string;
    }

    export interface InstanceConfigInterface extends SBGConfigInterface {
        temp: string;
    }
    
}
