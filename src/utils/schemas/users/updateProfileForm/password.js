import * as yup from 'yup';

const schema = yup.object().shape({
    password: yup
        .string()
        .min(8, '8文字以上入力してください。')
        .max(255, '255文字以下を入力してください。'),
    passwordConfirmation: yup
        .string()
        .min(8, '8文字以上入力してください。')
        .max(255, '255文字以下を入力してください。')
        .oneOf([yup.ref('password'), null], 'パスワードが一致しません。'),
});

export default schema;