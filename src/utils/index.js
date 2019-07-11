import JSEncrypt from 'jsencrypt'

export function jsEncrypt(str) {
    let encrypt = new JSEncrypt();
    let key = `MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEArKHJ6/HL/gWGiTbhmS44nu/HHYN8ZyoQyAA76W2lEyu/iELnK4bqev1e40Tv2bzoBew8tCpUwlu0wApUQqDCVQGEJeFvZbdcqdHkDMhRtpPpkDN+TK0Ky+GyJQXTdWf5cRY8dd4+bLRTQLwc5kxwRibvvEUy/nBYKnw3usWufCkN4vGqqK8Ny0qH7eX8MfW0cI4SfVM/g25x26nMWWzw206LUzeIrpkHPKrUEHO1GAhIDZ5NaRryvBXlnPCicWZmvs4M6hJsRAa7Uur8+6aLgbjbgAqt59npjRCODv/TCuP/ZWro54GIOfOVfK4n/moheLFtdYoaCzVQwS1fzzdcKQIDAQAB`
    encrypt.setPublicKey(key);
    let data = encrypt.encrypt(str);
    let code = encodeURI(data).replace(/\+/g, '%2B')
    return code
}