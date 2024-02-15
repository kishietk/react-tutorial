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
    aboutMe: yup
        .string()
        .max(400, '400文字以下を入力してください。'),
    phone: yup
        .number()
});

export default schema;