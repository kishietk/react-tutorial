import * as yup from 'yup';

const schema = yup.object().shape({
    email: yup
        .string()
        .email('メールアドレスの形式ではありません。')
        .required('入力必須の項目です。'),
    password: yup
        .string()
        .min(8, '8文字以上入力してください。')
        .max(32, '32文字以下を入力してください。'),
});

export default schema;