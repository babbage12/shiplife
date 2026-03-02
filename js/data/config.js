// ============================================
// CONFIGURATION
// Constants, URLs, and global settings
// ============================================

// localStorage key for progress tracking
const STORAGE_KEY = 'shiplife_progress';

// Three narrative doors that must be visited
const DOORS_REQUIRED = ['Toledo, Ohio', 'Darwin, Australia', 'Auckland, New Zealand'];

// Mediterranean coordinates for celebration spin (centered on Italy)
const MED_COORDS = { lat: 41.0, lon: 19.0 };

// Cloudinary base URL
const CLOUDINARY_BASE = "https://res.cloudinary.com/de5jbyhxx/image/upload";

// AI-generated porthole textures toggle
const USE_AI_PORTHOLES = true;

// Texture state (will be populated during init)
let portholeFrameTexture = null;
let portholeSceneTexture = null;
const locationTextures = {};

// Toledo reference coordinates for initial globe position
const TOLEDO_Y = -0.10;
const TOLEDO_X = (41.6528 * Math.PI / 180);

// Animation timing
const introDuration = 3000;
const bounceDuration = 350;
const defaultZoomDistance = 1.5;   // Default camera distance
const atmosphereZoomDistance = 1.30; // Comfortable browsing distance
const bridgeBumpHeight = 0.4;     // Subtle lift during location transitions
const zoomOutDistance = 4.8;      // Further back for celebration spin only
const baseZoomInDistance = 1.7;
const mobileZoomMultiplier = 0.82;  // Mobile zooms ~18% closer to icons
const zoomOutDuration = 450;       // Faster zoom out
const zoomInDuration = 900;        // Slightly slower zoom in for smooth landing
const bridgeDuration = 800;        // Duration of the bridge bump animation

// Background music settings
const MUSIC_FADE_DURATION = 1500;
const MUSIC_MAX_VOLUME = 0.36;

// Audio tracks for each door
const doorAudioTracks = {
};

// Per-location porthole images
const locationPortholeURLs = {
    "Port Vila": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/v1767934122/marcie_00842__xyvw5f.png",
    "Kotor, Montenegro": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/v1767934308/marcie_00795__dqtfrv.png",
    "Milford Sound, New Zealand": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/v1767934562/marcie_00848__lsqvc7.png",
    "Bora Bora": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/v1767934658/marcie_00863__d9cfov.png",
    "Picton, New Zealand": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/v1767934726/marcie_00859__hg41ls.png",
    "Akaroa, New Zealand": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/v1767934782/marcie_00856__shstqa.png",
    "Wellington, New Zealand": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/v1767934920/marcie_00854__ddnt6o.png",
    "Toledo, Ohio": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/v1769977828/ComfyUI_00864__s9njoz.png",
    "Brisbane, Australia": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/v1767937320/marcie_00869__xtfnj3.png",
    "Portofino, Italy": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/v1767937437/marcie_00880__wrzehv.png",
    "Ephesus, Turkey": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/v1767937501/marcie_00884__glotfr.png",
    "Auckland, New Zealand": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/v1769977815/ComfyUI_00896__zn6bdc.png",
    "Darwin, Australia": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/v1769977819/ComfyUI_00873__yfqqdw.png",
    "Rome, Italy": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/v1767950310/marcie_01005__n4dbdz.png",
    "Piran, Slovenia": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/v1767950328/marcie_01050__qunmvg.png",
    "Sydney, Australia": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/v1767950196/marcie_00957__suiqhl.png",
    "Dubrovnik, Croatia": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/v1767950299/marcie_00998__uuyksn.png",
    "Ushuaia, Argentina": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/v1767952701/marcie_01044__d7wlbn.png",
    "Cairo, Egypt": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/shiplife/icons/cairo_icon.png",
    "Milos, Greece": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/v1767954451/marcie_01087__tjhnoz.png",
    "South Georgia": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/shiplife/icons/south_georgia_icon.png",
    "Bali, Indonesia": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/v1767954456/marcie_01078__lmxp7z.png",
    "Valletta, Malta": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/v1767954460/marcie_01076__naw5pw.png",
    "Ibiza, Spain": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/v1768419427/ComfyUI_00974__skii8k.png",
    "Santorini, Greece": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/v1768419411/ComfyUI_01097__hak9ts.png",
    "Tierra del Fuego": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/v1768419439/ComfyUI_00633__qqmezn.png",
    "Melbourne, Australia": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/v1768511020/ComfyUI_01199__xsa0xi.png",
    "Amazon River": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/v1768419439/ComfyUI_00694__gxxmvo.png",
    "Quebec City, Canada": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/v1768419438/ComfyUI_00700__i4ru8q.png",
    "Rio de Janeiro, Brazil": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/v1768419439/ComfyUI_00664__adibta.png",
    "Barcelona, Spain": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/shiplife/icons/barcelona_icon.png",
    "Portovenere, Italy": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/v1768419428/ComfyUI_00748__zuks5j.png",
    "Hobart, Tasmania": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/v1768419438/ComfyUI_00693__bw21n8.png",
    "Saguenay, Canada": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/v1768419438/ComfyUI_00709__desjzm.png",
    "Hong Kong": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/v1768419428/ComfyUI_00787__rnq7fa.png",
    "Florence, Italy": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/v1768419428/ComfyUI_00770__wxy82h.png",
    "Stromboli, Italy": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/v1768419428/ComfyUI_00777__b33hq1.png",
    "San Remo, Italy": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/v1768419428/ComfyUI_00757__cl8bge.png",
    "Roses, Spain": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/v1768419413/ComfyUI_00985__lilp6z.png",
    "Propriano, Corsica": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/v1768419427/ComfyUI_00956__dx6t6k.png",
    "Marseille, France": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/shiplife/icons/marseille_icon.png",
    "Le Lavandou, France": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/v1768419427/ComfyUI_00869__hehrgj.png",
    "Monte Carlo, Monaco": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/v1768419427/ComfyUI_00947__th5kfz.png",
    "Syracuse, Sicily": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/v1768419411/ComfyUI_01146__x2yqx0.png",
    "Corfu, Greece": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/v1768419413/ComfyUI_01013__sbssuy.png",
    "Celukan Bawang, Indonesia": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/v1768419413/ComfyUI_01041__vthddf.png",
    "Penang, Malaysia": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/v1768419412/ComfyUI_01053__gndtyw.png",
    "Mumbai, India": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/v1768419412/ComfyUI_01058__cz2too.png",
    "Dubai, UAE": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/v1768419411/ComfyUI_01073__xbhngr.png",
    "Tel Aviv, Israel": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/v1768419411/ComfyUI_01065__jwxuwx.png",
    "Suez Canal, Egypt": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/v1768419411/ComfyUI_01077__v2gdly.png",
    "Istanbul, Turkey": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/v1768419411/ComfyUI_01102__i1s5ok.png",
    "Panama Canal": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/v1768419413/ComfyUI_01022__lqkdsf.png",
    "Yalta, Ukraine": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/v1768511153/ComfyUI_01111__ydffje.png",
    "Muscat, Oman": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/v1768419412/ComfyUI_01055__nn4tuv.png",
    "Nessebar, Bulgaria": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/v1768419411/ComfyUI_01146__x2yqx0.png",
    "Christmas Island, Australia": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/v1768511020/ComfyUI_01202__yd7eff.png",
    "Rarotonga, Cook Islands": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/v1768511020/ComfyUI_01206__duz5ib.png",
    "Suva, Fiji": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/v1768511020/ComfyUI_01208__pxkkdh.png",
    "Apia, Samoa": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/v1768511021/ComfyUI_01218__asqixa.png",
    "Honolulu, Hawaii": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/v1768511021/ComfyUI_01248__onhvwh.png",
    "Tonga": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/v1768511020/ComfyUI_01211__atto6y.png",
    "Port Moresby, Papua New Guinea": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/v1768511021/ComfyUI_01251__iagqxb.png",
    "Airlie Beach, Australia": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/v1768511022/ComfyUI_01188__ooliee.png",
    "Broome, Australia": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/v1768511022/ComfyUI_01189__khavtb.png",
    "Napier, New Zealand": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/v1768511022/ComfyUI_01268__ydr8mk.png",
    "Adelaide, Australia": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/v1768511022/ComfyUI_01197__qc3jjg.png",
    "New Caledonia": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/ComfyUI_00857__dazqix.png",
    "Lifou": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/v1768511021/ComfyUI_01275__iw0wwu.png",
    "Mykonos, Greece": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/v1769193104/Mykonos_n3an7b.png",
    "Zakynthos, Greece": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/v1769193103/zakinthos_ymkjrv.png",
    "Nafplio, Greece": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/v1769193103/Nafplio_fd5rjr.png",
    "Patmos, Greece": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/v1769193103/Nafplio_fd5rjr.png",
    "Katakolon, Greece": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/v1769193103/Katakolon_lbryeo.png",
    "Pylos, Greece": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/v1769193103/Pylos_b3icbt.png",
    "Itea, Greece": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/v1769193102/Itea_ryq4tt.png",
    "Parga, Greece": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/v1769193102/Parga_xm2s9k.png",
    "Kuşadası, Turkey": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/v1769193102/Kusadasi_tdtdho.png",
    "Izmir, Turkey": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/v1769193102/Izmir_lt6b9j.png",
    "Çeşme, Turkey": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/v1769193102/Cesme_siilbx.png",
    "Hvar, Croatia": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/v1769193102/hvar_s7glqy.png",
    "Šibenik, Croatia": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/v1769195368/sibenik_eb8ez8.png",
    "Venice, Italy": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/v1769195366/venice_hyidml.png",
    "Ravenna, Italy": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/v1769195362/Ravenna_rmadgp.png",
    "Ponza, Italy": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/v1769896536/ComfyUI_00845__zqjdgd.png",
    "Amalfi, Italy": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/v1769896536/ComfyUI_00846__rstxah.png",
    "Elba, Italy": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/shiplife/icons/elba_icon.png",
    "Lipari, Italy": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/v1769896536/ComfyUI_00850__auntjc.png",
    "Bonifacio, Corsica": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/v1769896536/ComfyUI_00852__p4jual.png",
    "Barbados": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/v1769896540/ComfyUI_00857__dazqix.png",
    "Sanary-sur-Mer, France": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/v1769896536/ComfyUI_00854__a1cxmz.png",
    "Antibes, France": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/v1769896538/ComfyUI_00855__chqtla.png",
    "St. Tropez, France": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/v1769195361/San_Tropz_zg4d3c.png",
    "Constanța, Romania": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/v1769195362/Constanta_qcrxop.png",
    "Odessa, Ukraine": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/v1769195362/Odessa_gzcd78.png",
    "Haifa, Israel": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/v1769195362/Haifa_jfyzmb.png",
    "Red Sea Transit": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/v1769195362/red_sea_transit_okduvq.png",
    "Sharm El Sheikh, Egypt": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/v1769195362/Sharm_El_Sheikh_clrkiv.png",
    "Doha, Qatar": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/v1769195630/Doha_uhyiqk.png",
    "Mormugao, Goa": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/v1769197679/Mormugao_zppf54.png",
    "New Mangalore, India": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/v1769197678/new_mangalore_h4sacg.png",
    "Phuket, Thailand": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/v1769197678/Phuket_s3yyth.png",
    "Surabaya, Indonesia": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/v1769197674/surabaya_qw7xzj.png",
    "Semarang, Indonesia": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/v1769197678/Semerang_lvy3te.png",
    "Komodo Island, Indonesia": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/v1769896535/ComfyUI_00840__fycycg.png",
    "Dili, East Timor": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/v1769197678/Dili_qfmvy8.png",
    "Tauranga, New Zealand": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/v1769197674/tauranga_2_kz6fnc.png",
    "Perth / Fremantle, Australia": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/v1769197674/perth_dpqn2h.png",
    "Lemaire Channel, Antarctica": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/v1769197673/Lemaire_channel_bp4n2s.png",
    "Port Lockroy, Antarctica": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/v1769197673/port_lockroy_ysnts1.png",
    "Antarctica - Petermann Island": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/v1769197673/port_lockroy_ysnts1.png",
    "Falkland Islands": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/v1769199444/falkland_islands_anuweu.png",
    "Beagle Channel, Chile": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/v1769199440/beagle_channel_p92ljy.png",
    "Puerto Montt, Chile": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/v1769199440/Puerto_Montt_3_eavalr.png",
    "Castro, Chile": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/v1769896540/ComfyUI_00859__yfgdcx.png",
    "Punta Arenas, Chile": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/v1769199440/Puerto_Arenas_sfl1zj.png",
    "Valparaíso, Chile": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/v1769199439/Valparaiso_chile_jvearj.png",
    "Santiago, Chile": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/v1769199435/Santiago_njnykm.png",
    "Valdivia, Chile": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/v1769199434/Valdivia_a1i29g.png",
    "Buenos Aires, Argentina": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/v1769199434/buenos_aires_kclfjm.png",
    "Montevideo, Uruguay": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/v1769199434/Montevideo_Uruguay_oq0zyq.png",
    "Salvador, Brazil": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/v1769206091/Salvador_2_y4xdnw.png",
    "Recife, Brazil": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/v1769206090/recife_ixq6j0.png",
    "Fortaleza, Brazil": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/v1769206090/Foreleza_zwmguc.png",
    "Cartagena, Colombia": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/v1769206089/Cartegena_j8icg7.png",
    "Lima, Peru": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/v1769206087/lima_tzjpsb.png",
    "Reithi Rah, Maldives": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/shiplife/icons/maldives_icon.png",
    "Queen Victoria (Cunard)": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/v1769206085/Queen_Vic_w9m3tz.png",
    "Amsterdam, Netherlands": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/v1769206677/amstrdam_zk9uyu.png",
    "San Juan, Puerto Rico": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/v1769206678/san_juan_hw0fsw.png",
    "Sea Days": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/v1769206090/Foreleza_zwmguc.png",
    "Armação dos Búzios, Brazil": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/v1769996938/ComfyUI_00854__a1cxmz.png",
    "Santarém, Brazil": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/v1769996938/ComfyUI_00854__a1cxmz.png",
    "Symi, Greece": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/v1767954451/marcie_01087__tjhnoz.png",
    "Sorrento, Italy": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/v1767937420/marcie_00878__wknyxo.png",
    "Port Denarau, Fiji": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/v1768511020/ComfyUI_01208__pxkkdh.png",
    "Isle of Pines, New Caledonia": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/shiplife/icons/isle_of_pines_icon.png",
    "Noumea, New Caledonia": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/shiplife/icons/noumea_icon.png",
    "Dunedin, New Zealand": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/v1772478981/ComfyUI_01251_.png",
    "South Shetland Islands": "https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/v1772479397/ComfyUI_00630_.png",
};

// Icon configuration for each location
const ICON_CONFIG = {
    // Toledo - Wood Door
    "Toledo, Ohio": { style: 'door', symbol: 'wood-door', color: '#6a5a4a', accent: '#d4a574' },
    // Darwin - Wood Door  
    "Darwin, Australia": { style: 'door', symbol: 'wood-door', color: '#6a5a4a', accent: '#d4a574' },
    // Auckland - Gold Door
    "Auckland, New Zealand": { style: 'door', symbol: 'wood-door', color: '#6a5a4a', accent: '#d4a574' },
    // Art Deco - Luxury
    "Queen Victoria (Cunard)": { style: 'deco', symbol: 'crown', color: '#d4a574', accent: '#ffd700' },
    // Modern Minimal - Cities
    "Brisbane, Australia": { style: 'minimal', symbol: 'sunrise', color: '#ffa500', accent: '#ffcc00' },
    "Sydney, Australia": { style: 'minimal', symbol: 'fireworks', color: '#ff6b6b', accent: '#ffd700' },
    "Wellington, New Zealand": { style: 'minimal', symbol: 'star', color: '#c0c8d0', accent: '#ff6b6b' },
    "Napier, New Zealand": { style: 'minimal', symbol: 'car', color: '#607080', accent: '#d4a574' },
    "Tel Aviv, Israel": { style: 'minimal', symbol: 'menorah', color: '#ffd700', accent: '#4a90a0' },
    "Mumbai, India": { style: 'minimal', symbol: 'gateway', color: '#e07a5f', accent: '#ffd700' },
    "Barcelona, Spain": { style: 'minimal', symbol: 'mosaic', color: '#e07a5f', accent: '#ffd700' },
    // Heritage - Historic Sites
    "Dubrovnik, Croatia": { style: 'heritage', symbol: 'fortress', color: '#8b7355', accent: '#5a4a3a' },
    "Ephesus, Turkey": { style: 'heritage', symbol: 'library', color: '#c9b896', accent: '#8b7355' },
    "Rome, Italy": { style: 'heritage', symbol: 'colosseum', color: '#c9b896', accent: '#8b7355' },
    "Milford Sound, New Zealand": { style: 'heritage', symbol: 'mountain', color: '#607080', accent: '#a0c0d0' },
    "Milos, Greece": { style: 'heritage', symbol: 'venus', color: '#4a90a0', accent: '#ffffff' },
    "Santorini, Greece": { style: 'heritage', symbol: 'column', color: '#1e90ff', accent: '#ffffff' },
    "Syracuse, Sicily": { style: 'heritage', symbol: 'amphitheater', color: '#c9b896', accent: '#8b7355' },
    "Kotor, Montenegro": { style: 'heritage', symbol: 'fortress', color: '#8b7355', accent: '#5a4a3a' },
    "Valletta, Malta": { style: 'heritage', symbol: 'cross', color: '#c9b896', accent: '#8b7355' },
    "Cairo, Egypt": { style: 'heritage', symbol: 'pyramid', color: '#d4a574', accent: '#8b7355' },
    // Paradise - Tropical
    "Reithi Rah, Maldives": { style: 'paradise', symbol: 'shark', color: '#4a90a0', accent: '#2d5a6a' },
    "Bali, Indonesia": { style: 'paradise', symbol: 'mango', color: '#ffa500', accent: '#228b22' },
    "Bora Bora": { style: 'paradise', symbol: 'palm', color: '#40e0d0', accent: '#228b22' },
    "Tonga": { style: 'paradise', symbol: 'whale', color: '#4a90a0', accent: '#2d5a6a' },
    "Port Vila": { style: 'maritime', symbol: 'cyclone', color: '#1a1a2e', accent: '#4a90d9' },
    "Lifou": { style: 'paradise', symbol: 'spider', color: '#2d5016', accent: '#90EE90' },
    "Airlie Beach, Australia": { style: 'paradise', symbol: 'sun-hot', color: '#ff6b6b', accent: '#ffa500' },
    "Ibiza, Spain": { style: 'paradise', symbol: 'dj', color: '#ff6b6b', accent: '#ffd700' },
    "Amazon River": { style: 'culture', symbol: 'opera', color: '#f5e6d3', accent: '#8b4513' },
    // Adventure - Remote
    "Ushuaia, Argentina": { style: 'adventure', symbol: 'penguin', color: '#2d3748', accent: '#ffa500' },
    "Falkland Islands": { style: 'adventure', symbol: 'beer', color: '#d4a574', accent: '#f5f0e8' },
    "South Georgia": { style: 'adventure', symbol: 'whalingboat', color: '#8b4513', accent: '#a0522d' },
    "Lemaire Channel, Antarctica": { style: 'adventure', symbol: 'iceberg', color: '#a0c0d0', accent: '#ffffff' },
    "Port Lockroy, Antarctica": { style: 'adventure', symbol: 'penguin', color: '#2d3748', accent: '#ffa500' },
    // Culture - Food, Wine, Music, Glamour
    "Portofino, Italy": { style: 'culture', symbol: 'yacht', color: '#e07a5f', accent: '#2d5a6a' },
    "Akaroa, New Zealand": { style: 'culture', symbol: 'wine', color: '#722f37', accent: '#d4a574' },
    "Picton, New Zealand": { style: 'culture', symbol: 'grapes', color: '#4a0e4e', accent: '#228b22' },
    "Tauranga, New Zealand": { style: 'culture', symbol: 'guitar', color: '#8b4513', accent: '#d4a574' },
    "Piran, Slovenia": { style: 'culture', symbol: 'violin', color: '#4a90a0', accent: '#8b4513' },
    "St. Tropez, France": { style: 'culture', symbol: 'champagne', color: '#e07a5f', accent: '#ffd700' },
    // Patagonia - Chilean Fjords
    "Beagle Channel, Chile": { style: 'adventure', symbol: 'fjord', color: '#607080', accent: '#4a90a0' },
    "Puerto Montt, Chile": { style: 'adventure', symbol: 'volcano', color: '#607080', accent: '#ff6b4a' },
    "Tierra del Fuego": { style: 'adventure', symbol: 'fire', color: '#ffa500', accent: '#ff4500' },
    // Indonesia - Wildlife
    "Komodo Island, Indonesia": { style: 'adventure', symbol: 'komodo', color: '#556b2f', accent: '#8b7355' },
    // Pacific Islands - New
    "Port Denarau, Fiji": { style: 'paradise', symbol: 'yacht', color: '#4a90a0', accent: '#40e0d0' },
    "Isle of Pines, New Caledonia": { style: 'paradise', symbol: 'palm', color: '#40e0d0', accent: '#228b22' },
    "Noumea, New Caledonia": { style: 'culture', symbol: 'fleur', color: '#0055a4', accent: '#ffffff' },
    // Italy - Coastal & Historic
    "Amalfi, Italy": { style: 'culture', symbol: 'lemon', color: '#ffd700', accent: '#228b22' },
    "Antibes, France": { style: 'culture', symbol: 'yacht', color: '#1e90ff', accent: '#d4a574' },
    "Florence, Italy": { style: 'heritage', symbol: 'dome', color: '#8b4513', accent: '#d4a574' },
    "Lipari, Italy": { style: 'adventure', symbol: 'volcano', color: '#ff4500', accent: '#2d3748' },
    "Ponza, Italy": { style: 'maritime', symbol: 'boat', color: '#4a90a0', accent: '#ffffff' },
    "Portovenere, Italy": { style: 'maritime', symbol: 'lighthouse', color: '#ffd700', accent: '#1e90ff' },
    "Ravenna, Italy": { style: 'heritage', symbol: 'mosaic', color: '#ffd700', accent: '#4a0e4e' },
    "San Remo, Italy": { style: 'paradise', symbol: 'palm', color: '#228b22', accent: '#ff69b4' },
    "Sorrento, Italy": { style: 'culture', symbol: 'lemon', color: '#ffd700', accent: '#228b22' },
    "Stromboli, Italy": { style: 'adventure', symbol: 'volcano', color: '#ff4500', accent: '#ffd700' },
    "Venice, Italy": { style: 'culture', symbol: 'gondola', color: '#2d3748', accent: '#d4a574' },
    "Elba, Italy": { style: 'heritage', symbol: 'compass', color: '#d4a574', accent: '#2d3748' },
    // France - Riviera & Corsica
    "Le Lavandou, France": { style: 'paradise', symbol: 'lavender', color: '#9370db', accent: '#228b22' },
    "Marseille, France": { style: 'maritime', symbol: 'boat', color: '#1e90ff', accent: '#ffffff' },
    "Propriano, Corsica": { style: 'maritime', symbol: 'boat', color: '#4a90a0', accent: '#228b22' },
    "Bonifacio, Corsica": { style: 'heritage', symbol: 'fortress', color: '#f5f0e8', accent: '#8b7355' },
    "Sanary-sur-Mer, France": { style: 'maritime', symbol: 'boat', color: '#ff6347', accent: '#1e90ff' },
    // Greece - Islands & Mainland
    "Corfu, Greece": { style: 'heritage', symbol: 'column', color: '#4a90a0', accent: '#ffffff' },
    "Hvar, Croatia": { style: 'culture', symbol: 'lavender', color: '#9370db', accent: '#4a90a0' },
    "Itea, Greece": { style: 'heritage', symbol: 'column', color: '#c9b896', accent: '#ffd700' },
    "Katakolon, Greece": { style: 'heritage', symbol: 'olympicflame', color: '#ffd700', accent: '#ff4500' },
    "Mykonos, Greece": { style: 'culture', symbol: 'windmill', color: '#ffffff', accent: '#1e90ff' },
    "Nafplio, Greece": { style: 'heritage', symbol: 'fortress', color: '#8b7355', accent: '#4a90a0' },
    "Parga, Greece": { style: 'heritage', symbol: 'fortress', color: '#228b22', accent: '#4a90a0' },
    "Patmos, Greece": { style: 'heritage', symbol: 'cross', color: '#8b4513', accent: '#ffd700' },
    "Pylos, Greece": { style: 'heritage', symbol: 'fortress', color: '#c9b896', accent: '#4a90a0' },
    "Symi, Greece": { style: 'maritime', symbol: 'sponge', color: '#d4a574', accent: '#8b4513' },
    "Zakynthos, Greece": { style: 'paradise', symbol: 'turtle', color: '#228b22', accent: '#4a90a0' },
    // Turkey
    "Çeşme, Turkey": { style: 'heritage', symbol: 'fortress', color: '#d4a574', accent: '#8b7355' },
    "Istanbul, Turkey": { style: 'heritage', symbol: 'mosque', color: '#1e90ff', accent: '#ffd700' },
    "Izmir, Turkey": { style: 'heritage', symbol: 'column', color: '#c9b896', accent: '#ff6347' },
    "Kuşadası, Turkey": { style: 'maritime', symbol: 'boat', color: '#4a90a0', accent: '#d4a574' },
    // Croatia & Adriatic
    "Šibenik, Croatia": { style: 'heritage', symbol: 'fortress', color: '#8b7355', accent: '#ffd700' },
    // Eastern Europe & Black Sea
    "Constanța, Romania": { style: 'heritage', symbol: 'column', color: '#c9b896', accent: '#4a90a0' },
    "Nessebar, Bulgaria": { style: 'heritage', symbol: 'fortress', color: '#8b4513', accent: '#c9b896' },
    "Odessa, Ukraine": { style: 'culture', symbol: 'opera', color: '#f5e6d3', accent: '#ffd700' },
    "Yalta, Ukraine": { style: 'heritage', symbol: 'palace', color: '#ffffff', accent: '#228b22' },
    // Middle East
    "Dubai, UAE": { style: 'modern', symbol: 'skyscraper', color: '#c0c0c0', accent: '#ffd700' },
    "Doha, Qatar": { style: 'modern', symbol: 'skyscraper', color: '#d4a574', accent: '#ffffff' },
    "Haifa, Israel": { style: 'heritage', symbol: 'star', color: '#1e90ff', accent: '#ffffff' },
    "Muscat, Oman": { style: 'heritage', symbol: 'dhow', color: '#d4a574', accent: '#1e90ff' },
    "Sharm El Sheikh, Egypt": { style: 'paradise', symbol: 'shark', color: '#4a90a0', accent: '#ff4500' },
    // Asia
    "Penang, Malaysia": { style: 'culture', symbol: 'temple', color: '#ff4500', accent: '#ffd700' },
    "Phuket, Thailand": { style: 'paradise', symbol: 'palm', color: '#40e0d0', accent: '#228b22' },
    "Semarang, Indonesia": { style: 'heritage', symbol: 'temple', color: '#8b4513', accent: '#ffd700' },
    "Celukan Bawang, Indonesia": { style: 'paradise', symbol: 'palm', color: '#228b22', accent: '#4a90a0' },
    // Australia & NZ
    "Broome, Australia": { style: 'adventure', symbol: 'camel', color: '#d4a574', accent: '#ff4500' },
    "Hobart, Tasmania": { style: 'adventure', symbol: 'mountain', color: '#607080', accent: '#228b22' },
    "Melbourne, Australia": { style: 'culture', symbol: 'coffee', color: '#4a3728', accent: '#d4a574' },
    "Perth / Fremantle, Australia": { style: 'paradise', symbol: 'sun-hot', color: '#ffa500', accent: '#1e90ff' },
    "Dunedin, New Zealand": { style: 'culture', symbol: 'penguin', color: '#2d3748', accent: '#ffd700' },
    // Antarctica
    "Antarctica - Petermann Island": { style: 'adventure', symbol: 'penguin', color: '#2d3748', accent: '#ffa500' },
    "South Shetland Islands": { style: 'adventure', symbol: 'penguin', color: '#a0c0d0', accent: '#2d3748' },
    // South America
    "Armação dos Búzios, Brazil": { style: 'paradise', symbol: 'palm', color: '#40e0d0', accent: '#228b22' },
    "Buenos Aires, Argentina": { style: 'culture', symbol: 'tango', color: '#2d3748', accent: '#ff4500' },
    "Castro, Chile": { style: 'culture', symbol: 'church', color: '#ff4500', accent: '#ffd700' },
    "Lima, Peru": { style: 'heritage', symbol: 'column', color: '#d4a574', accent: '#8b4513' },
    "Recife, Brazil": { style: 'culture', symbol: 'bridge', color: '#4a90a0', accent: '#ffd700' },
    "Rio de Janeiro, Brazil": { style: 'heritage', symbol: 'christ', color: '#228b22', accent: '#ffffff' },
    "Santarém, Brazil": { style: 'paradise', symbol: 'palm', color: '#228b22', accent: '#4a90a0' },
    "Valparaíso, Chile": { style: 'culture', symbol: 'funicular', color: '#ff6347', accent: '#ffd700' },
    // Caribbean & Central America
    "Barbados": { style: 'paradise', symbol: 'palm', color: '#ffd700', accent: '#1e90ff' },
    "Panama Canal": { style: 'maritime', symbol: 'boat', color: '#4a90a0', accent: '#228b22' },
    "San Juan, Puerto Rico": { style: 'heritage', symbol: 'fortress', color: '#d4a574', accent: '#1e90ff' },
    // North America
    "Quebec City, Canada": { style: 'heritage', symbol: 'fortress', color: '#1e90ff', accent: '#ffffff' },
    "Saguenay, Canada": { style: 'adventure', symbol: 'fjord', color: '#607080', accent: '#228b22' },
    // Misc European
    "Amsterdam, Netherlands": { style: 'culture', symbol: 'tulip', color: '#ff4500', accent: '#228b22' },
    "Monte Carlo, Monaco": { style: 'culture', symbol: 'champagne', color: '#ffd700', accent: '#ff4500' },
    // Transit & Sea Days
    "Red Sea Transit": { style: 'maritime', symbol: 'compass', color: '#d4a574', accent: '#ff4500' },
    "Suez Canal, Egypt": { style: 'maritime', symbol: 'compass', color: '#d4a574', accent: '#1e90ff' },
    "Sea Days": { style: 'maritime', symbol: 'compass', color: '#4a90a0', accent: '#ffffff' },
    // Christmas Island
    "Christmas Island, Australia": { style: 'adventure', symbol: 'crab', color: '#ff4500', accent: '#2d3748' }
};
