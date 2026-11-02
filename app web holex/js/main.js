/**
 * HOLEX WATCH STORE — JavaScript chính
 * Xử lý UI interactions, animations, filters, modal, form validation
 */

// ============================================================
// TOAST NOTIFICATIONS
// ============================================================
const Toast = (() => {
  let container;

  function _getContainer() {
    if (!container) {
      container = document.getElementById('toast-container');
    }
    return container;
  }

  function show(message, type = 'success', duration = 3000) {
    const c = _getContainer();
    if (!c) return;

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;

    const icon = type === 'success' ? 'fa-check-circle' :
                 type === 'error'   ? 'fa-times-circle' :
                 type === 'info'    ? 'fa-info-circle'  : 'fa-bell';

    toast.innerHTML = `
      <i class="fas ${icon}"></i>
      <span>${message}</span>
      <button class="toast-close" onclick="this.parentElement.remove()">
        <i class="fas fa-times"></i>
      </button>
    `;

    c.appendChild(toast);

    // Trigger animation
    requestAnimationFrame(() => toast.classList.add('toast-visible'));

    // Auto remove
    setTimeout(() => {
      toast.classList.remove('toast-visible');
      setTimeout(() => toast.remove(), 400);
    }, duration);
  }

  return { show };
})();

// ============================================================
// HEADER — Sticky + Glassmorphism khi scroll
// ============================================================
function initHeader() {
  const header = document.getElementById('main-header');
  if (!header) return;

  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const scroll = window.scrollY;

    if (scroll > 80) {
      header.classList.add('header-scrolled');
    } else {
      header.classList.remove('header-scrolled');
    }

    // Ẩn header khi scroll nhanh xuống, hiện lại khi scroll lên
    if (scroll > lastScroll && scroll > 200) {
      header.classList.add('header-hidden');
    } else {
      header.classList.remove('header-hidden');
    }

    lastScroll = scroll;
  }, { passive: true });
}

// ============================================================
// HAMBURGER MENU — Mobile
// ============================================================
function initHamburger() {
  const btn = document.getElementById('hamburger-btn');
  const nav = document.getElementById('mobile-nav');
  const overlay = document.getElementById('nav-overlay');

  if (!btn || !nav) return;

  function openMenu() {
    btn.classList.add('active');
    nav.classList.add('active');
    if (overlay) overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    btn.classList.remove('active');
    nav.classList.remove('active');
    if (overlay) overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  btn.addEventListener('click', () => {
    if (nav.classList.contains('active')) closeMenu();
    else openMenu();
  });

  if (overlay) overlay.addEventListener('click', closeMenu);

  // Đóng menu khi click vào link
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });
}

// ============================================================
// SMOOTH SCROLL — Cho các anchor link
// ============================================================
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const href = link.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      const headerH = document.getElementById('main-header')?.offsetHeight || 80;
      const top = target.getBoundingClientRect().top + window.scrollY - headerH;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
}

// ============================================================
// SCROLL REVEAL — Fade-in khi cuộn vào viewport
// ============================================================
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ============================================================
// BACK TO TOP BUTTON
// ============================================================
function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ============================================================
// HERO — Số liệu đếm animation
// ============================================================
function initHeroCounters() {
  const counters = document.querySelectorAll('[data-count]');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.count, 10);
      let current = 0;
      const step = Math.max(1, Math.ceil(target / 60));
      const timer = setInterval(() => {
        current = Math.min(current + step, target);
        el.textContent = current.toLocaleString('vi-VN');
        if (current >= target) clearInterval(timer);
      }, 25);
      obs.unobserve(el);
    });
  }, { threshold: 0.5 });
  counters.forEach(el => obs.observe(el));
}

// ============================================================
// PRODUCT RENDERING
// ============================================================

/** Render badge HTML */
function _badgeHTML(badge) {
  if (!badge) return '';
  const cls = badge === 'BEST SELLER' ? 'badge-gold' :
              badge === 'NEW ARRIVAL' ? 'badge-blue' :
              badge === 'LIMITED'     ? 'badge-red'  :
              badge === 'PREMIUM'     ? 'badge-purple': 'badge-gold';
  return `<span class="product-badge ${cls}">${badge}</span>`;
}

/** Tạo HTML card cho một sản phẩm */
function _createProductCard(product) {
  const card = document.createElement('div');
  card.className = 'product-card reveal';
  card.dataset.id = product.id;
  card.dataset.category = product.category;

  const categoryLabel = {
    classic: 'Holex Classic',
    sport:   'Holex Sport & Urban',
    couple:  'Holex Couple'
  }[product.category] || '';

  card.innerHTML = `
    <div class="product-card-img-wrap">
      ${_badgeHTML(product.badge)}
      <img
        src="${product.image}"
        alt="${product.imageAlt}"
        loading="lazy"
        class="product-card-img"
        onerror="this.src='https://images.unsplash.com/photo-1508057198894-247b23fe5ade?w=600&q=80'"
      />
      <div class="product-card-overlay">
        <button class="btn-outline-gold btn-quick-view" data-id="${product.id}">
          <i class="fas fa-eye"></i> Xem nhanh
        </button>
      </div>
    </div>
    <div class="product-card-body">
      <p class="product-category-label">${categoryLabel}</p>
      <h3 class="product-name">${product.name}</h3>
      <p class="product-code">Mã: ${product.id}</p>
      <p class="product-desc">${product.shortDesc}</p>
      <div class="product-card-footer">
        <div class="product-price">${formatPrice(product.price)}${product.isCouple ? '<span class="price-note">/bộ</span>' : ''}</div>
        <div class="product-card-actions">
          <button class="btn-detail btn-text-gold" data-id="${product.id}">
            Chi tiết <i class="fas fa-arrow-right"></i>
          </button>
          <button class="btn-add-cart" data-id="${product.id}" aria-label="Thêm vào giỏ hàng">
            <i class="fas fa-shopping-bag"></i>
          </button>
        </div>
      </div>
    </div>
  `;

  return card;
}

/** Render toàn bộ lưới sản phẩm */
function renderProducts(products) {
  const grid = document.getElementById('products-grid');
  const noResult = document.getElementById('no-results');
  if (!grid) return;

  grid.innerHTML = '';

  if (products.length === 0) {
    if (noResult) noResult.style.display = 'flex';
    return;
  }

  if (noResult) noResult.style.display = 'none';

  products.forEach(p => {
    const card = _createProductCard(p);
    grid.appendChild(card);
  });

  // Bind events sau khi render
  _bindProductCardEvents(grid);

  // Kích hoạt scroll reveal cho cards mới
  setTimeout(initScrollReveal, 100);
}

/** Gắn events cho card sản phẩm */
function _bindProductCardEvents(container) {
  // Nút xem chi tiết + quick view
  container.querySelectorAll('.btn-detail, .btn-quick-view').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const id = btn.dataset.id;
      openProductModal(id);
    });
  });

  // Nút thêm vào giỏ hàng
  container.querySelectorAll('.btn-add-cart').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const id = btn.dataset.id;
      const product = getProductById(id);
      if (!product) return;

      Cart.add(id, 1);

      // Animation nút
      btn.classList.add('btn-added');
      setTimeout(() => btn.classList.remove('btn-added'), 600);

      Toast.show(`<strong>${product.name}</strong> đã được thêm vào giỏ hàng!`, 'success');
    });
  });
}

// ============================================================
// PRODUCT FILTERS
// ============================================================
function initFilters() {
  const searchInput   = document.getElementById('search-input');
  const categoryBtns  = document.querySelectorAll('.filter-category-btn');
  const minPriceInput = document.getElementById('min-price');
  const maxPriceInput = document.getElementById('max-price');
  const sortSelect    = document.getElementById('sort-select');
  const clearBtn      = document.getElementById('clear-filters-btn');
  const countEl       = document.getElementById('products-count');

  let currentFilters = {
    search: '',
    category: 'all',
    minPrice: 0,
    maxPrice: Infinity,
    sort: 'default'
  };

  function _applyFilters() {
    const results = filterAndSort(currentFilters);
    renderProducts(results);
    if (countEl) countEl.textContent = `${results.length} sản phẩm`;
  }

  // Tìm kiếm
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      currentFilters.search = searchInput.value;
      _applyFilters();
    });
  }

  // Lọc theo danh mục
  categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      categoryBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilters.category = btn.dataset.category;
      _applyFilters();
    });
  });

  // Lọc theo giá
  if (minPriceInput) {
    minPriceInput.addEventListener('change', () => {
      const val = parseInt(minPriceInput.value.replace(/\D/g, ''), 10);
      currentFilters.minPrice = isNaN(val) ? 0 : val;
      _applyFilters();
    });
  }

  if (maxPriceInput) {
    maxPriceInput.addEventListener('change', () => {
      const val = parseInt(maxPriceInput.value.replace(/\D/g, ''), 10);
      currentFilters.maxPrice = isNaN(val) ? Infinity : val;
      _applyFilters();
    });
  }

  // Sắp xếp
  if (sortSelect) {
    sortSelect.addEventListener('change', () => {
      currentFilters.sort = sortSelect.value;
      _applyFilters();
    });
  }

  // Xóa bộ lọc
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      currentFilters = { search: '', category: 'all', minPrice: 0, maxPrice: Infinity, sort: 'default' };
      if (searchInput) searchInput.value = '';
      if (minPriceInput) minPriceInput.value = '';
      if (maxPriceInput) maxPriceInput.value = '';
      if (sortSelect) sortSelect.value = 'default';
      categoryBtns.forEach(b => b.classList.remove('active'));
      const allBtn = document.querySelector('.filter-category-btn[data-category="all"]');
      if (allBtn) allBtn.classList.add('active');
      _applyFilters();
    });
  }

  // Render ban đầu
  _applyFilters();
}

// ============================================================
// PRODUCT MODAL
// ============================================================
function openProductModal(productId) {
  const product = getProductById(productId);
  if (!product) return;

  const modal = document.getElementById('product-modal');
  const body  = document.getElementById('product-modal-body');
  if (!modal || !body) return;

  const specsHTML = Object.entries(product.specs).map(([key, val]) => {
    const labels = {
      strap:         'Chất liệu dây',
      movement:      'Loại máy',
      glass:         'Chất liệu kính',
      water:         'Chống nước',
      caseDiameter:  'Đường kính vỏ',
      caseThickness: 'Độ dày',
      caseBack:      'Mặt sau',
      warranty:      'Bảo hành',
      engraving:     'Khắc chữ',
      giftBox:       'Hộp quà',
      diamond:       'Đá đính'
    };
    return `
      <tr>
        <td class="spec-label">${labels[key] || key}</td>
        <td class="spec-value">${val}</td>
      </tr>
    `;
  }).join('');

  const categoryLabel = {
    classic: 'Holex Classic',
    sport:   'Holex Sport & Urban',
    couple:  'Holex Couple'
  }[product.category] || '';

  body.innerHTML = `
    <div class="modal-product-layout">
      <div class="modal-product-img-col">
        <div class="modal-img-wrap">
          <img src="${product.image}" alt="${product.imageAlt}" />
        </div>
      </div>
      <div class="modal-product-info-col">
        <p class="modal-category">${categoryLabel}</p>
        <h2 class="modal-product-name">${product.name}</h2>
        <p class="modal-product-code">Mã sản phẩm: <strong>${product.id}</strong></p>
        <div class="modal-price">${formatPrice(product.price)}${product.isCouple ? '<span class="price-note">/bộ đôi</span>' : ''}</div>
        ${_badgeHTML(product.badge)}
        <p class="modal-desc">${product.description}</p>

        <div class="modal-specs">
          <h4 class="specs-title">THÔNG SỐ KỸ THUẬT</h4>
          <table class="specs-table">
            <tbody>${specsHTML}</tbody>
          </table>
        </div>

        <div class="modal-qty-row">
          <label class="qty-label">Số lượng:</label>
          <div class="modal-qty-control">
            <button class="qty-btn" id="modal-qty-minus" aria-label="Giảm">
              <i class="fas fa-minus"></i>
            </button>
            <input type="number" id="modal-qty-input" value="1" min="1" max="99" />
            <button class="qty-btn" id="modal-qty-plus" aria-label="Tăng">
              <i class="fas fa-plus"></i>
            </button>
          </div>
        </div>

        <div class="modal-actions">
          <button class="btn-gold btn-full" id="modal-add-to-cart" data-id="${product.id}">
            <i class="fas fa-shopping-bag"></i> THÊM VÀO GIỎ HÀNG
          </button>
          <button class="btn-outline-gold btn-full" id="modal-order-now" data-id="${product.id}">
            <i class="fas fa-bolt"></i> ĐẶT HÀNG NGAY
          </button>
        </div>
      </div>
    </div>
  `;

  // Qty controls
  const qtyInput = body.querySelector('#modal-qty-input');
  body.querySelector('#modal-qty-minus').addEventListener('click', () => {
    qtyInput.value = Math.max(1, parseInt(qtyInput.value, 10) - 1);
  });
  body.querySelector('#modal-qty-plus').addEventListener('click', () => {
    qtyInput.value = Math.min(99, parseInt(qtyInput.value, 10) + 1);
  });

  // Thêm vào giỏ hàng
  body.querySelector('#modal-add-to-cart').addEventListener('click', () => {
    const qty = parseInt(qtyInput.value, 10) || 1;
    Cart.add(product.id, qty);
    Toast.show(`<strong>${product.name}</strong> đã được thêm vào giỏ hàng!`, 'success');
    closeProductModal();
  });

  // Đặt hàng ngay — cuộn đến form
  body.querySelector('#modal-order-now').addEventListener('click', () => {
    closeProductModal();
    setTimeout(() => {
      const orderSection = document.getElementById('order');
      if (orderSection) {
        const headerH = document.getElementById('main-header')?.offsetHeight || 80;
        window.scrollTo({ top: orderSection.offsetTop - headerH, behavior: 'smooth' });
        // Tự động chọn sản phẩm trong dropdown form
        const dropdown = document.getElementById('order-product');
        if (dropdown) {
          dropdown.value = product.id;
          dropdown.dispatchEvent(new Event('change'));
        }
      }
    }, 300);
  });

  // Mở modal
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeProductModal() {
  const modal = document.getElementById('product-modal');
  if (!modal) return;
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

function initProductModal() {
  const modal = document.getElementById('product-modal');
  if (!modal) return;

  // Đóng khi click overlay
  modal.addEventListener('click', e => {
    if (e.target === modal) closeProductModal();
  });

  // Đóng khi nhấn nút X
  const closeBtn = document.getElementById('product-modal-close');
  if (closeBtn) closeBtn.addEventListener('click', closeProductModal);

  // Đóng khi nhấn ESC
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      closeProductModal();
      closeCart();
    }
  });
}

// ============================================================
// CART SIDEBAR
// ============================================================
function openCart() {
  const sidebar = document.getElementById('cart-sidebar');
  const overlay = document.getElementById('cart-overlay');
  if (!sidebar) return;
  sidebar.classList.add('active');
  if (overlay) overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  const sidebar = document.getElementById('cart-sidebar');
  const overlay = document.getElementById('cart-overlay');
  if (!sidebar) return;
  sidebar.classList.remove('active');
  if (overlay) overlay.classList.remove('active');
  document.body.style.overflow = '';
}

function initCart() {
  // Mở giỏ hàng
  const cartBtn = document.getElementById('cart-btn');
  if (cartBtn) cartBtn.addEventListener('click', openCart);

  // Đóng giỏ hàng
  const closeBtn = document.getElementById('cart-close');
  if (closeBtn) closeBtn.addEventListener('click', closeCart);

  const overlay = document.getElementById('cart-overlay');
  if (overlay) overlay.addEventListener('click', closeCart);

  // Nút tiến hành đặt hàng
  const checkoutBtn = document.getElementById('checkout-btn');
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      if (Cart.count() === 0) {
        Toast.show('Giỏ hàng đang trống. Hãy thêm sản phẩm trước!', 'error');
        return;
      }
      closeCart();
      setTimeout(() => {
        const orderSection = document.getElementById('order');
        if (orderSection) {
          const headerH = document.getElementById('main-header')?.offsetHeight || 80;
          window.scrollTo({ top: orderSection.offsetTop - headerH, behavior: 'smooth' });
        }
      }, 300);
    });
  }

  // Khởi tạo Cart module
  Cart.init();
}

// ============================================================
// ORDER FORM — Validation & Submit
// ============================================================
function initOrderForm() {
  const form = document.getElementById('order-form');
  if (!form) return;

  // Populate dropdown sản phẩm
  const productDropdown = document.getElementById('order-product');
  if (productDropdown) {
    PRODUCTS.forEach(p => {
      const opt = document.createElement('option');
      opt.value = p.id;
      opt.textContent = `${p.name} — ${formatPrice(p.price)}${p.isCouple ? '/bộ' : ''}`;
      opt.dataset.price = p.price;
      productDropdown.appendChild(opt);
    });

    productDropdown.addEventListener('change', _updateOrderTotal);
  }

  const qtyInput = document.getElementById('order-qty');
  if (qtyInput) qtyInput.addEventListener('input', _updateOrderTotal);

  // Submit handler
  form.addEventListener('submit', _handleOrderSubmit);

  // Real-time validation
  form.querySelectorAll('input[required], select[required], textarea[required]').forEach(field => {
    field.addEventListener('blur', () => _validateField(field));
    field.addEventListener('input', () => {
      field.classList.remove('field-error');
      const errEl = form.querySelector(`[data-error="${field.id}"]`);
      if (errEl) errEl.style.display = 'none';
    });
  });
}

function _updateOrderTotal() {
  const dropdown = document.getElementById('order-product');
  const qtyInput = document.getElementById('order-qty');
  const totalEl  = document.getElementById('order-total-display');
  if (!dropdown || !qtyInput || !totalEl) return;

  const selected = dropdown.selectedOptions[0];
  if (!selected || !selected.dataset.price) {
    totalEl.textContent = '—';
    return;
  }

  const price = parseInt(selected.dataset.price, 10);
  const qty   = Math.max(1, parseInt(qtyInput.value, 10) || 1);
  totalEl.textContent = formatPrice(price * qty);
}

function _validateField(field) {
  const errEl = document.querySelector(`[data-error="${field.id}"]`);
  let message = '';

  if (field.required && !field.value.trim()) {
    message = 'Trường này là bắt buộc.';
  } else if (field.id === 'order-phone') {
    const phone = field.value.trim().replace(/\s/g, '');
    if (phone && !/^(0|\+84)[3-9][0-9]{8}$/.test(phone)) {
      message = 'Số điện thoại không hợp lệ. (VD: 0912345678)';
    }
  } else if (field.type === 'select-one' && !field.value) {
    message = 'Vui lòng chọn sản phẩm.';
  }

  if (message) {
    field.classList.add('field-error');
    if (errEl) { errEl.textContent = message; errEl.style.display = 'block'; }
    return false;
  } else {
    field.classList.remove('field-error');
    if (errEl) errEl.style.display = 'none';
    return true;
  }
}

function _handleOrderSubmit(e) {
  e.preventDefault();
  const form = e.target;

  // Validate tất cả fields
  const fields = form.querySelectorAll('input[required], select[required], textarea');
  let valid = true;
  fields.forEach(f => {
    if (!_validateField(f)) valid = false;
  });

  if (!valid) {
    Toast.show('Vui lòng kiểm tra lại thông tin đã nhập!', 'error');
    return;
  }

  // Thu thập dữ liệu đơn hàng
  const dropdown = document.getElementById('order-product');
  const selectedProduct = dropdown ? getProductById(dropdown.value) : null;
  const qty = parseInt(document.getElementById('order-qty')?.value, 10) || 1;

  const orderData = {
    orderTime: new Date().toLocaleString('vi-VN'),
    customer: {
      name:    document.getElementById('order-name')?.value.trim(),
      phone:   document.getElementById('order-phone')?.value.trim(),
      address: document.getElementById('order-address')?.value.trim(),
    },
    product: selectedProduct ? {
      id:   selectedProduct.id,
      name: selectedProduct.name,
      price: formatPrice(selectedProduct.price),
    } : null,
    qty,
    totalPrice: selectedProduct ? formatPrice(selectedProduct.price * qty) : '—',
    note: document.getElementById('order-note')?.value.trim() || '(Không có)',
    deliveryTime: document.getElementById('order-time')?.value || '—',
  };

  // Log đơn hàng ra console (phục vụ kiểm thử frontend)
  console.log('%c📦 ĐƠN HÀNG MỚI — HOLEX WATCH STORE', 'color:#D4AF62;font-size:14px;font-weight:bold');
  console.table(orderData.customer);
  console.log('Sản phẩm:', orderData.product);
  console.log('Số lượng:', orderData.qty);
  console.log('Tổng tiền:', orderData.totalPrice);
  console.log('Ghi chú:', orderData.note);
  console.log('Thời gian giao:', orderData.deliveryTime);

  // Hiển thị thông báo thành công
  _showOrderSuccess(orderData);

  // Reset form
  form.reset();
  document.getElementById('order-total-display').textContent = '—';

  // Xóa giỏ hàng sau khi đặt hàng
  Cart.clear();
}

function _showOrderSuccess(orderData) {
  const overlay = document.getElementById('order-success-overlay');
  const nameEl  = document.getElementById('success-customer-name');
  const totalEl = document.getElementById('success-total');

  if (overlay) {
    if (nameEl) nameEl.textContent = orderData.customer.name;
    if (totalEl) totalEl.textContent = orderData.totalPrice;
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  } else {
    Toast.show('🎉 Đơn hàng đã được gửi thành công! HOLEX xin cảm ơn quý khách.', 'success', 5000);
  }
}

function initOrderSuccessOverlay() {
  const overlay = document.getElementById('order-success-overlay');
  if (!overlay) return;

  const closeBtn = document.getElementById('success-close');
  function close() {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (closeBtn) closeBtn.addEventListener('click', close);
  overlay.addEventListener('click', e => { if (e.target === overlay) close(); });
}

// ============================================================
// POPULATE ORDER FORM từ Cart items khi mở form
// ============================================================
function initOrderFormCartSync() {
  const orderSection = document.getElementById('order');
  if (!orderSection) return;

  // Observer để sync cart → form khi user cuộn đến section order
  const obs = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      const items = Cart.getItems();
      if (items.length > 0) {
        const dropdown = document.getElementById('order-product');
        if (dropdown && !dropdown.value) {
          dropdown.value = items[0].id;
          dropdown.dispatchEvent(new Event('change'));
          _updateOrderTotal();
        }
      }
    }
  }, { threshold: 0.3 });

  obs.observe(orderSection);
}

// ============================================================
// HERO TYPING EFFECT
// ============================================================
function initHeroTyping() {
  const el = document.getElementById('hero-tagline');
  if (!el) return;

  const texts = [
    'Timeless Precision, Modern Style.',
    'Tinh Hoa Thời Gian, Phong Cách Hiện Đại.',
    'Đẳng Cấp Vượt Thời Gian.'
  ];

  let i = 0, j = 0, deleting = false;

  function type() {
    const current = texts[i % texts.length];
    if (!deleting) {
      el.textContent = current.slice(0, ++j);
      if (j === current.length) {
        deleting = true;
        setTimeout(type, 2000);
        return;
      }
    } else {
      el.textContent = current.slice(0, --j);
      if (j === 0) {
        deleting = false;
        i++;
      }
    }
    setTimeout(type, deleting ? 40 : 70);
  }

  setTimeout(type, 1000);
}

// ============================================================
// NAV ACTIVE LINK khi scroll
// ============================================================
function initNavActiveOnScroll() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link[data-section]');

  if (!sections.length || !navLinks.length) return;

  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(l => l.classList.remove('active'));
        const link = document.querySelector(`.nav-link[data-section="${entry.target.id}"]`);
        if (link) link.classList.add('active');
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(s => obs.observe(s));
}

// ============================================================
// SEARCH BAR TOGGLE
// ============================================================
function initSearchBar() {
  const toggleBtn = document.getElementById('search-toggle');
  const searchBar = document.getElementById('header-search-bar');
  const searchInput = document.getElementById('header-search-input');

  if (!toggleBtn || !searchBar) return;

  toggleBtn.addEventListener('click', () => {
    const isOpen = searchBar.classList.toggle('open');
    if (isOpen && searchInput) {
      searchInput.focus();
    }
  });

  // Đóng khi nhấn ESC
  searchBar.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      searchBar.classList.remove('open');
    }
  });
}

// ============================================================
// KHỞI ĐỘNG TẤT CẢ
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initHamburger();
  initSmoothScroll();
  initScrollReveal();
  initBackToTop();
  initHeroCounters();
  initHeroTyping();
  initProductModal();
  initCart();
  initFilters();
  initOrderForm();
  initOrderSuccessOverlay();
  initOrderFormCartSync();
  initNavActiveOnScroll();
  initSearchBar();

  console.log('%c🕰️ HOLEX WATCH STORE — Website initialized successfully', 'color:#D4AF62;font-weight:bold');
});
