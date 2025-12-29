export interface LoginTestData {
  username?: string;
  password?: string;
  remember?: boolean;
  expected: 'success' | 'fail';
  errorMessage?: string;
}

export const loginData: LoginTestData[] = [

  // TC01 – Đăng nhập thành công
  {
    username: 'Vy Vy',
    password: '123456',
    remember: true,
    expected: 'success',
  },

  // TC02 – Bỏ trống trường tài khoản
  {
    username: '',
    password: '123456',
    remember: true,
    expected: 'fail',
    errorMessage: 'Đây là trường bắt buộc !',
  },

  // TC03 – Bỏ trống trường mật khẩu
  {
    username: 'Vy Vy',
    password: '',
    remember: true,
    expected: 'fail',
    errorMessage: 'Đây là trường bắt buộc !',
  },

  // TC05 – Nhập sai thông tin tài khoản
  {
    username: 'SAISAI',
    password: '123456',
    remember: true,
    expected: 'fail',
    errorMessage: 'Tài khoản hoặc mật khẩu không đúng!',
  },

  // TC06 – Nhập sai thông tin mật khẩu
  {
    username: 'Vy Vy',
    password: '123456789',
    remember: true,
    expected: 'fail',
    errorMessage: 'Tài khoản hoặc mật khẩu không đúng!',
  },

  // TC07 – Username viết thường khi đăng ký là viết hoa
  {
    username: 'vy vy',
    password: '123456',
    remember: true,
    expected: 'success',
  },
];
