<template>
    <div class="flex-column-all-center" :class="{ 'login-view': isLogin, 'register-view': !isLogin }">
        <fluent-button appearance="outline" style="position: fixed;top:5px;left:5px" @click="toggleDark()">
            <div slot="start">
                <el-icon v-if="isDark">
                    <Moon />
                </el-icon>
                <el-icon v-else>
                    <Sunny />
                </el-icon>
            </div>
            <span>切换{{ isDark ? '浅色' : '暗色' }}主题</span>
        </fluent-button>

        <div class="logo">
            <img src="../assets/vue.svg" alt="logo" class="logo" height="50px" style="margin-top: 20px;" />
            <h1>Flow Message</h1>
        </div>
        <!-- 登录表单 -->
        <div v-if="isLogin" class="login-form flex-column-all-center">
            <div class="input-field flex-column-justify-center">
                <FluentInput label="用户名" placeholder="请输入用户名" class="form-input" v-model="loginData.number">
                </FluentInput>
                <FluentInput label="密码" type="password" placeholder="请输入密码" class="form-input"
                    v-model="loginData.password"></FluentInput>
            </div>
            <div class="tip" v-if="messageLoginTipShow">
                <el-text style="color: red;">{{ messageLogin }}</el-text>
            </div>
            <div class="tool">
                <FluentCheckBox class="remember-me" v-model="loginData.isRemeberMe">记住我</FluentCheckBox>
                <!-- <fluent-checkbox class="remember-me" @input="handleLoginRememberMeInput">记住我</fluent-checkbox> -->
                <el-link class="register" @click="isLogin = !isLogin">注册</el-link>
            </div>
            <fluent-button class="login form-input" @click="login" appearance="accent">登录</fluent-button>
        </div>
        <!-- 注册表单 -->
        <div v-else class="register-form">
            <div class="input-field flex-column-justify-center">
                <FluentInput label="邮箱" placeholder="请输入邮箱地址" class="form-input" v-model="registerData.email">
                </FluentInput>
                <FluentInput label="密码" type="password" placeholder="请输入密码" class="form-input"
                    v-model="registerData.password"></FluentInput>
                <FluentInput label="再次输入密码" type="password" placeholder="请再次输入密码" class="form-input"
                    v-model="registerData.confirmPassword"></FluentInput>
                <div class="flex-row-space-between validate-code">
                    <FluentInput label="验证码" placeholder="请输入验证码" class="form-input"
                        v-model="registerData.validateCode"></FluentInput>
                    <fluent-button class="validate-code-btn" appearance="accent" @click="getVerificationCode"
                        :disabled="verificating">{{ verificating ? `${timeLeft} 秒后重试` : '获取验证码' }}</fluent-button>
                </div>
            </div>
            <div class="tip" v-if="messageRegisterTipShow">
                <el-text style="color: red;">{{ messageRegister }}</el-text>
            </div>
            <div class="tool">
                <el-link class="login" @click="isLogin = !isLogin">已有账号？前往登录</el-link>
            </div>
            <fluent-button class="login form-input" @click="register" appearance="accent">注册</fluent-button>
        </div>
    </div>
</template>
<script setup lang="ts">
import { watch } from 'vue';
import { onMounted, ref } from 'vue';
import { toggleDark, isDark } from '../util/theme';

import FluentInput from '../components/fluent-ui/FluentInput.vue';
import FluentCheckBox from '../components/fluent-ui/FluentCheckBox.vue';
import Window from '../electron/window';
//状态

interface LoginData {
    number: string;
    password: string;
    isRemeberMe: boolean;
}

interface RegisterData {
    email: string;
    password: string;
    confirmPassword: string;
    validateCode: string;
}

const isLogin = ref(true);
const messageLogin = ref('');
const messageRegister = ref('');
const messageLoginTipShow = ref(false);
const messageRegisterTipShow = ref(false);


const verificating = ref(false);
const timeLeft = ref(5);
const timer = ref<NodeJS.Timeout | null>(null);

const loginData = ref<LoginData>({
    number: '',
    password: '',
    isRemeberMe: false
})

const registerData = ref<RegisterData>({
    email: '',
    password: '',
    confirmPassword: '',
    validateCode: ''
})

const getVerificationCode = () => {
    if (!registerData.value.email) {
        setMessage('邮箱不能为空');
        return false;
    }

    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(registerData.value.email)) {
        setMessage('邮箱格式不正确');
        return false;
    }

    verificating.value = true;

    timeLeft.value = 60;

    timer.value = setInterval(() => {
        timeLeft.value--;
        if (timeLeft.value <= 0) {
            clearInterval(timer.value!);
            verificating.value = false;
        }
    }, 1000);
}
const setMessage = (msg: string) => {
    if (msg) {
        if (isLogin.value) {
            messageLogin.value = msg;
            messageLoginTipShow.value = true;
        } else {
            messageRegister.value = msg;
            messageRegisterTipShow.value = true;
        }
    } else {
        if (isLogin.value) {
            messageLoginTipShow.value = false;
        } else {
            messageRegisterTipShow.value = false;
        }
    }
}


const validateForm = () => {
    if (isLogin.value) {
        if (!loginData.value.number) {
            setMessage('FM号不能为空');
            return false;
        }

        if (!loginData.value.password) {
            setMessage('密码不能为空');
            return false;
        }


    } else {
        if (!registerData.value.email) {
            setMessage('邮箱不能为空');
            return false;
        }

        if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(registerData.value.email)) {
            setMessage('邮箱格式不正确');
            return false;
        }

        if (!registerData.value.password) {
            setMessage('密码不能为空');
            return false;
        }

        if (registerData.value.password !== registerData.value.confirmPassword) {
            setMessage('两次输入的密码不一致');
            return false;
        }

        if (!registerData.value.validateCode) {
            setMessage('验证码不能为空');
            return false;
        }

        if (registerData.value.validateCode.length !== 6) {
            setMessage('验证码长度不正确');
            return false;
        }

        if (!/^[a-zA-Z0-9]{6}$/.test(registerData.value.validateCode)) {
            setMessage('验证码格式不正确');
            return false;
        }

        if (!/^[a-zA-Z0-9_#@!$%^&*()+=]+$/.test(registerData.value.password)) {
            setMessage('密码只能包含字母、数字和下划线');
            return false;
        }

        if (registerData.value.password.length > 20) {
            setMessage('密码长度不能大于20位');
            return false;
        }

        if (registerData.value.password.length < 8) {
            setMessage('密码长度不能小于8位');
            return false;
        }

        if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[_#@!$%^&*()+=])[A-Za-z\d_#@!$%^&*()+=]{8,}/.test(registerData.value.password)) {
            setMessage('密码必须包含大写字母、小写字母、数字和特殊字符');
            return false;
        }

    }
    setMessage('');
    return true;
}

const login = () => {
    if (!validateForm()) {
        return;
    }
    console.log('loginData', loginData.value);
    Window.createNewWindow('/home', 400, 400, true);

}

const register = () => {
    if (!validateForm()) {
        return;
    }
}


watch(isDark, (newValue) => {
    console.log('isDark', newValue);
}, {
    immediate: true,
    deep: true
})
watch(isLogin, (newValue) => {
    if (newValue) {
        // window.electron.setWindowFrameVisible(true);
        Window.setWindowTitle('登录');
        Window.setWindowSize(350, 500);
    } else {
        window.electron.setWindowTitle('注册');
        window.electron.resizeWindow(350, 580);
    }
}, {
    immediate: true,
    deep: true
})

onMounted(() => {
    window.electron.setWindowTitle('登录');
    //防止页面滚动
    const body = document.querySelector('body');
    if (body) {
        body.style.overflow = 'hidden';
    }

})
</script>

<style lang="scss" scoped>
.login-view {
    width: 300px;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
}

.register-view {
    width: 300px;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
}

.login-form,
.register-form {
    width: 80%;
    height: 80%;
    gap: 20px;
}

.input-field {
    gap: 20px;
    width: 100%;
}

.form-input {
    width: 100%;
}

.validate-code {
    width: 100%;
    gap: 10px;
    display: flex;
    flex-direction: row;

    .form-input {
        width: 60%;
    }

    .validate-code-btn {
        flex: 1;
        padding: 0;
        font-size: 12px;
    }

    margin-bottom: 10px;
}

.tool,
.tip {
    width: 100%;
    padding-left: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .register {
        color: #048bf2;
        cursor: pointer;
    }

    .login {
        color: #048bf2;
        cursor: pointer;
        margin: 10px 0;
    }
}

.form-input {
    width: 100%;
}
</style>
