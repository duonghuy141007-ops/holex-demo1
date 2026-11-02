/**
 * HOLEX WATCH STORE — Dữ liệu sản phẩm
 * Đây là dữ liệu minh họa của cửa hàng, không phải sản phẩm chính hãng của thương hiệu nào khác.
 * Tất cả hình ảnh lấy từ Unsplash (miễn phí, hợp pháp).
 */

const PRODUCTS = [

  // =============================================
  // DÒNG HOLEX CLASSIC (4 sản phẩm)
  // =============================================
  {
    id: "HLC-001",
    name: "HOLEX Classic Blanc",
    category: "classic",
    gender: "unisex",
    price: 890000,
    badge: "BEST SELLER",
    image: "https://images.unsplash.com/photo-1548171916-c8fd2b9e27f0?w=600&q=80",
    imageAlt: "Đồng hồ HOLEX Classic Blanc mặt trắng dây da nâu",
    shortDesc: "Vẻ đẹp tối giản Ultra-thin, mặt số trắng tinh khôi dây da nâu thật Italy.",
    description: "HOLEX Classic Blanc là sự hòa quyện hoàn hảo giữa vẻ thanh lịch cổ điển và tinh thần hiện đại. Thiết kế mặt số Ultra-thin mỏng chỉ 7.5mm, dây da bò thật Italy được thuộc bằng phương pháp truyền thống tạo cảm giác mềm mại và thoải mái suốt ngày dài. Chiếc đồng hồ này phù hợp hoàn hảo cho môi trường công sở, gặp gỡ đối tác và các buổi tiệc sang trọng.",
    specs: {
      strap: "Da bò thật Italy màu nâu caramel",
      movement: "Quartz Nhật Bản (Pin Maxell)",
      glass: "Kính khoáng tăng cứng",
      water: "3 ATM (chống nước nhẹ)",
      caseDiameter: "38mm",
      caseThickness: "7.5mm",
      caseBack: "Thép không gỉ 316L",
      warranty: "12 tháng"
    }
  },

  {
    id: "HLC-002",
    name: "HOLEX Classic Noir",
    category: "classic",
    gender: "male",
    price: 1450000,
    badge: "NEW ARRIVAL",
    image: "https://images.unsplash.com/photo-1622434641406-a158123450f9?w=600&q=80",
    imageAlt: "Đồng hồ HOLEX Classic Noir mặt đen dây da đen",
    shortDesc: "Sự bí ẩn và uy quyền — mặt số đen, dây da đen, thép mạ vàng.",
    description: "HOLEX Classic Noir mang vẻ đẹp huyền bí và đầy quyền năng. Mặt số đen tuyền được phủ lớp chống phản quang cho độ đọc giờ hoàn hảo trong mọi điều kiện ánh sáng. Chỉ số giờ và kim đồng hồ mạ vàng Gold tạo điểm nhấn sang trọng trên nền tối. Sản phẩm dành riêng cho những quý ông hiểu phong cách.",
    specs: {
      strap: "Da thật cao cấp màu đen",
      movement: "Automatic Seagull ST2130 (Trung Quốc)",
      glass: "Kính Mineral chống xước",
      water: "3 ATM",
      caseDiameter: "40mm",
      caseThickness: "9mm",
      caseBack: "Thép 316L đáy kính xem máy",
      warranty: "18 tháng"
    }
  },

  {
    id: "HLC-003",
    name: "HOLEX Classic Rose",
    category: "classic",
    gender: "female",
    price: 2200000,
    badge: null,
    image: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=600&q=80",
    imageAlt: "Đồng hồ HOLEX Classic Rose mặt hồng vàng rose gold",
    shortDesc: "Nữ tính, tinh tế — mặt số khảm xà cừ, vỏ mạ Rose Gold.",
    description: "HOLEX Classic Rose là tuyên ngôn về sự nữ tính và tinh tế. Mặt số được khảm xà cừ tự nhiên ánh lên những sắc màu lung linh huyền ảo. Vỏ đồng hồ mạ Rose Gold 18K bền bỉ cùng dây da màu be thanh lịch. Kích thước 32mm vừa vặn, tôn lên vẻ đẹp thanh mảnh của cổ tay người phụ nữ.",
    specs: {
      strap: "Da thật màu be pastel",
      movement: "Quartz Nhật Bản Miyota",
      glass: "Kính khoáng tăng cứng",
      water: "3 ATM",
      caseDiameter: "32mm",
      caseThickness: "7mm",
      caseBack: "Thép 316L mạ Rose Gold",
      warranty: "12 tháng"
    }
  },

  {
    id: "HLC-004",
    name: "HOLEX Classic Prestige",
    category: "classic",
    gender: "male",
    price: 4800000,
    badge: "LIMITED",
    image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=600&q=80",
    imageAlt: "Đồng hồ HOLEX Classic Prestige mặt số vàng dây da nâu tối",
    shortDesc: "Phiên bản giới hạn — Automatic cao cấp, mặt khắc chìm thủ công.",
    description: "HOLEX Classic Prestige là đỉnh cao của dòng Classic, được sản xuất giới hạn chỉ 100 chiếc. Mặt số được khắc chìm thủ công theo hoa văn Guilloche truyền thống. Bộ máy Automatic 21 viên ruby hiển thị qua đáy kính sapphire trong suốt. Đây là người bạn đồng hành lý tưởng cho những buổi tiệc sang trọng hay cuộc gặp gỡ đẳng cấp.",
    specs: {
      strap: "Da cá sấu thật màu nâu tối",
      movement: "Automatic 21 Jewels Miyota 8215",
      glass: "Kính Sapphire chống xước",
      water: "5 ATM",
      caseDiameter: "41mm",
      caseThickness: "10mm",
      caseBack: "Sapphire trong suốt (thấy máy)",
      warranty: "24 tháng"
    }
  },

  // =============================================
  // DÒNG HOLEX SPORT & URBAN (4 sản phẩm)
  // =============================================
  {
    id: "HSU-001",
    name: "HOLEX Sport Titan",
    category: "sport",
    gender: "male",
    price: 3200000,
    badge: "BEST SELLER",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&q=80",
    imageAlt: "Đồng hồ HOLEX Sport Titan dây thép đen thể thao",
    shortDesc: "Mạnh mẽ, bền bỉ — dây thép đen PVD, chống nước 10ATM.",
    description: "HOLEX Sport Titan được thiết kế cho những người đàn ông năng động, không ngại thử thách. Vỏ đồng hồ làm từ thép 316L phủ PVD đen siêu cứng, dây tích hợp liền mạch với vỏ. Chống nước đến 10ATM (100m) cho phép sử dụng khi bơi lội thông thường. Vành bezel xoay unidirectional khắc vạch phút dùng được cho việc đo thời gian lặn.",
    specs: {
      strap: "Thép không gỉ 316L mạ PVD đen",
      movement: "Quartz Nhật Bản (Miyota 1L45)",
      glass: "Sapphire coating chống xước",
      water: "10 ATM (100m)",
      caseDiameter: "44mm",
      caseThickness: "12mm",
      caseBack: "Thép 316L vít 4 điểm",
      warranty: "18 tháng"
    }
  },

  {
    id: "HSU-002",
    name: "HOLEX Urban Chrono",
    category: "sport",
    gender: "male",
    price: 4200000,
    badge: "NEW ARRIVAL",
    image: "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=600&q=80",
    imageAlt: "Đồng hồ HOLEX Urban Chrono chronograph bạc xanh",
    shortDesc: "Chronograph 3 mặt phụ — đo thời gian chính xác, phong cách đô thị.",
    description: "HOLEX Urban Chrono tích hợp chức năng chronograph với 3 mặt số phụ hiển thị giây, phút và giờ bấm giờ. Thiết kế mặt số xanh navy phong cách làm say lòng những tín đồ đồng hồ thể thao đô thị. Dây thép demi (kết hợp polished và brushed) tạo vẻ tinh tế mà không kém phần mạnh mẽ.",
    specs: {
      strap: "Thép 316L Demi (polished + brushed)",
      movement: "Quartz Chronograph VK63",
      glass: "Sapphire chống xước 2 chiều",
      water: "5 ATM (50m)",
      caseDiameter: "42mm",
      caseThickness: "11mm",
      caseBack: "Thép 316L solid",
      warranty: "18 tháng"
    }
  },

  {
    id: "HSU-003",
    name: "HOLEX Sport Lady",
    category: "sport",
    gender: "female",
    price: 3500000,
    badge: null,
    image: "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?w=600&q=80",
    imageAlt: "Đồng hồ HOLEX Sport Lady nữ thể thao vàng rose",
    shortDesc: "Thể thao mà vẫn nữ tính — vỏ Rose Gold, dây demi thép phủ vàng.",
    description: "HOLEX Sport Lady phá vỡ ranh giới giữa đồng hồ thể thao và đồng hồ thời trang nữ. Vỏ vàng Rose Gold mềm mại nhưng cứng cáp, dây thép phủ Rose Gold tạo sự liền mạch hoàn hảo. Chống nước 5ATM đủ để không lo khi rửa tay, tập yoga hay bơi trong bể nhẹ nhàng.",
    specs: {
      strap: "Thép 316L mạ Rose Gold",
      movement: "Quartz Miyota (Nhật Bản)",
      glass: "Kính Sapphire",
      water: "5 ATM (50m)",
      caseDiameter: "36mm",
      caseThickness: "9mm",
      caseBack: "Thép 316L mạ Rose Gold",
      warranty: "18 tháng"
    }
  },

  {
    id: "HSU-004",
    name: "HOLEX Urban Steel",
    category: "sport",
    gender: "unisex",
    price: 3800000,
    badge: null,
    image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=600&q=80",
    imageAlt: "Đồng hồ HOLEX Urban Steel thép bạc mặt xanh",
    shortDesc: "Nguyên khối thép bạc, mặt số xanh sapphire — bất bại mọi hoàn cảnh.",
    description: "HOLEX Urban Steel là lựa chọn hoàn hảo cho người yêu thích phong cách tối giản nhưng mạnh mẽ. Toàn bộ vỏ và dây đồng hồ làm từ thép 316L nguyên khối đánh bóng mirror, kết hợp mặt số xanh Sapphire độc đáo. Thiết kế unisex phù hợp cho cả nam và nữ.",
    specs: {
      strap: "Thép 316L nguyên khối mirror polish",
      movement: "Automatic Miyota 8N24",
      glass: "Kính Sapphire chống xước",
      water: "10 ATM (100m)",
      caseDiameter: "40mm",
      caseThickness: "10mm",
      caseBack: "Thép 316L vít solid",
      warranty: "24 tháng"
    }
  },

  // =============================================
  // DÒNG HOLEX COUPLE (3 bộ đôi)
  // =============================================
  {
    id: "HCP-001",
    name: "HOLEX Couple Eternal — Bộ Đôi",
    category: "couple",
    gender: "couple",
    price: 5800000,
    badge: "BEST SELLER",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80",
    imageAlt: "Bộ đôi đồng hồ HOLEX Couple Eternal mặt trắng vàng",
    shortDesc: "Tình yêu trường cửu — bộ đôi mặt trắng viền vàng, khắc tên theo yêu cầu.",
    description: "HOLEX Couple Eternal – Món quà tình yêu đặc biệt dành cho những cặp đôi muốn gửi gắm cảm xúc qua thời gian. Bộ đôi gồm 1 đồng hồ nam (40mm) và 1 đồng hồ nữ (33mm), cùng thiết kế mặt số trắng tinh, viền vàng Gold, kim vàng. Dịch vụ khắc tên và ngày kỷ niệm lên mặt sau đi kèm. Đóng gói trong hộp quà sang trọng nền nhung đen.",
    isCouple: true,
    maleProduct: "HCP-001M",
    femaleProduct: "HCP-001F",
    specs: {
      strap: "Da thật Italy — Nam nâu, Nữ be",
      movement: "Quartz Nhật Bản Miyota",
      glass: "Kính khoáng tăng cứng",
      water: "3 ATM",
      caseDiameter: "Nam 40mm / Nữ 33mm",
      engraving: "Khắc tên + ngày kỷ niệm (miễn phí)",
      giftBox: "Hộp nhung đen cao cấp (có sẵn)",
      warranty: "12 tháng / cặp"
    }
  },

  {
    id: "HCP-002",
    name: "HOLEX Couple Moonlight — Bộ Đôi",
    category: "couple",
    gender: "couple",
    price: 7500000,
    badge: "NEW ARRIVAL",
    image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=600&q=80",
    imageAlt: "Bộ đôi đồng hồ HOLEX Couple Moonlight mặt đen vàng",
    shortDesc: "Ánh trăng tình yêu — mặt đen, kim vàng, bộ đôi dành cho dịp đặc biệt.",
    description: "HOLEX Couple Moonlight lấy cảm hứng từ ánh trăng rằm — bí ẩn, lãng mạn và vĩnh cửu. Mặt số đen tuyền điểm xuyết các số La Mã mạ vàng Gold tạo nên vẻ đẹp cổ điển và tinh tế. Bộ đôi đi kèm chứng nhận sản phẩm có khắc tên và thông điệp cá nhân. Lý tưởng làm quà cưới, kỷ niệm ngày yêu.",
    isCouple: true,
    specs: {
      strap: "Da thật — Nam đen, Nữ đen espresso",
      movement: "Quartz Nhật Bản + Lịch ngày",
      glass: "Kính khoáng + lớp AR coating",
      water: "3 ATM",
      caseDiameter: "Nam 42mm / Nữ 34mm",
      engraving: "Khắc thông điệp cá nhân (tối đa 30 ký tự)",
      giftBox: "Hộp gỗ cao cấp nội thất nhung",
      warranty: "18 tháng / cặp"
    }
  },

  {
    id: "HCP-003",
    name: "HOLEX Couple Diamond — Bộ Đôi",
    category: "couple",
    gender: "couple",
    price: 9800000,
    badge: "PREMIUM",
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&q=80",
    imageAlt: "Bộ đôi đồng hồ HOLEX Couple Diamond sang trọng đính đá",
    shortDesc: "Tình yêu kim cương — đính đá Zircon cao cấp, hộp quà VIP.",
    description: "HOLEX Couple Diamond – Đỉnh cao của sự xa hoa và tình yêu. Vành đồng hồ nữ được đính 12 viên đá Zircon cao cấp lấp lánh quanh mặt số. Đồng hồ nam thiết kế mạnh mẽ với mặt carbon-look texture độc đáo. Bộ đôi đóng gói trong hộp quà VIP thiết kế riêng, kèm giấy chứng nhận và thiệp cá nhân viết tay. Sự lựa chọn hoàn hảo cho đám cưới và dịp kỷ niệm đặc biệt.",
    isCouple: true,
    specs: {
      strap: "Nam: Thép 316L / Nữ: Thép 316L mạ Rose Gold",
      movement: "Automatic Seagull (Nam) + Quartz Miyota (Nữ)",
      glass: "Sapphire chống xước",
      water: "5 ATM",
      caseDiameter: "Nam 41mm / Nữ 35mm",
      diamond: "Đính 12 Zircon Swarovski (chỉ đồng hồ nữ)",
      engraving: "Khắc laser tên + biểu tượng",
      giftBox: "Hộp VIP gỗ sơn mài + thiệp viết tay",
      warranty: "24 tháng / cặp"
    }
  }
];

// Format giá tiền VNĐ
function formatPrice(price) {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND'
  }).format(price);
}

// Lấy tất cả sản phẩm
function getAllProducts() {
  return PRODUCTS;
}

// Lấy sản phẩm theo danh mục
function getProductsByCategory(category) {
  if (!category || category === 'all') return PRODUCTS;
  return PRODUCTS.filter(p => p.category === category);
}

// Tìm sản phẩm theo ID
function getProductById(id) {
  return PRODUCTS.find(p => p.id === id) || null;
}

// Tìm kiếm sản phẩm
function searchProducts(query) {
  const q = query.toLowerCase().trim();
  if (!q) return PRODUCTS;
  return PRODUCTS.filter(p =>
    p.name.toLowerCase().includes(q) ||
    p.shortDesc.toLowerCase().includes(q) ||
    p.id.toLowerCase().includes(q)
  );
}

// Lọc và sắp xếp sản phẩm
function filterAndSort({ search = '', category = 'all', minPrice = 0, maxPrice = Infinity, sort = 'default' } = {}) {
  let results = PRODUCTS
    .filter(p => {
      const q = search.toLowerCase().trim();
      return !q || p.name.toLowerCase().includes(q) || p.shortDesc.toLowerCase().includes(q);
    })
    .filter(p => !category || category === 'all' || p.category === category)
    .filter(p => p.price >= minPrice && p.price <= maxPrice);

  if (sort === 'price-asc') {
    results.sort((a, b) => a.price - b.price);
  } else if (sort === 'price-desc') {
    results.sort((a, b) => b.price - a.price);
  } else if (sort === 'name-asc') {
    results.sort((a, b) => a.name.localeCompare(b.name));
  }

  return results;
}

// Export cho các module khác
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PRODUCTS, formatPrice, getAllProducts, getProductsByCategory, getProductById, searchProducts, filterAndSort };
}
