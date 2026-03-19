const STORAGE_KEYS = {
  lang: "bk-lang"
};

const SUPABASE_CONFIG = {
  url: "https://jgujifmixjmvfzckbgfw.supabase.co",
  key: "sb_publishable_KjXxQ2ksryOx_1iQVb22Bw_1SUFpsTS"
};

const ADMIN_AUTH = {
  username: "cgh5454",
  email: "cgh5454@bk-homepage.local"
};

const CATEGORY_META = {
  new: {
    label: { ko: "신상품", zh: "新品" },
    title: { ko: "신상품", zh: "新品" },
    description: {
      ko: "최근 등록된 신상품만 모아볼 수 있습니다.",
      zh: "这里显示最近登记的新品。"
    }
  },
  outer: {
    label: { ko: "아우터", zh: "外套" },
    title: { ko: "아우터", zh: "外套" },
    description: {
      ko: "점퍼, 자켓 등 아우터 카테고리 상품입니다.",
      zh: "这里显示夹克、外套等商品。"
    }
  },
  "blouse-shirt": {
    label: { ko: "블라우스/셔츠", zh: "衬衫/上衣" },
    title: { ko: "블라우스/셔츠", zh: "衬衫/上衣" },
    description: {
      ko: "블라우스와 셔츠 카테고리 상품입니다.",
      zh: "这里显示衬衫和上衣类商品。"
    }
  },
  tshirt: {
    label: { ko: "티셔츠", zh: "T恤" },
    title: { ko: "티셔츠", zh: "T恤" },
    description: {
      ko: "티셔츠 카테고리 상품입니다.",
      zh: "这里显示T恤类商品。"
    }
  }
};

const defaultProducts = [];

const supabaseClient = window.supabase
  ? window.supabase.createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.key)
  : null;

const translations = {
  ko: {
    "nav.home": "홈",
    "nav.new": "신상품",
    "nav.store": "매장안내",
    "nav.contact": "문의",
    "navFilter.new": "신상품",
    "navFilter.outer": "아우터",
    "navFilter.blouseShirt": "블라우스/셔츠",
    "navFilter.tshirt": "티셔츠",
    "home.description": "신상품 확인부터 카카오톡, 위챗 문의까지 모바일에서 바로 이어집니다.",
    "home.primary": "신상품 보기",
    "home.secondary": "문의하기",
    "home.categoryLabel": "Category",
    "home.categoryTitle": "주력 카테고리",
    "home.category1": "아우터",
    "home.category1Text": "점퍼, 자켓 등 판매 반응이 빠른 시즌 아우터",
    "home.category2": "블라우스/셔츠",
    "home.category2Text": "단품 진열에 강한 블라우스와 셔츠 라인",
    "home.category3": "티셔츠",
    "home.category3Text": "활용도 높은 기본 티셔츠와 시즌 티셔츠",
    "home.newLabel": "New",
    "home.newTitle": "이번 신상품",
    "home.newMore": "전체 보기",
    "home.contactLabel": "Contact",
    "home.contactTitle": "상담은 QR로 간단하게",
    "home.contactText": "국내는 카카오톡, 해외 바이어는 위챗으로 바로 연결할 수 있습니다.",
    "home.contactButton": "QR 확인하기",
    "new.eyebrow": "CATALOG",
    "new.title": "신상품",
    "new.description": "상품 이미지를 눌러 상세 컷을 확인할 수 있습니다.",
    "products.viewDetail": "상세보기",
    "products.soldOut": "품절",
    "products.singlePriceLabel": "1장",
    "products.bulkPriceLabel": "2장 이상",
    "store.eyebrow": "STORE GUIDE",
    "store.title": "매장안내",
    "store.description": "소매 매장과 해외 바이어 상담에 맞춘 여성 토탈의류 도매 매장입니다.",
    "store.nameTitle": "여성의류 도매",
    "store.copy": "신상품 제안부터 상담 연결까지 간단하고 빠르게 진행할 수 있습니다.",
    "store.phoneLabel": "연락처",
    "store.channelLabel": "상담 채널",
    "store.channelValue": "카카오톡 / 위챗 QR 문의",
    "store.addressLabel": "매장 주소",
    "store.addressValue": "서울특별시 중구 을지로 45길 62, 누죤 빌딩 1층 228호 B&K",
    "contact.eyebrow": "CONTACT",
    "contact.title": "문의하기",
    "contact.description": "아래 QR을 스캔하면 바로 상담으로 연결됩니다.",
    "contact.kakaoLabel": "KakaoTalk",
    "contact.kakaoTitle": "카카오톡 상담",
    "contact.kakaoText": "국내 소매 사장님 문의에 적합합니다.",
    "contact.wechatLabel": "WeChat",
    "contact.wechatTitle": "위챗 상담",
    "contact.wechatText": "중국, 대만 등 해외 바이어 문의에 적합합니다.",
    "contact.directLink": "바로가기",
    "contact.downloadQr": "QR 다운로드",
    "admin.eyebrow": "ADMIN",
    "admin.title": "상품 관리",
    "admin.description": "로그인 후 모바일에서 카테고리를 선택해 상품을 등록할 수 있습니다.",
    "admin.idLabel": "관리자 아이디",
    "admin.passwordLabel": "비밀번호",
    "admin.login": "로그인",
    "admin.logout": "로그아웃",
    "admin.welcome": "관리자 로그인 상태입니다.",
    "admin.nameKo": "상품명(KR)",
    "admin.nameZh": "상품명(CN)",
    "admin.priceKo": "가격(KR)",
    "admin.priceZh": "가격(CN)",
    "admin.descKo": "설명(KR)",
    "admin.descZh": "설명(CN)",
    "admin.colors": "컬러",
    "admin.sizes": "사이즈",
    "admin.category": "카테고리",
    "admin.isNew": "신상품 표시",
    "admin.isNewHelp": "체크하면 신상품 페이지에도 함께 노출됩니다.",
    "admin.images": "상품 이미지",
    "admin.addProduct": "상품 등록",
    "admin.openCreate": "새상품 등록",
    "admin.filterAll": "전체상품보기",
    "admin.currentLabel": "Products",
    "admin.currentTitle": "등록 상품",
    "admin.toggleSoldOut": "품절 처리",
    "admin.toggleOnSale": "판매중으로 변경",
    "admin.hide": "숨김 처리",
    "admin.show": "다시 노출",
    "admin.edit": "수정",
    "admin.editProduct": "상품 수정",
    "admin.cancelEdit": "수정 취소",
    "admin.delete": "삭제",
    "admin.hidden": "숨김",
    "admin.productDeleted": "상품이 삭제되었습니다.",
    "admin.productUpdated": "상품이 수정되었습니다.",
    "admin.loginError": "아이디 또는 비밀번호가 다르거나 관리자 계정이 아직 생성되지 않았습니다.",
    "admin.loginSuccess": "로그인되었습니다.",
    "admin.productSaved": "상품이 등록되었습니다.",
    "admin.imageRequired": "상품 이미지를 한 장 이상 선택해 주세요.",
    "admin.logoutDone": "로그아웃되었습니다.",
    "admin.syncError": "Supabase 연결 또는 테이블 설정을 확인해 주세요.",
    "modal.prev": "이전",
    "modal.next": "다음",
    "modal.count": "{current} / {total} 이미지"
  },
  zh: {
    "nav.home": "首页",
    "nav.new": "新品",
    "nav.store": "店铺",
    "nav.contact": "咨询",
    "navFilter.new": "新品",
    "navFilter.outer": "外套",
    "navFilter.blouseShirt": "衬衫/上衣",
    "navFilter.tshirt": "T恤",
    "home.description": "从查看新品到通过 KakaoTalk、微信咨询，手机上即可直接完成。",
    "home.primary": "查看新品",
    "home.secondary": "立即咨询",
    "home.categoryLabel": "Category",
    "home.categoryTitle": "主营分类",
    "home.category1": "外套",
    "home.category1Text": "夹克、外套等反应快的季节款",
    "home.category2": "衬衫/上衣",
    "home.category2Text": "适合单款陈列销售的衬衫与上衣",
    "home.category3": "T恤",
    "home.category3Text": "适合日常陈列的基础T恤与季节T恤",
    "home.newLabel": "New",
    "home.newTitle": "本周新品",
    "home.newMore": "查看全部",
    "home.contactLabel": "Contact",
    "home.contactTitle": "扫码即可咨询",
    "home.contactText": "韩国客户可用 KakaoTalk，海外买手可用微信直接联系。",
    "home.contactButton": "查看二维码",
    "new.eyebrow": "CATALOG",
    "new.title": "新品",
    "new.description": "点击商品图片可查看详细图。",
    "products.viewDetail": "查看详情",
    "products.soldOut": "售罄",
    "products.singlePriceLabel": "1件",
    "products.bulkPriceLabel": "2件以上",
    "store.eyebrow": "STORE GUIDE",
    "store.title": "店铺信息",
    "store.description": "面向零售店主与海外买手的女装批发店铺。",
    "store.nameTitle": "女装批发",
    "store.copy": "从新品提案到咨询连接，都可以快速完成。",
    "store.phoneLabel": "联系电话",
    "store.channelLabel": "咨询方式",
    "store.channelValue": "KakaoTalk / 微信二维码咨询",
    "store.addressLabel": "店铺地址",
    "store.addressValue": "首尔市中区乙支路45街62号，Nuzzon大楼1层228号 B&K",
    "contact.eyebrow": "CONTACT",
    "contact.title": "联系我们",
    "contact.description": "扫描下方二维码即可直接开始咨询。",
    "contact.kakaoLabel": "KakaoTalk",
    "contact.kakaoTitle": "KakaoTalk 咨询",
    "contact.kakaoText": "适合韩国本地零售客户咨询。",
    "contact.wechatLabel": "WeChat",
    "contact.wechatTitle": "微信咨询",
    "contact.wechatText": "适合中国、台湾等海外买手咨询。",
    "contact.directLink": "立即打开",
    "contact.downloadQr": "下载二维码",
    "admin.eyebrow": "ADMIN",
    "admin.title": "商品管理",
    "admin.description": "登录后可在手机上选择分类并上传商品。",
    "admin.idLabel": "管理员账号",
    "admin.passwordLabel": "密码",
    "admin.login": "登录",
    "admin.logout": "退出登录",
    "admin.welcome": "当前为管理员登录状态。",
    "admin.nameKo": "商品名(KR)",
    "admin.nameZh": "商品名(CN)",
    "admin.priceKo": "价格(KR)",
    "admin.priceZh": "价格(CN)",
    "admin.descKo": "说明(KR)",
    "admin.descZh": "说明(CN)",
    "admin.colors": "颜色",
    "admin.sizes": "尺码",
    "admin.category": "分类",
    "admin.isNew": "新品显示",
    "admin.isNewHelp": "勾选后会同时显示在新品页面。",
    "admin.images": "商品图片",
    "admin.addProduct": "新增商品",
    "admin.openCreate": "新增商品",
    "admin.filterAll": "全部商品",
    "admin.currentLabel": "Products",
    "admin.currentTitle": "已登记商品",
    "admin.toggleSoldOut": "标记售罄",
    "admin.toggleOnSale": "恢复销售",
    "admin.hide": "隐藏",
    "admin.show": "重新显示",
    "admin.edit": "修改",
    "admin.editProduct": "修改商品",
    "admin.cancelEdit": "取消修改",
    "admin.delete": "删除",
    "admin.hidden": "隐藏",
    "admin.productDeleted": "商品已删除。",
    "admin.productUpdated": "商品已更新。",
    "admin.loginError": "账号或密码错误，或管理员账号尚未创建。",
    "admin.loginSuccess": "已登录。",
    "admin.productSaved": "商品已保存。",
    "admin.imageRequired": "请至少选择一张商品图片。",
    "admin.logoutDone": "已退出登录。",
    "admin.syncError": "请检查 Supabase 连接或表设置。",
    "modal.prev": "上一张",
    "modal.next": "下一张",
    "modal.count": "图片 {current} / {total}"
  }
};

const savedLang = localStorage.getItem(STORAGE_KEYS.lang);
let currentLang = savedLang && translations[savedLang] ? savedLang : "ko";
let currentProduct = null;
let currentImageIndex = 0;
let adminTapCount = 0;
let adminTapTimer = null;
let productsCache = [...defaultProducts];
let heroProducts = [];
let heroRotationTimer = null;
let heroRotationIndex = 0;
let heroActiveSlot = 0;
const preloadedImages = new Set();
let editingProductId = null;
let currentAdminFilter = "all";

function getProductText(field, product) {
  return product[field]?.[currentLang] || product[field]?.ko || "";
}

function setMessage(id, text) {
  const node = document.getElementById(id);
  if (node) node.textContent = text;
}

function setProductFormMode() {
  const submitButton = document.getElementById("product-submit-button");
  const cancelButton = document.getElementById("cancel-edit-button");
  const imageInput = document.getElementById("product-images");
  const formTitle = document.getElementById("admin-form-title");
  if (!submitButton || !cancelButton || !imageInput) return;

  const title = editingProductId
    ? translations[currentLang]["admin.editProduct"]
    : translations[currentLang]["admin.addProduct"];
  submitButton.textContent = title;
  if (formTitle) formTitle.textContent = title;
  cancelButton.classList.toggle("hidden", !editingProductId);
  imageInput.required = !editingProductId;
}

function resetProductForm() {
  const productForm = document.getElementById("product-form");
  if (!productForm) return;
  editingProductId = null;
  productForm.reset();
  setProductFormMode();
}

function fillProductForm(product) {
  if (!product) return;
  editingProductId = product.id;
  document.getElementById("name-ko").value = product.name?.ko || "";
  document.getElementById("name-zh").value = product.name?.zh || "";
  document.getElementById("price-ko").value = product.price?.ko || "";
  document.getElementById("price-zh").value = product.price?.zh || "";
  document.getElementById("desc-ko").value = product.description?.ko || "";
  document.getElementById("desc-zh").value = product.description?.zh || "";
  document.getElementById("colors-input").value = (product.colors || []).join(", ");
  document.getElementById("sizes-input").value = (product.sizes || []).join(", ");
  document.getElementById("category").value = product.category || "outer";
  document.getElementById("is-new").checked = Boolean(product.isNew);
  document.getElementById("product-images").value = "";
  setProductFormMode();
  openAdminFormModal();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function openAdminFormModal() {
  const modal = document.getElementById("admin-form-modal");
  if (!modal) return;
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeAdminFormModal() {
  const modal = document.getElementById("admin-form-modal");
  if (!modal) return;
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function getAdminProducts() {
  if (currentAdminFilter === "all") return productsCache;
  return productsCache.filter((product) => product.category === currentAdminFilter);
}

function updateAdminFilterButtons() {
  document.querySelectorAll("[data-admin-filter]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.adminFilter === currentAdminFilter);
  });
}

function createSoldOutBadge() {
  const badge = document.createElement("span");
  badge.className = "product-status";
  badge.textContent = translations[currentLang]["products.soldOut"];
  return badge;
}

function normalizeProduct(row) {
  return {
    id: row.id,
    createdAt: row.created_at,
    label: row.label,
    name: row.name,
    description: row.description,
    shortDescription: row.short_description,
    category: row.category || "outer",
    isNew: Boolean(row.is_new),
    hidden: Boolean(row.hidden),
    colors: Array.isArray(row.colors) ? row.colors : [],
    sizes: Array.isArray(row.sizes) ? row.sizes : [],
    price: row.price,
    soldOut: row.sold_out,
    images: row.images
  };
}

function parseOptionInput(value) {
  return (value || "")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function renderOptionTags(items = []) {
  if (!Array.isArray(items) || !items.length) return "";
  return `
    <div class="option-tags">
      ${items.map((item) => `<span class="option-chip">${item}</span>`).join("")}
    </div>
  `;
}

function getPriceMarkup(product) {
  const koreanPrice = product?.price?.ko || "";
  const chineseBulkPrice = product?.price?.zh || koreanPrice;

  if (currentLang === "zh") {
    return `
      <div class="price-stack price-stack-zh">
        <span class="price-line"><b>${translations[currentLang]["products.singlePriceLabel"]}</b> ${koreanPrice}</span>
        <span class="price-line"><b>${translations[currentLang]["products.bulkPriceLabel"]}</b> ${chineseBulkPrice}</span>
      </div>
    `;
  }

  return `<span class="price-line">${koreanPrice}</span>`;
}

function getCurrentFilter() {
  const params = new URLSearchParams(window.location.search);
  return params.get("filter") || "new";
}

function getFilteredProducts() {
  const filter = getCurrentFilter();
  const visibleProducts = productsCache.filter((product) => !product.hidden);
  if (filter === "new") return visibleProducts.filter((product) => product.isNew);
  return visibleProducts.filter((product) => product.category === filter);
}

function getHeroProducts() {
  return productsCache.filter((product) => !product.hidden && product.isNew && Array.isArray(product.images) && product.images.length);
}

function shuffleProducts(products) {
  const copy = [...products];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }
  return copy;
}

async function fetchProducts() {
  if (!supabaseClient) return;
  const { data, error } = await supabaseClient
    .from("products")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error(error);
    return;
  }

  if (Array.isArray(data) && data.length) {
    productsCache = data.map(normalizeProduct);
  }
}

function applyTranslations(lang) {
  document.body.dataset.lang = lang;
  document.documentElement.lang = lang === "ko" ? "ko" : "zh-CN";
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const value = translations[lang][node.dataset.i18n];
    if (value) node.textContent = value;
  });
  document.querySelectorAll(".lang-button").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === lang);
  });
  if (currentProduct) renderModal();
  setProductFormMode();
  renderHeroCopy();
}

function renderHomePreview() {
  const container = document.getElementById("home-preview-list");
  if (!container) return;
  container.innerHTML = "";

  productsCache.filter((product) => !product.hidden && product.isNew).slice(0, 2).forEach((product) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `product-preview-card product-preview-button${product.soldOut ? " is-soldout" : ""}`;
    button.dataset.modalProduct = product.id;
    button.innerHTML = `
      <img src="${product.images[0]}" alt="${getProductText("name", product)}">
      <div class="product-preview-copy">
        ${product.soldOut ? createSoldOutBadge().outerHTML : ""}
        <strong>${getProductText("name", product)}</strong>
        <p>${getProductText("shortDescription", product) || getProductText("description", product)}</p>
        ${getPriceMarkup(product)}
      </div>
    `;
    container.appendChild(button);
  });

  bindProductModalTriggers();
}

function renderHeroCopy() {
  const description = document.querySelector(".hero-description");
  const heroLink = document.getElementById("hero-image-link");
  if (!description || !heroLink) return;

  const activeProduct = heroProducts[heroRotationIndex];
  if (!activeProduct) {
    description.textContent = translations[currentLang]["home.description"];
    heroLink.href = "./new.html?filter=new";
    return;
  }

  description.textContent = translations[currentLang]["home.description"];
  heroLink.href = `./new.html?filter=${activeProduct.category || "new"}`;
}

function renderHeroImage(imageUrl, isInitial = false) {
  const primaryImage = document.getElementById("hero-image-primary");
  const secondaryImage = document.getElementById("hero-image-secondary");
  if (!primaryImage || !secondaryImage || !imageUrl) return;

  const activeImage = heroActiveSlot === 0 ? primaryImage : secondaryImage;
  const nextImage = heroActiveSlot === 0 ? secondaryImage : primaryImage;

  if (isInitial || !activeImage.src) {
    primaryImage.src = imageUrl;
    setHeroImageFit(primaryImage);
    primaryImage.classList.add("is-active");
    secondaryImage.classList.remove("is-active", "is-next");
    heroActiveSlot = 0;
    return;
  }

  nextImage.src = imageUrl;
  setHeroImageFit(nextImage);
  nextImage.classList.add("is-next");

  window.requestAnimationFrame(() => {
    nextImage.classList.add("is-active");
    nextImage.classList.remove("is-next");
    activeImage.classList.remove("is-active");
    heroActiveSlot = heroActiveSlot === 0 ? 1 : 0;
  });
}

function stopHeroRotation() {
  if (heroRotationTimer) {
    window.clearInterval(heroRotationTimer);
    heroRotationTimer = null;
  }
}

function startHeroRotation() {
  stopHeroRotation();
  heroProducts = shuffleProducts(getHeroProducts());
  heroRotationIndex = 0;

  const heroSection = document.getElementById("hero-rotator");
  if (!heroSection) return;

  if (!heroProducts.length) {
    heroSection.classList.add("is-empty");
    renderHeroCopy();
    return;
  }

  heroSection.classList.remove("is-empty");
  renderHeroImage(heroProducts[0].images[0], true);
  renderHeroCopy();

  if (heroProducts.length === 1) return;

  heroRotationTimer = window.setInterval(() => {
    heroRotationIndex = (heroRotationIndex + 1) % heroProducts.length;
    renderHeroImage(heroProducts[heroRotationIndex].images[0]);
    renderHeroCopy();
  }, 5000);
}

function setHeroImageFit(imageNode) {
  const updateFitMode = () => {
    const container = imageNode.parentElement;
    if (!container) return;

    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;
    const naturalWidth = imageNode.naturalWidth;
    const naturalHeight = imageNode.naturalHeight;

    if (!containerWidth || !containerHeight || !naturalWidth || !naturalHeight) return;

    const shouldContain = naturalWidth < containerWidth || naturalHeight < containerHeight;
    imageNode.classList.toggle("fit-contain", shouldContain);
    imageNode.classList.toggle("fit-cover", !shouldContain);
  };

  if (imageNode.complete) {
    updateFitMode();
  } else {
    imageNode.onload = updateFitMode;
  }
}

function renderCatalogHeader() {
  const title = document.getElementById("catalog-title");
  const description = document.getElementById("catalog-description");
  if (!title || !description) return;
  const filter = getCurrentFilter();
  const meta = CATEGORY_META[filter] || CATEGORY_META.new;
  title.textContent = meta.title[currentLang];
  description.textContent = meta.description[currentLang];

  document.querySelectorAll("[data-filter-link]").forEach((link) => {
    link.classList.toggle("is-active", link.dataset.filterLink === filter);
  });
}

function bindProductModalTriggers() {
  document.querySelectorAll("[data-modal-product]").forEach((trigger) => {
    trigger.onclick = () => openModal(trigger.dataset.modalProduct);
    trigger.onkeydown = (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openModal(trigger.dataset.modalProduct);
      }
    };
  });
}

function preloadImage(url) {
  if (!url || preloadedImages.has(url)) return;
  const image = new Image();
  image.src = url;
  preloadedImages.add(url);
}

function preloadProductImages(product, activeIndex = 0) {
  if (!product?.images?.length) return;

  preloadImage(product.images[activeIndex]);

  for (let index = 1; index < product.images.length; index += 1) {
    const nextIndex = (activeIndex + index) % product.images.length;
    preloadImage(product.images[nextIndex]);
  }
}

function renderProductList() {
  const container = document.getElementById("product-list");
  if (!container) return;
  container.innerHTML = "";

  getFilteredProducts().forEach((product) => {
    const article = document.createElement("article");
    article.className = `product-tile product-tile-button${product.soldOut ? " is-soldout" : ""}`;
    article.dataset.modalProduct = product.id;
    article.tabIndex = 0;
    article.setAttribute("role", "button");
    article.innerHTML = `
      <div class="tile-image">
        <img src="${product.images[0]}" alt="${getProductText("name", product)}">
      </div>
      <div class="tile-body">
        <div class="tile-head">
          <div>
            <strong>${getProductText("name", product)}</strong>
            ${product.soldOut ? createSoldOutBadge().outerHTML : ""}
          </div>
          ${getPriceMarkup(product)}
        </div>
        <p>${getProductText("description", product)}</p>
        <span class="inline-link tile-link-copy">${translations[currentLang]["products.viewDetail"]}</span>
      </div>
    `;
    container.appendChild(article);
  });

  bindProductModalTriggers();
}

function openModal(productId) {
  const modal = document.getElementById("product-modal");
  if (!modal) return;
  currentProduct = productsCache.find((item) => item.id === productId) || null;
  currentImageIndex = 0;
  if (!currentProduct) return;
  preloadProductImages(currentProduct, currentImageIndex);
  renderModal();
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  const modal = document.getElementById("product-modal");
  if (!modal) return;
  if (document.activeElement instanceof HTMLElement) document.activeElement.blur();
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function renderModal() {
  const modalImage = document.getElementById("modal-image");
  const modalLabel = document.getElementById("modal-label");
  const modalTitle = document.getElementById("modal-title");
  const modalDescription = document.getElementById("modal-description");
  const modalPrice = document.getElementById("modal-price");
  const modalCount = document.getElementById("modal-count");
  if (!modalImage || !currentProduct) return;

  modalImage.src = currentProduct.images[currentImageIndex];
  modalImage.alt = getProductText("name", currentProduct);
  modalLabel.textContent = getProductText("label", currentProduct);
  modalTitle.textContent = getProductText("name", currentProduct);
  modalDescription.textContent = getProductText("description", currentProduct);
  modalPrice.innerHTML = getPriceMarkup(currentProduct);
  modalCount.textContent = translations[currentLang]["modal.count"]
    .replace("{current}", String(currentImageIndex + 1))
    .replace("{total}", String(currentProduct.images.length));

  let optionBlock = document.getElementById("modal-options");
  if (!optionBlock) {
    optionBlock = document.createElement("div");
    optionBlock.id = "modal-options";
    optionBlock.className = "modal-options";
    modalPrice.insertAdjacentElement("afterend", optionBlock);
  }

  optionBlock.innerHTML = `
    ${renderOptionTags(currentProduct.colors)}
    ${renderOptionTags(currentProduct.sizes)}
  `;
  optionBlock.classList.toggle("hidden", !(currentProduct.colors?.length || currentProduct.sizes?.length));
}

function moveImage(direction) {
  if (!currentProduct) return;
  currentImageIndex = (currentImageIndex + direction + currentProduct.images.length) % currentProduct.images.length;
  preloadProductImages(currentProduct, currentImageIndex);
  renderModal();
}

async function getAdminSession() {
  if (!supabaseClient) return null;
  const { data } = await supabaseClient.auth.getSession();
  return data.session;
}

async function renderAdminPanel() {
  const authSection = document.getElementById("admin-auth");
  const panelSection = document.getElementById("admin-panel");
  if (!authSection || !panelSection) return;

  const session = await getAdminSession();
  authSection.classList.toggle("hidden", Boolean(session));
  panelSection.classList.toggle("hidden", !session);
  if (session) renderAdminProducts();
}

function renderAdminProducts() {
  const container = document.getElementById("admin-product-list");
  if (!container) return;
  container.innerHTML = "";
  updateAdminFilterButtons();

  getAdminProducts().forEach((product) => {
    const card = document.createElement("article");
    card.className = "admin-product-card";
    card.innerHTML = `
      <div class="admin-product-top">
        <img class="admin-thumb" src="${product.images[0]}" alt="${product.name.ko}">
        <div class="admin-product-meta">
          <strong>${product.name.ko}</strong>
          <span>${product.price.ko}</span>
          <span>${product.soldOut ? translations[currentLang]["products.soldOut"] : CATEGORY_META[product.category]?.label.ko || ""}${product.isNew ? " · " + CATEGORY_META.new.label.ko : ""}${product.hidden ? " · " + translations[currentLang]["admin.hidden"] : ""}</span>
        </div>
      </div>
      <div class="admin-product-actions">
        <button class="button button-light" type="button" data-toggle-soldout="${product.id}">
          ${product.soldOut ? translations[currentLang]["admin.toggleOnSale"] : translations[currentLang]["admin.toggleSoldOut"]}
        </button>
        <button class="button button-light" type="button" data-toggle-hidden="${product.id}">
          ${product.hidden ? translations[currentLang]["admin.show"] : translations[currentLang]["admin.hide"]}
        </button>
        <button class="button button-light" type="button" data-edit-product="${product.id}">
          ${translations[currentLang]["admin.edit"]}
        </button>
        <button class="button button-light button-danger" type="button" data-delete-product="${product.id}">
          ${translations[currentLang]["admin.delete"]}
        </button>
      </div>
    `;
    container.appendChild(card);
  });

  container.querySelectorAll("[data-toggle-soldout]").forEach((button) => {
    button.onclick = async () => {
      const id = button.dataset.toggleSoldout;
      const product = productsCache.find((item) => item.id === id);
      if (!product || !supabaseClient) return;
      const { error } = await supabaseClient
        .from("products")
        .update({ sold_out: !product.soldOut })
        .eq("id", id);
      if (error) {
        setMessage("product-message", translations[currentLang]["admin.syncError"]);
        return;
      }
      await refreshProducts();
    };
  });

  container.querySelectorAll("[data-toggle-hidden]").forEach((button) => {
    button.onclick = async () => {
      const id = button.dataset.toggleHidden;
      const product = productsCache.find((item) => item.id === id);
      if (!product || !supabaseClient) return;
      const { error } = await supabaseClient
        .from("products")
        .update({ hidden: !product.hidden })
        .eq("id", id);
      if (error) {
        setMessage("product-message", translations[currentLang]["admin.syncError"]);
        return;
      }
      await refreshProducts();
    };
  });

  container.querySelectorAll("[data-delete-product]").forEach((button) => {
    button.onclick = async () => {
      const id = button.dataset.deleteProduct;
      const product = productsCache.find((item) => item.id === id);
      if (!product || !supabaseClient) return;

      try {
        await deleteProductImages(product.images);
        const { error } = await supabaseClient.from("products").delete().eq("id", id);
        if (error) throw error;
        setMessage("product-message", translations[currentLang]["admin.productDeleted"]);
        await refreshProducts();
      } catch (error) {
        console.error(error);
        setMessage("product-message", translations[currentLang]["admin.syncError"]);
      }
    };
  });

  container.querySelectorAll("[data-edit-product]").forEach((button) => {
    button.onclick = () => {
      const id = button.dataset.editProduct;
      const product = productsCache.find((item) => item.id === id);
      fillProductForm(product);
    };
  });
}

async function uploadImages(files) {
  if (!supabaseClient) return [];
  const uploads = [];
  for (const file of Array.from(files)) {
    const cleanName = file.name.replace(/[^a-zA-Z0-9.\-_]/g, "-");
    const path = `${Date.now()}-${cleanName}`;
    const { error } = await supabaseClient.storage.from("products").upload(path, file);
    if (error) throw error;
    const { data } = supabaseClient.storage.from("products").getPublicUrl(path);
    uploads.push(data.publicUrl);
  }
  return uploads;
}

function getStoragePathFromPublicUrl(url) {
  if (!url) return null;
  const marker = "/storage/v1/object/public/products/";
  const pathIndex = url.indexOf(marker);
  if (pathIndex === -1) return null;
  return decodeURIComponent(url.slice(pathIndex + marker.length));
}

async function deleteProductImages(images) {
  if (!supabaseClient || !Array.isArray(images) || !images.length) return;
  const paths = images.map(getStoragePathFromPublicUrl).filter(Boolean);
  if (!paths.length) return;
  const { error } = await supabaseClient.storage.from("products").remove(paths);
  if (error) throw error;
}

async function refreshProducts() {
  await fetchProducts();
  startHeroRotation();
  renderHomePreview();
  renderCatalogHeader();
  renderProductList();
  renderAdminProducts();
}

async function setupAdminPage() {
  const loginForm = document.getElementById("login-form");
  const productForm = document.getElementById("product-form");
  const logoutButton = document.getElementById("logout-button");
  const cancelEditButton = document.getElementById("cancel-edit-button");
  const openCreateButton = document.getElementById("open-create-product");
  await renderAdminPanel();
  setProductFormMode();

  if (loginForm) {
    loginForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      const id = document.getElementById("admin-id").value.trim();
      const password = document.getElementById("admin-password").value;
      if (id !== ADMIN_AUTH.username || !supabaseClient) {
        setMessage("login-message", translations[currentLang]["admin.loginError"]);
        return;
      }

      const { error } = await supabaseClient.auth.signInWithPassword({
        email: ADMIN_AUTH.email,
        password
      });
      if (error) {
        setMessage("login-message", translations[currentLang]["admin.loginError"]);
        return;
      }

      setMessage("login-message", translations[currentLang]["admin.loginSuccess"]);
      await renderAdminPanel();
    });
  }

  if (logoutButton) {
    logoutButton.addEventListener("click", async () => {
      if (!supabaseClient) return;
      await supabaseClient.auth.signOut();
      setMessage("product-message", translations[currentLang]["admin.logoutDone"]);
      closeAdminFormModal();
      await renderAdminPanel();
    });
  }

  if (cancelEditButton) {
    cancelEditButton.addEventListener("click", () => {
      resetProductForm();
      closeAdminFormModal();
      setMessage("product-message", "");
    });
  }

  if (openCreateButton) {
    openCreateButton.addEventListener("click", () => {
      resetProductForm();
      setMessage("product-message", "");
      openAdminFormModal();
    });
  }

  document.querySelectorAll("[data-admin-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      currentAdminFilter = button.dataset.adminFilter;
      renderAdminProducts();
    });
  });

  document.querySelectorAll("[data-close-admin-form]").forEach((button) => {
    button.addEventListener("click", () => {
      closeAdminFormModal();
      resetProductForm();
    });
  });

  if (productForm) {
    productForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      if (!supabaseClient) return;

      const session = await getAdminSession();
      if (!session) return;

      const imageInput = document.getElementById("product-images");
      if (!editingProductId && (!imageInput.files || !imageInput.files.length)) {
        setMessage("product-message", translations[currentLang]["admin.imageRequired"]);
        return;
      }

      try {
        const isEditing = Boolean(editingProductId);
        const category = document.getElementById("category").value;
        const existingProduct = editingProductId
          ? productsCache.find((item) => item.id === editingProductId)
          : null;
        let images = existingProduct?.images || [];

        if (imageInput.files && imageInput.files.length) {
          images = await uploadImages(imageInput.files);
        }

        const now = new Date().toISOString();
        const product = {
          label: CATEGORY_META[category].label,
          name: {
            ko: document.getElementById("name-ko").value.trim(),
            zh: document.getElementById("name-zh").value.trim() || document.getElementById("name-ko").value.trim()
          },
          description: {
            ko: document.getElementById("desc-ko").value.trim(),
            zh: document.getElementById("desc-zh").value.trim() || document.getElementById("desc-ko").value.trim()
          },
          short_description: {
            ko: document.getElementById("desc-ko").value.trim(),
            zh: document.getElementById("desc-zh").value.trim() || document.getElementById("desc-ko").value.trim()
          },
          colors: parseOptionInput(document.getElementById("colors-input").value),
          sizes: parseOptionInput(document.getElementById("sizes-input").value),
          category,
          is_new: document.getElementById("is-new").checked,
          hidden: existingProduct?.hidden || false,
          price: {
            ko: document.getElementById("price-ko").value.trim(),
            zh: document.getElementById("price-zh").value.trim() || document.getElementById("price-ko").value.trim()
          },
          sold_out: existingProduct?.soldOut || false,
          images
        };

        let error = null;
        if (editingProductId && existingProduct) {
          const updatePayload = {
            ...product,
            created_at: existingProduct.createdAt || now
          };
          const result = await supabaseClient.from("products").update(updatePayload).eq("id", editingProductId);
          error = result.error;

          if (!error && imageInput.files && imageInput.files.length) {
            const oldImages = (existingProduct.images || []).filter((url) => !images.includes(url));
            await deleteProductImages(oldImages);
          }
        } else {
          const insertPayload = {
            ...product,
            id: `product-${Date.now()}`,
            created_at: now
          };
          const result = await supabaseClient.from("products").insert(insertPayload);
          error = result.error;
        }

        if (error) throw error;

        const successMessage = isEditing
          ? translations[currentLang]["admin.productUpdated"]
          : translations[currentLang]["admin.productSaved"];
        resetProductForm();
        closeAdminFormModal();
        setMessage("product-message", successMessage);
        await refreshProducts();
      } catch (error) {
        console.error(error);
        setMessage("product-message", translations[currentLang]["admin.syncError"]);
      }
    });
  }
}

function setupHiddenAdminEntry() {
  const trigger = document.querySelector("[data-admin-trigger='true']");
  if (!trigger || document.body.dataset.page === "admin") return;
  trigger.addEventListener("click", (event) => {
    event.preventDefault();
    adminTapCount += 1;
    if (adminTapTimer) window.clearTimeout(adminTapTimer);
    adminTapTimer = window.setTimeout(() => {
      adminTapCount = 0;
    }, 2200);
    if (adminTapCount >= 5) {
      adminTapCount = 0;
      window.location.href = "./admin.html";
    }
  });
}

document.querySelectorAll(".lang-button").forEach((button) => {
  button.addEventListener("click", () => {
    currentLang = button.dataset.lang;
    localStorage.setItem(STORAGE_KEYS.lang, currentLang);
    applyTranslations(currentLang);
    renderHomePreview();
    renderCatalogHeader();
    renderProductList();
    renderAdminPanel();
  });
});

document.querySelectorAll("[data-close-modal]").forEach((trigger) => {
  trigger.addEventListener("click", closeModal);
});

const prevButton = document.getElementById("prev-image");
const nextButton = document.getElementById("next-image");
if (prevButton) prevButton.addEventListener("click", () => moveImage(-1));
if (nextButton) nextButton.addEventListener("click", () => moveImage(1));

document.addEventListener("keydown", (event) => {
  const modal = document.getElementById("product-modal");
  if (!modal || !modal.classList.contains("is-open")) return;
  if (event.key === "Escape") closeModal();
  if (event.key === "ArrowLeft") moveImage(-1);
  if (event.key === "ArrowRight") moveImage(1);
});

async function initializeApp() {
  applyTranslations(currentLang);
  startHeroRotation();
  renderHomePreview();
  renderCatalogHeader();
  renderProductList();
  bindProductModalTriggers();
  setupHiddenAdminEntry();
  await fetchProducts();
  startHeroRotation();
  renderHomePreview();
  renderCatalogHeader();
  renderProductList();
  await setupAdminPage();
}

initializeApp();
