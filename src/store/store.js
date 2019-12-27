import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        bands: [
            {
                id: 'apey',
                name: 'Apey',
                cover: {
                    img: 'apey.jpg',
                    text: 'Apey',
                },
                text: 'Áron ‘Apey’ Andris neve valószínűleg kevesek számára cseng ismeretlenül (LAZARVS, Apey & The Pea,' +
                  ' Trillion, ex-Neck Sprain, ex-Grand Mexican Warlock), első önálló albuma, a 2010-ben megjelent Feathers,' +
                  ' Black Flowers, amely a gyermekkorát tükrözi. Az album megjelenése óta Andris 2016. májusában mutatta be' +
                  ' új lemezét, a Foxes-t. Az albumon tizenegy dal kapott helyet, melyeket Andris személyes érzései, alvás zavara' +
                  ' és belső problémái ihlettek. A lemez megjelenése után belföldi turnéra indult az Anna & the Barbies-sal majd,' +
                  '2017-ben megjelent harmadik nagylemeze a Stranger, amely a legsikeresebb lemeze lett. 2018-ban a Margaret Island-dal ' +
                  'turnézott és nyáron fellépett Magyaroszág legnagyobb fesztiváljain. 2018 szeptemberében meghívást kapott a ' +
                  'Lollapalooza fesztiválra Berlinbe. 2019-ben fellépett Groningenben a Eurosonic showcase fesztiválon. 2019 ' +
                  'februárjában kiemelkedő dalszerzői teljesítményeiért, sokoldalú hangzásvilágáért díjazta az Artisjus az év ' +
                  'junior dalszerzőjeként. ‘Kevés olyan sokoldalú dalszerző szaladgál a világban, aki egyszerre több műfajban, önazonosan, egyedi saját hanggal és hiteles üzenettel megállja a helyét. Áron András dalaiból árad az a fajta erőlködésmentes attitűd, ami segít elhinni: zenei mondanivalója egyetemes, dalszövegei mélyről merítenek, de mégis egyszerűséget hordoznak. Legfőbb erénye a tiszteletreméltó és inspiráló bátorság, a kompromisszumok nélküli művészi hang, az őszinteség önmagáról és világnézetéről.’\n' +
                  '2020 -ban jelenik meg Andris negyedik nagylemeze, a Book of Changes melyről az első single Nothing At ' +
                  'Allcímmel jelent meg 2019 októberében.',
                links: [
                    {
                        name: "Website",
                        text: "",
                        link: "https://apey.hu",
                    },
                    {
                        name: "Merch",
                        text: "",
                        link: "https://apey.hu/webshop/",
                    },
                    {
                        name: "Facebook",
                        text: "",
                        link: "https://www.facebook.com/apeymusic/",
                    },
                    {
                        name: "Youtube",
                        text: "",
                        link: "https://www.youtube.com/user/apeyandthepea?fbclid=IwAR3P7IQ2ld9joNlBj6SPPn906ioUU2STtSyOsxhXO97PzJ2IDrDDBm8sPcA",
                    },
                    {
                        name: "Instagram",
                        text: "",
                        link: "https://www.instagram.com/apeyfoxes/?fbclid=IwAR1SKSQtxPulQxekrt-saqB5u_X7xhaUPLqppOTecaCK1Qyp6NtykB8o09g",
                    },
                    {
                        name: "Spotify",
                        text: "",
                        link: "https://open.spotify.com/artist/6LMJLvE6xcqaMbSCfMIRI2",
                    },
                    {
                        name: "Bandcamp",
                        text: "",
                        link: "https://aronandras.bandcamp.com",
                    },
                ],
                albums: [
                    {
                        title: "",
                        img: "",
                        link: "",
                    },
                ],
                rider: "apey_rider.jpg"
            },
            {
                id: 'aws',
                name: 'AWS',
                cover: {
                    img: 'aws.jpg',
                    text: 'AWS',
                },
                text: 'Szemünk előtt zajló rocktörténelem - gimnazista együttesből nő az AWS az egyik legsikeresebb metálbandává hazánkban. A holnap koncertzenekara megállíthatatlan: nagyobb, és magasabbra tör, mint valaha!\n' +
                  '\n' +
                  'Az öttagú modern metalt játszó zenekar 2006-os gimnáziumi alakulása óta nagy utat tett meg szó szerint és átvitt értelemben is: bejárta az egész országot, és 2018-ban ők képviselték Magyarországot a lisszaboni Eurovíziós Dalfesztiválon.\n' +
                  '\n' +
                  'Az elmúlt tizenhárom év alatt számtalan alkalommal körbeturnézták hazánk klubjait és fesztiváljait, miközben egyre nagyobb tömegek előtt adták elő dalaikat eddig megjelent négy nagylemezükről. Több alkalommal töltötték meg az A38 Hajót,  Akvárium Klubbot és Barba Negra Clubbot is egymás után.\n' +
                  '\n' +
                  'Számos elismerés után A Dal 2018 győzelem, Fonogram-jelölés és a lisszaboni Eurovízió döntős kaland következett, melynek folyományaképp felkerültek a nemzetközi metálzenei színtér radarjára is. Írt róluk a The New York Times, a Washington Post, külön cikket szentelt nekik a legendás NME, és interjúzott velük a VICE. A verseny közben pedig a világ egyik legnagyobb metálfesztiválja is felfigyelt rájuk. A Wacken Open Air a kezdetektől fogva lelkesen támogatta a csapatot social felületein, a döntőbe jutás után pedig azonnal meg is hívta őket játszani a fesztiválra 2018 augusztusában.\n' +
                  '\n' +
                  'Szeptemberben négy vonóssal, egy zongoristával és négy vokalistával kiegészülve adták elő repertoárjukat áthangszerelve a Madách színházban. Októberben az előre teltházas Barba Negra Clubban mutatták be negyedik nagylemezüket a Fekete Részemet.\n' +
                  '\n' +
                  'A csapat azóta is megállíthatatlan, klub turnék, fesztivál fellépések, kollaborációk, új megjelenések jellemzik a 2019-es évüket.\n',
            },
            {
                id: 'ersch',
                name: 'ersch',
                cover: {
                    img: 'ersch.jpg',
                    text: 'ersch',
                },
                text: 'Örs már elég régóta szobazenél. Régóta íródnak olyan dalok is, amik egész egyszerűen nem férnek be az AWS repertoárjába, így néha eljátssza őket pár haverjának. Lesznek szomorú dalok a tárgyfetisizmusról, lesznek vidám dalok a vidéki alkoholizmusról, és lesznek amcsi popslágerekbe bújtatott XX. századi lírák is. \n',
            },
            {
                id: 'lazarvs',
                name: 'LAZARVS',
                cover: {
                    img: 'lazarvs.jpg',
                    text: 'LAZARVS',
                },
                text: '2008 végén alakult budapesti zenekar, amely Áron András (ex-Neck Sprain) szólóprojektjéből átalakulva, egykori Superbutt tagokkal (Makai László, Prepelicza Zoltán) kiegészülve született meg. Zenéjük magját a klasszikus metál adja, melyhez összetéveszthetetlen, sötét hangulatú előadásmód párosul. 2011-ben jelent meg az első, 5 dalt tartalmazó EP ’The Day Ends’ címmel. 2013 júniusában megjelent első nagylemezük a ’Devil’s Nectar’, amely az “Év debütáló lemeze” lett a HangSúly zenei díj szavazásán és elnyerték az “Év albuma” díjat a Kettőnégy Gumizsiráf Díjátadón.\n' +
                  '2014 szeptemberében kiadták a második nagylemezüket, a ‘Hellish’-t, amely  2015-ben Fonogram díjat nyert az "Év hazai hard rock vagy metálalbuma" kategóriában. A HangSúly zenei díj szavazásán is elnyerte az "Év albuma" címet, illetve az Apey & The Pea lett az “Év koncertzenekara”.\n' +
                  '2016 áprilisában elindult az első önálló országos turnéjuk, valamint elkezdték a harmadik nagylemezük írását. 2017 szeptemberében jelentkeztek immáron harmadik lemezükkel melynek címe ‘HEX’, a teltházas A38-on tartott lemezbemutató koncert és a ‘RATS’ turné keretein belül körbe utazták hazánk városait. 2018 májusában a NAGY-SZÍN-PAD fődíját a közönségszavazatok alapján az Apey & The Pea nyerte, így 2018-ban a Sziget fesztivál, a  VOLT fesztivál, a Strand fesztivál nagyszínpadán léphettek fel. Számos egyéb nyári fesztivál fellépés mellett jártak Csehországban és Lengyelországban a Pol’and’Rock fesztiválon. \n' +
                  '2019-ben a zenekar képviselte Magyarországot a 2019-es Eurosonic fesztiválon, illetve a Tallin Music Week -en. Áprilisban 25 állomásos nightlineres Európa turnéra indultak, ezt követte egy tizenegy állomásos fesztivál turné, melynek végén szeptember 19-én több ezer ember előtt, tizedik születésnapi koncertjük végén jelentették be a zenekar tagjai, hogy ez volt az Apey & the Pea utolsó fellépése. A jubileum ugyanis egyben korszakváltást is jelent, a metál trió LAZARVS néven folytatja tovább. „Nagyon köszönjük mindenkinek az eddigi 10 évet, minden pillanatát imádtuk. Mint azt bizonyára már a legtöbben tudjátok, nagy lendülettel íródnak az új számok, és minél többet dolgozunk rajta, minél közelebb a végcél, úgy érezzük, új fejezetet kell nyissunk a zenekar életében. Innentől LAZARVS néven folytatjuk tovább” – jelentették be a zenekar tagjai.\n' +
                  '2019 októberben ismét magyarországi klub turnéra indultak emellett a 2020 őszén megjelenő, ‘Lazarvs’ című lemezükön is elkezdtek dolgozni. „Ezzel az anyaggal zeneileg nagyon messzire megyünk. Hideg, helyenként kifejezetten morbid lesz, tele új dolgokkal” – mesélte Áron András „Apey”.\n',
            },
            {
                id: 'stubborn',
                name: 'Stubborn',
                cover: {
                    img: 'stubborn.jpg',
                    text: 'Stubborn',
                },
                text: 'A Stubborn 2008-ban alakult, de igazán aktív létezése 2010-től számolható.\n' +
                  'Önmagukat chaotic hardcore zenekarként aposztrofálják, zenéjük vegyíti a metalcore, hardcore elemeket, fogós/húzós riffekkel.\n' +
                  'Megjelentettek 3 Ep-t, valamint 2 nagylemezt (The Ache of Love - 2014, Let\'s Start a Fire - 2018) mely utóbbi, nemcsak, hogy 2018 egyik legerősebb hazai anyaga lett, hanem definiálta is azt, amit a Stubborntól nemcsak élőben, hanem lemezen is elvárhatnak a rajongók: a feszes váltások, a súlyos groove-ok mellett önfeledt, pozitív vibe sugárzik a dalokból.\n' +
                  'Az ország szinte összes klubjában megfordultak már, valamint maguk mögött tudhatnak két EU, -és egy Balkán turnét.\n' +
                  'A zenekar igazi ereje élőben mutatkozik meg, ugyanis felettébb őrült/energikus bulikat nyomnak, ezért nem meglepő az sem, ha koncert közben egy-egy tagot a közönség soraiban, vagy épp egy hangfalat megmászva láthatsz.\n',
            },
        ],
    },
    getters: {
        bands: state => {
            return state.bands;
        },
        getBandById: state => id => {
            return state.bands.find(band => band.id === id);
        }
    },
    mutations: {
        updateBands: (state, payload) => {
            state.bands = payload;
        },
    },
    actions: {
        updateBands: ({commit}, payload) => {
            commit('updateBands', payload);
        },
    },
});