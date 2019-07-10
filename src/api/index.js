import * as urls from './url';
import common from './api';

export default {
    login: (data) => common({url: urls.login, method: 'post', data})
}