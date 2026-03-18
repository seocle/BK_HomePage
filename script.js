const STORAGE_KEYS = {
  lang: "bk-lang",
  products: "bk-products-v2",
  auth: "bk-admin-auth"
};

const ADMIN_CREDENTIALS = {
  id: "cgh5454",
  password: "bk1228!!"
};

const translations = {
  ko: {
    "nav.home": "홈",
    "nav.new": "신상품",
    "nav.store": "매장안내",
    "nav.contact": "문의",
    "home.eyebrow": "B&K WOMEN'S WHOLESALE",
    "home.title": "잘 팔리는 여성의류를 빠르게 제안합니다",
    "home.description": "신상품 확인부터 카카오톡, 위챗 문의까지 모바일에서 바로 이어집니다.",
    "home.primary": "신상품 보기",
    "home.secondary": "문의하기",
    "home.categoryLabel": "Category",
    "home.categoryTitle": "주력 카테고리",
    "home.category1": "아우터",
    "home.category1Text": "점퍼, 자켓 등 판매 반응이 빠른 시즌 아우터",
    "home.category2": "블라우스",
    "home.category2Text": "단품 진열에 강한 여성 상의 라인",
    "home.category3": "여성 토탈의류",
    "home.category3Text": "소매 매장과 해외 바이어 상담에 맞춘 셀렉션",
    "home.newLabel": "New",
    "home.newTitle": "이번 신상품",
    "home.newMore": "전체 보기",
    "home.contactLabel": "Contact",
    "home.contactTitle": "상담은 QR로 간단하게",
    "home.contactText": "국내는 카카오톡, 해외 바이어는 위챗으로 바로 연결할 수 있습니다.",
    "home.contactButton": "QR 확인하기",
    "new.eyebrow": "NEW ARRIVALS",
    "new.title": "신상품",
    "new.description": "상품 이미지를 눌러 상세 컷을 확인할 수 있습니다.",
    "products.viewDetail": "상세보기",
    "products.soldOut": "품절",
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
    "admin.eyebrow": "ADMIN",
    "admin.title": "신상품 관리",
    "admin.description": "로그인 후 모바일에서 상품 등록과 품절 처리를 할 수 있습니다.",
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
    "admin.labelKo": "카테고리(KR)",
    "admin.labelZh": "카테고리(CN)",
    "admin.images": "상품 이미지",
    "admin.addProduct": "상품 등록",
    "admin.currentLabel": "Products",
    "admin.currentTitle": "등록 상품",
    "admin.toggleSoldOut": "품절 처리",
    "admin.toggleOnSale": "판매중으로 변경",
    "admin.loginError": "아이디 또는 비밀번호가 다릅니다.",
    "admin.loginSuccess": "로그인되었습니다.",
    "admin.productSaved": "상품이 등록되었습니다.",
    "admin.imageRequired": "상품 이미지를 한 장 이상 선택해 주세요.",
    "admin.logoutDone": "로그아웃되었습니다.",
    "modal.prev": "이전",
    "modal.next": "다음",
    "modal.count": "{current} / {total} 이미지"
  },
  zh: {
    "nav.home": "首页",
    "nav.new": "新品",
    "nav.store": "店铺",
    "nav.contact": "咨询",
    "home.eyebrow": "B&K WOMEN'S WHOLESALE",
    "home.title": "快速提案更容易销售的女装",
    "home.description": "从查看新品到通过 KakaoTalk、微信咨询，手机上即可直接完成。",
    "home.primary": "查看新品",
    "home.secondary": "立即咨询",
    "home.categoryLabel": "Category",
    "home.categoryTitle": "主营分类",
    "home.category1": "外套",
    "home.category1Text": "夹克、外套等反应快的季节款",
    "home.category2": "衬衫上衣",
    "home.category2Text": "适合单款陈列销售的女装上衣",
    "home.category3": "女装全品类",
    "home.category3Text": "适合零售店和海外买手咨询的选款",
    "home.newLabel": "New",
    "home.newTitle": "本周新品",
    "home.newMore": "查看全部",
    "home.contactLabel": "Contact",
    "home.contactTitle": "扫码即可咨询",
    "home.contactText": "韩国客户可用 KakaoTalk，海外买手可用微信直接联系。",
    "home.contactButton": "查看二维码",
    "new.eyebrow": "NEW ARRIVALS",
    "new.title": "新品",
    "new.description": "点击商品图片可查看详细图。",
    "products.viewDetail": "查看详情",
    "products.soldOut": "售罄",
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
    "admin.eyebrow": "ADMIN",
    "admin.title": "新品管理",
    "admin.description": "登录后可在手机上上传商品并处理售罄状态。",
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
    "admin.labelKo": "分类(KR)",
    "admin.labelZh": "分类(CN)",
    "admin.images": "商品图片",
    "admin.addProduct": "新增商品",
    "admin.currentLabel": "Products",
    "admin.currentTitle": "已登记商品",
    "admin.toggleSoldOut": "标记售罄",
    "admin.toggleOnSale": "恢复销售",
    "admin.loginError": "账号或密码不正确。",
    "admin.loginSuccess": "已登录。",
    "admin.productSaved": "商品已保存。",
    "admin.imageRequired": "请至少选择一张商品图片。",
    "admin.logoutDone": "已退出登录。",
    "modal.prev": "上一张",
    "modal.next": "下一张",
    "modal.count": "图片 {current} / {total}"
  }
};

const defaultProducts = [
  {
    id: "jumper",
    createdAt: "2026-03-19T01:46:00+09:00",
    label: { ko: "Outer", zh: "Outer" },
    name: { ko: "반달포켓점퍼", zh: "半月口袋夹克" },
    description: {
      ko: "구조감 있는 실루엣과 포켓 디테일이 돋보이는 데일리 점퍼",
      zh: "立体版型搭配口袋细节，适合日常陈列与销售"
    },
    shortDescription: {
      ko: "포켓 디테일이 살아있는 데일리 점퍼",
      zh: "带有口袋细节的日常夹克"
    },
    price: { ko: "52,000원", zh: "52,000韩元" },
    soldOut: false,
    images: [
      "./Image/의류/반달포켓점퍼_52000원/KakaoTalk_20260319_014656878.jpg",
      "./Image/의류/반달포켓점퍼_52000원/KakaoTalk_20260319_014656878_01.jpg",
      "./Image/의류/반달포켓점퍼_52000원/KakaoTalk_20260319_014656878_02.jpg",
      "./Image/의류/반달포켓점퍼_52000원/KakaoTalk_20260319_014656878_03.jpg",
      "./Image/의류/반달포켓점퍼_52000원/KakaoTalk_20260319_014656878_04.jpg",
      "./Image/의류/반달포켓점퍼_52000원/KakaoTalk_20260319_014656878_05.jpg",
      "./Image/의류/반달포켓점퍼_52000원/KakaoTalk_20260319_014656878_06.jpg",
      "./Image/의류/반달포켓점퍼_52000원/KakaoTalk_20260319_014656878_07.jpg",
      "./Image/의류/반달포켓점퍼_52000원/KakaoTalk_20260319_014656878_08.jpg",
      "./Image/의류/반달포켓점퍼_52000원/KakaoTalk_20260319_014656878_09.jpg"
    ]
  },
  {
    id: "blouse",
    createdAt: "2026-03-19T01:47:00+09:00",
    label: { ko: "Blouse", zh: "Blouse" },
    name: { ko: "파스텔줄지블라우스", zh: "马卡龙条纹衬衫" },
    description: {
      ko: "부드러운 컬러감과 스트라이프 패턴이 매력적인 봄 시즌 블라우스",
      zh: "柔和配色与条纹设计结合的春季女装上衣"
    },
    shortDescription: {
      ko: "가볍게 보여주기 좋은 봄 블라우스",
      zh: "适合春季陈列的轻盈上衣"
    },
    price: { ko: "37,000원", zh: "37,000韩元" },
    soldOut: false,
    images: [
      "./Image/의류/파스텔줄지블라우스_37000원/KakaoTalk_20260319_014656878_10.jpg",
      "./Image/의류/파스텔줄지블라우스_37000원/KakaoTalk_20260319_014656878_11.jpg",
      "./Image/의류/파스텔줄지블라우스_37000원/KakaoTalk_20260319_014656878_12.jpg",
      "./Image/의류/파스텔줄지블라우스_37000원/KakaoTalk_20260319_014656878_13.jpg",
      "./Image/의류/파스텔줄지블라우스_37000원/KakaoTalk_20260319_014656878_14.jpg",
      "./Image/의류/파스텔줄지블라우스_37000원/KakaoTalk_20260319_014656878_15.jpg",
      "./Image/의류/파스텔줄지블라우스_37000원/KakaoTalk_20260319_014656878_16.jpg",
      "./Image/의류/파스텔줄지블라우스_37000원/KakaoTalk_20260319_014656878_17.jpg"
    ]
  }
];

const savedLang = localStorage.getItem(STORAGE_KEYS.lang);
let currentLang = savedLang && translations[savedLang] ? savedLang : "ko";
let currentProduct = null;
let currentImageIndex = 0;
let adminTapCount = 0;
let adminTapTimer = null;

function getProducts() {
  const raw = localStorage.getItem(STORAGE_KEYS.products);
  if (!raw) return defaultProducts;
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) && parsed.length ? parsed : defaultProducts;
  } catch {
    return defaultProducts;
  }
}

function saveProducts(products) {
  localStorage.setItem(STORAGE_KEYS.products, JSON.stringify(products));
}

function isAdminLoggedIn() {
  return localStorage.getItem(STORAGE_KEYS.auth) === "true";
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
}

function getProductText(field, product) {
  const localized = product[field]?.[currentLang];
  return localized || product[field]?.ko || "";
}

function createSoldOutBadge() {
  const badge = document.createElement("span");
  badge.className = "product-status";
  badge.textContent = translations[currentLang]["products.soldOut"];
  return badge;
}

function renderHomePreview() {
  const container = document.getElementById("home-preview-list");
  if (!container) return;
  container.innerHTML = "";

  getProducts().slice(0, 2).forEach((product) => {
    const article = document.createElement("article");
    article.className = `product-preview-card${product.soldOut ? " is-soldout" : ""}`;
    article.innerHTML = `
      <img src="${product.images[0]}" alt="${getProductText("name", product)}">
      <div>
        <strong>${getProductText("name", product)}</strong>
        <p>${getProductText("shortDescription", product) || getProductText("description", product)}</p>
        <span>${getProductText("price", product)}</span>
      </div>
    `;
    if (product.soldOut) {
      article.querySelector("div").prepend(createSoldOutBadge());
    }
    container.appendChild(article);
  });
}

function renderProductList() {
  const container = document.getElementById("product-list");
  if (!container) return;
  container.innerHTML = "";

  getProducts().forEach((product) => {
    const article = document.createElement("article");
    article.className = `product-tile${product.soldOut ? " is-soldout" : ""}`;
    article.innerHTML = `
      <button class="tile-image" type="button" data-modal-product="${product.id}">
        <img src="${product.images[0]}" alt="${getProductText("name", product)}">
      </button>
      <div class="tile-body">
        <div class="tile-head">
          <div>
            <strong>${getProductText("name", product)}</strong>
            ${product.soldOut ? createSoldOutBadge().outerHTML : ""}
          </div>
          <span>${getProductText("price", product)}</span>
        </div>
        <p>${getProductText("description", product)}</p>
        <button class="inline-link text-button" type="button" data-modal-product="${product.id}">${translations[currentLang]["products.viewDetail"]}</button>
      </div>
    `;
    container.appendChild(article);
  });

  bindProductModalTriggers();
}

function bindProductModalTriggers() {
  document.querySelectorAll("[data-modal-product]").forEach((trigger) => {
    trigger.onclick = () => openModal(trigger.dataset.modalProduct);
  });
}

function openModal(productId) {
  const modal = document.getElementById("product-modal");
  if (!modal) return;
  currentProduct = getProducts().find((item) => item.id === productId) || null;
  currentImageIndex = 0;
  if (!currentProduct) return;
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
  modalPrice.textContent = getProductText("price", currentProduct);
  modalCount.textContent = translations[currentLang]["modal.count"]
    .replace("{current}", String(currentImageIndex + 1))
    .replace("{total}", String(currentProduct.images.length));
}

function moveImage(direction) {
  if (!currentProduct) return;
  currentImageIndex = (currentImageIndex + direction + currentProduct.images.length) % currentProduct.images.length;
  renderModal();
}

function readFilesAsDataUrls(files) {
  return Promise.all(
    Array.from(files).map((file) =>
      new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(String(reader.result));
        reader.onerror = reject;
        reader.readAsDataURL(file);
      })
    )
  );
}

function setMessage(id, text) {
  const node = document.getElementById(id);
  if (node) node.textContent = text;
}

function renderAdminPanel() {
  const authSection = document.getElementById("admin-auth");
  const panelSection = document.getElementById("admin-panel");
  if (!authSection || !panelSection) return;

  const loggedIn = isAdminLoggedIn();
  authSection.classList.toggle("hidden", loggedIn);
  panelSection.classList.toggle("hidden", !loggedIn);
  if (loggedIn) renderAdminProducts();
}

function renderAdminProducts() {
  const container = document.getElementById("admin-product-list");
  if (!container) return;
  container.innerHTML = "";

  getProducts().forEach((product) => {
    const card = document.createElement("article");
    card.className = "admin-product-card";
    card.innerHTML = `
      <div class="admin-product-top">
        <img class="admin-thumb" src="${product.images[0]}" alt="${product.name.ko}">
        <div class="admin-product-meta">
          <strong>${product.name.ko}</strong>
          <span>${product.price.ko}</span>
          <span>${product.soldOut ? translations[currentLang]["products.soldOut"] : product.label.ko || ""}</span>
        </div>
      </div>
      <div class="admin-product-actions">
        <button class="button button-light" type="button" data-toggle-soldout="${product.id}">
          ${product.soldOut ? translations[currentLang]["admin.toggleOnSale"] : translations[currentLang]["admin.toggleSoldOut"]}
        </button>
      </div>
    `;
    container.appendChild(card);
  });

  container.querySelectorAll("[data-toggle-soldout]").forEach((button) => {
    button.onclick = () => {
      const id = button.dataset.toggleSoldout;
      const updated = getProducts().map((product) =>
        product.id === id ? { ...product, soldOut: !product.soldOut } : product
      );
      saveProducts(updated);
      renderAdminProducts();
      renderProductList();
      renderHomePreview();
    };
  });
}

function setupAdminPage() {
  const loginForm = document.getElementById("login-form");
  const productForm = document.getElementById("product-form");
  const logoutButton = document.getElementById("logout-button");
  renderAdminPanel();

  if (loginForm) {
    loginForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const id = document.getElementById("admin-id").value.trim();
      const password = document.getElementById("admin-password").value;
      if (id === ADMIN_CREDENTIALS.id && password === ADMIN_CREDENTIALS.password) {
        localStorage.setItem(STORAGE_KEYS.auth, "true");
        setMessage("login-message", translations[currentLang]["admin.loginSuccess"]);
        renderAdminPanel();
      } else {
        setMessage("login-message", translations[currentLang]["admin.loginError"]);
      }
    });
  }

  if (logoutButton) {
    logoutButton.addEventListener("click", () => {
      localStorage.removeItem(STORAGE_KEYS.auth);
      setMessage("product-message", translations[currentLang]["admin.logoutDone"]);
      renderAdminPanel();
    });
  }

  if (productForm) {
    productForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      if (!isAdminLoggedIn()) return;

      const imageInput = document.getElementById("product-images");
      if (!imageInput.files || !imageInput.files.length) {
        setMessage("product-message", translations[currentLang]["admin.imageRequired"]);
        return;
      }

      const images = await readFilesAsDataUrls(imageInput.files);
      const now = new Date().toISOString();
      const product = {
        id: `product-${Date.now()}`,
        createdAt: now,
        label: {
          ko: document.getElementById("label-ko").value.trim() || "New",
          zh: document.getElementById("label-zh").value.trim() || document.getElementById("label-ko").value.trim() || "New"
        },
        name: {
          ko: document.getElementById("name-ko").value.trim(),
          zh: document.getElementById("name-zh").value.trim() || document.getElementById("name-ko").value.trim()
        },
        description: {
          ko: document.getElementById("desc-ko").value.trim(),
          zh: document.getElementById("desc-zh").value.trim() || document.getElementById("desc-ko").value.trim()
        },
        shortDescription: {
          ko: document.getElementById("desc-ko").value.trim(),
          zh: document.getElementById("desc-zh").value.trim() || document.getElementById("desc-ko").value.trim()
        },
        price: {
          ko: document.getElementById("price-ko").value.trim(),
          zh: document.getElementById("price-zh").value.trim() || document.getElementById("price-ko").value.trim()
        },
        soldOut: false,
        images
      };

      const updated = [product, ...getProducts()];
      saveProducts(updated);
      productForm.reset();
      setMessage("product-message", translations[currentLang]["admin.productSaved"]);
      renderAdminProducts();
      renderProductList();
      renderHomePreview();
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
      event.preventDefault();
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

applyTranslations(currentLang);
renderHomePreview();
renderProductList();
bindProductModalTriggers();
setupAdminPage();
setupHiddenAdminEntry();
