import * as urls from './url';
import common from './api';

export default {
    //路由
    login: (data) => common({url: urls.login, method: 'post', data}),
    getList: (url) => common({url: urls.getList + url, method: 'get'})
}