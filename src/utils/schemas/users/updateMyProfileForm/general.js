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
    signature: yup
        .string()
        .max(32, '32文字以下を入力してください。')
        .required('入力必須の項目です。'),
    phone: yup
        .string()
        .matches(
            /^(?!-)(?!.*--)(?=[0-9-]{8,})(?=.*[0-9]$)(?!.*-$)(?!.*--)[0-9-]+$/,
            '有効な電話番号ではありません'
        ),
})

export default schema;