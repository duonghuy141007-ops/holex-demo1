/**
 * HOLEX WATCH STORE — Quản lý Giỏ Hàng
 * Lưu trữ giỏ hàng bằng LocalStorage, tự động cập nhật UI.
 */

const Cart = (() => {
  const STORAGE_KEY = 'holexCart';

  // ------------------------------------------------
  // Đọc/ghi LocalStorage
  // ------------------------------------------------
  function _load() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    } catch {
      return [];
    }
  }

  function _save(items) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }

  // ------------------------------------------------
  // API công khai
  // ------------------------------------------------

  /** Thêm sản phẩm vào giỏ (hoặc tăng số lượng nếu đã có) */
  function add(productId, qty = 1) {
    const product = getProductById(productId);
    if (!product) return false;

    const items = _load();
    const existing = items.find(i => i.id === productId);

    if (existing) {
      existing.qty += qty;
    } else {
      items.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        imageAlt: product.imageAlt,
        qty: qty,
        category: product.category
      });
    }

    _save(items);
    _renderCartUI();
    _updateBadge();
    return true;
  }

  /** Xóa sản phẩm khỏi giỏ */
  function remove(productId) {
    const items = _load().filter(i => i.id !== productId);
    _save(items);
    _renderCartUI();
    _updateBadge();
  }

  /** Thay đổi số lượng (delta = +1 hoặc -1) */
  function updateQty(productId, delta) {
    const items = _load();
    const item = items.find(i => i.id === productId);
    if (!item) return;

    item.qty = Math.max(1, item.qty + delta);
    _save(items);
    _renderCartUI();
    _updateBadge();
  }

  /** Đặt số lượng chính xác */
  function setQty(productId, qty) {
    const items = _load();
    const item = items.find(i => i.id === productId);
    if (!item) return;

    const newQty = parseInt(qty, 10);
    if (isNaN(newQty) || newQty < 1) return;

    item.qty = newQty;
    _save(items);
    _renderCartUI();
    _updateBadge();
  }

  /** Lấy tổng tiền */
  function getTotal() {
    return _load().reduce((sum, i) => sum + i.price * i.qty, 0);
  }

  /** Lấy tổng số lượng sản phẩm */
  function count() {
    return _load().reduce((sum, i) => sum + i.qty, 0);
  }

  /** Lấy danh sách items */
  function getItems() {
    return _load();
  }

  /** Xóa toàn bộ giỏ hàng */
  function clear() {
    _save([]);
    _renderCartUI();
    _updateBadge();
  }

  // ------------------------------------------------
  // Cập nhật giao diện
  // ------------------------------------------------

  /** Cập nhật badge số lượng trên icon giỏ hàng */
  function _updateBadge() {
    const badge = document.getElementById('cart-badge');
    if (!badge) return;
    const total = count();
    badge.textContent = total;
    badge.style.display = total > 0 ? 'flex' : 'none';
  }

  /** Render danh sách sản phẩm trong sidebar giỏ hàng */
  function _renderCartUI() {
    const listEl = document.getElementById('cart-items-list');
    const totalEl = document.getElementById('cart-total-price');
    const emptyEl = document.getElementById('cart-empty');
    const footerEl = document.getElementById('cart-footer');

    if (!listEl) return;

    const items = _load();

    if (items.length === 0) {
      listEl.innerHTML = '';
      if (emptyEl) emptyEl.style.display = 'flex';
      if (footerEl) footerEl.style.display = 'none';
      if (totalEl) totalEl.textContent = formatPrice(0);
      return;
    }

    if (emptyEl) emptyEl.style.display = 'none';
    if (footerEl) footerEl.style.display = 'block';

    listEl.innerHTML = items.map(item => `
      <div class="cart-item" data-id="${item.id}">
        <div class="cart-item-img">
          <img src="${item.image}" alt="${item.imageAlt}" loading="lazy" />
        </div>
        <div class="cart-item-info">
          <p class="cart-item-name">${item.name}</p>
          <p class="cart-item-price">${formatPrice(item.price)}</p>
          <div class="cart-item-qty">
            <button class="qty-btn qty-minus" onclick="Cart.updateQty('${item.id}', -1)" aria-label="Giảm số lượng">
              <i class="fas fa-minus"></i>
            </button>
            <span class="qty-value">${item.qty}</span>
            <button class="qty-btn qty-plus" onclick="Cart.updateQty('${item.id}', 1)" aria-label="Tăng số lượng">
              <i class="fas fa-plus"></i>
            </button>
          </div>
        </div>
        <button class="cart-item-remove" onclick="Cart.remove('${item.id}')" aria-label="Xóa sản phẩm">
          <i class="fas fa-times"></i>
        </button>
      </div>
    `).join('');

    if (totalEl) totalEl.textContent = formatPrice(getTotal());
  }

  /** Khởi tạo giỏ hàng khi trang load */
  function init() {
    _renderCartUI();
    _updateBadge();
  }

  // Expose public API
  return { add, remove, updateQty, setQty, getTotal, count, getItems, clear, init, render: _renderCartUI };
})();
