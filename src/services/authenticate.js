/*
! 保存
    localStorage.setItem('key', 'value')あるいはlocalStorage.saveKey = 'value'と書くだけで保存ができます。
    ? localStorage.setItem('key', 'value1');
    ? localStorage.saveKey = 'value2';

! 取得
    localStorage.getItem('Key')あるいはlocalStorage.saveKeyでvalueを取得することができます。
    ? var value1 = localStorage.getItem('Key')
    ? var value2 = localStorage.saveKey;

! 削除
    localStorage.removeItem('key')で指定したキーのデータを削除するか、localStorage.clear()ですべてのデータを削除します。
    ? localStorage.removeItem('key');
    ? localStorage.clear();

* 注意点
    データは永続的に保存される
    こちらでLocal Storageのデータを削除する処理を書かないと、データは永続的に残り続けるので削除する処理を書きましょう。
    Javascriptから自由にアクセスできる
    機密性の高い情報には使わないようにしましょう。
*/

import axios from 'axios';

const login = async (username, password) => {
    try {
        // RTK Query login に変える
        const response = await axios.post('http://192.168.2.152:8080/api/v1.0/login', { username: username, password: password });
        const { accessToken, expiresAt } = response.data.data;
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('expiresAt', expiresAt);
        return { accessToken, expiresAt };
    }
    catch (e) {
        throw e;
    }
}

const logout = async () => {
    try {
        console.log("before");
        console.log(localStorage.getItem('accessToken'));

        localStorage.removeItem('accessToken');
        localStorage.removeItem('expiresAt');

        console.log("after");
        console.log(localStorage.getItem('accessToken'));
    }
    catch (e) {
        throw e;
    }
}

const authenticate = {
    loginAuth: login,
    logoutAuth: logout,
};
export default authenticate;