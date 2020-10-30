import {GetLoginUserInfo} from "./Apis";

export const OpenPrompt = (placeholder: string): string|null => {
    return window.prompt(placeholder || '请输入信息');
}
export const RunLogin = (userId: string): void => {
    GetLoginUserInfo(userId).then((res: any) => {
        if (res.data) {
            window.localStorage.setItem('USERSIG', res.data);
            window.localStorage.setItem('USERIMID', userId);
            window.location.href = './index.html';
        } else {
            window.alert('用户信息不存在！');
            Login();
        }
    }).catch((err) => {
        alert('登录失败！');
        Login();
    });
}
export const Login = () => {
    window.localStorage.clear();
    const userId = OpenPrompt('请输入UserId');
    if (userId) {
        RunLogin(userId);
    } else {
        Login();
    }
}

export default Login;

