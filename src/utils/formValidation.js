import * as Yup from 'yup'

export const validationSchema = Yup.object({
    login: Yup.string()
        .matches(/^[a-zA-Z]+$/i, 'Логин может состоять только из латинских символов')
        .max(20, 'Логин не может быть длиннее 20 символов')
        .required('Поле обязательно для заполнения'),
    password: Yup.string()
        .required('Поле обязательно для заполнения'),
})