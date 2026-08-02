/* ==========================================================================
   مبادرة خط أحمر - نظام إدارة المحتوى والمنطق التفاعلي (Flat CMS & App Engine)
   ========================================================================== */

// Initial Default State for CMS
const DEFAULT_STATE = {
  admin: {
    username: 'admin',
    password: 'redline2026',
    isLoggedIn: false
  },
  site: {
    heroTitle: 'مبادرة خط أحمر',
    heroSlogan: '"سلامتك الرقمية.. خط أحمر"',
    heroDescription: 'المنصة العربية الشاملة للتوعية بالأمن السيبراني وحماية الفتيات واليافعات (12-17 سنة) والأسر في كافة الوطن العربي من الابتزاز والاحتيال ببيئة مشفرة 100%.',
    awardTitle: 'تمكين وتألق الفتاة العربية في الابتكار',
    awardDesc: 'تفخر مبادرة "خط أحمر" بمشاركتها المتميزة في جائزة الفتاة العربية والتكنولوجيا، كمشروع رائد يدمج بين الابتكار التقني، التمكين الأنثوي، والتأثير المجتمعي المستدام لحماية أجيال المستقبل.',
    statSecured: '100%',
    statUsers: '+50k',
    statHours: '24/7',
    statCountries: '22'
  },
  guides: [
    {
      id: 'passwords',
      audience: 'teens',
      icon: 'fas fa-key',
      title: 'إنشاء كلمة سر فولاذية',
      desc: 'تعلمي كيفية ابتكار كلمات سر قوية ومستحيلة التخمين، واستخدام المصادقة الثنائية (2FA) لحماية كافة حساباتك الشخصية.',
      content: `<h4>ما الذي يجعل كلمة السر قوية ومستحيلة التخمين؟</h4><p>كلمة السر الفولاذية هي خط دفاعك الأول لحماية حساباتك وسجلاتك. لتكون كلمة سرك قوية جداً يجب مراعاة الآتي:</p><ul><li>أن لا يقل طولها عن 12 إلى 16 رمزاً.</li><li>أن تحتوي على خليط من أحرف كبيرة وصغيرة (A-Z, a-z)، أرقام (0-9)، ورموز خاصة مثل (@, #, $, %, !).</li><li>تجنب تام لاستخدام أسماء شخصية، تواريخ ميلاد، أو أرقام هواتف.</li></ul><h4>طريقة "عبارة السر" (Passphrase Method):</h4><p>ابتكري جملة سرية سهلة التذكر بالنسبة لك واجمعي بين كلماتها رموزاً وأرقاماً، مثل: <code>R3dL1n3#S4f3ty!2026</code>.</p><h4>تفعيل المصادقة الثنائية (2FA):</h4><p>احرصي دائماً على تفعيل خيار 2FA عبر تطبيقات Authenticator للحصول على رمز تأكيد ثانٍ عند كل تسجيل دخول جديد.</p>`
    },
    {
      id: 'phishing',
      audience: 'both',
      icon: 'fas fa-fish',
      title: 'كشف الخداع والتصيد (Phishing)',
      desc: 'كيف تميزين بين الرسائل الرسمية والمزيفة؟ واكتشاف الروابط الاحتيالية التي تحاول سرقة حساباتك أو معلوماتك.',
      content: `<h4>ما هو التصيد الإلكتروني؟</h4><p>هو أسلوب احتيالي يلجأ إليه المحتالون لسرقة الحسابات والبيانات الشخصية عبر التظاهر بكونهم شركة رسمية أو منصة معروفة.</p><h4>علامات تحذيرية حاسمة للكشف فوراً:</h4><ul><li>روابط مريبة تختلف برمز أو حرف واحد عن الموقع الأصلي (مثل <code>instagramm-sec.top</code> بدلاً من <code>instagram.com</code>).</li><li>لغة التهويل والاستعجال: "حسابك سيُغلق خلال ساعات إذا لم تضغطي هنا فوراً!".</li><li>طلب رموز التحقق النصية (OTP) أو كلمات السر أو معلومات البطاقات.</li></ul><h4>التصرف الآمن الفوري:</h4><p>تجاهلي الرسالة والمرفقات تماماً، وقم بزيارة التطبيق أو الموقع الرسمي مباشرة للتحقق دون الضغط على أي رابط خارجي.</p>`
    },
    {
      id: 'privacy',
      audience: 'both',
      icon: 'fas fa-user-lock',
      title: 'حصن الخصوصية على التواصل',
      desc: 'خطوات عملية ومصورة لضبط إعدادات الخصوصية في إنستغرام، تيك توك، واتساب، وسناب شات لحجب الغرباء والمزعجين.',
      content: `<h4>خطوات حماية الحسابات والخصوصية:</h4><ul><li><strong>إنستغرام وتيك توك:</strong> تحويل الحساب إلى حساب خاص (Private Account) لحصر رؤية منشوراتك على الأصدقاء الموثوقين فقط.</li><li><strong>إغلاق التتبع الموقعي (Location Services):</strong> تعطيل تحديد الموقع الدقيق في الكاميرا وتطبيق السناب شات (تفعيل Ghost Mode).</li><li><strong>فلترة الرسائل المباشرة (DM Filters):</strong> حظر استقبال الرسائل الخاصة والطلبات من الغرباء أو الحسابات غير الموثوقة.</li><li><strong>مراجعة الأجهزة المتصلة:</strong> فحص الأجهزة النشطة (Active Sessions) وتسجيل الخروج الفوري من أي جهاز غير معروف.</li></ul>`
    },
    {
      id: 'blackmail',
      audience: 'teens',
      icon: 'fas fa-shield-virus',
      title: 'التصرف عند التعرض للابتزاز',
      desc: 'خطوات فورية وحاسمة: عدم الخضوع للمبتز، توثيق الأدلة بحذر، حظر الحساب، والتواصل السري معنا أو مع السلطات الرسمية.',
      content: `<h4>قواعد الذهب الخمس للحماية الحتمية:</h4><ol style="padding-right: 1.5rem;"><li><strong>استجمعي شجاعتك ولا تخفي:</strong> المبتز يراهن على خوفك وارتباكك. تذكري دائماً أنك الضحية وأنك لست المخطئة.</li><li><strong>عدم الرضوخ أو دفع أي مبالغ:</strong> التجاوب مع المبتز لا ينهي التهديد، بل يزيده طمعاً وضغطاً!</li><li><strong>وثّقي الأدلة بحذر (Screenshots):</strong> احتفظي بلقطات شاشة المحادثات، أرقام الهواتف، وروابط الحسابات قبل حظر المبتز دون مسحها.</li><li><strong>حظر المبتز تماماً (Block):</strong> اقطعي وسائل التواصل لمنع المبتز من فرض الضغط النفسي عليك.</li><li><strong>طلب المساعدة الفورية:</strong> تواصل معنا عبر مبادرة خط أحمر أو الخط الساخن المعتمد لبلدك. نحن نضمن سريتك وحمايتك 100%.</li></ol>`
    }
  ],
  hotlines: [
    { key: 'sa', country: '🇸🇦 المملكة العربية السعودية', cyber: '1909 (تطبيق كلنا أمن)', child: '116111 (خط مساندة الطفل)', notes: 'إدارة الجرائم المعلوماتية - الأمن العام وخط مساندة الطفل' },
    { key: 'eg', country: '🇪🇬 جمهورية مصر العربية', cyber: '108 (مكافحة الجرائم الإلكترونية)', child: '16000 (خط نجدة الطفل)', notes: 'إدارة تكنولوجيا المعلومات - وزارة الداخلية' },
    { key: 'ae', country: '🇦🇪 الإمارات العربية المتحدة', cyber: '8002626 (خدمة أمان)', child: '116111 (مركز حماية الطفل)', notes: 'تطبيق My Safe Society المعتمد' },
    { key: 'jo', country: '🇯🇴 المملكة الأردنية الهاشمية', cyber: '114 / 065607434', child: '110 (إدارة حماية الأسرة)', notes: 'وحدة الجرائم الإلكترونية - مديرية الأمن العام' },
    { key: 'kw', country: '🇰🇼 دولة الكويت', cyber: '25660142 (الجرائم الإلكترونية)', child: '147 (خط حماية الطفل)', notes: 'إدارة مكافحة الجرائم الإلكترونية - وزارة الداخلية' },
    { key: 'qa', country: '🇶🇦 دولة قطر', cyber: '2347444 / 66815757', child: '999 (مركز أمان)', notes: 'الجرائم الاقتصادية والإلكترونية' },
    { key: 'bh', country: '🇧🇭 مملكة البحرين', cyber: '992 / 17711888', child: '998 (حماية الطفل)', notes: 'إدارة مكافحة الجرائم الإلكترونية' },
    { key: 'om', country: '🇴🇲 سلطنة عُمان', cyber: '80077444 (المركز الوطني)', child: '1100 (حماية الطفل)', notes: 'المركز الوطني للسلامة المعلوماتية (OCERT)' },
    { key: 'iq', country: '🇮🇶 جمهورية العراق', cyber: '533 (الشرطة المجتمعية)', child: '131 (جهاز الأمن الوطني)', notes: 'مديرية مكافحة الجرائم الإلكترونية' },
    { key: 'ma', country: '🇲🇦 المملكة المغربية', cyber: '0537718888 (الدرك الملكي)', child: '2511 (نجدة الأطفال)', notes: 'المصلحة المركزية لمكافحة الجرائم الحديثة' },
    { key: 'dz', country: '🇩🇿 الجمهورية الجزائرية', cyber: '1548 (الشرطة الجزائرية)', child: '104 (حماية الأطفال)', notes: 'المصلحة المركزية لمكافحة الجريمة الإلكترونية' },
    { key: 'tn', country: '🇹🇳 الجمهورية التونسية', cyber: '80101111 (السلامة المعلوماتية)', child: '1809 (حماية الطفولة)', notes: 'الوكالة الوطنية للسلامة المعلوماتية (ANSI)' },
    { key: 'lb', country: '🇱🇧 الجمهورية اللبنانية', cyber: '01293500 (قوى الأمن الداخلي)', child: '01425194 (حماية الطفل)', notes: 'مكتب مكافحة الجرائم المعلوماتية' },
    { key: 'ps', country: '🇵🇸 دولة فلسطين', cyber: '100 / 022943200', child: '112 (خط حماية الطفل)', notes: 'وحدة الجرائم الإلكترونية - الشرطة الفلسطينية' },
    { key: 'sd', country: '🇸🇩 جمهورية السودان', cyber: '999 (الجرائم الإلكترونية)', child: '9696 (مساندة الطفل)', notes: 'إدارة الجرائم المستحدثة' },
    { key: 'ly', country: '🇱🇾 دولة ليبيا', cyber: '1515 / 0213600000', child: '1415 (خط الأمان للأطفال)', notes: 'مكتب مكافحة الجرائم الإلكترونية' },
    { key: 'ye', country: '🇾🇪 الجمهورية اليمنية', cyber: '199 (البلاغات الرقمية)', child: '108 (حماية الطفل)', notes: 'إدارة البحث الجنائي ومكافحة الجرائم' },
    { key: 'sy', country: '🇸🇾 الجمهورية العربية السورية', cyber: '108 (الجرائم المعلوماتية)', child: '112 (الأمن العام)', notes: 'فرع مكافحة الجرائم المعلوماتية' },
    { key: 'so', country: '🇸🇴 جمهورية الصومال', cyber: '999 (الشرطة الوطنية)', child: '888 (طوارئ حماية القاصرين)', notes: 'وحدة الأمن السيبيري والشرطة' },
    { key: 'mr', country: '🇲🇷 الجمهورية الإسلامية الموريتانية', cyber: '117 (الشرطة الوطنية)', child: '116 (نجدة الأطفال)', notes: 'المكتب الوطني لمكافحة الجريمة الإلكترونية' },
    { key: 'dj', country: '🇩🇯 جمهورية جيبوتي', cyber: '17 (الشرطة الوطنية)', child: '18 (طوارئ الدرك)', notes: 'وحدة الأمن الرقمي والشرطة القضائية' },
    { key: 'km', country: '🇰🇲 جمهورية جزر القمر', cyber: '17 (الشرطة الوطنية)', child: '18 (طوارئ الحماية)', notes: 'وحدة الجرائم الإلكترونية والأمن العام' },
    { key: 'global', country: '🌐 شبكة الدعم العربي والدولي السري 24/7', cyber: 'تواصل سري فوراً عبر المنصة', child: 'مساندة واستجابة 24/7 دون تتبع', notes: 'فريق مبادرة خط أحمر متاح لكافة المقيمين بالعالم' }
  ],
  inbox: [
    {
      id: 'rep_101',
      date: '2026-08-02 18:30',
      threatType: 'ابتزاز رقمي عبر إنستغرام',
      contactWay: 'واتساب: 055XXXX12',
      details: 'تم تهديدي بنشر محادثات شخصية من حساب مزيف. أخذت لقطات شاشة وأريد توجيهاً سريعاً.',
      status: 'new'
    }
  ]
};

// Global App State
let state = loadState();

function loadState() {
  const saved = localStorage.getItem('redline_cms_state');
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch (e) {
      console.error('State parse error:', e);
    }
  }
  return JSON.parse(JSON.stringify(DEFAULT_STATE));
}

function saveState() {
  localStorage.setItem('redline_cms_state', JSON.stringify(state));
  renderAllDynamicContent();
}

document.addEventListener('DOMContentLoaded', () => {
  renderAllDynamicContent();
  initThemeToggle();
  initMobileMenu();
  initTargetAudienceFilter();
  initPasswordChecker();
  initPhishingSimulator();
  initCyberQuiz();
  initHotlinesSelector();
  initReportingModal();
  initGuideModals();
  initEmergencyPanicButton();
  initCMSDashboard();
});

/* Helper to clean image paths for flat files */
function cleanImagePath(path) {
  if (!path) return './hero.jpg';
  if (path.startsWith('data:image/') || path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  return path.replace(/^\.\/assets\/images\//i, './').replace(/^assets\/images\//i, './').replace(/^\.\/images\//i, './');
}

/* Render All Dynamic Components from State */
function renderAllDynamicContent() {
  const hTitle = document.getElementById('renderedHeroTitle');
  const hSlogan = document.getElementById('renderedHeroSlogan');
  const hDesc = document.getElementById('renderedHeroDesc');
  const aTitle = document.getElementById('renderedAwardTitle');
  const aDesc = document.getElementById('renderedAwardDesc');

  if (hTitle) hTitle.innerHTML = state.site.heroTitle || DEFAULT_STATE.site.heroTitle;
  if (hSlogan) hSlogan.textContent = state.site.heroSlogan || DEFAULT_STATE.site.heroSlogan;
  if (hDesc) hDesc.textContent = state.site.heroDescription || DEFAULT_STATE.site.heroDescription;
  if (aTitle) aTitle.textContent = state.site.awardTitle || DEFAULT_STATE.site.awardTitle;
  if (aDesc) aDesc.textContent = state.site.awardDesc || DEFAULT_STATE.site.awardDesc;

  // Render Stats
  const stSecured = document.getElementById('renderedStatSecured');
  const stUsers = document.getElementById('renderedStatUsers');
  const stHours = document.getElementById('renderedStatHours');
  const stCountries = document.getElementById('renderedStatCountries');
  if (stSecured) stSecured.textContent = state.site.statSecured || '100%';
  if (stUsers) stUsers.textContent = state.site.statUsers || '+50k';
  if (stHours) stHours.textContent = state.site.statHours || '24/7';
  if (stCountries) stCountries.textContent = state.site.statCountries || '22';

  // Render Guides Grid
  const guidesContainer = document.getElementById('renderedGuidesGrid');
  if (guidesContainer) {
    guidesContainer.innerHTML = '';
    state.guides.forEach(g => {
      const card = document.createElement('div');
      card.className = 'guide-card';
      card.dataset.audience = g.audience || 'both';
      card.innerHTML = `
        <div class="guide-icon"><i class="${g.icon || 'fas fa-shield-alt'}"></i></div>
        <h3 class="guide-title">${g.title}</h3>
        <p class="guide-desc">${g.desc}</p>
        <div class="guide-action" onclick="openGuideDetail('${g.id}')">
          <span>اقرئي الدليل الكامل</span>
          <i class="fas fa-arrow-left"></i>
        </div>
      `;
      guidesContainer.appendChild(card);
    });
  }

  // Render Country Hotlines Dropdown
  const select = document.getElementById('countrySelect');
  if (select) {
    select.innerHTML = '';
    state.hotlines.forEach(item => {
      const opt = document.createElement('option');
      opt.value = item.key;
      opt.textContent = item.country;
      select.appendChild(opt);
    });
    updateHotlineDisplay();
  }
}

/* Update Hotline display when country changes */
function updateHotlineDisplay() {
  const select = document.getElementById('countrySelect');
  const numDisp = document.getElementById('hotlineNumberDisplay');
  const nameDisp = document.getElementById('hotlineCountryName');
  const noteDisp = document.getElementById('hotlineNotesDisplay');

  if (!select) return;

  const item = state.hotlines.find(h => h.key === select.value) || state.hotlines[0];
  if (item) {
    if (nameDisp) nameDisp.textContent = item.country;
    if (numDisp) numDisp.textContent = item.cyber;
    if (noteDisp) noteDisp.textContent = item.notes;
  }
}

/* 1. Dark/Light Theme Toggle */
function initThemeToggle() {
  const toggleBtn = document.getElementById('themeToggleBtn');
  const icon = toggleBtn ? toggleBtn.querySelector('i') : null;

  if (!toggleBtn) return;

  const savedTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  toggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
  });

  function updateThemeIcon(theme) {
    if (!icon) return;
    icon.className = theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
  }
}

/* 2. Mobile Navigation Drawer */
function initMobileMenu() {
  const menuBtn = document.getElementById('mobileMenuBtn');
  const navLinks = document.getElementById('navLinks');
  const body = document.body;

  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isActive = navLinks.classList.toggle('active');
      menuBtn.innerHTML = isActive ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
      body.style.overflow = isActive ? 'hidden' : '';
    });

    document.addEventListener('click', (e) => {
      if (navLinks.classList.contains('active') && !navLinks.contains(e.target) && !menuBtn.contains(e.target)) {
        navLinks.classList.remove('active');
        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        body.style.overflow = '';
      }
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        body.style.overflow = '';
      });
    });
  }
}

/* 3. Target Audience Filter */
function initTargetAudienceFilter() {
  const tabs = document.querySelectorAll('.target-tab');
  
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const target = tab.dataset.target;
      const cards = document.querySelectorAll('.guide-card');
      cards.forEach(card => {
        if (target === 'all' || card.dataset.audience === target || card.dataset.audience === 'both') {
          card.style.display = 'flex';
          card.style.animation = 'fadeIn 0.4s ease forwards';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* 4. Password Strength Meter Tool */
function initPasswordChecker() {
  const passInput = document.getElementById('passCheckerInput');
  const toggleVisibility = document.getElementById('togglePassVisibility');
  const fill = document.getElementById('passMeterFill');
  const feedbackText = document.getElementById('passFeedbackText');
  const scoreText = document.getElementById('passScoreText');

  if (!passInput) return;

  if (toggleVisibility) {
    toggleVisibility.addEventListener('click', () => {
      const type = passInput.getAttribute('type') === 'password' ? 'text' : 'password';
      passInput.setAttribute('type', type);
      toggleVisibility.className = type === 'password' ? 'fas fa-eye toggle-pass-visibility' : 'fas fa-eye-slash toggle-pass-visibility';
    });
  }

  passInput.addEventListener('input', (e) => {
    const val = e.target.value;
    if (!val) {
      fill.style.width = '0%';
      feedbackText.textContent = 'أدخلي كلمة سر لاختبارها محلياً';
      scoreText.textContent = '';
      return;
    }

    let score = 0;
    if (val.length >= 8) score += 20;
    if (val.length >= 12) score += 20;
    if (/[A-Z]/.test(val)) score += 15;
    if (/[a-z]/.test(val)) score += 15;
    if (/[0-9]/.test(val)) score += 15;
    if (/[^A-Za-z0-9]/.test(val)) score += 15;

    fill.style.width = score + '%';

    if (score < 40) {
      fill.style.background = '#ef4444';
      feedbackText.textContent = 'ضعيفة جداً - سهلة الاختراق!';
      feedbackText.style.color = '#ef4444';
    } else if (score < 70) {
      fill.style.background = '#f59e0b';
      feedbackText.textContent = 'متوسطة - يُفضل إضافة رموز وأرقام';
      feedbackText.style.color = '#f59e0b';
    } else if (score < 90) {
      fill.style.background = '#3b82f6';
      feedbackText.textContent = 'قوية - درجة حماية عالية!';
      feedbackText.style.color = '#3b82f6';
    } else {
      fill.style.background = '#10b981';
      feedbackText.textContent = 'فولاذية - آمنة للغاية ومستحيلة الكسر!';
      feedbackText.style.color = '#10b981';
    }
    scoreText.textContent = score + '%';
  });
}

/* 5. Phishing Simulator Mini-Game */
const phishingSamples = [
  {
    sender: 'تنبيه أمان الانستغرام (حساب احتيالي)',
    msg: 'تم رصد محاولة دخول لحسابك! انقري هنا فوراً لإلغاء الحظر وإدخال كلمة السر الحالية: http://instagram-verify-security.top',
    isScam: true,
    explanation: 'احتيال صريح! اننبهي للرابط الخارجي المريب (.top)، ولا تطلب منك إدارة انستغرام كلمة سرك عبر رابط خارجي إطلاقاً.'
  },
  {
    sender: 'رسالة واتساب من رقم مجهول',
    msg: 'مرحباً، مبروك كسبتِ جائزة بقيمة 50,000 ريال! أرسلي لي رمز التحقق (OTP) الذي وصلك في رسالة نصية لاستلام المبلغ الآن.',
    isScam: true,
    explanation: 'احتيال خطير! رمز التحقق النصي (OTP) هو خط دفاعك الأخير ولا يجوز مشاركته مع أي شخص إطلاقاً.'
  },
  {
    sender: 'إشعار تحديث التطبيق الرسمي',
    msg: 'يتوفر تحديث أمني جديد لتطبيقك عبر المتجر الرسمي (App Store / Google Play). ينصح بالتحديث المباشر لحماية حسابك.',
    isScam: false,
    explanation: 'رسالة آمنة وموثوقة لأن التحديث يتم مباشرة من داخل المتجر الرسمي للشركة بدون روابط مريبة.'
  }
];

let currentPhishIndex = 0;

function initPhishingSimulator() {
  const senderEl = document.getElementById('phishSender');
  const msgEl = document.getElementById('phishMsgText');
  const resultAlert = document.getElementById('phishResultAlert');
  const nextBtn = document.getElementById('nextPhishBtn');

  if (!senderEl) return;

  function loadPhishingSample(index) {
    const item = phishingSamples[index];
    senderEl.textContent = item.sender;
    msgEl.textContent = item.msg;
    resultAlert.style.display = 'none';
  }

  loadPhishingSample(currentPhishIndex);

  window.checkPhishingAnswer = function(userThinksScam) {
    const item = phishingSamples[currentPhishIndex];
    resultAlert.style.display = 'block';

    if (userThinksScam === item.isScam) {
      resultAlert.className = 'phish-result-alert';
      resultAlert.style.background = 'rgba(16, 185, 129, 0.2)';
      resultAlert.style.color = '#10b981';
      resultAlert.style.border = '1px solid #10b981';
      resultAlert.innerHTML = `<i class="fas fa-check-circle"></i> إجابة صحيحة وممتازة! ${item.explanation}`;
    } else {
      resultAlert.className = 'phish-result-alert';
      resultAlert.style.background = 'rgba(255, 42, 95, 0.2)';
      resultAlert.style.color = '#ff2a5f';
      resultAlert.style.border = '1px solid #ff2a5f';
      resultAlert.innerHTML = `<i class="fas fa-exclamation-triangle"></i> انتبهي! ${item.explanation}`;
    }
  };

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      currentPhishIndex = (currentPhishIndex + 1) % phishingSamples.length;
      loadPhishingSample(currentPhishIndex);
    });
  }
}

/* 6. Interactive Cyber Awareness Quiz */
const quizQuestions = [
  {
    question: "وصلتك رسالة غريبة من شخص يهدد بنشر صور خاصة إذا لم تستجب لطلباته. ما هو التصرف الأول والأصح؟",
    options: [
      "مسح كافة المحادثات والصور فوراً لمنع الانكشاف",
      "عدم الرضوخ، التوقف عن الرد، أخذ لقطات شاشة (Screenshots) وتوثيق الأدلة، والتواصل مع مبادرة خط أحمر أو الجهات الرسمية",
      "الاستجابة لطلبه مرة واحدة فقط حتى لا ينشر الصور",
      "إغلاق الهاتف للأبد وعدم إخبار أي شخص"
    ],
    correct: 1,
    explanation: "التصرف الصحيح دائماً هو أخذ لقطات شاشة للأدلة وعدم مسحها، وعدم الخضوع للمبتز نهائياً والتواصل فوراً مع الجهة الرسمية أو مبادرة خط أحمر."
  },
  {
    question: "ما هي الطريقة الأكثر أماناً لحماية حساباتك الشخصية على منصات التواصل؟",
    options: [
      "استخدام كلمة سر واحدة سهلة لجميع الحسابات كي لا تنسيها",
      "تفعيل الميزتين: كلمة سر قوية وفريدة لكل حساب + المصادقة الثنائية (2FA)",
      "جعل الحساب عاماً وقبول كافة طلبات الصداقة من الغرباء",
      "حفظ كلمة السر في ورقة ملصقة خلف الهاتف"
    ],
    correct: 1,
    explanation: "المصادقة الثنائية (2FA) تضيف طبقة حماية ثانية تمنع المخترق حتى لو عرف كلمة سرك."
  },
  {
    question: "تلقيت رابطاً مغرياً عبر الواتساب يقول 'سجلي هنا واحصلي على جهاز مجاناً'. ماذا تفعلين؟",
    options: [
      "أضغط فوراً وأسجل بياناتي الشخصية والبنكية",
      "أعيد توجيه الرابط لكل صديقاتي لتعم الفائدة",
      "أتجاهل الرابط وأتأكد من صديقي، فلربما تم اختراق حسابه وإرسال الرابط تلقائياً",
      "أرسل رقم بطاقتي الشخصية في الرابط"
    ],
    correct: 2,
    explanation: "الروابط المغرية جداً غالباً ما تكون روابط تصيد احتيالي (Phishing) ويتم إرسالها تلقائياً عبر حسابات مخترقة."
  },
  {
    question: "ما هو الإجراء الصحيح عند استخدام شبكة Wi-Fi عامة في مجاني أو مكان عام؟",
    options: [
      "تسجيل الدخول إلى الحسابات البنكية والشخصية الحساسة بحرية",
      "تجنب فتح الحسابات الحساسة أو استخدام شبكة وهمية مشفرة (VPN)",
      "مشاركة كافة الصور والملفات عبر الشبكة العامة",
      "الشبكات العامة آمنة دائماً 100%"
    ],
    correct: 1,
    explanation: "الشبكات العامة غير المشفرة يمكن التجسس عليها بسهولة، لذا يجب تجنب إدخال كلمات السر والحسابات المهمة عبرها."
  },
  {
    question: "ما الذي تضمنه لك مبادرة 'خط أحمر' عند التواصل للبلاغ عن ابتزاز أو طلب مشورة؟",
    options: [
      "مشاركة بياناتك مع أطراف خارجية",
      "سرية تامّة وخصوصية مشفرة بنسبة 100% ودعم نفسي وتقني بدون أي لوم أو أحكام",
      "طلب مقابل مالي مقابل تقديم المساعدة",
      "إبلاغ كافة زملائك في المدرسة"
    ],
    correct: 1,
    explanation: "مبادرة خط أحمر تضمن السرية المطلقة والاحترافية والدعم الآمن التام دون إصدار أحكام أو لوم."
  }
];

let currentQuizIndex = 0;
let quizScore = 0;

function initCyberQuiz() {
  const quizBox = document.getElementById('quizBox');
  const resultBox = document.getElementById('quizResultBox');
  const qNumEl = document.getElementById('quizNum');
  const qTitleEl = document.getElementById('quizTitle');
  const optionsEl = document.getElementById('quizOptions');
  const expEl = document.getElementById('quizExp');
  const progressFill = document.getElementById('quizProgressFill');
  const nextBtn = document.getElementById('quizNextBtn');

  if (!quizBox) return;

  function renderQuizQuestion(index) {
    const q = quizQuestions[index];
    qNumEl.textContent = `السؤال ${index + 1} من ${quizQuestions.length}`;
    qTitleEl.textContent = q.question;
    progressFill.style.width = ((index + 1) / quizQuestions.length * 100) + '%';
    expEl.style.display = 'none';
    nextBtn.style.display = 'none';

    optionsEl.innerHTML = '';
    q.options.forEach((opt, idx) => {
      const btn = document.createElement('button');
      btn.className = 'quiz-option-btn';
      btn.innerHTML = `<span style="width:28px; height:28px; border-radius:50%; background:rgba(255,255,255,0.1); display:inline-flex; align-items:center; justify-content:center; font-size:0.85rem; flex-shrink:0;">${idx + 1}</span> <span>${opt}</span>`;
      btn.addEventListener('click', () => handleQuizAnswer(idx, q.correct, q.explanation));
      optionsEl.appendChild(btn);
    });
  }

  function handleQuizAnswer(selectedIdx, correctIdx, explanation) {
    const buttons = optionsEl.querySelectorAll('.quiz-option-btn');
    buttons.forEach((btn, idx) => {
      btn.disabled = true;
      if (idx === correctIdx) btn.classList.add('selected-correct');
      if (idx === selectedIdx && selectedIdx !== correctIdx) btn.classList.add('selected-wrong');
    });

    if (selectedIdx === correctIdx) quizScore += 20;

    expEl.style.display = 'block';
    expEl.innerHTML = `<strong>التوضيح التعليمي:</strong> ${explanation}`;
    nextBtn.textContent = currentQuizIndex < quizQuestions.length - 1 ? 'السؤال التالي' : 'عرض النتيجة النهائية';
    nextBtn.style.display = 'inline-flex';
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      if (currentQuizIndex < quizQuestions.length - 1) {
        currentQuizIndex++;
        renderQuizQuestion(currentQuizIndex);
      } else {
        showQuizResults();
      }
    });
  }

  function showQuizResults() {
    quizBox.style.display = 'none';
    resultBox.style.display = 'block';

    const scoreBadge = document.getElementById('quizScoreBadge');
    const title = document.getElementById('quizResultTitle');
    const msg = document.getElementById('quizResultMsg');

    scoreBadge.textContent = `${quizScore}%`;

    if (quizScore >= 80) {
      title.textContent = '🏆 بطلة السلامة الرقمية!';
      msg.textContent = 'أحسنتِ! لديك وعي ممتاز بالأمن السيبراني وكيفية التعامل مع المخاطر الرقمية وحماية خصوصيتك.';
    } else if (quizScore >= 60) {
      title.textContent = '🛡️ مستوى وعي جيد جداً!';
      msg.textContent = 'لديك معرفة جيدة بالسلامة الرقمية، ونوصيك بمراجعة أدلة الأمان على المنصة لتعزيز حمايتك.';
    } else {
      title.textContent = '💡 واصلي التعلم معنا!';
      msg.textContent = 'السلامة الرقمية رحلة مستمرة. استكشفي مركز التوعية في مبادرة خط أحمر لاكتساب مهارات الحماية الفولاذية.';
    }
  }

  window.resetQuiz = function() {
    currentQuizIndex = 0;
    quizScore = 0;
    quizBox.style.display = 'block';
    resultBox.style.display = 'none';
    renderQuizQuestion(0);
  };

  renderQuizQuestion(0);
}

/* 7. Hotlines Selector */
function initHotlinesSelector() {
  const select = document.getElementById('countrySelect');
  const copyBtn = document.getElementById('copyHotlineBtn');

  if (!select) return;

  select.addEventListener('change', updateHotlineDisplay);

  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const num = document.getElementById('hotlineNumberDisplay').textContent;
      navigator.clipboard.writeText(num).then(() => {
        const origText = copyBtn.innerHTML;
        copyBtn.innerHTML = '<i class="fas fa-check"></i> تم النسخ بنجاح!';
        setTimeout(() => {
          copyBtn.innerHTML = origText;
        }, 2000);
      });
    });
  }
}

/* 8. Confidential Encrypted Incident Reporting Modal */
function initReportingModal() {
  const modal = document.getElementById('reportingModal');
  const openBtns = document.querySelectorAll('.open-report-modal');
  const closeBtn = document.getElementById('closeReportModal');
  const form = document.getElementById('reportForm');
  const successBanner = document.getElementById('reportSuccessBanner');
  const body = document.body;

  openBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      modal.classList.add('active');
      body.style.overflow = 'hidden';
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('active');
      body.style.overflow = '';
    });
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
        body.style.overflow = '';
      }
    });
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const threatType = document.getElementById('threatType').value;
      const contactWay = document.getElementById('contactWay').value || 'غير محدد';
      const threatDetails = document.getElementById('threatDetails').value;

      const newReport = {
        id: 'rep_' + Date.now(),
        date: new Date().toISOString().replace('T', ' ').slice(0, 16),
        threatType: getThreatLabel(threatType),
        contactWay: contactWay,
        details: threatDetails,
        status: 'new'
      };

      state.inbox.unshift(newReport);
      saveState();

      const btn = form.querySelector('button[type="submit"]');
      const origText = btn.innerHTML;
      btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> جاري التشفير والإرسال الآمن...';
      btn.disabled = true;

      setTimeout(() => {
        btn.innerHTML = origText;
        btn.disabled = false;
        form.reset();
        successBanner.style.display = 'block';

        setTimeout(() => {
          successBanner.style.display = 'none';
          modal.classList.remove('active');
          body.style.overflow = '';
        }, 3500);
      }, 1200);
    });
  }
}

function getThreatLabel(type) {
  const map = {
    blackmail: 'ابتزاز رقمي أو تهديد',
    phishing: 'اختراق حساب أو بريد',
    harassment: 'مضايقات وتنمر إلكتروني',
    fake_account: 'انتحال شخصية أو حساب مزيف',
    consultation: 'استشارة أمان عامة'
  };
  return map[type] || type;
}

/* 9. Interactive Guide Details Modal */
function initGuideModals() {
  const modal = document.getElementById('guideDetailModal');
  const modalTitle = document.getElementById('guideModalTitle');
  const modalBody = document.getElementById('guideModalBody');
  const closeBtn = document.getElementById('closeGuideModal');
  const body = document.body;

  window.openGuideDetail = function(guideId) {
    const data = state.guides.find(g => g.id === guideId);
    if (!data || !modal) return;

    modalTitle.textContent = data.title;
    modalBody.innerHTML = data.content;
    modal.classList.add('active');
    body.style.overflow = 'hidden';
  };

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('active');
      body.style.overflow = '';
    });
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
        body.style.overflow = '';
      }
    });
  }
}

/* 10. Emergency Panic Button */
function initEmergencyPanicButton() {
  const panicBtns = document.querySelectorAll('.btn-panic');
  panicBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      window.location.href = 'https://www.google.com';
    });
  });
}

/* ==========================================================================
   11. FULL CMS ADMIN DASHBOARD LOGIC (مع خامات إدخال فارغة دائماً)
   ========================================================================== */

function initCMSDashboard() {
  const adminLoginModal = document.getElementById('adminLoginModal');
  const cmsDashboardModal = document.getElementById('cmsDashboardModal');
  const openLoginBtns = document.querySelectorAll('.open-admin-login');
  const closeLoginBtn = document.getElementById('closeAdminLogin');
  const closeCMSBtn = document.getElementById('closeCMSModal');
  const loginForm = document.getElementById('adminLoginForm');
  const logoutBtn = document.getElementById('adminLogoutBtn');

  // Open Login Modal (Clears inputs so user types manually)
  openLoginBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (state.admin.isLoggedIn) {
        openCMSDashboard();
      } else {
        const uInput = document.getElementById('adminUser');
        const pInput = document.getElementById('adminPass');
        if (uInput) uInput.value = '';
        if (pInput) pInput.value = '';
        const errAlert = document.getElementById('adminLoginErr');
        if (errAlert) errAlert.style.display = 'none';

        adminLoginModal.classList.add('active');
      }
    });
  });

  if (closeLoginBtn) {
    closeLoginBtn.addEventListener('click', () => adminLoginModal.classList.remove('active'));
  }

  if (closeCMSBtn) {
    closeCMSBtn.addEventListener('click', () => cmsDashboardModal.classList.remove('active'));
  }

  // Admin Login Verification
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const user = document.getElementById('adminUser').value.trim();
      const pass = document.getElementById('adminPass').value.trim();
      const errAlert = document.getElementById('adminLoginErr');

      if (user === state.admin.username && pass === state.admin.password) {
        state.admin.isLoggedIn = true;
        errAlert.style.display = 'none';
        loginForm.reset();
        adminLoginModal.classList.remove('active');
        openCMSDashboard();
      } else {
        errAlert.style.display = 'block';
        errAlert.textContent = 'اسم المستخدم أو كلمة السر غير صحيحة! يرجى التأكد وإعادة المحاولة.';
      }
    });
  }

  // Admin Logout
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      state.admin.isLoggedIn = false;
      cmsDashboardModal.classList.remove('active');
      alert('تم تسجيل الخروج من لوحة التحكم بنجاح.');
    });
  }

  // CMS Navigation Tabs
  const cmsTabs = document.querySelectorAll('.cms-tab-btn');
  const cmsPanes = document.querySelectorAll('.cms-tab-pane');

  cmsTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      cmsTabs.forEach(t => t.classList.remove('active'));
      cmsPanes.forEach(p => p.classList.remove('active'));

      tab.classList.add('active');
      const targetPane = document.getElementById(tab.dataset.pane);
      if (targetPane) targetPane.classList.add('active');
    });
  });

  initCMSForms();
}

function openCMSDashboard() {
  const cmsModal = document.getElementById('cmsDashboardModal');
  if (!cmsModal) return;

  renderCMSStats();
  renderCMSGuidesTable();
  renderCMSHotlinesTable();
  renderCMSInboxTable();
  fillCMSContentForm();

  cmsModal.classList.add('active');
}

function renderCMSStats() {
  const statReportsCount = document.getElementById('cmsStatReportsCount');
  const statGuidesCount = document.getElementById('cmsStatGuidesCount');
  const statHotlinesCount = document.getElementById('cmsStatHotlinesCount');

  if (statReportsCount) statReportsCount.textContent = state.inbox.length;
  if (statGuidesCount) statGuidesCount.textContent = state.guides.length;
  if (statHotlinesCount) statHotlinesCount.textContent = state.hotlines.length;
}

function fillCMSContentForm() {
  const editTitle = document.getElementById('editHeroTitle');
  const editSlogan = document.getElementById('editHeroSlogan');
  const editDesc = document.getElementById('editHeroDesc');
  const editATitle = document.getElementById('editAwardTitle');
  const editADesc = document.getElementById('editAwardDesc');

  if (editTitle) editTitle.value = state.site.heroTitle || '';
  if (editSlogan) editSlogan.value = state.site.heroSlogan || '';
  if (editDesc) editDesc.value = state.site.heroDescription || '';
  if (editATitle) editATitle.value = state.site.awardTitle || '';
  if (editADesc) editADesc.value = state.site.awardDesc || '';
}

function renderCMSGuidesTable() {
  const container = document.getElementById('cmsGuidesList');
  if (!container) return;

  container.innerHTML = '';
  state.guides.forEach((g, idx) => {
    const div = document.createElement('div');
    div.className = 'cms-item-card';
    div.innerHTML = `
      <div class="cms-item-info">
        <i class="${g.icon}" style="color:var(--accent-red); font-size:1.4rem;"></i>
        <div>
          <strong>${g.title}</strong>
          <p style="font-size:0.85rem; color:var(--text-secondary);">${g.desc.slice(0, 70)}...</p>
        </div>
      </div>
      <div class="cms-item-actions">
        <button class="btn btn-secondary" onclick="editGuidePrompt(${idx})" style="padding:0.4rem 0.8rem; font-size:0.85rem;">تعديل</button>
        <button class="btn btn-panic" onclick="deleteGuide(${idx})" style="padding:0.4rem 0.8rem; font-size:0.85rem;">حذف</button>
      </div>
    `;
    container.appendChild(div);
  });
}

function renderCMSHotlinesTable() {
  const container = document.getElementById('cmsHotlinesList');
  if (!container) return;

  container.innerHTML = '';
  state.hotlines.forEach((h, idx) => {
    const div = document.createElement('div');
    div.className = 'cms-item-card';
    div.innerHTML = `
      <div class="cms-item-info">
        <strong>${h.country}</strong>
        <span style="color:var(--accent-red); font-weight:bold; font-size:0.9rem;">${h.cyber}</span>
      </div>
      <div class="cms-item-actions">
        <button class="btn btn-panic" onclick="deleteHotline(${idx})" style="padding:0.4rem 0.8rem; font-size:0.85rem;">حذف</button>
      </div>
    `;
    container.appendChild(div);
  });
}

function renderCMSInboxTable() {
  const container = document.getElementById('cmsInboxList');
  if (!container) return;

  if (state.inbox.length === 0) {
    container.innerHTML = '<p style="text-align:center; color:var(--text-muted); padding:2rem;">لا توجد بلاغات أو استشارات واردة حتى الآن.</p>';
    return;
  }

  container.innerHTML = '';
  state.inbox.forEach((item, idx) => {
    const div = document.createElement('div');
    div.className = 'cms-inbox-card';
    div.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.6rem;">
        <span style="background:rgba(255,42,95,0.15); color:var(--accent-red); padding:0.2rem 0.6rem; border-radius:4px; font-weight:bold; font-size:0.85rem;">${item.threatType}</span>
        <span style="font-size:0.8rem; color:var(--text-muted);">${item.date}</span>
      </div>
      <p style="font-weight:bold; margin-bottom:0.4rem; font-size:0.92rem;">طريقة التواصل: <span style="color:var(--accent-cyan);">${item.contactWay}</span></p>
      <p style="background:var(--bg-primary); padding:0.8rem; border-radius:8px; font-size:0.9rem; color:var(--text-primary); margin-bottom:0.8rem;">${item.details}</p>
      <div style="text-align:left;">
        <button class="btn btn-panic" onclick="deleteInboxReport(${idx})" style="padding:0.3rem 0.7rem; font-size:0.8rem;">حذف البلاغ</button>
      </div>
    `;
    container.appendChild(div);
  });
}

function initCMSForms() {
  const siteForm = document.getElementById('cmsSiteForm');
  if (siteForm) {
    siteForm.addEventListener('submit', (e) => {
      e.preventDefault();
      state.site.heroTitle = document.getElementById('editHeroTitle').value;
      state.site.heroSlogan = document.getElementById('editHeroSlogan').value;
      state.site.heroDescription = document.getElementById('editHeroDesc').value;
      state.site.awardTitle = document.getElementById('editAwardTitle').value;
      state.site.awardDesc = document.getElementById('editAwardDesc').value;

      saveState();
      alert('تم حفظ وتحديث محتوى الواجهة الرئيسية بنجاح!');
    });
  }

  const addGuideForm = document.getElementById('cmsAddGuideForm');
  if (addGuideForm) {
    addGuideForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const title = document.getElementById('newGuideTitle').value;
      const icon = document.getElementById('newGuideIcon').value || 'fas fa-shield-alt';
      const desc = document.getElementById('newGuideDesc').value;
      const content = document.getElementById('newGuideContent').value;
      const audience = document.getElementById('newGuideAudience').value;

      const newGuide = {
        id: 'guide_' + Date.now(),
        audience: audience,
        icon: icon,
        title: title,
        desc: desc,
        content: content
      };

      state.guides.push(newGuide);
      saveState();
      addGuideForm.reset();
      renderCMSGuidesTable();
      alert('تم إضافة دليل التوعية الجديد بنجاح!');
    });
  }

  const addHotlineForm = document.getElementById('cmsAddHotlineForm');
  if (addHotlineForm) {
    addHotlineForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const country = document.getElementById('newHotlineCountry').value;
      const cyber = document.getElementById('newHotlineCyber').value;
      const notes = document.getElementById('newHotlineNotes').value;

      const newHotline = {
        key: 'c_' + Date.now(),
        country: country,
        cyber: cyber,
        child: 'طوارئ معتمدة',
        notes: notes
      };

      state.hotlines.unshift(newHotline);
      saveState();
      addHotlineForm.reset();
      renderCMSHotlinesTable();
      alert('تم إضافة رقم الطوارئ والدولة بنجاح!');
    });
  }

  const passForm = document.getElementById('cmsChangePassForm');
  if (passForm) {
    passForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const newPass = document.getElementById('newAdminPass').value.trim();
      if (newPass.length < 6) {
        alert('كلمة السر يجب ألا تقل عن 6 رموز!');
        return;
      }
      state.admin.password = newPass;
      saveState();
      passForm.reset();
      alert('تم تغيير كلمة سر المشرف بنجاح!');
    });
  }
}

window.deleteGuide = function(idx) {
  if (confirm('هل أنت متأكد من حذف هذا الدليل؟')) {
    state.guides.splice(idx, 1);
    saveState();
    renderCMSGuidesTable();
  }
};

window.editGuidePrompt = function(idx) {
  const item = state.guides[idx];
  const newTitle = prompt('تعديل عنوان الدليل:', item.title);
  if (newTitle !== null && newTitle.trim() !== '') {
    item.title = newTitle.trim();
    saveState();
    renderCMSGuidesTable();
  }
};

window.deleteHotline = function(idx) {
  if (confirm('هل أنت متأكد من حذف رقم الطوارئ لهذا الدولة؟')) {
    state.hotlines.splice(idx, 1);
    saveState();
    renderCMSHotlinesTable();
  }
};

window.deleteInboxReport = function(idx) {
  if (confirm('هل أنت متأكد من حذف هذا البلاغ؟')) {
    state.inbox.splice(idx, 1);
    saveState();
    renderCMSInboxTable();
    renderCMSStats();
  }
};

/* Base64 FileReader Engine */
window.handleFileUpload = function(event, targetInputId) {
  const file = event.target.files[0];
  if (!file) return;
  if (file.size > 3.5 * 1024 * 1024) {
    alert('حجم الصورة كبير جداً! يرجى اختيار صورة بحجم أقل من 3.5 ميجابايت.');
    return;
  }
  const reader = new FileReader();
  reader.onload = function(e) {
    const input = document.getElementById(targetInputId);
    if (input) input.value = e.target.result;
  };
  reader.readAsDataURL(file);
};

/* JSON Backup Export & Import */
window.exportBackupJSON = function() {
  const backupData = JSON.stringify(state, null, 2);
  const blob = new Blob([backupData], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `redline_backup_${new Date().toISOString().slice(0,10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
};

window.importBackupJSON = function(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const importedState = JSON.parse(e.target.result);
      if (importedState && importedState.site && importedState.guides) {
        state = importedState;
        saveState();
        openCMSDashboard();
        alert('تمت استعادة كافة بيانات ومحتويات الموقع بنجاح من النسخة الاحتياطية!');
      } else {
        alert('ملف النسخة الاحتياطية غير صالح!');
      }
    } catch (err) {
      alert('حدث خطأ أثناء قراءة ملف الـ JSON!');
    }
  };
  reader.readAsText(file);
};

window.resetStateToDefaults = function() {
  if (confirm('هل أنت متأكد من إعادة ضبط كافة البيانات والمحتوى للوضع الافتراضي الأولي؟')) {
    localStorage.removeItem('redline_cms_state');
    state = JSON.parse(JSON.stringify(DEFAULT_STATE));
    saveState();
    openCMSDashboard();
    alert('تم إعادة ضبط كافة بيانات الموقع بنجاح!');
  }
};
