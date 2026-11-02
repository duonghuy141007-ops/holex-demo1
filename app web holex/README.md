# 🕰️ HOLEX WATCH STORE

> **"Timeless Precision, Modern Style"**  
> Website landing page bán đồng hồ cao cấp — HOLEX Watch Store, Đồng Nai, Việt Nam.

---

## 📖 Giới Thiệu Dự Án

**HOLEX Watch Store** là website thương mại điện tử frontend dành cho cửa hàng đồng hồ cao cấp tại Huyện Nhơn Trạch, Tỉnh Đồng Nai.

Website được xây dựng với phong cách **Classic Luxury Boutique** — sang trọng, tinh tế và mang dấu ấn riêng của thương hiệu HOLEX. Màu chủ đạo là **đen tuyền `#080808`** và **vàng Gold `#D4AF62`**.

### Tính năng nổi bật

- ✅ Giao diện sang trọng, cao cấp, responsive hoàn toàn
- ✅ Hiển thị và lọc 11 sản phẩm (4 Classic + 4 Sport & Urban + 3 bộ Couple)
- ✅ Giỏ hàng với LocalStorage (giữ giỏ hàng sau khi tải lại trang)
- ✅ Modal chi tiết sản phẩm đầy đủ thông số
- ✅ Tìm kiếm, lọc theo danh mục, lọc theo giá, sắp xếp
- ✅ Form đặt hàng có validation đầy đủ
- ✅ Toast notification khi thêm sản phẩm
- ✅ Header sticky + glassmorphism khi cuộn
- ✅ Hiệu ứng scroll reveal, counter animation
- ✅ Back to top button
- ✅ SEO cơ bản (meta tags, semantic HTML, alt text)

---

## 🛠️ Công Nghệ Sử Dụng

| Công nghệ | Mục đích |
|-----------|----------|
| HTML5 | Cấu trúc trang, semantic HTML |
| CSS3 | Styling, animations, responsive |
| JavaScript ES6+ | Logic UI, filter, cart, form validation |
| Google Fonts | Cormorant Garamond, Playfair Display, Roboto |
| Font Awesome 6 | Icons |
| Unsplash | Hình ảnh sản phẩm (miễn phí, hợp pháp) |

> **Không cần Node.js, npm hay bất kỳ build tool nào.** Chạy trực tiếp trong trình duyệt!

---

## 📁 Cấu Trúc Thư Mục

```
app web HOLEX/
│
├── index.html              ← Trang chính (toàn bộ UI)
├── README.md               ← Tài liệu dự án (file này)
│
├── css/
│   └── style.css           ← Toàn bộ styling (1400+ dòng)
│
├── js/
│   ├── products.js         ← Dữ liệu sản phẩm (11 SP + 3 bộ đôi)
│   ├── cart.js             ← Logic giỏ hàng + LocalStorage
│   └── main.js             ← UI interactions, filters, animations
│
└── assets/
    ├── images/             ← (Placeholder — dùng Unsplash URLs)
    ├── icons/              ← SVG icons
    └── logo/               ← Logo files
```

---

## 🚀 Hướng Dẫn Cài Đặt & Chạy Website

### Cách 1: Mở file trực tiếp (đơn giản nhất)

```bash
# Mở file index.html bằng trình duyệt
# (double-click vào file, hoặc drag vào Chrome/Firefox/Edge)
```

> ⚠️ Một số trình duyệt chặn `localStorage` khi mở file trực tiếp bằng `file://`. Dùng cách 2 để tránh lỗi này.

### Cách 2: Dùng VS Code Live Server (khuyến nghị)

1. Cài extension **Live Server** trong VS Code
2. Chuột phải vào `index.html` → **"Open with Live Server"**
3. Website tự động mở tại `http://127.0.0.1:5500`

### Cách 3: Dùng Python HTTP Server

```bash
# Mở terminal trong thư mục dự án, chạy:
python -m http.server 8000

# Rồi mở trình duyệt tại:
# http://localhost:8000
```

### Cách 4: Dùng Node.js http-server

```bash
npx http-server -p 8080
# Mở: http://localhost:8080
```

---

## ✏️ Hướng Dẫn Chỉnh Sửa Sản Phẩm

Mở file `js/products.js`. Mỗi sản phẩm có cấu trúc:

```javascript
{
  id: "HLC-001",            // Mã sản phẩm (phải duy nhất)
  name: "HOLEX Classic Blanc",  // Tên sản phẩm
  category: "classic",          // "classic" | "sport" | "couple"
  gender: "unisex",             // "male" | "female" | "unisex" | "couple"
  price: 890000,                // Giá bán (số, đơn vị VNĐ)
  badge: "BEST SELLER",         // "BEST SELLER" | "NEW ARRIVAL" | "LIMITED" | "PREMIUM" | null
  image: "https://...",         // URL hình ảnh
  imageAlt: "Mô tả ảnh",       // Alt text cho ảnh
  shortDesc: "Mô tả ngắn...",  // Mô tả ngắn hiển thị trên card
  description: "Mô tả dài...", // Mô tả đầy đủ trong modal
  specs: {                      // Thông số kỹ thuật
    strap: "Da bò thật Italy",
    movement: "Quartz Nhật Bản",
    glass: "Kính khoáng",
    water: "3 ATM",
    caseDiameter: "38mm",
    caseThickness: "7.5mm",
    warranty: "12 tháng"
  }
}
```

### Thêm sản phẩm mới

Thêm object mới vào mảng `PRODUCTS` trong `js/products.js`.

### Xóa sản phẩm

Xóa hoặc comment-out object sản phẩm trong mảng `PRODUCTS`.

### Thay đổi giá

Sửa trường `price` (số nguyên, đơn vị VNĐ, không có dấu phẩy).

---

## 🖼️ Hướng Dẫn Thay Đổi Hình Ảnh

### Dùng Unsplash (hiện tại)

Truy cập [unsplash.com](https://unsplash.com), tìm ảnh đồng hồ, copy URL dạng:
```
https://images.unsplash.com/photo-XXXXXXXXXX?w=600&q=80
```

Thay URL vào trường `image` của sản phẩm trong `js/products.js`.

### Dùng ảnh local

1. Copy ảnh vào thư mục `assets/images/`
2. Thay URL thành đường dẫn tương đối:
   ```javascript
   image: "assets/images/ten-san-pham.jpg"
   ```

---

## 🎨 Hướng Dẫn Thay Đổi Logo và Màu Sắc

### Màu sắc thương hiệu

Mở `css/style.css`, tìm phần `:root` và chỉnh các biến CSS:

```css
:root {
  --black:     #080808;  /* Màu nền đen chủ đạo */
  --gold:      #D4AF62;  /* Màu vàng Gold */
  --gold-light:#E8C97A;  /* Vàng nhạt (hover) */
  --sapphire:  #173B69;  /* Xanh Sapphire */
  --ivory:     #F7F5F0;  /* Trắng ngà (chữ) */
  --silver:    #C5C5C5;  /* Xám bạc (chữ phụ) */
}
```

### Logo SVG

Logo nằm inline trong `index.html`. Tìm thẻ `<svg>` trong phần `.header-logo` và chỉnh sửa trực tiếp, hoặc thay bằng ảnh:

```html
<!-- Thay SVG bằng ảnh logo -->
<img src="assets/logo/holex-logo.png" alt="HOLEX" width="44" height="44" />
```

---

## 🏪 Hướng Dẫn Chỉnh Sửa Thông Tin Cửa Hàng

Thông tin cửa hàng nằm ở nhiều nơi trong `index.html`. Tìm kiếm và thay thế:

| Thông tin | Tìm chuỗi | Thay bằng |
|-----------|-----------|-----------|
| Địa chỉ | `Tổ 10, Ấp 2, Xã Long An` | Địa chỉ thực |
| Hotline | `0903 170 2981` | Số điện thoại thực |
| Giờ mở cửa | `06:00 – 22:00` | Giờ thực |
| Facebook | `https://facebook.com/holexwatchstore` | URL thực |
| Instagram | `https://instagram.com/holexwatchstore` | URL thực |

---

## 🧪 Hướng Dẫn Kiểm Thử

### Kiểm thử thủ công

Mở website trên trình duyệt và thực hiện:

1. **Header**: Cuộn xuống → header chuyển màu tối (glassmorphism)
2. **Mobile Menu**: Thu nhỏ cửa sổ xuống < 992px → icon hamburger xuất hiện
3. **Tìm kiếm**: Gõ vào ô tìm kiếm → sản phẩm lọc realtime
4. **Lọc danh mục**: Click các nút "Classic", "Sport & Urban", "Couple"
5. **Lọc giá**: Nhập giá vào ô "Từ" và "Đến" → sản phẩm lọc
6. **Sắp xếp**: Chọn dropdown → thứ tự sản phẩm thay đổi
7. **Xem chi tiết**: Click sản phẩm → modal chi tiết mở ra
8. **Thêm giỏ hàng**: Click nút túi → toast xuất hiện, badge tăng
9. **Giỏ hàng**: Click icon giỏ → sidebar trượt ra từ phải
10. **Tăng/giảm SL**: Click +/- trong giỏ → số lượng và tổng tiền cập nhật
11. **Xóa sản phẩm**: Click X → sản phẩm biến mất
12. **Reload**: F5 → giỏ hàng vẫn còn (LocalStorage)
13. **Form**: Nhấn submit khi trống → thông báo lỗi
14. **Form**: Nhập số điện thoại sai → thông báo lỗi
15. **Form submit**: Nhập đúng → thông báo thành công + Console log

### Kiểm tra Console

Mở DevTools (`F12`) → tab **Console** → xem log đơn hàng sau khi submit form.

### Kiểm tra LocalStorage

DevTools → tab **Application** → **Local Storage** → xem key `holexCart`.

---

## 📱 Responsive Breakpoints

| Breakpoint | Kích thước | Layout sản phẩm |
|------------|------------|-----------------|
| Desktop | > 1200px | 4 cột |
| Laptop | 993px – 1200px | 3 cột |
| Tablet | 769px – 992px | 2 cột |
| Mobile | 577px – 768px | 2 cột |
| Mobile nhỏ | ≤ 576px | 1 cột |

---

## 📜 Ghi Chú Pháp Lý

- Hình ảnh sử dụng từ **Unsplash** theo giấy phép [Unsplash License](https://unsplash.com/license) (miễn phí, không cần ghi nguồn).
- Logo HOLEX được thiết kế độc lập, không sao chép từ bất kỳ thương hiệu nào.
- Dữ liệu sản phẩm là **minh họa** của cửa hàng HOLEX, không phải sản phẩm chính hãng của thương hiệu khác.
- Đánh giá khách hàng là **nội dung minh họa**, không phải phản hồi thực tế.
- Form đặt hàng là **demo frontend**, không lưu dữ liệu lên server.

---

## 👨‍💻 Tác Giả

**Thiết kế bởi Từ Dương Huy**

---

*HOLEX Watch Store — © 2024. Bảo lưu mọi quyền.*
