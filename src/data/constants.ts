export type PhotoKey =
    | "bdialogues"
    | "bdiftar"
    | "bureau1"
    | "bureau2"
    | "christmas"
    | "erasmus"
    | "globepotter"
    | "logo"
    | "newyear"
    | "village1"
    | "village2"
    | "village3"
    | "wei";

export const EVENT_PHOTOS: (PhotoKey | null)[] = [
    "village3",
    "bdiftar",
    "bdialogues",
    "erasmus",
    "christmas",
    "newyear",
    "globepotter",
];

export const EVENT_GRADIENTS = [
    "linear-gradient(135deg,#E63946,#FFB703)",
    "linear-gradient(135deg,#C9A84C,#2B1810)",
    "linear-gradient(135deg,#3D5AFE,#2EC4B6)",
    "linear-gradient(135deg,#7B2FF7,#FF6B6B)",
    "linear-gradient(135deg,#8B4513,#FFB703)",
    "linear-gradient(135deg,#FFB703,#E63946)",
    "linear-gradient(135deg,#3D5AFE,#2EC4B6)",
];

export const EVENT_EMOJIS = ["🌍", "🌙", "💬", "🎶", "🎄", "🥂", "🎨"];

export const EVENT_LINKS = [
    "https://www.instagram.com/p/DKKa8qDvfNo/",
    "https://www.instagram.com/p/DV_TGK2DMVH",
    "https://www.instagram.com/reel/DP6IxmtjLXo/",
    "https://www.instagram.com/p/DO6wMOxjhjY/",
    "https://www.instagram.com/p/DSUP23eDS_v",
    "https://www.instagram.com/p/DTcp65MDBcC/",
    "https://www.instagram.com/p/DJtnkaxu8sj/",
];

export const PHOTO_WALL_KEYS: PhotoKey[] = [
    "village1",
    "village2",
    "bdiftar",
    "erasmus",
    "christmas",
    "globepotter",
    "newyear",
];
export const PHOTO_WALL_CAPTIONS = [
    "Village vibes!",
    "World cuisine 🍜",
    "BDIftar 🌙",
    "Erasmus Party 🎶",
    "Christmas 🎄",
    "Globe Potter 🎨",
    "Happy New Year 🥂",
];

// Pre-calculated random values to avoid hydration mismatch and improve purity
export const PHOTO_WALL_ROTATIONS = PHOTO_WALL_KEYS.map(() =>
    (Math.random() * 16 - 8).toFixed(1),
);
export const PHOTO_WALL_TAPE_ROTATIONS = PHOTO_WALL_KEYS.map(() =>
    (Math.random() * 10 - 5).toFixed(1),
);

export const STAMP_COLORS = [
    "#E63946",
    "#FFB703",
    "#3D5AFE",
    "#2EC4B6",
    "#7B2FF7",
    "#FF6B6B",
];

export interface BureauMember {
    name: string;
    role: string;
    photo?: string;
    email?: string;
    phone?: string;
}

export const BUREAU_MEMBERS: BureauMember[] = [
    { name: "Molka", role: "Présidente", photo: "/members/molka.jpeg" },
    {
        name: "Christophe",
        role: "Vice-Président",
        photo: "/members/christophe.jpeg",
        email: "christophe.prat@telecom-paris.fr",
    },
    {
        name: "Fadi",
        role: "Trésorière",
        photo: "/members/fadi.jpeg",
        email: "fadi.beirouty@telecom-paris.fr",
    },
    {
        name: "Fernanda",
        role: "Secrétaire Générale",
        photo: "/members/fernanda.jpeg",
        email: "fernanda.ferromorais@telecom-paris.fr",
    },
    {
        name: "Runjia",
        role: "Communication",
        photo: "/members/runjia.jpeg",
        email: "runjia.chen@telecom-paris.fr",
    },
    {
        name: "Cosmin",
        role: "Events",
        photo: "/members/cosmin.jpeg",
        email: "cosmin.dinu-thiery@telecom-paris.fr",
    },
    {
        name: "Rafael",
        role: "Events",
        photo: "/members/rafael.jpeg",
        email: "rafael.sesoko@telecom-paris.fr",
    },
    {
        name: "Federico",
        role: "Relations extérieures",
        photo: "/members/federico.jpeg",
        email: "federico.mendezzugarramurdi@telecom-paris.fr",
    },
    {
        name: "Younès",
        role: "Relations extérieures",
        photo: "/members/younes.jpeg",
        email: "younes.hallai@telecom-paris.fr",
    },
];

export const WELCOME_TEXTS =
    "Bienvenue • Welcome • Bem-vindo • Willkommen • Bienvenido • 欢迎 • أهلاً • Benvenuto • 환영합니다 • ようこそ • Hoş geldiniz • Witamy • Välkommen • Welkom • ";
