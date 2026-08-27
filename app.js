const CONFIG = {
  googlePlay: "#", // replace after Google Play publication
  appStore: "#",   // replace after App Store publication
  apk: "downloads/cargogo.apk",
  ipa: "downloads/cargogo.ipa"
};

const I18N = {
  en: {
    "nav.product":"Product","nav.experience":"Experience","nav.about":"About","nav.download":"Download",
    "hero.meta":"SMART ROUTES · VERIFIED DEALS · SECURE WORKFLOW","hero.eyebrow":"A mobile cargo marketplace","hero.line1":"Routes.","hero.line2":"People.","hero.line3":"Deliveries.","hero.lead":"CargoGo connects people who need to move cargo with verified drivers and carriers — through a transparent, route-first mobile workflow.","hero.cta":"Get CargoGo","hero.preview":"See the product","hero.footer":"Freight, made clearer.",
    "product.label":"PRODUCT","product.title":"Not another logistics dashboard. A focused mobile flow.","product.p1":"Create a cargo request or publish a trip. CargoGo matches both sides around route, timing and transport context, then keeps the deal inside one clear lifecycle.","product.p2":"The product is designed around trust: user and vehicle verification, structured deal states, evidence, communication and dispute review.","product.card1.title":"Route first","product.card1.text":"Find relevant cargo around an existing trip instead of browsing noise.","product.card2.title":"Verified by design","product.card2.text":"Identity and vehicle checks are built into the product flow.","product.card3.title":"One deal state","product.card3.text":"Offer, pickup, transit, arrival and confirmation stay connected.",
    "experience.label":"EXPERIENCE","experience.title1":"Built to feel","experience.title2":"fast before it moves.","experience.s1.title":"Route intelligence","experience.s1.text":"Current route, matching and live context.","experience.s2.title":"Trip control","experience.s2.text":"Edit route and timing without losing the flow.","experience.s3.title":"Three visual modes","experience.s3.text":"Classic, Clean and Badger themes inside the real app.","experience.s4.title":"Cargo creation","experience.s4.text":"A focused form for price, cargo details and route.",
    "route.kicker":"LIVE ROUTE / INTERACTIVE","route.title1":"A route that","route.title2":"responds.","route.text":"Move across the route or tap the track. CargoGo turns distance, timing and matching into one live flow.","route.distance":"DISTANCE","route.match":"MATCH SIGNAL","route.eta":"ETA","route.hint":"DRAG / TAP TO MOVE","route.run":"RUN ROUTE",
    "cap.label":"CAPABILITIES","cap.title":"Everything essential.","cap.subtitle":"Nothing noisy.","cap.c1.title":"Cargo & trips","cap.c1.text":"Publish demand or planned transport and connect both sides.","cap.c2.title":"Smart matching","cap.c2.text":"Route-aware discovery instead of a flat classifieds feed.","cap.c3.title":"Verification","cap.c3.text":"Identity, driver and vehicle verification with review workflows.","cap.c4.title":"Deals & evidence","cap.c4.text":"A structured lifecycle with status transitions and supporting evidence.","cap.c5.title":"Support & disputes","cap.c5.text":"Clear escalation, evidence review and support around the deal.",
    "about.label":"FOUNDER","about.bio":"CargoGo is being built as a technology-first marketplace: simple for the user, rigorous underneath. Product, engineering, trust workflows and the initial platform architecture are developed around one goal — make cargo transportation easier to arrange and easier to understand.",
    "download.label":"DOWNLOAD","download.title1":"Move something.","download.title2":"Or move with it.","download.text":"Choose a store build when available, or use a direct build for testing and preview.","download.googleSmall":"GET IT ON","download.appleSmall":"DOWNLOAD ON THE","download.direct":"DIRECT BUILD","download.note":"Direct iOS installation depends on signing and Apple distribution rules. Store/TestFlight distribution is recommended for public iOS releases.",
    "footer.tagline":"Routes · People · Deliveries","footer.support":"Support","footer.legal":"Legal","footer.download":"Download",
    "drawer.supportTab":"Support","drawer.legalTab":"Legal","drawer.supportTitle":"Need a hand?","drawer.supportText":"For account, verification, deal or technical questions, contact CargoGo support.","drawer.response":"Response target","drawer.responseValue":"Up to 48 hours","drawer.legalTitle":"Clear rules, easy access.","drawer.legalText":"Policies and platform terms remain available without opening the app.","drawer.privacy":"Privacy Policy","drawer.terms":"Terms of Use","drawer.cookies":"Cookie Policy"
  },
  uk: {
    "nav.product":"Продукт","nav.experience":"Інтерфейс","nav.about":"Про нас","nav.download":"Завантажити",
    "hero.meta":"РОЗУМНІ МАРШРУТИ · ПЕРЕВІРЕНІ УГОДИ · БЕЗПЕЧНИЙ ПРОЦЕС","hero.eyebrow":"Мобільний маркетплейс перевезень","hero.line1":"Маршрути.","hero.line2":"Люди.","hero.line3":"Доставка.","hero.lead":"CargoGo з'єднує тих, кому потрібно перевезти вантаж, із перевіреними водіями та перевізниками — у прозорому мобільному процесі, побудованому навколо маршруту.","hero.cta":"Отримати CargoGo","hero.preview":"Дивитися продукт","hero.footer":"Перевезення — зрозуміліше.",
    "product.label":"ПРОДУКТ","product.title":"Не ще одна логістична панель. Чіткий мобільний сценарій.","product.p1":"Створіть вантаж або опублікуйте поїздку. CargoGo зіставляє сторони за маршрутом, часом і транспортним контекстом, а потім веде угоду в одному зрозумілому процесі.","product.p2":"Продукт будується навколо довіри: перевірка користувача й авто, структуровані статуси угоди, докази, комунікація та розгляд спорів.","product.card1.title":"Маршрут передусім","product.card1.text":"Знаходьте релевантні вантажі вздовж уже запланованої поїздки.","product.card2.title":"Верифікація в основі","product.card2.text":"Перевірка особи та автомобіля вбудована у продуктовий сценарій.","product.card3.title":"Єдиний стан угоди","product.card3.text":"Пропозиція, забір, транзит, прибуття й підтвердження залишаються пов'язаними.",
    "experience.label":"ІНТЕРФЕЙС","experience.title1":"Швидкий на відчуття","experience.title2":"ще до старту руху.","experience.s1.title":"Розумний маршрут","experience.s1.text":"Поточний маршрут, matching та live-контекст.","experience.s2.title":"Контроль поїздки","experience.s2.text":"Змінюйте маршрут і час, не втрачаючи логіку процесу.","experience.s3.title":"Три візуальні режими","experience.s3.text":"Classic, Clean і Badger у реальному застосунку.","experience.s4.title":"Створення вантажу","experience.s4.text":"Сфокусована форма для ціни, параметрів вантажу та маршруту.",
    "route.kicker":"LIVE ROUTE / ІНТЕРАКТИВ","route.title1":"Маршрут, який","route.title2":"реагує.","route.text":"Проведіть по маршруту або торкніться треку. CargoGo перетворює відстань, час і matching на один живий процес.","route.distance":"ВІДСТАНЬ","route.match":"MATCH SIGNAL","route.eta":"ЧАС","route.hint":"ПРОВЕДІТЬ / ТОРКНІТЬСЯ","route.run":"ЗАПУСТИТИ",
    "cap.label":"МОЖЛИВОСТІ","cap.title":"Усе необхідне.","cap.subtitle":"Без зайвого шуму.","cap.c1.title":"Вантажі та поїздки","cap.c1.text":"Публікуйте потребу або запланований транспорт і з'єднуйте обидві сторони.","cap.c2.title":"Розумний matching","cap.c2.text":"Пошук за маршрутом замість пласкої дошки оголошень.","cap.c3.title":"Верифікація","cap.c3.text":"Перевірка особи, водія й транспортного засобу з reviewer-процесом.","cap.c4.title":"Угоди та докази","cap.c4.text":"Структурований життєвий цикл зі статусами та супровідними доказами.","cap.c5.title":"Підтримка та спори","cap.c5.text":"Зрозуміла ескалація, перевірка доказів і підтримка навколо угоди.",
    "about.label":"ЗАСНОВНИК","about.bio":"CargoGo створюється як технологічний маркетплейс: простий для користувача і строгий усередині. Продукт, розробка, trust-процеси та базова архітектура платформи підпорядковані одній меті — зробити організацію перевезення простішою й зрозумілішою.",
    "download.label":"ЗАВАНТАЖИТИ","download.title1":"Передати вантаж.","download.title2":"Або взяти його в дорогу.","download.text":"Обирайте магазинну версію, коли вона доступна, або прямий білд для тестування й демонстрації.","download.googleSmall":"ЗАВАНТАЖИТИ З","download.appleSmall":"ЗАВАНТАЖИТИ В","download.direct":"ПРЯМИЙ БІЛД","download.note":"Пряма інсталяція iOS залежить від підпису та правил дистрибуції Apple. Для публічного релізу рекомендовано App Store/TestFlight.",
    "footer.tagline":"Маршрути · Люди · Доставка","footer.support":"Підтримка","footer.legal":"Правові документи","footer.download":"Завантажити",
    "drawer.supportTab":"Підтримка","drawer.legalTab":"Правові документи","drawer.supportTitle":"Потрібна допомога?","drawer.supportText":"З питань акаунта, верифікації, угоди або технічної роботи звертайтеся до підтримки CargoGo.","drawer.response":"Орієнтир відповіді","drawer.responseValue":"До 48 годин","drawer.legalTitle":"Чіткі правила. Легкий доступ.","drawer.legalText":"Політики й умови платформи доступні без відкриття застосунку.","drawer.privacy":"Політика конфіденційності","drawer.terms":"Умови використання","drawer.cookies":"Політика cookie"
  },
  ru: {
    "nav.product":"Продукт","nav.experience":"Интерфейс","nav.about":"О нас","nav.download":"Скачать",
    "hero.meta":"УМНЫЕ МАРШРУТЫ · ПРОВЕРЕННЫЕ СДЕЛКИ · БЕЗОПАСНЫЙ ПРОЦЕСС","hero.eyebrow":"Мобильный маркетплейс перевозок","hero.line1":"Маршруты.","hero.line2":"Люди.","hero.line3":"Доставка.","hero.lead":"CargoGo соединяет тех, кому нужно перевезти груз, с проверенными водителями и перевозчиками — в прозрачном мобильном процессе, построенном вокруг маршрута.","hero.cta":"Получить CargoGo","hero.preview":"Смотреть продукт","hero.footer":"Перевозки — понятнее.",
    "product.label":"ПРОДУКТ","product.title":"Не ещё одна логистическая панель. Чёткий мобильный сценарий.","product.p1":"Создайте груз или опубликуйте поездку. CargoGo сопоставляет стороны по маршруту, времени и транспортному контексту, а затем ведёт сделку в одном понятном процессе.","product.p2":"Продукт строится вокруг доверия: проверка пользователя и автомобиля, структурированные статусы сделки, доказательства, коммуникация и рассмотрение споров.","product.card1.title":"Сначала маршрут","product.card1.text":"Находите релевантные грузы вдоль уже запланированной поездки.","product.card2.title":"Верификация в основе","product.card2.text":"Проверка личности и автомобиля встроена в продуктовый сценарий.","product.card3.title":"Единое состояние сделки","product.card3.text":"Предложение, забор, транзит, прибытие и подтверждение остаются связанными.",
    "experience.label":"ИНТЕРФЕЙС","experience.title1":"Быстрый по ощущениям","experience.title2":"ещё до начала движения.","experience.s1.title":"Умный маршрут","experience.s1.text":"Текущий маршрут, matching и live-контекст.","experience.s2.title":"Контроль поездки","experience.s2.text":"Меняйте маршрут и время, не теряя логику процесса.","experience.s3.title":"Три визуальных режима","experience.s3.text":"Classic, Clean и Badger в реальном приложении.","experience.s4.title":"Создание груза","experience.s4.text":"Сфокусированная форма для цены, параметров груза и маршрута.",
    "route.kicker":"LIVE ROUTE / ИНТЕРАКТИВ","route.title1":"Маршрут, который","route.title2":"реагирует.","route.text":"Проведите по маршруту или коснитесь трека. CargoGo превращает расстояние, время и matching в один живой процесс.","route.distance":"РАССТОЯНИЕ","route.match":"MATCH SIGNAL","route.eta":"ВРЕМЯ","route.hint":"ПРОВЕДИТЕ / КОСНИТЕСЬ","route.run":"ЗАПУСТИТЬ",
    "cap.label":"ВОЗМОЖНОСТИ","cap.title":"Всё необходимое.","cap.subtitle":"Без лишнего шума.","cap.c1.title":"Грузы и поездки","cap.c1.text":"Публикуйте потребность или запланированный транспорт и соединяйте обе стороны.","cap.c2.title":"Умный matching","cap.c2.text":"Поиск по маршруту вместо плоской доски объявлений.","cap.c3.title":"Верификация","cap.c3.text":"Проверка личности, водителя и транспорта с reviewer-процессом.","cap.c4.title":"Сделки и доказательства","cap.c4.text":"Структурированный жизненный цикл со статусами и подтверждающими материалами.","cap.c5.title":"Поддержка и споры","cap.c5.text":"Понятная эскалация, проверка доказательств и поддержка вокруг сделки.",
    "about.label":"ОСНОВАТЕЛЬ","about.bio":"CargoGo создаётся как технологический маркетплейс: простой для пользователя и строгий внутри. Продукт, разработка, trust-процессы и базовая архитектура платформы подчинены одной цели — сделать организацию перевозки проще и понятнее.",
    "download.label":"СКАЧАТЬ","download.title1":"Передать груз.","download.title2":"Или взять его в дорогу.","download.text":"Выбирайте магазинную версию, когда она доступна, либо прямой билд для тестирования и демонстрации.","download.googleSmall":"СКАЧАТЬ В","download.appleSmall":"ЗАГРУЗИТЬ В","download.direct":"ПРЯМОЙ БИЛД","download.note":"Прямая установка iOS зависит от подписи и правил дистрибуции Apple. Для публичного релиза рекомендуется App Store/TestFlight.",
    "footer.tagline":"Маршруты · Люди · Доставка","footer.support":"Поддержка","footer.legal":"Правовые документы","footer.download":"Скачать",
    "drawer.supportTab":"Поддержка","drawer.legalTab":"Правовые документы","drawer.supportTitle":"Нужна помощь?","drawer.supportText":"По вопросам аккаунта, верификации, сделки или технической работы обращайтесь в поддержку CargoGo.","drawer.response":"Ориентир ответа","drawer.responseValue":"До 48 часов","drawer.legalTitle":"Чёткие правила. Лёгкий доступ.","drawer.legalText":"Политики и условия платформы доступны без открытия приложения.","drawer.privacy":"Политика конфиденциальности","drawer.terms":"Условия использования","drawer.cookies":"Политика cookie"
  }
};

const q = s => document.querySelector(s), qa = s => [...document.querySelectorAll(s)];
const toast = q('#toast');
function showToast(text){ toast.textContent=text; toast.classList.add('show'); clearTimeout(showToast.t); showToast.t=setTimeout(()=>toast.classList.remove('show'),2400); }

const links={googlePlayLink:CONFIG.googlePlay,appStoreLink:CONFIG.appStore,apkLink:CONFIG.apk,ipaLink:CONFIG.ipa};
Object.entries(links).forEach(([id,href])=>{const el=document.getElementById(id);if(!el)return;el.href=href;if(href==="#")el.addEventListener('click',e=>{e.preventDefault();showToast(document.documentElement.lang==='uk'?'Посилання з’явиться після публічного релізу.':document.documentElement.lang==='ru'?'Ссылка появится после публичного релиза.':'Store link will be available after public release.');});});
q('#year').textContent=new Date().getFullYear();

function setLanguage(lang){if(!I18N[lang])lang='en';localStorage.setItem('cargogo-lang',lang);document.documentElement.lang=lang;qa('[data-i18n]').forEach(el=>{const value=I18N[lang][el.dataset.i18n];if(value)el.textContent=value;});qa('[data-lang]').forEach(b=>b.classList.toggle('active',b.dataset.lang===lang));}
qa('[data-lang]').forEach(b=>b.addEventListener('click',()=>setLanguage(b.dataset.lang)));
const stored=localStorage.getItem('cargogo-lang'); const browser=(navigator.language||'en').toLowerCase(); setLanguage(stored || (browser.startsWith('uk')?'uk':browser.startsWith('ru')?'ru':'en'));

const io=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');io.unobserve(entry.target);}}),{threshold:.11});qa('.reveal').forEach(el=>io.observe(el));

const drawer=q('#drawer'),backdrop=q('#drawerBackdrop');
function selectDrawerTab(tab){qa('[data-drawer-tab]').forEach(x=>x.classList.toggle('active',x.dataset.drawerTab===tab));qa('[data-drawer-panel]').forEach(x=>x.classList.toggle('active',x.dataset.drawerPanel===tab));}
function openDrawer(tab='support'){selectDrawerTab(tab);drawer.classList.add('open');backdrop.classList.add('open');drawer.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';}
function closeDrawer(){drawer.classList.remove('open');backdrop.classList.remove('open');drawer.setAttribute('aria-hidden','true');document.body.style.overflow='';}
q('#drawerOpen').addEventListener('click',()=>openDrawer('support'));q('#drawerClose').addEventListener('click',closeDrawer);backdrop.addEventListener('click',closeDrawer);qa('[data-open-drawer]').forEach(b=>b.addEventListener('click',()=>openDrawer(b.dataset.openDrawer)));qa('[data-drawer-tab]').forEach(b=>b.addEventListener('click',()=>selectDrawerTab(b.dataset.drawerTab)));window.addEventListener('keydown',e=>{if(e.key==='Escape')closeDrawer();});

window.addEventListener('scroll',()=>{const d=document.documentElement;const max=d.scrollHeight-d.clientHeight;q('.scroll-progress i').style.width=`${max?d.scrollTop/max*100:0}%`;},{passive:true});

if(matchMedia('(pointer:fine)').matches && !matchMedia('(prefers-reduced-motion: reduce)').matches){
  const glow=q('.cursor-glow');window.addEventListener('mousemove',e=>{glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px';glow.style.opacity='1';});
  qa('.magnetic').forEach(el=>{el.addEventListener('mousemove',e=>{const r=el.getBoundingClientRect();const x=(e.clientX-r.left-r.width/2)*.12,y=(e.clientY-r.top-r.height/2)*.12;el.style.transform=`translate(${x}px,${y}px)`;});el.addEventListener('mouseleave',()=>el.style.transform='');});
  const card=q('.tilt-card');if(card){card.addEventListener('mousemove',e=>{const r=card.getBoundingClientRect();const rx=((e.clientY-r.top)/r.height-.5)*-5,ry=((e.clientX-r.left)/r.width-.5)*7;card.style.transform=`rotate(3deg) perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg)`;});card.addEventListener('mouseleave',()=>card.style.transform='rotate(3deg)');}
}


// Interactive Route Pulse — pointer, touch, keyboard and replay animation.
(() => {
  const canvas=document.getElementById('routeCanvas');
  const path=document.getElementById('routeLivePath');
  const marker=document.getElementById('cargoMarker');
  const run=document.getElementById('routeRun');
  const distance=document.getElementById('routeDistance');
  const match=document.getElementById('routeMatch');
  const eta=document.getElementById('routeEta');
  if(!canvas||!path||!marker) return;
  const total=path.getTotalLength();
  path.style.strokeDasharray=`${total} ${total}`;
  let progress=.12, raf=0, playing=false;
  const clamp=n=>Math.max(0,Math.min(1,n));
  function render(p){
    progress=clamp(p);
    const pt=path.getPointAtLength(total*progress);
    const vb=path.ownerSVGElement.viewBox.baseVal;
    marker.style.left=`${pt.x/vb.width*100}%`;
    marker.style.top=`${pt.y/vb.height*100}%`;
    path.style.strokeDashoffset=String(total*(1-progress));
    canvas.style.setProperty('--route-progress',progress);
    canvas.setAttribute('aria-valuenow',Math.round(progress*100));
    if(distance) distance.textContent=`${Math.round(927*progress)} km`;
    if(match) match.textContent=`${Math.round(8+progress*84)}%`;
    if(eta){const mins=Math.round(759*progress);eta.textContent=`${Math.floor(mins/60)}h ${String(mins%60).padStart(2,'0')}m`;}
  }
  function fromPointer(e){
    const r=canvas.getBoundingClientRect();
    render((e.clientX-r.left)/r.width);
  }
  canvas.addEventListener('pointerdown',e=>{playing=false;canvas.setPointerCapture?.(e.pointerId);fromPointer(e)});
  canvas.addEventListener('pointermove',e=>{if(e.buttons||e.pointerType==='touch')fromPointer(e)});
  canvas.addEventListener('mousemove',e=>{if(matchMedia('(pointer:fine)').matches&&!playing)fromPointer(e)});
  canvas.addEventListener('keydown',e=>{if(e.key==='ArrowRight'||e.key==='ArrowUp'){e.preventDefault();render(progress+.04)}else if(e.key==='ArrowLeft'||e.key==='ArrowDown'){e.preventDefault();render(progress-.04)}else if(e.key==='Home'){render(0)}else if(e.key==='End'){render(1)}});
  function play(){
    cancelAnimationFrame(raf);playing=true;const start=performance.now();const from=progress>.95?0:progress;const duration=2200;
    function tick(now){const t=Math.min(1,(now-start)/duration);const eased=1-Math.pow(1-t,3);render(from+(1-from)*eased);if(t<1&&playing)raf=requestAnimationFrame(tick);else playing=false}
    raf=requestAnimationFrame(tick);
  }
  run?.addEventListener('click',e=>{e.stopPropagation();play()});
  render(progress);
})();

// Primary dark / optional light theme
const themeToggle=document.getElementById('themeToggle');
const themeMeta=document.getElementById('themeColor');
function applyTheme(theme){
  const next=theme==='light'?'light':'dark';
  document.documentElement.dataset.theme=next;
  try{localStorage.setItem('cargogo-theme',next)}catch(e){}
  if(themeMeta) themeMeta.setAttribute('content', next==='dark'?'#080b0f':'#f2f1ed');
  if(themeToggle){
    themeToggle.setAttribute('aria-label',next==='dark'?'Switch to light theme':'Switch to dark theme');
    themeToggle.setAttribute('title',next==='dark'?'Light theme':'Dark theme');
  }
}
applyTheme(document.documentElement.dataset.theme||'dark');
if(themeToggle) themeToggle.addEventListener('click',()=>applyTheme(document.documentElement.dataset.theme==='dark'?'light':'dark'));
