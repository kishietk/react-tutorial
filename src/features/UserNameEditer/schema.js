import * as yup from 'yup';

const schema = yup.object().shape({ 
    name: yup
        .string()
        .required('入力必須の項目です。'),
});

export default schema;