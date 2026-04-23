import { importShared } from './__federation_fn_import-BF-AfqT6.js';
import { j as jsxRuntimeExports } from './jsx-runtime-XI9uIe3W.js';
import { i as bgDocumentTypeById } from './accountingConstants-Cfl6rq38.js';

const OFFER_CONFIG = {
  documentNumberStart: 41,
  documentNumberPrefix: "",
  documentNumberPad: 0,
  defaultCurrency: "EUR",
  defaultVatPct: 20,
  defaultValidityDays: 21,
  defaultBrand: {
    name: "INKBLOT STUDIO",
    tagline: "Accelerating Every Industry through AI",
    url: "inkblotstudio.eu"
  }
};
function formatOfferNumber(n, cfg = OFFER_CONFIG) {
  const core = cfg.documentNumberPad > 0 ? String(n).padStart(cfg.documentNumberPad, "0") : String(n);
  return `${cfg.documentNumberPrefix}${core}`;
}
function extractOfferNumber(raw) {
  const m = raw.match(/\d+/);
  return m ? Number.parseInt(m[0], 10) : Number.NaN;
}

const OFFER_CURRENCY_SYMBOL = {
  BGN: "лв",
  EUR: "€",
  USD: "$"
};
function formatMoney(amount, currency) {
  const sym = OFFER_CURRENCY_SYMBOL[currency] ?? currency;
  const n = amount.toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 2 });
  return currency === "BGN" ? `${n} ${sym}` : `${sym}${n}`;
}
function formatMoneyRange(from, to, currency) {
  if (from == null && to == null) return null;
  if (from != null && to != null) return `${formatMoney(from, currency)} – ${formatMoney(to, currency)}`;
  return formatMoney(from ?? to, currency);
}
function findPricingBlock(draft) {
  return draft.blocks.find((b) => b.kind === "pricing");
}
function offerVatAmount(pricing) {
  return Math.round(pricing.price * (pricing.vatPct / 100) * 100) / 100;
}
function offerGrandTotal(pricing) {
  return Math.round((pricing.price + offerVatAmount(pricing)) * 100) / 100;
}
function draftGrandTotal(draft) {
  const p = findPricingBlock(draft);
  return p ? offerGrandTotal(p) : 0;
}
function draftCurrency(draft) {
  return findPricingBlock(draft)?.currency ?? OFFER_CONFIG.defaultCurrency;
}
function uid() {
  return typeof crypto !== "undefined" && "randomUUID" in crypto ? crypto.randomUUID() : `id-${Math.random().toString(36).slice(2)}-${Date.now().toString(36)}`;
}
function createBlock(kind) {
  const id = uid();
  switch (kind) {
    case "heading":
      return { id, kind, level: 2, text: "" };
    case "paragraph":
      return { id, kind, text: "" };
    case "feature":
      return { id, kind, kicker: "", title: "", description: "", bullets: [], comparisonNote: "" };
    case "bullets":
      return { id, kind, items: [""] };
    case "quote":
      return { id, kind, text: "", cite: "" };
    case "pricing":
      return {
        id,
        kind,
        currency: OFFER_CONFIG.defaultCurrency,
        price: 0,
        vatPct: OFFER_CONFIG.defaultVatPct,
        marketValueFrom: void 0,
        marketValueTo: void 0,
        timeline: "",
        guarantee: "",
        note: ""
      };
    case "plans":
      return { id, kind, title: "Месечна поддръжка", plans: [] };
    case "divider":
      return { id, kind };
  }
}
function newSupportPlan() {
  return { id: uid(), title: "", subtitle: "", priceLabel: "" };
}
function cloneBlock(block) {
  switch (block.kind) {
    case "feature":
      return { ...block, id: uid(), bullets: [...block.bullets] };
    case "bullets":
      return { ...block, id: uid(), items: [...block.items] };
    case "plans":
      return { ...block, id: uid(), plans: block.plans.map((p) => ({ ...p, id: uid() })) };
    default:
      return { ...block, id: uid() };
  }
}
const BLOCK_KIND_LABEL = {
  heading: "Heading",
  paragraph: "Paragraph",
  feature: "Feature",
  bullets: "Bullet list",
  quote: "Quote",
  pricing: "Pricing",
  plans: "Support plans",
  divider: "Divider"
};
function isoToday() {
  return (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
}
function isoPlusDays(days) {
  const d = /* @__PURE__ */ new Date();
  d.setDate(d.getDate() + days);
  return d.toISOString().slice(0, 10);
}
function emptyOfferDraft() {
  return {
    documentTypeId: "oferta",
    documentNumber: formatOfferNumber(OFFER_CONFIG.documentNumberStart),
    brandProfileId: null,
    clientName: "",
    clientOrg: "",
    clientEmail: "",
    projectName: "",
    blocks: [createBlock("paragraph")],
    brandName: "",
    brandTagline: "",
    brandUrl: "",
    issueDate: isoToday(),
    validUntil: isoPlusDays(OFFER_CONFIG.defaultValidityDays)
  };
}
const ALL_BLOCK_KINDS = [
  "heading",
  "paragraph",
  "feature",
  "bullets",
  "quote",
  "pricing",
  "plans",
  "divider"
];
function normalizeBlock(input, idx) {
  if (!input || typeof input !== "object") return null;
  const raw = input;
  const kind = typeof raw.kind === "string" ? raw.kind : null;
  if (!kind || !ALL_BLOCK_KINDS.includes(kind)) return null;
  const id = typeof raw.id === "string" && raw.id ? raw.id : `blk-${idx}-${uid()}`;
  const str = (v, f = "") => typeof v === "string" ? v : f;
  const num = (v, f = 0) => {
    const n = typeof v === "number" ? v : Number(v);
    return Number.isFinite(n) ? n : f;
  };
  const optNum = (v) => {
    if (v == null || v === "") return void 0;
    const n = typeof v === "number" ? v : Number(v);
    return Number.isFinite(n) ? n : void 0;
  };
  const strArr = (v) => Array.isArray(v) ? v.map((x) => str(x)).filter(Boolean) : [];
  const curr = (v) => v === "BGN" || v === "EUR" || v === "USD" ? v : OFFER_CONFIG.defaultCurrency;
  switch (kind) {
    case "heading": {
      const lvl = raw.level === 1 || raw.level === 2 || raw.level === 3 ? raw.level : 2;
      return { id, kind, level: lvl, text: str(raw.text) };
    }
    case "paragraph":
      return { id, kind, text: str(raw.text) };
    case "feature":
      return {
        id,
        kind,
        kicker: str(raw.kicker),
        title: str(raw.title),
        description: str(raw.description),
        bullets: strArr(raw.bullets),
        comparisonNote: str(raw.comparisonNote)
      };
    case "bullets": {
      const items = strArr(raw.items);
      return { id, kind, items: items.length ? items : [""] };
    }
    case "quote":
      return { id, kind, text: str(raw.text), cite: str(raw.cite) };
    case "pricing":
      return {
        id,
        kind,
        currency: curr(raw.currency),
        price: Math.max(0, num(raw.price)),
        vatPct: Math.max(0, Math.min(100, num(raw.vatPct, OFFER_CONFIG.defaultVatPct))),
        marketValueFrom: optNum(raw.marketValueFrom),
        marketValueTo: optNum(raw.marketValueTo),
        timeline: str(raw.timeline),
        guarantee: str(raw.guarantee),
        note: str(raw.note)
      };
    case "plans": {
      const plans = Array.isArray(raw.plans) ? raw.plans.map((p, i) => {
        const po = p ?? {};
        return {
          id: str(po.id, `plan-${i}-${uid()}`),
          title: str(po.title),
          subtitle: str(po.subtitle),
          priceLabel: str(po.priceLabel)
        };
      }) : [];
      return { id, kind, title: str(raw.title, "Месечна поддръжка"), plans };
    }
    case "divider":
      return { id, kind };
  }
}
function migrateLegacyToBlocks(raw) {
  const blocks = [];
  const str = (v, f = "") => typeof v === "string" ? v : f;
  const num = (v, f = 0) => {
    const n = typeof v === "number" ? v : Number(v);
    return Number.isFinite(n) ? n : f;
  };
  const optNum = (v) => {
    if (v == null || v === "") return void 0;
    const n = typeof v === "number" ? v : Number(v);
    return Number.isFinite(n) ? n : void 0;
  };
  const tagline = str(raw.tagline);
  if (tagline) blocks.push({ id: uid(), kind: "paragraph", text: tagline });
  if (Array.isArray(raw.features)) {
    for (const f of raw.features) {
      const fo = f ?? {};
      const bullets = Array.isArray(fo.bullets) ? fo.bullets.map((b) => str(b)).filter(Boolean) : [];
      blocks.push({
        id: uid(),
        kind: "feature",
        kicker: str(fo.kicker),
        title: str(fo.title),
        description: str(fo.description),
        bullets,
        comparisonNote: str(fo.comparisonNote)
      });
    }
  }
  const hasPricing = raw.price != null || raw.marketValueFrom != null || raw.marketValueTo != null || raw.timeline != null || raw.guarantee != null || raw.pricingNote != null;
  if (hasPricing) {
    blocks.push({
      id: uid(),
      kind: "pricing",
      currency: raw.currency === "BGN" || raw.currency === "EUR" || raw.currency === "USD" ? raw.currency : OFFER_CONFIG.defaultCurrency,
      price: Math.max(0, num(raw.price)),
      vatPct: Math.max(0, Math.min(100, num(raw.vatPct, OFFER_CONFIG.defaultVatPct))),
      marketValueFrom: optNum(raw.marketValueFrom),
      marketValueTo: optNum(raw.marketValueTo),
      timeline: str(raw.timeline),
      guarantee: str(raw.guarantee),
      note: str(raw.pricingNote)
    });
  }
  if (Array.isArray(raw.supportPlans) && raw.supportPlans.length > 0) {
    blocks.push({
      id: uid(),
      kind: "plans",
      title: "Месечна поддръжка",
      plans: raw.supportPlans.map((p, i) => {
        const po = p ?? {};
        return {
          id: str(po.id, `plan-${i}-${uid()}`),
          title: str(po.title),
          subtitle: str(po.subtitle),
          priceLabel: str(po.priceLabel)
        };
      })
    });
  }
  const closing = str(raw.closingNote);
  if (closing) blocks.push({ id: uid(), kind: "paragraph", text: closing });
  return blocks;
}
function normalizeOfferDraft(input) {
  const empty = emptyOfferDraft();
  if (!input || typeof input !== "object") return empty;
  const raw = input;
  const str = (v, f = "") => typeof v === "string" ? v : f;
  const typeId = str(raw.documentTypeId, "oferta");
  const documentTypeId = bgDocumentTypeById(typeId) ? typeId : "oferta";
  const legacyRawBlocks = Array.isArray(raw.blocks) ? raw.blocks.map((b, i) => normalizeBlock(b, i)).filter((b) => b != null) : null;
  const blocks = legacyRawBlocks && legacyRawBlocks.length > 0 ? legacyRawBlocks : migrateLegacyToBlocks(raw);
  return {
    documentTypeId,
    documentNumber: str(raw.documentNumber, empty.documentNumber),
    brandProfileId: typeof raw.brandProfileId === "string" ? raw.brandProfileId : null,
    clientName: str(raw.clientName),
    clientOrg: str(raw.clientOrg),
    clientEmail: str(raw.clientEmail),
    projectName: str(raw.projectName),
    blocks: blocks.length > 0 ? blocks : [createBlock("paragraph")],
    brandName: str(raw.brandName, empty.brandName),
    brandTagline: str(raw.brandTagline, empty.brandTagline),
    brandUrl: str(raw.brandUrl, empty.brandUrl),
    issueDate: raw.issueDate ? str(raw.issueDate) : void 0,
    validUntil: raw.validUntil ? str(raw.validUntil) : void 0
  };
}
function seedLobbyOffer() {
  const feature = (kicker, title, description, bullets, cmp) => ({
    id: uid(),
    kind: "feature",
    kicker,
    title,
    description,
    bullets,
    comparisonNote: cmp
  });
  const paragraph = (text) => ({ id: uid(), kind: "paragraph", text });
  const heading = (text, level = 2) => ({
    id: uid(),
    kind: "heading",
    level,
    text
  });
  const pricing = (p) => ({ id: uid(), kind: "pricing", ...p });
  const plans = (ps) => ({
    id: uid(),
    kind: "plans",
    title: "Месечна поддръжка",
    plans: ps.map((p) => ({ id: uid(), ...p }))
  });
  return {
    documentTypeId: "oferta",
    documentNumber: formatOfferNumber(OFFER_CONFIG.documentNumberStart),
    brandProfileId: "inkblot-studio",
    clientName: "ЛОББИ ЕООД",
    clientOrg: "ЛОББИ ЕООД",
    clientEmail: "",
    projectName: "Премиум Платформа за Авто-Внос",
    blocks: [
      paragraph(
        "Предлагаме цялостно изграждане на високотехнологична и професионална платформа, която ще позиционира ЛОББИ ЕООД като лидер на пазара. Проектът включва гарантирана SEO оптимизация, която ще осигури първи позиции в Google търсенията за внос на автомобили."
      ),
      heading("Какво включва проектът"),
      feature(
        "Потребителска Екосистема",
        "Американски Аукциони",
        "Пълна синхронизация с топ платформи: Copart, IAAI, Manheim, ADESA и AutoBidMaster. Автоматично извличане на обяви и данни в реално време.",
        [
          "Регистрация, вход, любими автомобили (Wishlist)",
          "Автоматизирани имейл кампании и известия при нови търгове"
        ],
        "WinCars разчита на мениджър, който следи пазара 24/7. Вашата платформа прави това напълно автоматично чрез софтуер и AI — оферти на секундата."
      ),
      feature(
        "Система за Помощ",
        "AI Чатбот Асистент",
        "Интелигентен бот (в стил Claude/ChatGPT), който управлява филтри, превключва страници и отговаря на клиентски запитвания.",
        [
          "Професионален Ticketing модул за обслужване на клиенти",
          "Проследяване на запитвания и проблеми с доставки"
        ],
        "Докато конкурентите имат статични страници, ЛОББИ ще разполага с AI чатбот, който проактивно помага на клиента да намери точно търсеното."
      ),
      feature(
        "Dashboard за клиента",
        "Собствен Каталог",
        "Модул за представяне на наличните автомобили на ЛОББИ ЕООД, с детайлни галерии и характеристики.",
        ["Детайлни галерии и характеристики", "Табло за следене на любими коли"],
        "Клиентите получават собствено табло (Dashboard) за следене на любими коли, вместо да чакат обратна връзка по телефон."
      ),
      pricing({
        currency: "EUR",
        price: 3500,
        vatPct: 20,
        marketValueFrom: 5e3,
        marketValueTo: 8500,
        timeline: "1.5 месеца",
        guarantee: "SEO оптимизация и техническа поддръжка",
        note: "Стандартната пазарна цена за разработка на подобна инфраструктура (API интеграции, AI и персонализирани потребителски панели) варира между 5,000 € и 8,500 € в други IT агенции. Ние Ви предлагаме ексклузивни условия, за да изградим дългосрочно партньорство."
      }),
      plans([
        { title: "Месечна поддръжка", subtitle: "Първи 3 месеца", priceLabel: "0 €" },
        { title: "Месечна поддръжка", subtitle: "След 3-ия месец", priceLabel: "19.99 €" },
        { title: "AI Токени", subtitle: "Разплащане", priceLabel: "По употреба" }
      ]),
      paragraph(
        "Защо да се доверите на нас? Ние не просто създаваме уебсайтове — изграждаме машини за продажби. Нашата цел е платформата Ви да бъде технически безупречна, визуално зашеметяваща и оптимизирана да конвертира посетителите в реални клиенти. Спестяваме скрити разходи за AI токени и предлагаме несравнимо съотношение между цена и качество."
      )
    ],
    brandName: "",
    brandTagline: "",
    brandUrl: "",
    issueDate: isoToday(),
    validUntil: isoPlusDays(OFFER_CONFIG.defaultValidityDays)
  };
}

const {createContext,useCallback,useContext,useMemo,useSyncExternalStore} = await importShared('react');
const STORAGE_KEY = "citron-accounting-offers-v2";
const NEW_OFFER_ROUTE = "new";
function nextNumericOfferNumber(offers) {
  let max = OFFER_CONFIG.documentNumberStart - 1;
  for (const o of offers) {
    const n = extractOfferNumber(o.draft.documentNumber);
    if (Number.isFinite(n) && n > max) max = n;
  }
  return max + 1;
}
function nextOfferNumber(offers) {
  return formatOfferNumber(nextNumericOfferNumber(offers));
}
function seedOffers() {
  return [{ recordId: "seed-offer-001", status: "pending", draft: seedLobbyOffer() }];
}
function defaultPersisted() {
  return { version: 2, offers: seedOffers() };
}
function isOfferStatus(s) {
  return s === "draft" || s === "pending" || s === "paid" || s === "overdue";
}
function loadPersisted() {
  if (typeof window === "undefined") return defaultPersisted();
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      const legacy = window.localStorage.getItem("citron-accounting-offers-v1");
      if (!legacy) return defaultPersisted();
      const parsed2 = JSON.parse(legacy);
      return loadFromPayload(parsed2);
    }
    const parsed = JSON.parse(raw);
    return loadFromPayload(parsed);
  } catch {
    return defaultPersisted();
  }
}
function loadFromPayload(parsed) {
  if (!Array.isArray(parsed.offers)) return defaultPersisted();
  const offers = parsed.offers.map((o, i) => {
    const rec = o ?? {};
    return {
      recordId: typeof rec.recordId === "string" && rec.recordId ? rec.recordId : `rec-${i}-${Math.random().toString(36).slice(2)}`,
      status: isOfferStatus(rec.status) ? rec.status : "draft",
      draft: normalizeOfferDraft(rec.draft)
    };
  });
  return { version: 2, offers };
}
function savePersisted(data) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
  }
}
let memory = defaultPersisted();
const listeners = /* @__PURE__ */ new Set();
function getSnapshot() {
  return memory;
}
function subscribe(listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}
function emit() {
  listeners.forEach((l) => l());
}
function setMemory(next) {
  memory = next;
  savePersisted(next);
  emit();
}
if (typeof window !== "undefined") {
  memory = loadPersisted();
}
const OfferStoreContext = createContext(null);
function OfferStoreProvider({ children }) {
  const data = useSyncExternalStore(subscribe, getSnapshot, () => defaultPersisted());
  const getOffer = useCallback(
    (recordId) => data.offers.find((o) => o.recordId === recordId),
    [data.offers]
  );
  const getNextOfferNumber = useCallback(() => nextOfferNumber(data.offers), [data.offers]);
  const createBlank = useCallback(() => {
    const recordId = crypto.randomUUID();
    const draft = {
      ...emptyOfferDraft(),
      documentNumber: nextOfferNumber(memory.offers)
    };
    const rec = { recordId, status: "draft", draft };
    setMemory({ ...memory, offers: [rec, ...memory.offers] });
    return recordId;
  }, []);
  const createFromDraft = useCallback((draft, status = "draft") => {
    const recordId = crypto.randomUUID();
    const rec = { recordId, status, draft };
    setMemory({ ...memory, offers: [rec, ...memory.offers] });
    return recordId;
  }, []);
  const updateDraft = useCallback((recordId, draft) => {
    setMemory({
      ...memory,
      offers: memory.offers.map((o) => o.recordId === recordId ? { ...o, draft } : o)
    });
  }, []);
  const updateStatus = useCallback((recordId, status) => {
    setMemory({
      ...memory,
      offers: memory.offers.map((o) => o.recordId === recordId ? { ...o, status } : o)
    });
  }, []);
  const deleteOffer = useCallback((recordId) => {
    setMemory({ ...memory, offers: memory.offers.filter((o) => o.recordId !== recordId) });
  }, []);
  const duplicateOffer = useCallback((recordId) => {
    const src = memory.offers.find((o) => o.recordId === recordId);
    if (!src) return null;
    const newId = crypto.randomUUID();
    const copy = {
      recordId: newId,
      status: "draft",
      draft: {
        ...src.draft,
        documentNumber: nextOfferNumber(memory.offers),
        blocks: src.draft.blocks.map(cloneBlock)
      }
    };
    setMemory({ ...memory, offers: [copy, ...memory.offers] });
    return newId;
  }, []);
  const resetToSeed = useCallback(() => {
    setMemory(defaultPersisted());
  }, []);
  const value = useMemo(
    () => ({
      offers: data.offers,
      getOffer,
      getNextOfferNumber,
      createBlank,
      createFromDraft,
      updateDraft,
      updateStatus,
      deleteOffer,
      duplicateOffer,
      resetToSeed
    }),
    [
      data.offers,
      getOffer,
      getNextOfferNumber,
      createBlank,
      createFromDraft,
      updateDraft,
      updateStatus,
      deleteOffer,
      duplicateOffer,
      resetToSeed
    ]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx(OfferStoreContext.Provider, { value, children });
}
function useOfferStore() {
  const ctx = useContext(OfferStoreContext);
  if (!ctx) throw new Error("useOfferStore must be used within OfferStoreProvider");
  return ctx;
}

export { BLOCK_KIND_LABEL as B, NEW_OFFER_ROUTE as N, OfferStoreProvider as O, draftCurrency as a, createBlock as b, cloneBlock as c, draftGrandTotal as d, formatMoneyRange as e, formatMoney as f, offerGrandTotal as g, emptyOfferDraft as h, newSupportPlan as n, offerVatAmount as o, useOfferStore as u };
