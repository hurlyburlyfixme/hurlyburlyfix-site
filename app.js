const yearEl = document.getElementById("year");
yearEl.textContent = new Date().getFullYear();

const dict = {
  bg: {
    nav_services:"Услуги", nav_prices:"Цени", nav_how:"Как работи", nav_contact:"Контакт",
    hero_title_accent:"От", hero_title_rest:"хаос към ред. От един шкаф до цял дом.",
    hero_subtitle:"Ти знаеш проблема. Ние знаем решението - органицация, функция и висуален баланс.",
    chip_1:"На място / Онлайн / Хибрид", chip_2:"Ясен процес, видими резултати", chip_3:"организация + интериорно проектиране",
    cta_see:"Виж решенията", cta_call:"Обади се",
    solutions_title:"Решения", solutions_lead:"Избираш проблема. Получаваш ясен резултат.",
    do_title:"Какво се прави:", help_title:"Как помага:",
    before:"Преди", after:"След",

    s1_title:"Една зона ме побърква", s1_kicker:"Бърз резултат. Фиксирана цена.",
    s1_p1:"Понякога проблемът не е в целия дом, а в една конкретна зона.",
    s1_p2:"Тази услуга е за ситуации, в които точно определено място – гардероб, кухня, антре, склад или шкаф – е претоварено, неясно или трудно за поддържане. Подходът е практичен и изцяло съобразен с начина ти на използване на пространството.",
    s1_do_1:"анализ на съдържанието и навиците",
    s1_do_2:"селекция: кое остава и кое излиза",
    s1_do_3:"функционално разпределение (кой предмет къде и защо)",
    s1_do_4:"оптимално използване на наличното пространство",
    s1_do_5:"подредба, която е лесна за поддържане, не временна",
    s1_energy:"Премахва всичко, което вече не използвате, не знаете че го имате, няма нужда от него, освобождавате пространствто за нови вдъхновяващи вещи. Изобилието изисква място, а положителната енергия протича там, където пространството е балансирано.",
    s1_help_1:"спираш да търсиш",
    s1_help_2:"знаеш къде е всичко",
    s1_help_3:"освобождаваш пространство и внимание",
    s1_help_4:"зоната започва да работи за теб",

    s2_title:"Стаята не работи", s2_kicker:"Цяла стая. Повече функция. По-добро усещане.",
    s2_p1:"Когато стаята е подредена, но не функционира добре, проблемът не е в броя вещи, а в разпределението.",
    s2_for_title:"Подходящо, ако:",
    s2_for_1:"не е удобно", s2_for_2:"не е балансирано", s2_for_3:"не се усеща добре", s2_for_4:"не използваш потенциала му",
    s2_p2:"Работя на ниво цяла стая, като комбинирам организация и интериорно мислене.",
    s2_do_1:"анализ на функцията на стаята",
    s2_do_2:"преразпределение на зоните",
    s2_do_3:"пренареждане на мебели",
    s2_do_4:"организация на съхранението (гардероб, скрин, шкафове)",
    s2_do_5:"малки козметични промени за по-добра визия и усещане (без ремонт)",
    s2_energy:"Хармонията не се гради с късмет, а с правилните функционални решения за вещите, които ползваме и които премахваме. Чистото пространство изчиства енергията ни и така просперитетът ни ще намери път до нас самите.",
    s2_help_1:"движиш се по-лесно в пространството",
    s2_help_2:"използваш стаята по предназначение",
    s2_help_3:"усещаш повече лекота и ред",
    s2_help_4:"стаята изглежда по-ясна, подредена и спокойна",

    s3_title:"Домът има нужда от рестарт", s3_kicker:"Цял дом. Системен рестарт. Ред + дизайн.",
    s3_p1:"Когато домът има нужда от рестарт, частичните решения не работят.",
    s3_p2:"Това е цялостна услуга за апартамент или къща, при която се работи системно – от съдържанието на шкафовете до общата логика на пространството и начина, по който се използва.",
    s3_for_title:"Подходящо за:",
    s3_for_1:"нов дом", s3_for_2:"нов етап от живота", s3_for_3:"натрупан хаос с години", s3_for_4:"нужда от яснота, ред и ново усещане",
    s3_do_1:"цялостна организация на вещи по зони",
    s3_do_2:"функционално зониране на жилището",
    s3_do_3:"логика на движение и използване",
    s3_do_4:"аранжиране и декорация",
    s3_do_5:"при необходимост – интериорно решение и насоки за цялостна визия",
    s3_energy:"Домът е разширение на нашата енергия. Хаусът разваля мира, единството и изобилието. Премахва безпорядъка - разхвърляната среда отразява вътрешният ни дисбаланс, когато се погрижим всичко да си е на място, ще се погрижим и за самите нас.",
    s3_help_1:"домът започва да работи като система",
    s3_help_2:"редът е устойчив, не временен",
    s3_help_3:"пространството диша",
    s3_help_4:"средата подкрепя ежедневието, вместо да го натоварва",

    prices_title:"Цени", prices_lead:"Малкият пакет е фиксиран. По-големите са ориентировъчни според обема.",
    p1_name:"Зона", p2_name:"Стая", p3_name:"Дом",
    prices_note:"Курс: 1 € = 1.95583 лв (фиксиран курс в България).",

    how_title:"Как работи",
    how_1:"Кратък разговор по телефона — уточняваме проблема и обема.",
    how_2:"Избираме формат: на място / онлайн / хибрид.",
    how_3:"Работим по ясен план и стигаме до видим резултат.",
    how_4:"Получаваш логика за поддръжка, за да остане редът устойчив.",

    contact_title:"Контакт",
    contact_lead:"Най-бързо става с обаждане.",
    contact_call:"Обади се: +359 988 371 908",

    footer_tag:"From chaos to order"
  },

  en: {
    nav_services:"Services", nav_prices:"Prices", nav_how:"How it works", nav_contact:"Contact",
    hero_title_accent:"From", hero_title_rest:"chaos to order. From one closet to a whole home.",
    hero_subtitle:"You know the problem. We know the solution — organization, function, and visual balance.",
    chip_1:"On-site / Online / Hybrid", chip_2:"Clear process, visible results", chip_3:"organization + interior planning",
    cta_see:"See solutions", cta_call:"Call",

    solutions_title:"Solutions", solutions_lead:"Pick the problem. Get a clear result.",
    do_title:"What we do:", help_title:"How it helps:",
    before:"Before", after:"After",

    s1_title:"One zone is driving me crazy", s1_kicker:"Fast result. Fixed price.",
    s1_p1:"Sometimes the issue isn’t the whole home — it’s one specific zone.",
    s1_p2:"This service is for a wardrobe, kitchen, entryway, storage, or cabinet that feels overloaded, unclear, or hard to maintain. The approach is practical and tailored to how you actually use the space.",
    s1_do_1:"review of contents and habits",
    s1_do_2:"selection: what stays and what goes",
    s1_do_3:"functional placement (what goes where and why)",
    s1_do_4:"maximizing the existing space",
    s1_do_5:"a setup that’s easy to maintain (not temporary)",
    s1_energy:"We remove what you no longer use, what you forgot you own, and what you simply don’t need — freeing space for new, inspiring items. Abundance needs room, and positive energy flows where space is balanced.",
    s1_help_1:"you stop searching",
    s1_help_2:"you know where everything is",
    s1_help_3:"you free up space and mental load",
    s1_help_4:"the zone starts working for you",

    s2_title:"The room doesn’t work", s2_kicker:"One full room. More function. Better feeling.",
    s2_p1:"When a room is “tidy” but doesn’t function well, the problem isn’t the amount of stuff — it’s the layout.",
    s2_for_title:"Good fit if:",
    s2_for_1:"it’s not convenient",
    s2_for_2:"it feels unbalanced",
    s2_for_3:"it doesn’t feel good",
    s2_for_4:"you don’t use its potential",
    s2_p2:"We work at the level of the entire room, combining organization and interior thinking.",
    s2_do_1:"function analysis of the room",
    s2_do_2:"re-zoning the space",
    s2_do_3:"rearranging furniture",
    s2_do_4:"organizing storage (wardrobe, dresser, cabinets)",
    s2_do_5:"small cosmetic changes for better look & feel (no renovation)",
    s2_energy:"Harmony isn’t luck — it’s the result of the right functional decisions about what we keep and what we remove. A clean space clears your energy, and prosperity finds its way back to you.",
    s2_help_1:"you move more easily",
    s2_help_2:"you use the room as intended",
    s2_help_3:"you feel more lightness and order",
    s2_help_4:"the room looks clearer, calmer, and more organized",

    s3_title:"The home needs a reset", s3_kicker:"Whole home. System reset. Order + design.",
    s3_p1:"When a home needs a reset, partial fixes don’t work.",
    s3_p2:"This is a full service for an apartment or house — from the contents of cabinets to the overall logic of the space and how it’s used daily.",
    s3_for_title:"Ideal for:",
    s3_for_1:"a new home",
    s3_for_2:"a new life stage",
    s3_for_3:"years of accumulated chaos",
    s3_for_4:"need for clarity, order, and a new feeling",
    s3_do_1:"full organization of belongings by zones",
    s3_do_2:"functional zoning of the home",
    s3_do_3:"movement and usage logic",
    s3_do_4:"styling and decoration",
    s3_do_5:"when needed — interior direction and guidance for the overall look",
    s3_energy:"Home is an extension of our energy. Chaos disrupts peace, unity, and abundance. Clutter mirrors inner imbalance — when we put everything in its place, we take care of ourselves too.",
    s3_help_1:"the home starts working as a system",
    s3_help_2:"order becomes sustainable (not temporary)",
    s3_help_3:"the space can breathe",
    s3_help_4:"the environment supports your daily life instead of draining it",

    prices_title:"Prices",
    prices_lead:"The small package is fixed. Larger ones are estimates depending on scope.",
    p1_name:"Zone", p2_name:"Room", p3_name:"Home",
    prices_note:"FX rate: 1 € = 1.95583 BGN (fixed rate in Bulgaria).",

    how_title:"How it works",
    how_1:"A short phone call — we clarify the problem and scope.",
    how_2:"We choose a format: on-site / online / hybrid.",
    how_3:"We follow a clear plan and reach a visible result.",
    how_4:"You get a maintenance logic so the order stays sustainable.",

    contact_title:"Contact",
    contact_lead:"Fastest option: call.",
    contact_call:"Call: +359 988 371 908",

    footer_tag:"From chaos to order"
  }
};

function applyLang(lang){
  document.documentElement.lang = lang;
  document.querySelectorAll(".lang__btn").forEach(b=>{
    b.classList.toggle("is-active", b.dataset.lang === lang);
  });
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key = el.getAttribute("data-i18n");
    if(dict[lang] && dict[lang][key]) el.textContent = dict[lang][key];
  });
}

document.querySelectorAll(".lang__btn").forEach(btn=>{
  btn.addEventListener("click", ()=> applyLang(btn.dataset.lang));
});

// Lightbox
const lb = document.getElementById("lightbox");
const lbImg = document.getElementById("lbImg");
const lbClose = document.getElementById("lbClose");

function openLightbox(src){
  lbImg.src = src;
  lb.classList.add("is-open");
  lb.setAttribute("aria-hidden","false");
}
function closeLightbox(){
  lb.classList.remove("is-open");
  lb.setAttribute("aria-hidden","true");
  lbImg.src = "";
}
lbClose.addEventListener("click", closeLightbox);
lb.addEventListener("click", (e)=> { if(e.target === lb) closeLightbox(); });
document.addEventListener("keydown", (e)=> { if(e.key === "Escape") closeLightbox(); });

document.querySelectorAll(".ba__img").forEach(btn=>{
  btn.addEventListener("click", ()=> openLightbox(btn.dataset.full));
});

// default
applyLang("bg");
