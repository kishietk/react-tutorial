import * as yup from 'yup';

const schema = yup.object().shape({
    name: yup
        .string()
        .max(32, '32文字以下を入力してください。')
        .required('入力必須の項目です。'),
    username: yup
        .string()
        .max(32, '32文字以下を入力してください。')
        .required('入力必須の項目です。'),
    email: yup
        .string()
        .email('メールアドレスの形式ではありません。')
        .required('入力必須の項目です。'),
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