import {Base} from './Base';
import {UserInterfaces} from '../interfaces/UserInterfaces';
import {ApiConfig} from '../api/config';
import {url} from '../decorators/Common';
import {Interfaces} from '../interfaces/SBGInterfaces';

export class User extends Base implements UserInterfaces.UserClientInterface {

    public user_url: string = ApiConfig.apiUrl + ApiConfig.urls.user_url;
    public users_url: string = ApiConfig.apiUrl + ApiConfig.urls.users_url;

    public rate_limit_url: string = ApiConfig.apiUrl + ApiConfig.urls.rate_limit_url;

    public url: string = this.user_url;

    constructor() {
        super();
    }

    /**
     * This call returns information about users account on the Seven Bridges Platform.
     *
     * @returns {*}
     */
    @url('/')
    info(options: Interfaces.RequestHandlerInterface) {
        return this._get({
            url: this.user_url,
            qs: options.qs
        });
    }

    /**
     * This call returns information about the specified user.
     * Note that currently you can view only your own user information,
     * and so this call is equivalent to the `info()` call .
     *
     * @param options
     * @param options.username {string}
     * @returns {*}
     */
    @url('/{username}')
    listResources(options: UserInterfaces.ListResoureceInterface) {
        return this._get({
            url: this.users_url + options.url,
            qs: options.qs
        });
    }

    /**
     * Get user current rate limit status
     *
     * @returns {Q.IPromise<any>}
     */
    @url('/')
    getRateLimit(options: Interfaces.RequestHandlerInterface) {
        return this._get({
            url: this.rate_limit_url,
            qs: options.qs
        });
    }

}



