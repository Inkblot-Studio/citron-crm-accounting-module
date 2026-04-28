import { importShared } from './__federation_fn_import-BF-AfqT6.js';
import { j as jsxRuntimeExports } from './jsx-runtime-XI9uIe3W.js';

const seedProfiles = [
	{
		id: "default",
		name: "Default",
		logoAssetPath: "",
		logoUrl: "",
		brandName: "YOUR BRAND",
		brandTagline: "Short tagline about what you do",
		brandWebsite: "yourbrand.com",
		accentColor: "#C9A227",
		senderLegalName: "Your Company Ltd.",
		senderAddress: "ul. Example 1\n1000 Sofia, Bulgaria",
		senderVatId: "BG000000000",
		senderPhone: "+359 2 000 0000",
		senderEmail: "hello@yourbrand.com",
		bankName: "Bank Name",
		bankIban: "BG00BANK0000000000000000",
		bankBic: "BANKBGSF"
	},
	{
		id: "inkblot-studio",
		name: "Inkblot Studio",
		logoAssetPath: "/svg/inkblotstudio_logo.svg",
		logoUrl: "",
		brandName: "INKBLOT STUDIO",
		brandTagline: "Accelerating Every Industry through AI",
		brandWebsite: "inkblotstudio.eu",
		accentColor: "#2563EB",
		senderLegalName: "Inkblot Studio Ltd.",
		senderAddress: "Bulgaria, Burgas (8000), “Maragidik”, 19, 2nd floor, office apartment 1",
		senderVatId: "BG208715250",
		senderPhone: "+359882797806",
		senderEmail: "ai.support@inkblotstudio.eu",
		bankName: "DSK BANK",
		bankIban: "BG12STSA93000032516602",
		bankBic: "STSABGSF"
	}
];

function emptyBrandingProfile() {
  return {
    id: typeof crypto !== "undefined" && "randomUUID" in crypto ? crypto.randomUUID() : `profile-${Date.now()}`,
    name: "Untitled brand",
    logoAssetPath: "",
    logoUrl: "",
    brandName: "",
    brandTagline: "",
    brandWebsite: "",
    accentColor: "#C9A227",
    senderLegalName: "",
    senderAddress: "",
    senderVatId: "",
    senderPhone: "",
    senderEmail: "",
    bankName: "",
    bankIban: "",
    bankBic: ""
  };
}
function normalizeHex(color) {
  if (typeof color !== "string") return "#C9A227";
  const m = color.trim().match(/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/);
  return m ? `#${m[1]}` : "#C9A227";
}

const {createContext,useCallback,useContext,useMemo,useSyncExternalStore} = await importShared('react');
const STORAGE_KEY = "citron-accounting-branding-v1";
function normalizeProfile(raw, fallbackId) {
  const empty = emptyBrandingProfile();
  if (!raw || typeof raw !== "object") return { ...empty, id: fallbackId };
  const r = raw;
  const str = (v, d = "") => typeof v === "string" ? v : d;
  return {
    id: str(r.id, fallbackId),
    name: str(r.name, empty.name),
    logoAssetPath: str(r.logoAssetPath),
    logoUrl: str(r.logoUrl),
    brandName: str(r.brandName),
    brandTagline: str(r.brandTagline),
    brandWebsite: str(r.brandWebsite),
    accentColor: normalizeHex(r.accentColor),
    senderLegalName: str(r.senderLegalName),
    senderAddress: str(r.senderAddress),
    senderVatId: str(r.senderVatId),
    senderPhone: str(r.senderPhone),
    senderEmail: str(r.senderEmail),
    bankName: str(r.bankName),
    bankIban: str(r.bankIban),
    bankBic: str(r.bankBic)
  };
}
function seedFromJson() {
  return seedProfiles.map((p, i) => normalizeProfile(p, `seed-${i}`));
}
function pickDefaultProfileId(profiles) {
  const ink = profiles.find((p) => p.id === "inkblot-studio");
  if (ink) return ink.id;
  return profiles[0]?.id ?? null;
}
function mergeProfilesWithSeed(persisted) {
  const seeds = seedFromJson();
  const seedMap = new Map(seeds.map((s) => [s.id, s]));
  return persisted.map((p) => {
    const s = seedMap.get(p.id);
    if (!s) return p;
    const logoAssetPath = p.logoAssetPath?.trim() ? p.logoAssetPath : s.logoAssetPath;
    const logoUrl = p.logoUrl?.trim() ? p.logoUrl : s.logoUrl;
    return { ...p, logoAssetPath, logoUrl };
  });
}
function defaultPersisted() {
  const profiles = seedFromJson();
  return {
    version: 1,
    profiles,
    defaultProfileId: pickDefaultProfileId(profiles)
  };
}
function loadPersisted() {
  if (typeof window === "undefined") return defaultPersisted();
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultPersisted();
    const parsed = JSON.parse(raw);
    const profilesRaw = Array.isArray(parsed.profiles) ? parsed.profiles : [];
    const profiles = mergeProfilesWithSeed(profilesRaw.map((p, i) => normalizeProfile(p, `rec-${i}`)));
    if (profiles.length === 0) return defaultPersisted();
    let defaultProfileId = typeof parsed.defaultProfileId === "string" && profiles.some((p) => p.id === parsed.defaultProfileId) ? parsed.defaultProfileId : profiles[0]?.id ?? null;
    if (defaultProfileId === "default" && profiles.some((p) => p.id === "inkblot-studio")) {
      defaultProfileId = "inkblot-studio";
    }
    return { version: 1, profiles, defaultProfileId };
  } catch {
    return defaultPersisted();
  }
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
const BrandingStoreContext = createContext(null);
function BrandingStoreProvider({ children }) {
  const data = useSyncExternalStore(subscribe, getSnapshot, () => defaultPersisted());
  const getProfile = useCallback(
    (id) => id ? data.profiles.find((p) => p.id === id) : void 0,
    [data.profiles]
  );
  const resolveProfile = useCallback(
    (id) => {
      if (id) {
        const found = data.profiles.find((p) => p.id === id);
        if (found) return found;
      }
      if (data.defaultProfileId) {
        const fallback = data.profiles.find((p) => p.id === data.defaultProfileId);
        if (fallback) return fallback;
      }
      return data.profiles[0];
    },
    [data.profiles, data.defaultProfileId]
  );
  const createProfile = useCallback((init) => {
    const base = emptyBrandingProfile();
    const profile = { ...base, ...init, id: base.id };
    setMemory({
      ...memory,
      profiles: [...memory.profiles, profile]
    });
    return profile.id;
  }, []);
  const updateProfile = useCallback((id, patch) => {
    setMemory({
      ...memory,
      profiles: memory.profiles.map(
        (p) => p.id === id ? { ...p, ...patch, id: p.id, accentColor: normalizeHex(patch.accentColor ?? p.accentColor) } : p
      )
    });
  }, []);
  const deleteProfile = useCallback((id) => {
    const remaining = memory.profiles.filter((p) => p.id !== id);
    setMemory({
      ...memory,
      profiles: remaining,
      defaultProfileId: memory.defaultProfileId === id ? remaining[0]?.id ?? null : memory.defaultProfileId
    });
  }, []);
  const setDefaultProfile = useCallback((id) => {
    setMemory({ ...memory, defaultProfileId: id });
  }, []);
  const resetToSeed = useCallback(() => {
    setMemory(defaultPersisted());
  }, []);
  const value = useMemo(
    () => ({
      profiles: data.profiles,
      defaultProfileId: data.defaultProfileId,
      getProfile,
      resolveProfile,
      createProfile,
      updateProfile,
      deleteProfile,
      setDefaultProfile,
      resetToSeed
    }),
    [data.profiles, data.defaultProfileId, getProfile, resolveProfile, createProfile, updateProfile, deleteProfile, setDefaultProfile, resetToSeed]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx(BrandingStoreContext.Provider, { value, children });
}
function useBrandingStore() {
  const ctx = useContext(BrandingStoreContext);
  if (!ctx) throw new Error("useBrandingStore must be used within BrandingStoreProvider");
  return ctx;
}

export { BrandingStoreProvider as B, emptyBrandingProfile as e, normalizeHex as n, useBrandingStore as u };
