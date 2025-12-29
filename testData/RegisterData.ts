const randomId = Date.now(); // Tự động tăng mỗi lần chạy

export const registerData = [
  // --- KIỂM TRA ĐĂNG KÝ THÀNH CÔNG ---
  {
    case: "Đăng ký thành công (tự động)",
    username: `autoUser_${randomId}`,
    password: "pass123",
    confirmPassword: "pass123",
    fullname: "Vo Vy",
    email: `auto_${randomId}@example.com`,
    expected: "success"
  },

  // --- BỎ TRỐNG TRƯỜNG ---
  {
    case: "Bỏ trống tài khoản",
    username: "",
    password: "pass123",
    confirmPassword: "pass123",
    fullname: "Vo Vy",
    email: "vy2@example.com",
    expected: "fail",
    errorMessage: "Đây là trường bắt buộc !"
  },
  {
    case: "Bỏ trống mật khẩu",
    username: "VyVy3",
    password: "",
    confirmPassword: "pass123",
    fullname: "Vo Vy",
    email: "vy3@example.com",
    expected: "fail",
    errorMessage: "Đây là trường bắt buộc !"
  },
  {
    case: "Bỏ trống nhập lại mật khẩu",
    username: "VyVy4",
    password: "pass123",
    confirmPassword: "",
    fullname: "Vo Vy",
    email: "vy4@example.com",
    expected: "fail",
    errorMessage: "Đây là trường bắt buộc !"
  },
  {
    case: "Bỏ trống họ tên",
    username: "VyVy5",
    password: "pass123",
    confirmPassword: "pass123",
    fullname: "",
    email: "vy5@example.com",
    expected: "fail",
    errorMessage: "Đây là trường bắt buộc !"
  },
  {
    case: "Bỏ trống email",
    username: "VyVy6",
    password: "pass123",
    confirmPassword: "pass123",
    fullname: "Vo Vy",
    email: "",
    expected: "fail",
    errorMessage: "Đây là trường bắt buộc !"
  },

  // --- KIỂM TRA TÀI KHOẢN ---
  {
    case: "Tài khoản chứa ký tự chữ",
    username: "ABC XYZX",
    password: "pass123",
    confirmPassword: "pass123",
    fullname: "Vo Vy",
    email: `char_${randomId}@example.com`,
    expected: "success"
  },
  {
    case: "Tài khoản gồm chữ và số",
    username: "ABC XYZ 123",
    password: "pass123",
    confirmPassword: "pass123",
    fullname: "Vo Vy",
    email: `mix_${randomId}@example.com`,
    expected: "success"
  },
  {
    case: "Tài khoản chứa ký tự đặc biệt",
    username: "@#$%^&*12 ABC",
    password: "pass123",
    confirmPassword: "pass123",
    fullname: "Vo Vy",
    email: `special_${randomId}@example.com`,
    expected: "success"
  },

  // --- KIỂM TRA MẬT KHẨU ---
  {
    case: "Mật khẩu 5 ký tự",
    username: "VyVy10",
    password: "12345",
    confirmPassword: "12345",
    fullname: "Vo Vy",
    email: "vy10@example.com",
    expected: "fail",
    errorMessage: "Mật khẩu phải có ít nhất 6 kí tự !"
  },
  {
    case: "Mật khẩu 6 ký tự",
    username: "VyVy11",
    password: "123456",
    confirmPassword: "123456",
    fullname: "Vo Vy",
    email: `pw6_${randomId}@example.com`,
    expected: "success"
  },
  {
    case: "Nhập lại mật khẩu không khớp",
    username: "vyvy12",
    password: "123456",
    confirmPassword: "pass123",
    fullname: "Vo Vy",
    email: "vy12@example.com",
    expected: "fail",
    errorMessage: "Mật khẩu không khớp !"
  },
  {
    case: "Mật khẩu nhập lại 5 ký tự",
    username: "VyVy13",
    password: "12345",
    confirmPassword: "12345",
    fullname: "Vo Vy",
    email: "vy13@example.com",
    expected: "fail",
    errorMessage: "Mật khẩu phải có ít nhất 6 kí tự !"
  },
  {
    case: "Nhập lại mật khẩu 6 ký tự",
    username: "VyVy14",
    password: "123456",
    confirmPassword: "123456",
    fullname: "Vo Vy",
    email: `pw6_2_${randomId}@example.com`,
    expected: "success"
  },
  {
    case: "Nhập lại mật khẩu 7 ký tự",
    username: `autoUser7_${randomId}`,
    password: "1234567",
    confirmPassword: "1234567",
    fullname: "Vo Vy",
    email: `pw7_${randomId}@example.com`,
    expected: "success"
  },
  {
    case: "Mật khẩu không đủ 6 ký tự nhưng confirm đúng",
    username: "VyVy16",
    password: "12345",
    confirmPassword: "123456",
    fullname: "Vo Vy",
    email: "vy16@example.com",
    expected: "fail",
    errorMessage: "Mật khẩu không khớp !"
  },
  {
    case: "Confirm password không khớp mật khẩu",
    username: "VyVy17",
    password: "123456",
    confirmPassword: "1234567",
    fullname: "Vo Vy",
    email: "vy17@example.com",
    expected: "fail",
    errorMessage: "Mật khẩu không khớp !"
  },

  // --- KIỂM TRA HỌ TÊN ---
  {
    case: "Họ tên chứa ký tự đặc biệt",
    username: `autoUserName_${randomId}`,
    password: "123456",
    confirmPassword: "123456",
    fullname: "Vo Vy%#%)(_+",
    email: `nameSpecial_${randomId}@example.com`,
    expected: "success"
  },
  {
    case: "Họ tên chứa số",
    username: "VyVy19",
    password: "123456",
    confirmPassword: "123456",
    fullname: "Vo Vy19",
    email: "vy19@example.com",
    expected: "fail",
    errorMessage: "Họ và tên không chứa số !"
  },

  // --- KIỂM TRA EMAIL ---
  {
    case: "Email sai định dạng",
    username: "VyVy20",
    password: "123456",
    confirmPassword: "123456",
    fullname: "Vo Vy",
    email: "vy18",
    expected: "fail",
    errorMessage: "Vui lòng nhập đúng định dạng email"
  },
  {
    case: "Tài khoản đã tồn tại",
    username: "Vy Vy",
    password: "123456",
    confirmPassword: "123456",
    fullname: "Vo Vy",
    email: "vy21@example.com",
    expected: "fail",
    errorMessage: "Tài khoản đã tồn tại!"
  },
  {
    case: "Họ tên trùng nhưng hợp lệ",
    username: `autoUserSameName_${randomId}`,
    password: "123456",
    confirmPassword: "123456",
    fullname: "Vo Vy1",
    email: `sameName_${randomId}@example.com`,
    expected: "success"
  },
  {
    case: "Email đã tồn tại",
    username: "VyVy23",
    password: "123456",
    confirmPassword: "123456",
    fullname: "Vo Vy1",
    email: "vy@test.com",
    expected: "fail",
    errorMessage: "Email đã tồn tại!"
  }
];
