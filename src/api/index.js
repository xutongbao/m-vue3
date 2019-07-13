import * as urls from './url';
import common from './api';

export default {
    login: (data) => common({url: urls.login, method: 'post', data}),
    captcha: () => common({url: urls.captcha, method: 'get'}),
    register: (data) => common({url: urls.register, method: 'post', data}),
    forgotPassword: (url) => common({url: urls.forgotPassword + url, method: 'get'}),
    getList: (url) => common({url: urls.getList + url, method: 'get'}),
    deleteItem: (data) => common({url: urls.deleteItem, method: 'post', data}),
    addItem:(data) => common({url: urls.addItem, method: 'post', data})
}