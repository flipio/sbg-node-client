import {Base} from './Base';
import {FileInterfaces} from '../interfaces/FileInterfaces';
import {ApiConfig} from '../api/config';
import {Interfaces} from '../interfaces/SBGInterfaces';
import {url} from '../decorators/Common';

export class File extends Base implements FileInterfaces.FileClientInterface {

    public url: string = ApiConfig.apiUrl + ApiConfig.urls.files_url;

    /**
     * List files in project
     *
     * @returns {Q.IPromise<any>}
     */
    @url('/')
    list(options: Interfaces.RequestHandlerInterface) {
        return this._get({
            url: this.url,
            qs: options.qs
        });
    }

    /**
     * Delete file
     *
     * @param fileId
     * @param fields
     * @returns {Q.IPromise<any>}
     */
    @url('/{id}')
    delete(options: FileInterfaces.IdBasedInterface) {
        return this._delete({
            url: this.url + options.url,
            qs: options.qs
        });
    }

    /**
     * Get file details
     *
     * @param fileId
     * @param fields
     * @returns {Q.IPromise<any>}
     */
    @url('/{id}')
    getDetails(options: FileInterfaces.IdBasedInterface) {
        return this._get({
            url: this.url + options.url,
            qs: options.qs
        });
    }

    /**
     * Update file details
     *
     * @param fileId
     * @param fields
     * @returns {Q.IPromise<any>}
     */
    @url('/{id}')
    updateDetails(options: FileInterfaces.IdBasedInterface) {
        return this._patch({
            url: this.url + options.url,
            qs: options.qs
        });
    }

    /**
     *  Copy files to a another project
     *
     *  Example Response:
     * {
     *   "href": "https://api.sbgenomics.com/v2/files/569637cce4b0b65fcb306ae5",
     *   "id": "569637cce4b0b65fcb306ae5",
     *   "name": "new-file",
     *   "size": 68425,
     *   "project": "RFranklin/my-project",
     *   "created_on": "2016-01-13T11:41:00Z",
     *   "modified_on": "2016-01-13T11:41:00Z",
     *   "origin": {},
     *   "metadata": {
     *      "file_type": "fastq",
     *      "sample": "E16201_pool35_L1756",
     *      "library": "hg19",
     *       "platform_unit": "C18_99",
     *       "seq_tech": "IonTorrent",
     *       "qual_scale": "sanger"
     *    }
     * }
     * @param fileId
     * @param projectId
     * @param newName
     * @param fields
     * @returns {Q.IPromise<any>}
     */
    @url('/{id}/actions/copy')
    copy(options: FileInterfaces.CopyFileInterface) {
        return this._post({
            url: this.url + options.url,
            qs: options.qs
        }, options.body);
    }

    /**
     * Get file download url
     *
     * @param options
     * @param options.id
     * @returns {Q.IPromise<any>}
     */
    @url('/{id}/download_info')
    getDownloadUrl(options: FileInterfaces.IdBasedInterface) {
        return this._get({
            url: this.url + options.url,
            qs: options.qs
        });
    }

    /**
     * Get files metadata
     *
     * @param fileId
     * @param fields
     * @returns {Q.IPromise<any>}
     */
    @url('/{id}/metadata')
    getMetadata(options: FileInterfaces.IdBasedInterface) {
        return this._get({
            url: this.url + options.url,
            qs: options.qs
        });
    }

    /**
     * Modify files metadata
     *
     * @param fileId
     * @param metadata
     * @param fields
     * @returns {Q.IPromise<any>}
     */
    @url('/{id}/metadata')
    modifyMetadata(options: FileInterfaces.FileMetadataInterface) {
        return this._patch({
            url: this.url + options.url,
            qs: options.qs
        }, options.body);
    }

    /**
     * Overwrite files metadata
     *
     * @param fileId
     * @param metadata
     * @param fields
     * @returns {Q.IPromise<any>}
     */
    @url('/{id}/metadata')
    overwriteMetadata(options: FileInterfaces.FileMetadataInterface) {
        return this._put({
            url: this.url + options.url,
            qs: options.qs
        }, options.body);
    }

}
