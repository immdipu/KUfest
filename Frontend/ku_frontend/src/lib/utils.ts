import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const LanguageList: any = [
  { label: "Abkhazian", value: "Abkhazian" },
  { label: "Afar", value: "Afar" },
  { label: "Afrikaans", value: "Afrikaans" },
  { label: "Akan", value: "Akan" },
  { label: "Albanian", value: "Albanian" },
  { label: "Amharic", value: "Amharic" },
  { label: "Arabic", value: "Arabic" },
  { label: "Aragonese", value: "Aragonese" },
  { label: "Armenian", value: "Armenian" },
  { label: "Assamese", value: "Assamese" },
  { label: "Avaric", value: "Avaric" },
  { label: "Avestan", value: "Avestan" },
  { label: "Aymara", value: "Aymara" },
  { label: "Azerbaijani", value: "Azerbaijani" },
  { label: "Bambara", value: "Bambara" },
  { label: "Bashkir", value: "Bashkir" },
  { label: "Basque", value: "Basque" },
  { label: "Belarusian", value: "Belarusian" },
  { label: "Bengali", value: "Bengali" },
  { label: "Bihari languages", value: "Bihari languages" },
  { label: "Bislama", value: "Bislama" },
  { label: "Bosnian", value: "Bosnian" },
  { label: "Breton", value: "Breton" },
  { label: "Bulgarian", value: "Bulgarian" },
  { label: "Burmese", value: "Burmese" },
  { label: "Catalan, Valencian", value: "Catalan, Valencian" },
  { label: "Chamorro", value: "Chamorro" },
  { label: "Chechen", value: "Chechen" },
  { label: "Chichewa, Chewa, Nyanja", value: "Chichewa, Chewa, Nyanja" },
  { label: "Chinese", value: "Chinese" },
  { label: "Chuvash", value: "Chuvash" },
  { label: "Cornish", value: "Cornish" },
  { label: "Corsican", value: "Corsican" },
  { label: "Cree", value: "Cree" },
  { label: "Croatian", value: "Croatian" },
  { label: "Czech", value: "Czech" },
  { label: "Danish", value: "Danish" },
  { label: "Divehi, Dhivehi, Maldivian", value: "Divehi, Dhivehi, Maldivian" },
  { label: "Dutch, Flemish", value: "Dutch, Flemish" },
  { label: "Dzongkha", value: "Dzongkha" },
  { label: "English", value: "English" },
  { label: "Esperanto", value: "Esperanto" },
  { label: "Estonian", value: "Estonian" },
  { label: "Ewe", value: "Ewe" },
  { label: "Faroese", value: "Faroese" },
  { label: "Fijian", value: "Fijian" },
  { label: "Finnish", value: "Finnish" },
  { label: "French", value: "French" },
  { label: "Fulah", value: "Fulah" },
  { label: "Galician", value: "Galician" },
  { label: "Ganda", value: "Ganda" },
  { label: "Georgian", value: "Georgian" },
  { label: "German", value: "German" },
  { label: "Greek, Modern (1453-)", value: "Greek, Modern (1453-)" },
  { label: "Guarani", value: "Guarani" },
  { label: "Gujarati", value: "Gujarati" },
  { label: "Haitian, Haitian Creole", value: "Haitian, Haitian Creole" },
  { label: "Hausa", value: "Hausa" },
  { label: "Hebrew", value: "Hebrew" },
  { label: "Herero", value: "Herero" },
  { label: "Hindi", value: "Hindi" },
  { label: "Hiri Motu", value: "Hiri Motu" },
  { label: "Hungarian", value: "Hungarian" },
  { label: "Icelandic", value: "Icelandic" },
  { label: "Ido", value: "Ido" },
  { label: "Igbo", value: "Igbo" },
  { label: "Indonesian", value: "Indonesian" },
  {
    label: "Interlingua (International Auxiliary Language Association)",
    value: "Interlingua (International Auxiliary Language Association)",
  },
  { label: "Interlingue, Occidental", value: "Interlingue, Occidental" },
  { label: "Inuktitut", value: "Inuktitut" },
  { label: "Inupiaq", value: "Inupiaq" },
  { label: "Irish", value: "Irish" },
  { label: "Italian", value: "Italian" },
  { label: "Japanese", value: "Japanese" },
  { label: "Javanese", value: "Javanese" },
  { label: "Kalaallisut, Greenlandic", value: "Kalaallisut, Greenlandic" },
  { label: "Kannada", value: "Kannada" },
  { label: "Kanuri", value: "Kanuri" },
  { label: "Kashmiri", value: "Kashmiri" },
  { label: "Kazakh", value: "Kazakh" },
  { label: "Kikuyu, Gikuyu", value: "Kikuyu, Gikuyu" },
  { label: "Kinyarwanda", value: "Kinyarwanda" },
  { label: "Kirghiz, Kyrgyz", value: "Kirghiz, Kyrgyz" },
  { label: "Komi", value: "Komi" },
  { label: "Kongo", value: "Kongo" },
  { label: "Korean", value: "Korean" },
  { label: "Kurdish", value: "Kurdish" },
  { label: "Kwanyama, Kuanyama", value: "Kwanyama, Kuanyama" },
  { label: "Lao", value: "Lao" },
  { label: "Latin", value: "Latin" },
  { label: "Latvian", value: "Latvian" },
  {
    label: "Limburgish, Limburgan, Limburger",
    value: "Limburgish, Limburgan, Limburger",
  },
  { label: "Lingala", value: "Lingala" },
  { label: "Lithuanian", value: "Lithuanian" },
  { label: "Luba-Katanga", value: "Luba-Katanga" },
  {
    label: "Luxembourgish, Letzeburgesch",
    value: "Luxembourgish, Letzeburgesch",
  },
  { label: "Macedonian", value: "Macedonian" },
  { label: "Malagasy", value: "Malagasy" },
  { label: "Malay", value: "Malay" },
  { label: "Malayalam", value: "Malayalam" },
  { label: "Maltese", value: "Maltese" },
  { label: "Manx", value: "Manx" },
  { label: "Maori", value: "Maori" },
  { label: "Marathi", value: "Marathi" },
  { label: "Marshallese", value: "Marshallese" },
  { label: "Mongolian", value: "Mongolian" },
  { label: "Nauru", value: "Nauru" },
  { label: "Navajo, Navaho", value: "Navajo, Navaho" },
  {
    label: "Ndebele, South, South Ndebele",
    value: "Ndebele, South, South Ndebele",
  },
  {
    label: "Ndebele, North, North Ndebele",
    value: "Ndebele, North, North Ndebele",
  },
  { label: "Ndonga", value: "Ndonga" },
  { label: "Nepali", value: "Nepali" },
  { label: "Northern Sami", value: "Northern Sami" },
  { label: "Norwegian", value: "Norwegian" },
  { label: "Norwegian Bokmål", value: "Norwegian Bokmål" },
  { label: "Norwegian Nynorsk", value: "Norwegian Nynorsk" },
  { label: "Occitan (post 1500)", value: "Occitan (post 1500)" },
  { label: "Ojibwa", value: "Ojibwa" },
  { label: "Oriya", value: "Oriya" },
  { label: "Oromo", value: "Oromo" },
  { label: "Ossetian, Ossetic", value: "Ossetian, Ossetic" },
  { label: "Pali", value: "Pali" },
  { label: "Panjabi, Punjabi", value: "Panjabi, Punjabi" },
  { label: "Pashto, Pushto", value: "Pashto, Pushto" },
  { label: "Persian", value: "Persian" },
  { label: "Polish", value: "Polish" },
  { label: "Portuguese", value: "Portuguese" },
  { label: "Quechua", value: "Quechua" },
  { label: "Romansh", value: "Romansh" },
  {
    label: "Romanian, Moldavian, Moldovan",
    value: "Romanian, Moldavian, Moldovan",
  },
  { label: "Romany", value: "Romany" },
  { label: "Russian", value: "Russian" },
  { label: "Samoan", value: "Samoan" },
  { label: "Sango", value: "Sango" },
  { label: "Sanskrit", value: "Sanskrit" },
  { label: "Serbian", value: "Serbian" },
  { label: "Serbo-Croatian", value: "Serbo-Croatian" },
  { label: "Sesotho", value: "Sesotho" },
  { label: "Setswana", value: "Setswana" },
  { label: "Shona", value: "Shona" },
  { label: "Sichuan Yi, Nuosu", value: "Sichuan Yi, Nuosu" },
  { label: "Sindhi", value: "Sindhi" },
  { label: "Sinhala, Sinhalese", value: "Sinhala, Sinhalese" },
  { label: "Slovak", value: "Slovak" },
  { label: "Slovenian", value: "Slovenian" },
  { label: "Somali", value: "Somali" },
  { label: "Sotho, Southern", value: "Sotho, Southern" },
  { label: "Spanish, Castilian", value: "Spanish, Castilian" },
  { label: "Sundanese", value: "Sundanese" },
  { label: "Swahili", value: "Swahili" },
  { label: "Swati", value: "Swati" },
  { label: "Swedish", value: "Swedish" },
  { label: "Tagalog", value: "Tagalog" },
  { label: "Tahitian", value: "Tahitian" },
  { label: "Tajik", value: "Tajik" },
  { label: "Tamil", value: "Tamil" },
  { label: "Tatar", value: "Tatar" },
  { label: "Telugu", value: "Telugu" },
  { label: "Thai", value: "Thai" },
  { label: "Tibetan", value: "Tibetan" },
  { label: "Tigrinya", value: "Tigrinya" },
  { label: "Tonga (Tonga Islands)", value: "Tonga (Tonga Islands)" },
  { label: "Tsonga", value: "Tsonga" },
  { label: "Tswana", value: "Tswana" },
  { label: "Tumbuka", value: "Tumbuka" },
  { label: "Turkish", value: "Turkish" },
  { label: "Turkmen", value: "Turkmen" },
  { label: "Twi", value: "Twi" },
  { label: "Uighur, Uyghur", value: "Uighur, Uyghur" },
  { label: "Ukrainian", value: "Ukrainian" },
  { label: "Urdu", value: "Urdu" },
  { label: "Uzbek", value: "Uzbek" },
  { label: "Venda", value: "Venda" },
  { label: "Vietnamese", value: "Vietnamese" },
  { label: "Volapük", value: "Volapük" },
  { label: "Walloon", value: "Walloon" },
  { label: "Welsh", value: "Welsh" },
  { label: "Western Frisian", value: "Western Frisian" },
  { label: "Wolof", value: "Wolof" },
  { label: "Xhosa", value: "Xhosa" },
  { label: "Yiddish", value: "Yiddish" },
  { label: "Yoruba", value: "Yoruba" },
  { label: "Zhuang, Chuang", value: "Zhuang, Chuang" },
  { label: "Zulu", value: "Zulu" },
];
