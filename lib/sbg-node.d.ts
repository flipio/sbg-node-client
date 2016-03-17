declare module 'sbg-nodeaces' {
	export namespace Interfaces {
	    interface HTTPResponseObject {
	        err: any;
	        response: any;
	    }
	    interface RequestOptionsInterface {
	        method: string;
	        url: string;
	        headers?: SBGRequestHeadersInterface;
	    }
	    interface SBGRequestHeadersInterface {
	        'session-id': string;
	    }
	    interface ApiInterface {
	        request: Function;
	    }
	    interface ClientConfigInterface {
	    }
	    interface SBGConfigInterface {
	        'session-id': string;
	    }
	    interface InstanceConfigInterface extends SBGConfigInterface {
	        temp: string;
	    }
	}

}
declare module 'sbg-node' {
	import * as Request from 'request';
	import { Interfaces } from 'interfaces/SBGConfigInterfaces';
	export module Api {
	    function request(options: Interfaces.RequestOptionsInterface, callback: () => void): Request.Request;
	}

}
declare module 'sbg-node' {
	 class Greeter {
	    greeting: string;
	    da: string;
	    constructor(message: string);
	    greet(): string;
	}
	export = Greeter;

}
declare module 'sbg-node' {
	import { Interfaces } from 'interfaces/SBGConfigInterfaces'; class SBG {
	    Config: Interfaces.SBGConfigInterface;
	    Api: Interfaces.ApiInterface;
	    constructor(config: any);
	    send(options: Interfaces.RequestOptionsInterface, callback: Interfaces.HTTPResponseObject): void;
	}
	export = SBG;

}
declare module 'sbg-node' {
	export class Base {
	}

}
declare module 'sbg-node' {
	import { Base } from 'Base';
	export class Auth extends Base {
	    constructor();
	}

}
declare module 'sbg-node' {
	import { Base } from 'Base';
	export class Task extends Base {
	    sessionId: string;
	    constructor();
	}

}
