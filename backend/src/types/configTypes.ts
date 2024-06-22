import { THEMES, LANGUAGES, ENVS, DBS } from "../constants/configConstants";

type Theme = (typeof THEMES)[number];

type env = (typeof ENVS)[number];

type db = (typeof DBS)[number];

type UILanguageCodes = (typeof LANGUAGES)[number];

// iso 639-1 and 639-2 codes for i18n
type LanguageCode =
  | "ab" // Abkhazian
  | "ace" // Achinese
  | "ach" // Acoli
  | "ada" // Adangme
  | "ady" // Adyghe
  | "aa" // Afar
  | "afh" // Afrihili
  | "af" // Afrikaans
  | "ak" // Akan
  | "akk" // Akkadian
  | "sq" // Albanian
  | "ale" // Aleut
  | "am" // Amharic
  | "ar" // Arabic
  | "ar-ae" // UAE Arabic
  | "ar-bh" // Bahrain Arabic
  | "ar-dz" // Algerian Arabic
  | "ar-eg" // Egyptian Arabic
  | "ar-iq" // Iraqi Arabic
  | "ar-jo" // Jordanian Arabic
  | "ar-kw" // Kuwait Arabic
  | "ar-lb" // Lebanese Arabic
  | "ar-ly" // Libyan Arabic
  | "ar-ma" // Moroccan Arabic
  | "ar-om" // Omani Arabic
  | "ar-qa" // Qatari Arabic
  | "ar-sa" // Saudi Arabic
  | "ar-sy" // Syrian Arabic
  | "ar-tn" // Tunisian Arabic
  | "ar-ye" // Yemen Arabic
  | "arc" // Aramaic
  | "arp" // Arapaho
  | "arn" // Araucanian
  | "arw" // Arawak
  | "hy" // Armenian
  | "an" // Aragonese
  | "ast" // Asturian
  | "as" // Assamese
  | "av" // Avaric
  | "ae" // Avestan
  | "awa" // Awadhi
  | "ay" // Aymara
  | "az" // Azerbaijani
  | "az-arab" // Azerbaijani in Arabic script
  | "az-cyrl" // Azerbaijani in Cyrillic script
  | "az-latn" // Azerbaijani in Latin script
  | "ban" // Balinese
  | "bal" // Baluchi
  | "bm" // Bambara
  | "bad" // Banda
  | "bas" // Basa
  | "ba" // Bashkir
  | "eu" // Basque
  | "btk" // Batak (Indonesia)
  | "bej" // Beja
  | "be" // Belarusian
  | "bem" // Bemba
  | "bn" // Bengali
  | "bho" // Bhojpuri
  | "bh" // Bihari
  | "bik" // Bikol
  | "bin" // Bini
  | "bi" // Bislama
  | "bs" // Bosnian
  | "bra" // Braj
  | "br" // Breton
  | "bug" // Buginese
  | "bg" // Bulgarian
  | "bua" // Buriat
  | "my" // Burmese
  | "cad" // Caddo
  | "car" // Carib
  | "ca" // Catalan
  | "ceb" // Cebuano
  | "ch" // Chamorro
  | "ce" // Chechen
  | "chr" // Cherokee
  | "chy" // Cheyenne
  | "chb" // Chibcha
  | "ny" // Chichewa
  | "zh" // Chinese
  | "zh-hans" // Chinese, Simplified script
  | "zh-hant" // Chinese, Traditional script
  | "zh-tw" // Taiwan Chinese
  | "zh-cn" // PRC Chinese
  | "zh-sg" // Singapore Chinese
  | "zh-mo" // Macau Chinese
  | "zh-hk" // Hong Kong Chinese
  | "zh-guoyu" // Mandarin
  | "zh-hakka" // Hakka
  | "zh-min" // Hokkien
  | "zh-min-nan" // Southern Hokkien
  | "zh-wuu" // Shanghaiese
  | "zh-xiang" // Hunanese
  | "zh-gan" // Gan
  | "zh-yue" // Cantonese
  | "chn" // Chinook Jargon
  | "chp" // Chipewyan
  | "cho" // Choctaw
  | "cu" // Church Slavic
  | "chk" // Chuukese
  | "cv" // Chuvash
  | "cop" // Coptic
  | "kw" // Cornish
  | "co" // Corsican
  | "cr" // Cree
  | "mus" // Creek
  | "hr" // Croatian
  | "cs" // Czech
  | "dak" // Dakota
  | "da" // Danish
  | "dar" // Dargwa
  | "day" // Dayak
  | "dv" // Divehi
  | "doi" // Dogri
  | "dgr" // Dogrib
  | "dua" // Duala
  | "nl" // Dutch
  | "nl-nl" // Netherlands Dutch
  | "nl-be" // Belgian Dutch
  | "dum" // Middle Dutch
  | "dyu" // Dyula
  | "dz" // Dzongkha
  | "efi" // Efik
  | "egy" // Ancient Egyptian
  | "eka" // Ekajuk
  | "elx" // Elamite
  | "en" // English
  | "en-au" // Australian English
  | "en-bz" // Belize English
  | "en-ca" // Canadian English
  | "en-gb" // UK English
  | "en-ie" // Irish English
  | "en-jm" // Jamaican English
  | "en-nz" // New Zealand English
  | "en-ph" // Philippine English
  | "en-tt" // Trinidad English
  | "en-us" // US English
  | "en-za" // South African English
  | "en-zw" // Zimbabwe English
  | "enm" // Old English (1100-1500)
  | "ang" // Old English (ca.450-1100)
  | "myv" // Erzya
  | "eo" // Esperanto
  | "et" // Estonian
  | "ee" // Ewe
  | "ewo" // Ewondo
  | "fan" // Fang
  | "fat" // Fanti
  | "fo" // Faroese
  | "fj" // Fijian
  | "fi" // Finnish
  | "fon" // Fon
  | "fr" // French
  | "fr-fr" // France French
  | "fr-be" // Belgian French
  | "fr-ca" // Canadian French
  | "fr-ch" // Swiss French
  | "fr-lu" // Luxembourg French
  | "fr-mc" // Monaco French
  | "frm" // Middle French (ca.1400-1600)
  | "fro" // Old French (842-ca.1400)
  | "fy" // Frisian
  | "fur" // Friulian
  | "ff" // Fulah
  | "gaa" // Ga
  | "gd" // Scots Gaelic
  | "gl" // Gallegan
  | "lg" // Ganda
  | "gay" // Gayo
  | "gba" // Gbaya
  | "gez" // Geez
  | "ka" // Georgian
  | "de" // German
  | "de-at" // Austrian German
  | "de-be" // Belgian German
  | "de-ch" // Swiss German
  | "de-de" // Germany German
  | "de-li" // Liechtenstein German
  | "de-lu" // Luxembourg German
  | "gmh" // Middle High German (ca.1050-1500)
  | "goh" // Old High German (ca.750-1050)
  | "gil" // Gilbertese
  | "gon" // Gondi
  | "gor" // Gorontalo
  | "got" // Gothic
  | "grb" // Grebo
  | "grc" // Ancient Greek
  | "el" // Modern Greek
  | "gn" // Guarani
  | "gu" // Gujarati
  | "gwi" // Gwich'in
  | "hai" // Haida
  | "ht" // Haitian
  | "ha" // Hausa
  | "haw" // Hawaiian
  | "he" // Hebrew
  | "hz" // Herero
  | "hil" // Hiligaynon
  | "him" // Himachali
  | "hi" // Hindi
  | "ho" // Hiri Motu
  | "hit" // Hittite
  | "hmn" // Hmong
  | "hu" // Hungarian
  | "hup" // Hupa
  | "iba" // Iban
  | "is" // Icelandic
  | "io" // Ido
  | "ig" // Igbo
  | "ijo" // Ijo
  | "ilo" // Iloko
  | "id" // Indonesian
  | "inh" // Ingush
  | "ia" // Interlingua
  | "ie" // Interlingue
  | "iu" // Inuktitut
  | "ik" // Inupiaq
  | "ga" // Irish
  | "mga" // Middle Irish (900-1200)
  | "sga" // Old Irish (to 900)
  | "it" // Italian
  | "ja" // Japanese
  | "jv" // Javanese
  | "jrb" // Judeo-Arabic
  | "jpr" // Judeo-Persian
  | "kbd" // Kabardian
  | "kab" // Kabyle
  | "kac" // Kachin
  | "kl" // Kalaallisut
  | "xal" // Kalmyk
  | "kam" // Kamba
  | "kn" // Kannada
  | "kr" // Kanuri
  | "krc" // Karachay-Balkar
  | "kaa" // Kara-Kalpak
  | "kar" // Karen
  | "ks" // Kashmiri
  | "csb" // Kashubian
  | "kaw" // Kawi
  | "kk" // Kazakh
  | "kha" // Khasi
  | "km" // Khmer
  | "ki" // Kikuyu
  | "kmb" // Kimbundu
  | "rw" // Kinyarwanda
  | "ky" // Kirghiz
  | "kv" // Komi
  | "kg" // Kongo
  | "kok" // Konkani
  | "ko" // Korean
  | "kos" // Kosraean
  | "kpe" // Kpelle
  | "kro" // Kru
  | "kj" // Kuanyama
  | "kum" // Kumyk
  | "ku" // Kurdish
  | "kru" // Kurukh
  | "kut" // Kutenai
  | "lad" // Ladino
  | "lah" // Lahnda
  | "lam" // Lamba
  | "lo" // Lao
  | "la" // Latin
  | "lv" // Latvian
  | "lb" // Letzeburgesch
  | "lez" // Lezghian
  | "li" // Limburgish
  | "ln" // Lingala
  | "lt" // Lithuanian
  | "nds" // Low German
  | "art-lojban" // Lojban
  | "loz" // Lozi
  | "lu" // Luba-Katanga
  | "lua" // Luba-Lulua
  | "lui" // Luiseno
  | "lun" // Lunda
  | "luo" // Luo (Kenya and Tanzania)
  | "lus" // Lushai
  | "mk" // Macedonian
  | "mad" // Madurese
  | "mag" // Magahi
  | "mai" // Maithili
  | "mak" // Makasar
  | "mg" // Malagasy
  | "ms" // Malay
  | "ml" // Malayalam
  | "mt" // Maltese
  | "mnc" // Manchu
  | "mdr" // Mandar
  | "man" // Mandingo
  | "mni" // Manipuri
  | "gv" // Manx
  | "mi" // Maori
  | "mr" // Marathi
  | "chm" // Mari
  | "mh" // Marshallese
  | "mwr" // Marwari
  | "mas" // Masai
  | "men" // Mende
  | "mic" // Micmac
  | "min" // Minangkabau
  | "moh" // Mohawk
  | "mdf" // Moksha
  | "mo" // Moldavian
  | "lol" // Mongo
  | "mn" // Mongolian
  | "mos" // Mossi
  | "nah" // Nahuatl
  | "nap" // Neapolitan
  | "na" // Nauru
  | "nv" // Navajo
  | "nd" // North Ndebele
  | "nr" // South Ndebele
  | "ng" // Ndonga
  | "ne" // Nepali
  | "new" // Newari
  | "nia" // Nias
  | "niu" // Niuean
  | "nog" // Nogai
  | "non" // Old Norse
  | "no" // Norwegian
  | "nb" // Norwegian Bokmal
  | "nn" // Norwegian Nynorsk
  | "nso" // Northern Sotho
  | "st" // Southern Sotho
  | "oj" // Ojibwa
  | "or" // Oriya
  | "om" // Oromo
  | "osa" // Osage
  | "os" // Ossetian; Ossetic
  | "pal" // Pahlavi
  | "pau" // Palauan
  | "pi" // Pali
  | "pam" // Pampanga
  | "pag" // Pangasinan
  | "pa" // Panjabi
  | "pap" // Papiamento
  | "fa" // Persian
  | "peo" // Old Persian (ca.600-400 B.C.)
  | "phn" // Phoenician
  | "pon" // Pohnpeian
  | "pl" // Polish
  | "pt" // Portuguese
  | "pt-pt" // Portugal Portuguese
  | "pt-br" // Brazilian Portuguese
  | "pra" // Prakrit languages
  | "pro" // Old Provencal (to 1500)
  | "ps" // Pushto
  | "qu" // Quechua
  | "rm" // Raeto-Romance
  | "raj" // Rajasthani
  | "rap" // Rapanui
  | "rar" // Rarotongan
  | "ro" // Romanian
  | "rom" // Romany
  | "rn" // Rundi
  | "ru" // Russian
  | "se" // Northern Sami
  | "sma" // Southern Sami
  | "smn" // Inari Sami
  | "smj" // Lule Sami
  | "sms" // Skolt Sami
  | "sm" // Samoan
  | "sad" // Sandawe
  | "sg" // Sango
  | "sa" // Sanskrit
  | "sat" // Santali
  | "sc" // Sardinian
  | "sas" // Sasak
  | "sco" // Scots
  | "sel" // Selkup
  | "sr" // Serbian
  | "sr-cyrl" // Serbian in Cyrillic script
  | "sr-latn" // Serbian in Latin script
  | "srr" // Serer
  | "shn" // Shan
  | "sn" // Shona
  | "sid" // Sidamo
  | "bla" // Siksika
  | "sd" // Sindhi
  | "si" // Sinhalese
  | "den" // Slave (Athapascan)
  | "sk" // Slovak
  | "sl" // Slovenian
  | "sog" // Sogdian
  | "so" // Somali
  | "son" // Songhai
  | "snk" // Soninke
  | "wen" // Sorbian languages
  | "nso" // Northern Sotho
  | "st" // Southern Sotho
  | "es" // Spanish
  | "es-ar" // Argentine Spanish
  | "es-bo" // Bolivian Spanish
  | "es-cl" // Chilean Spanish
  | "es-co" // Colombian Spanish
  | "es-do" // Dominican Spanish
  | "es-ec" // Ecuadorian Spanish
  | "es-es" // Spain Spanish
  | "es-gt" // Guatemalan Spanish
  | "es-hn" // Honduran Spanish
  | "es-mx" // Mexican Spanish
  | "es-pa" // Panamanian Spanish
  | "es-pe"
  | "es-pa" // Panamanian Spanish
  | "es-pe" // Peruvian Spanish
  | "es-pr" // Puerto Rican Spanish
  | "es-py" // Paraguayan Spanish
  | "es-sv" // Salvadoran Spanish
  | "es-us" // US Spanish
  | "es-uy" // Uruguayan Spanish
  | "es-ve" // Venezuelan Spanish
  | "suk" // Sukuma
  | "sux" // Sumerian
  | "su" // Sundanese
  | "sus" // Susu
  | "sw" // Swahili
  | "ss" // Swati
  | "sv" // Swedish
  | "sv-se" // Sweden Swedish
  | "sv-fi" // Finland Swedish
  | "syr" // Syriac
  | "tl" // Tagalog
  | "ty" // Tahitian
  | "tg" // Tajik
  | "tmh" // Tamashek
  | "ta" // Tamil
  | "tt" // Tatar
  | "te" // Telugu
  | "ter" // Tereno
  | "tet" // Tetum
  | "th" // Thai
  | "bo" // Tibetan
  | "tig" // Tigre
  | "ti" // Tigrinya
  | "tem" // Timne
  | "tiv" // Tiv
  | "tli" // Tlingit
  | "tpi" // Tok Pisin
  | "tkl" // Tokelau
  | "tog" // Tonga (Nyasa)
  | "to" // Tonga (Tonga Islands)
  | "tsi" // Tsimshian
  | "ts" // Tsonga
  | "tn" // Tswana
  | "tum" // Tumbuka
  | "tr" // Turkish
  | "ota" // Ottoman Turkish
  | "crh" // Crimean Turkish
  | "tk" // Turkmen
  | "tvl" // Tuvalu
  | "tyv" // Tuvinian
  | "tw" // Twi
  | "udm" // Udmurt
  | "uga" // Ugaritic
  | "ug" // Uighur
  | "uk" // Ukrainian
  | "umb" // Umbundu
  | "ur" // Urdu
  | "uz" // Uzbek
  | "uz-cyrl" // Uzbek in Cyrillic script
  | "uz-latn" // Uzbek in Latin script
  | "vai" // Vai
  | "ve" // Venda
  | "vi" // Vietnamese
  | "vo" // Volapük
  | "vot" // Votic
  | "wa" // Walloon
  | "wal" // Walamo
  | "war" // Waray
  | "was" // Washo
  | "cy" // Welsh
  | "wo" // Wolof
  | "xh" // Xhosa
  | "sah" // Yakut
  | "yao" // Yao
  | "yap" // Yapese
  | "ii" // Sichuan Yi
  | "yi" // Yiddish
  | "yo" // Yoruba
  | "znd" // Zande
  | "za" // Zhuang
  | "zu"; // Zulu

interface Environment {
  env: env;
  dbName: db;
}

export interface UserConfigType {
  userId: string;
  config: {
    theme: Theme;
    language: UILanguageCodes;
  };
}

export interface AppConfigType {
  theme: Theme;
  language: UILanguageCodes;
  environments: Environment[];
}
