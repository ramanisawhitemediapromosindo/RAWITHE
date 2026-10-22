/*
  RAMANISA WHITE — PREMIUM LRT ADVERTISING MARKETPLACE V3
  -------------------------------------------------------
  Base: original navy/gold liquid-glass website.
  Upgrade: catalog + prices + packages + audience + WhatsApp + Media Plan + Compare + Recommender.

  CONTACT CONFIG
  WhatsApp is sourced from the supplied reference website.
  Official marketing email was not present in the supplied source, so it is intentionally blank.
  Fill CONFIG.email later and every Email CTA will automatically use it.
*/
const CONFIG = {
  company: "Ramanisa White Media Promosindo",
  whatsapp: "6283143294993",
  whatsappDisplay: "0831 4329 4993",
  email: "", // Isi email resmi Ramanisa White saat sudah dikonfirmasi.
};

const STATIONS = [
  {id:"bandara",name:"Bandara"},
  {id:"asrama-haji",name:"Asrama Haji"},
  {id:"punti-kayu",name:"Punti Kayu"},
  {id:"rsud",name:"RSUD"},
  {id:"garuda-dempo",name:"Garuda Dempo"},
  {id:"demang",name:"Demang"},
  {id:"bumi-sriwijaya",name:"Bumi Sriwijaya"},
  {id:"dishub",name:"Dishub"},
  {id:"cinde",name:"Cinde"},
  {id:"ampera",name:"Ampera"},
  {id:"polrestabes",name:"Polrestabes"},
  {id:"jakabaring",name:"Jakabaring"},
  {id:"djka",name:"DJKA"},
].map((s,i)=>({...s,sequence:i+1}));

const TRAFFIC = [
  {name:"Jl. Angkatan 45",daily:45037,monthly:1418666},
  {name:"Simpang Angkatan 45",daily:93171,monthly:2934887},
  {name:"Simpang 5 DPRD",daily:51181,monthly:1612202},
  {name:"Jl. Kapten A. Rivai",daily:51181,monthly:1612202},
  {name:"Simpang Charitas / Jl. Jend. Sudirman",daily:63738,monthly:2007747},
  {name:"Jl. Ryacudu / Jembatan Ampera",daily:96317,monthly:3033986},
  {name:"Skybridge Bundaran Cinde",daily:63738,monthly:2007747},
];

const CATEGORIES = {
  pillar:{label:"Pillar",icon:"▥"},
  station:{label:"Station",icon:"▣"},
  train:{label:"Train",icon:"▰"},
  "naming-rights":{label:"Naming Rights",icon:"★"},
  parapet:{label:"Parapet",icon:"▱"},
  skybridge:{label:"Skybridge",icon:"⌁"},
  package:{label:"Packages",icon:"◆"},
};

const PRODUCTS = [
  // Original premium static placements retained from the base website.
  {id:"ticketing-wall",name:"Ticketing Area Wall Sticker",category:"station",location:"Entrance / Ticketing Area",station:"network",image:"assets/ticketing-area.jpg",status:"on_request",pricingType:"request",durationOptions:[1,3,6,12],specs:{Type:"Wall Sticker",Qty:"3 Spot",Coverage:"2 Sides",Area:"Ticketing Area"},desc:"Placement besar di area ticketing untuk menangkap awareness sejak penumpang memasuki alur stasiun.",notes:["Rate dan titik spesifik dikonfirmasi sesuai station, ukuran, dan periode campaign."],tags:["awareness","station"],featured:3},
  {id:"tapping-wall",name:"Tapping Gate Wall Sticker",category:"station",location:"Entrance / Tapping Gate",station:"network",image:"assets/tapping-gate.jpg",status:"on_request",pricingType:"request",durationOptions:[1,3,6,12],specs:{Type:"Wall Sticker",Qty:"3 Spot",Coverage:"2 Sides",Area:"Tapping Gate"},desc:"Brand hadir pada titik transisi utama saat penumpang melakukan tapping dan bergerak menuju area berikutnya.",notes:["Rate dan titik spesifik dikonfirmasi sesuai station, ukuran, dan periode campaign."],tags:["awareness","station"],featured:4},
  {id:"escalator-static",name:"Escalator Static Placement",category:"station",location:"Waiting Area / Escalator",station:"network",image:"assets/escalator.jpg",status:"on_request",pricingType:"request",durationOptions:[1,3,6,12],specs:{Type:"Sticker & Poster",Qty:"10 Spot",Coverage:"2 Sides",Area:"Escalator"},desc:"Memanfaatkan jalur pergerakan vertikal dan waiting area untuk exposure yang sulit terlewat.",notes:["Rate dan titik spesifik dikonfirmasi sesuai station, ukuran, dan periode campaign."],tags:["station","awareness"],featured:5},
  {id:"elevator-door",name:"Elevator Door Placement",category:"station",location:"Waiting Area / Elevator Door",station:"network",image:"assets/elevator-door.jpg",status:"on_request",pricingType:"request",durationOptions:[1,3,6,12],specs:{Type:"Sticker & Poster",Qty:"10 Spot",Coverage:"2 Sides",Area:"Elevator Door"},desc:"Format visual pada titik tunggu elevator, cocok untuk pesan singkat dengan visual brand yang kuat.",notes:["Rate dan titik spesifik dikonfirmasi sesuai station, ukuran, dan periode campaign."],tags:["station"],featured:6},
  {id:"poster-pillars",name:"Poster Pillars — Station",category:"station",location:"Waiting Area / Station Pillars",station:"network",image:"assets/poster-pillars.jpg",status:"on_request",pricingType:"request",durationOptions:[1,3,6,12],specs:{Type:"Sticker & Poster",Qty:"10 Spot",Coverage:"2 Sides",Area:"Poster Pillars"},desc:"Pillar placement yang menjadi landmark visual di ruang tunggu dan koridor pergerakan penumpang.",notes:["Berbeda dengan Neon Box pillar outdoor; rate station pillars dikonfirmasi melalui proposal."],tags:["station","awareness"],featured:7},
  {id:"elevator-wall",name:"Elevator Wall Placement",category:"station",location:"Waiting Area / Elevator Wall",station:"network",image:"assets/elevator-wall.jpg",status:"on_request",pricingType:"request",durationOptions:[1,3,6,12],specs:{Type:"Sticker & Poster",Qty:"10 Spot",Coverage:"2 Sides",Area:"Elevator Wall"},desc:"Area dinding dekat elevator untuk memperkuat recall saat audiens berpindah dan menunggu.",notes:["Rate dan titik spesifik dikonfirmasi sesuai station, ukuran, dan periode campaign."],tags:["station"],featured:8},

  // Rate-card inventory imported from the supplied reference website.
  {id:"pillar-a-rivai",name:"Neon Box Pilar Jl. A. Rivai",category:"pillar",location:"Jl. Kapten A. Rivai, Palembang",station:null,image:"assets/rate_12.webp",status:"on_request",pricingType:"fixed",rates:{1:12000000,6:60000000,12:100000000},durationOptions:[1,6,12],rateUnit:"per sisi",specs:{Dimensi:"± 3 m × 8 m (sesuai titik pada rate card)",Sisi:"Harga per sisi",Format:"Neon Box Vertical"},traffic:{daily:51181,monthly:1612202},desc:"Neon box vertical pada koridor A. Rivai untuk campaign dengan exposure jalan utama dan durasi fleksibel.",notes:["Harga dapat berubah sewaktu-waktu.","Harga belum termasuk PPN sesuai rate card."],tags:["awareness","local"],featured:1},
  {id:"pillar-angkatan-45",name:"Neon Box Pilar Jl. Angkatan 45",category:"pillar",location:"Jl. Angkatan 45, Palembang",station:null,image:"assets/rate_13.webp",status:"on_request",pricingType:"fixed",rates:{1:12000000,6:60000000,12:100000000},durationOptions:[1,6,12],rateUnit:"per sisi",specs:{Dimensi:"± 3 m × 8 m (sesuai titik pada rate card)",Sisi:"Harga per sisi",Format:"Neon Box Vertical"},traffic:{daily:45037,monthly:1418666},desc:"Pillar neon box di koridor Angkatan 45 dengan opsi durasi 1, 6, atau 12 bulan.",notes:["Harga dapat berubah sewaktu-waktu.","Harga belum termasuk PPN sesuai rate card."],tags:["awareness","local"],featured:2},
  {id:"naming-asrama",name:"Naming Rights — Stasiun Asrama Haji",category:"naming-rights",location:"Stasiun Asrama Haji",station:"asrama-haji",image:"assets/rate_15.webp",status:"on_request",pricingType:"fixed",rates:{12:2500000000},durationOptions:[12],rateUnit:"per tahun",specs:{Tier:"Platinum",Durasi:"1 tahun",Coverage:"Naming Station + Passenger Information + Line Map + Voice Station + Voice Train + Pilar Branding (in station)"},desc:"High-impact station ownership untuk brand yang ingin mendapat naming exposure lintas touchpoint.",notes:["Availability wajib dikonfirmasi ke marketing."],tags:["premium","station","awareness"],featured:1},
  {id:"naming-djka",name:"Naming Rights — Stasiun DJKA",category:"naming-rights",location:"Stasiun DJKA",station:"djka",image:"assets/rate_15.webp",status:"on_request",pricingType:"fixed",rates:{12:2500000000},durationOptions:[12],rateUnit:"per tahun",specs:{Tier:"Platinum",Durasi:"1 tahun",Coverage:"Naming Station + Passenger Information + Line Map + Voice Station + Voice Train + Pilar Branding (in station)"},desc:"Naming rights tier Platinum untuk stasiun DJKA dengan exposure station dan passenger information.",notes:["Availability wajib dikonfirmasi ke marketing."],tags:["premium","station","awareness"],featured:9},
  {id:"naming-bumi",name:"Naming Rights — Stasiun Bumi Sriwijaya",category:"naming-rights",location:"Stasiun Bumi Sriwijaya",station:"bumi-sriwijaya",image:"assets/rate_15.webp",status:"on_request",pricingType:"fixed",rates:{12:1850000000},durationOptions:[12],rateUnit:"per tahun",specs:{Tier:"Gold",Durasi:"1 tahun",Coverage:"Naming Station + Passenger Information + Line Map + Voice Station + Voice Train + Pilar Branding (in station)"},desc:"Naming rights tier Gold di Stasiun Bumi Sriwijaya untuk presence premium sepanjang perjalanan.",notes:["Availability wajib dikonfirmasi ke marketing."],tags:["premium","station","awareness"],featured:10},
  {id:"naming-cinde",name:"Naming Rights — Stasiun Cinde",category:"naming-rights",location:"Stasiun Cinde",station:"cinde",image:"assets/rate_15.webp",status:"on_request",pricingType:"fixed",rates:{12:1850000000},durationOptions:[12],rateUnit:"per tahun",specs:{Tier:"Gold",Durasi:"1 tahun",Coverage:"Naming Station + Passenger Information + Line Map + Voice Station + Voice Train + Pilar Branding (in station)"},desc:"Naming rights tier Gold di salah satu titik pusat kota dengan coverage branding lintas touchpoint.",notes:["Availability wajib dikonfirmasi ke marketing."],tags:["premium","station","awareness","local"],featured:11},
  {id:"naming-polrestabes",name:"Naming Rights — Stasiun Polrestabes",category:"naming-rights",location:"Stasiun Polrestabes",station:"polrestabes",image:"assets/rate_15.webp",status:"on_request",pricingType:"fixed",rates:{12:1350000000},durationOptions:[12],rateUnit:"per tahun",specs:{Tier:"Silver",Durasi:"1 tahun",Coverage:"Naming Station + Passenger Information + Line Map + Voice Station + Voice Train + Pilar Branding (in station)"},desc:"Naming rights tier Silver untuk brand yang ingin mengambil ownership stasiun dalam skala premium.",notes:["Availability wajib dikonfirmasi ke marketing."],tags:["premium","station","awareness"],featured:12},
  {id:"station-sticker",name:"Station Sticker / Branding Area",category:"station",location:"Jaringan Stasiun LRT Sumsel",station:"network",image:"assets/rate_16.webp",status:"on_request",pricingType:"request",durationOptions:[1,3,6,12],rateUnit:"request rate",specs:{Area:"Concourse & Peron",Format:"Lift / Eskalator / Ticketing / ACP Peron / area station sesuai proposal",Titik:"Konfirmasi dengan marketing"},desc:"Station branding fleksibel untuk concourse, peron, lift, eskalator, ticketing, dan titik lain sesuai proposal.",notes:["Rate dan titik spesifik dikonfirmasi sesuai station, ukuran, dan periode campaign."],tags:["station","awareness"],featured:13},
  {id:"parapet-ampera",name:"Parapet Jembatan Ampera",category:"parapet",location:"Jembatan Ampera, Palembang",station:"ampera",image:"assets/rate_20.webp",status:"on_request",pricingType:"fixed",rates:{6:700000000,12:1100000000},durationOptions:[6,12],rateUnit:"3 section",specs:{Jumlah:"3 section",Dimensi:"60 m × 1,5 m / section",Format:"Billboard / Parapet"},traffic:{daily:96317,monthly:3033986},desc:"Large-format parapet di ikon kota Palembang untuk campaign high-impact pada koridor traffic tinggi.",notes:["Harga dan availability wajib dikonfirmasi."],tags:["premium","local","awareness"],featured:1},
  {id:"skybridge-cinde",name:"Skybridge Branding Zone — Cinde",category:"skybridge",location:"Bundaran Cinde, arah Ampera / Simpang Charitas",station:"cinde",image:"assets/rate_16.webp",status:"on_request",pricingType:"request",durationOptions:[1,3,6,12],rateUnit:"request rate",specs:{Format:"Skybridge Branding Zone",Lokasi:"Bundaran Cinde",Arah:"Ampera / Simpang Charitas"},traffic:{daily:63738,monthly:2007747},desc:"Branding zone Skybridge Cinde untuk menjangkau traffic pusat kota dari dua arah koridor utama.",notes:["Harga tidak dicantumkan pada data yang digunakan; gunakan Request Rate."],tags:["local","awareness"],featured:14},
  {id:"train-cart",name:"Cart Branding",category:"train",location:"Trainset LRT Sumsel",station:"network",image:"assets/rate_22.webp",status:"on_request",pricingType:"monthly",monthlyRate:32000000,durationOptions:[3,6,12],minDuration:3,rateUnit:"format media",specs:{Format:"Cart Branding",Minimum:"3 bulan",Network:"8 trainset • 3 cars / trainset"},desc:"Exterior cart branding untuk membawa identitas brand sepanjang pergerakan trainset.",notes:["Minimum campaign 3 bulan.","Biaya produksi, pemasangan, pelepasan, dan pajak belum termasuk."],tags:["train","awareness"],featured:2},
  {id:"train-wall",name:"Wall Panel",category:"train",location:"Interior Trainset LRT Sumsel",station:"network",image:"assets/rate_22.webp",status:"on_request",pricingType:"monthly",monthlyRate:12000000,durationOptions:[3,6,12],minDuration:3,rateUnit:"format media",specs:{Format:"Wall Panel",Minimum:"3 bulan",Area:"Interior train"},desc:"Interior wall panel untuk pesan visual yang bertahan sepanjang perjalanan penumpang.",notes:["Minimum campaign 3 bulan.","Biaya produksi, pemasangan, pelepasan, dan pajak belum termasuk."],tags:["train"],featured:15},
  {id:"train-door",name:"Inside Door",category:"train",location:"Interior Trainset LRT Sumsel",station:"network",image:"assets/rate_23.webp",status:"on_request",pricingType:"monthly",monthlyRate:10000000,durationOptions:[3,6,12],minDuration:3,rateUnit:"format media",specs:{Format:"Inside Door",Minimum:"3 bulan",Area:"Interior train"},desc:"Inside door branding dengan rate bulanan paling accessible pada inventory train.",notes:["Minimum campaign 3 bulan.","Biaya produksi, pemasangan, pelepasan, dan pajak belum termasuk."],tags:["train"],featured:16},
  {id:"train-ceiling",name:"Ceiling Panel",category:"train",location:"Interior Trainset LRT Sumsel",station:"network",image:"assets/rate_22.webp",status:"on_request",pricingType:"monthly",monthlyRate:12000000,durationOptions:[3,6,12],minDuration:3,rateUnit:"format media",specs:{Format:"Ceiling Panel",Minimum:"3 bulan",Area:"Interior train"},desc:"Ceiling placement untuk menambah frekuensi visual di interior trainset.",notes:["Minimum campaign 3 bulan.","Biaya produksi, pemasangan, pelepasan, dan pajak belum termasuk."],tags:["train"],featured:17},
  {id:"train-handgrip",name:"Hand Grip",category:"train",location:"Interior Trainset LRT Sumsel",station:"network",image:"assets/rate_23.webp",status:"on_request",pricingType:"monthly",monthlyRate:12000000,durationOptions:[3,6,12],minDuration:3,rateUnit:"format media",specs:{Format:"Hand Grip",Minimum:"3 bulan",Area:"Interior train"},desc:"High-frequency small-format placement di hand grip untuk repeated visual contact.",notes:["Minimum campaign 3 bulan.","Biaya produksi, pemasangan, pelepasan, dan pajak belum termasuk."],tags:["train"],featured:18},
  {id:"train-under-seat",name:"Under Passenger Seat",category:"train",location:"Interior Trainset LRT Sumsel",station:"network",image:"assets/rate_22.webp",status:"on_request",pricingType:"monthly",monthlyRate:12000000,durationOptions:[3,6,12],minDuration:3,rateUnit:"format media",specs:{Format:"Under Passenger Seat",Minimum:"3 bulan",Area:"Interior train"},desc:"Alternative interior placement untuk menambah coverage dalam satu carriage.",notes:["Minimum campaign 3 bulan.","Biaya produksi, pemasangan, pelepasan, dan pajak belum termasuk."],tags:["train"],featured:19},
  {id:"train-all-interior-exterior",name:"All In Interior + Exterior",category:"train",location:"Trainset LRT Sumsel",station:"network",image:"assets/rate_22.webp",status:"on_request",pricingType:"monthly",monthlyRate:90000000,durationOptions:[3,6,12],minDuration:3,rateUnit:"format package",specs:{Format:"All In Interior + Exterior",Minimum:"3 bulan",Network:"Trainset LRT Sumsel"},desc:"Integrated train branding untuk brand yang ingin mendominasi interior sekaligus exterior format.",notes:["Minimum campaign 3 bulan.","Biaya produksi, pemasangan, pelepasan, dan pajak belum termasuk."],tags:["train","premium","awareness"],featured:3},
  {id:"train-all-one-trainset",name:"All In 1 Trainset",category:"train",location:"1 Trainset LRT Sumsel",station:"network",image:"assets/rate_22.webp",status:"on_request",pricingType:"monthly",monthlyRate:270000000,durationOptions:[3,6,12],minDuration:3,rateUnit:"1 trainset",specs:{Format:"All In 1 Trainset",Minimum:"3 bulan",Trainset:"3 cars"},desc:"Full trainset presence untuk campaign premium dengan coverage tiga cars dalam satu trainset.",notes:["Minimum campaign 3 bulan.","Biaya produksi, pemasangan, pelepasan, dan pajak belum termasuk."],tags:["train","premium","awareness"],featured:1},
];

const PACKAGES = [
  {id:"vip-super-exclusive",name:"VIP Super Exclusive",price:3000000000,image:"assets/rate_25.webp",featured:true,inclusions:["Naming Rights Platinum — 1 tahun","All In 1 Trainset — 3 bulan","6 sisi Neon Box — 1 tahun","Station media: lift, eskalator, ticketing, stairs, ACP Peron sesuai paket"],note:"Harga promo pada rate card; availability dan detail titik dikonfirmasi."},
  {id:"super-exclusive",name:"Super Exclusive",price:2400000000,image:"assets/rate_26.webp",inclusions:["Naming Rights Gold — 1 tahun","All In 1 Trainset — 3 bulan","4 sisi Neon Box — 1 tahun","Station media sesuai paket"],note:"Harga promo pada rate card; availability dan detail titik dikonfirmasi."},
  {id:"exclusive",name:"Exclusive",price:1500000000,image:"assets/rate_27.webp",inclusions:["Naming Rights Silver — 1 tahun","3 sisi Neon Box 1 tahun / opsi ekuivalen durasi","Station media sesuai paket"],note:"Harga promo pada rate card; availability dan detail titik dikonfirmasi."},
  {id:"hemat-600",name:"Billboard Hemat 600",price:600000000,image:"assets/rate_28.webp",inclusions:["5 sisi Neon Box 1 tahun / 10 sisi 6 bulan / 20 sisi 3 bulan","Eskalator Sticker 1 tahun","2 Ticketing Area 1 tahun","Doorlift 1 tahun","Lift Peron 1 tahun","5 ACP Peron 1 tahun"],note:"Paket Billboard Hemat."},
  {id:"hemat-500",name:"Billboard Hemat 500",price:500000000,image:"assets/rate_28.webp",inclusions:["4 sisi Neon Box 1 tahun / 8 sisi 6 bulan / 16 sisi 3 bulan","Eskalator Sticker 1 tahun","2 Ticketing Area 1 tahun","Doorlift 1 tahun","Lift Peron 1 tahun","3 ACP Peron 1 tahun"],note:"Paket Billboard Hemat."},
  {id:"hemat-400",name:"Billboard Hemat 400",price:400000000,image:"assets/rate_28.webp",inclusions:["3 sisi Neon Box 1 tahun / 6 sisi 6 bulan / 12 sisi 3 bulan","Eskalator Sticker 1 tahun","Ticketing Area 1 tahun","Doorlift 1 tahun","ACP Peron 1 tahun"],note:"Paket Billboard Hemat."},
  {id:"hemat-300",name:"Billboard Hemat 300",price:300000000,image:"assets/rate_29.webp",inclusions:["2 sisi Neon Box 1 tahun / 4 sisi 6 bulan / 8 sisi 3 bulan","Eskalator 6 bulan","Ticketing Area 6 bulan","Doorlift 6 bulan","ACP Peron 6 bulan"],note:"Paket Billboard Hemat."},
  {id:"hemat-200",name:"Billboard Hemat 200",price:200000000,image:"assets/rate_29.webp",inclusions:["1 sisi Neon Box 1 tahun / 2 sisi 6 bulan / 4 sisi 3 bulan","Eskalator Sticker 1 tahun","2 Ticketing Area 1 tahun","Doorlift 1 tahun","Lift Peron 1 tahun","3 ACP Peron 1 tahun"],note:"Paket Billboard Hemat."},
  {id:"hemat-100",name:"Billboard Hemat 100",price:100000000,image:"assets/rate_29.webp",inclusions:["2 sisi Neon Box 3 bulan","Ticketing Area 3 bulan","2 ACP Peron 3 bulan"],note:"Paket Billboard Hemat."},
  {id:"bundling-platinum",name:"Bundling Platinum",price:800000000,image:"assets/rate_12.webp",inclusions:["4 pilar / 8 sisi","Durasi pilar 1 tahun","Bonus 2 pemasangan stiker promosi di ticketing + 1 stiker promosi ACP Peron","Bonus station promo Bumi Sriwijaya / Cinde — durasi 3 bulan"],note:"Rate card mencantumkan hemat hingga Rp70 juta."},
  {id:"bundling-gold",name:"Bundling Gold",price:600000000,image:"assets/rate_13.webp",inclusions:["3 pilar / 6 sisi","Durasi pilar 1 tahun","Bonus 2 pemasangan stiker promosi di ACP Peron","Bonus station promo Bumi Sriwijaya / Cinde — durasi 3 bulan"],note:"Availability titik wajib dikonfirmasi."},
  {id:"seasonal-105",name:"Seasonal Campaign Example",price:105000000,image:"assets/rate_16.webp",inclusions:["Entrance","Ticketing","Waiting Room","Contoh periode 2 bulan"],note:"Contoh seasonal package; susunan dan availability dikonfirmasi."},
];

const INSIGHTS = [
  {value:"368.580",label:"Rata-rata penumpang / Bulan",note:"Marketing Kit 2026"},
  {value:"2.811.012",label:"Penumpang Semester II 2026",note:"+2,3% vs Semester II 2025"},
  {value:"855",label:"Pilar",note:"753 jalan nasional + 102 jalan provinsi"},
  {value:"8 × 3",label:"Trainset × cars",note:"±16 jam operasi / hari"},
];

const $ = (sel, root=document) => root.querySelector(sel);
const $$ = (sel, root=document) => [...root.querySelectorAll(sel)];

const state = {
  search:"",
  category:"all",
  station:"all",
  budget:"all",
  duration:"all",
  sort:"featured",
  showFavorites:false,
  favorites:new Set(JSON.parse(localStorage.getItem("rw_v3_favorites") || "[]")),
  plan:JSON.parse(localStorage.getItem("rw_v3_plan") || "{}"),
  compare:new Set(),
  selectedStation:"bandara",
};

function saveState(){
  localStorage.setItem("rw_v3_favorites",JSON.stringify([...state.favorites]));
  localStorage.setItem("rw_v3_plan",JSON.stringify(state.plan));
}

function fmtIDR(n){
  if(n==null || !Number.isFinite(n)) return "Request Rate";
  return new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR",maximumFractionDigits:0}).format(n);
}
function compactIDR(n){
  if(n==null || !Number.isFinite(n)) return "Request Rate";
  if(n>=1e9) return "Rp"+(n/1e9).toLocaleString("id-ID",{maximumFractionDigits:2})+" M";
  if(n>=1e6) return "Rp"+(n/1e6).toLocaleString("id-ID",{maximumFractionDigits:0})+" jt";
  return fmtIDR(n);
}
function num(n){return new Intl.NumberFormat("id-ID").format(n)}
function categoryLabel(id){return CATEGORIES[id]?.label || id}
function stationName(id){return STATIONS.find(s=>s.id===id)?.name || ""}
function productById(id){return PRODUCTS.find(p=>p.id===id)}
function packageById(id){return PACKAGES.find(p=>p.id===id)}
function getDefaultDuration(p){return Number(p.durationOptions?.[0] || 1)}
function rateForDuration(p,duration){
  const d=Number(duration);
  if(p.pricingType==="fixed") return Number.isFinite(p.rates?.[d]) ? p.rates[d] : null;
  if(p.pricingType==="monthly") return d >= (p.minDuration||1) ? p.monthlyRate*d : null;
  return null;
}
function minCampaignRate(p){
  if(p.pricingType==="fixed"){
    const vals=Object.values(p.rates||{}).filter(Number.isFinite);
    return vals.length?Math.min(...vals):null;
  }
  if(p.pricingType==="monthly") return p.monthlyRate*(p.minDuration||1);
  return null;
}
function displayRate(p){
  if(p.pricingType==="request") return {main:"Request Rate",sub:"Hubungi marketing"};
  if(p.pricingType==="monthly") return {main:`${compactIDR(p.monthlyRate)} / bln`,sub:`Minimum ${p.minDuration||1} bulan`};
  const options=(p.durationOptions||[]).map(d=>({d,rate:rateForDuration(p,d)})).filter(x=>x.rate!=null);
  if(options.length===1) return {main:compactIDR(options[0].rate),sub:`${options[0].d} bulan • ${p.rateUnit||""}`.trim()};
  return {main:`Mulai ${compactIDR(Math.min(...options.map(x=>x.rate)))}`,sub:p.rateUnit||"Rate card"};
}
function statusLabel(){return "ON REQUEST"}
function budgetMatch(rate,budget){
  if(budget==="all") return true;
  if(rate==null) return true;
  if(budget==="under100") return rate<=100000000;
  if(budget==="100-300") return rate>=100000000 && rate<=300000000;
  if(budget==="300-700") return rate>=300000000 && rate<=700000000;
  if(budget==="700-1500") return rate>=700000000 && rate<=1500000000;
  if(budget==="over1500") return rate>=1500000000;
  return true;
}
function durationSupported(p,d){
  if(d==="all") return true;
  const n=Number(d);
  if(p.pricingType==="request") return true;
  if(p.pricingType==="monthly") return n >= (p.minDuration||1);
  return p.durationOptions?.includes(n);
}
function filterRate(p){
  if(state.duration!=="all") return rateForDuration(p,Number(state.duration));
  return minCampaignRate(p);
}
function waUrl(message){return `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(message)}`}
function genericWa(){return `Halo ${CONFIG.company},\n\nSaya ingin konsultasi kebutuhan media advertising LRT Sumsel. Mohon info inventory, availability, dan proposal terbaru.`}
function toast(message){
  const el=$("#toast"); if(!el) return;
  el.textContent=message; el.classList.add("show");
  clearTimeout(toast.t); toast.t=setTimeout(()=>el.classList.remove("show"),2200);
}
function openLayer(id){$(id)?.classList.add("open");$(id)?.setAttribute("aria-hidden","false");document.body.classList.add("lock")}
function closeLayer(id){$(id)?.classList.remove("open");$(id)?.setAttribute("aria-hidden","true");if(!$(".modal.open,.drawer.open,.lightbox.open")) document.body.classList.remove("lock")}
function openWhatsApp(message){window.open(waUrl(message),"_blank","noopener")}
function openEmail(subject,body){
  const recipient=CONFIG.email.trim();
  const href=`mailto:${encodeURIComponent(recipient)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href=href;
  if(!recipient) toast("Email resmi belum diisi—composer dibuka tanpa penerima.");
}

function renderCategoryStrip(){
  const counts={}; PRODUCTS.forEach(p=>counts[p.category]=(counts[p.category]||0)+1);
  $("#categoryStrip").innerHTML=Object.entries(CATEGORIES).map(([id,c])=>{
    const count=id==="package"?PACKAGES.length:(counts[id]||0);
    return `<button class="category-btn ${state.category===id?'active':''}" data-category="${id}"><i>${c.icon}</i><span><b>${c.label}</b><small>${count} pilihan</small></span></button>`;
  }).join("");
  $$('[data-category]',$("#categoryStrip")).forEach(btn=>btn.onclick=()=>{
    if(btn.dataset.category==="package"){document.querySelector("#packages")?.scrollIntoView({behavior:"smooth"});return;}
    state.category=btn.dataset.category; $("#categorySelect").value=state.category; renderProducts();renderCategoryStrip();document.querySelector("#catalog")?.scrollIntoView({behavior:"smooth"});
  });
}

function renderSelects(){
  $("#categorySelect").innerHTML=`<option value="all">Semua kategori</option>`+Object.entries(CATEGORIES).filter(([id])=>id!=="package").map(([id,c])=>`<option value="${id}">${c.label}</option>`).join("");
  $("#stationFilter").innerHTML=`<option value="all">Semua lokasi/stasiun</option>`+STATIONS.map(s=>`<option value="${s.id}">${String(s.sequence).padStart(2,"0")} • ${s.name}</option>`).join("");
  $("#stationSelect").innerHTML=`<option value="">Pilih target stasiun</option>`+STATIONS.map(s=>`<option value="${s.name}">${s.name}</option>`).join("")+`<option value="Network / beberapa stasiun">Network / beberapa stasiun</option>`;
}

function getFilteredProducts(){
  const q=state.search.trim().toLowerCase();
  let list=PRODUCTS.filter(p=>{
    const matchesQ=!q || [p.name,p.location,p.category,categoryLabel(p.category),p.desc,Object.values(p.specs||{}).join(" ")].join(" ").toLowerCase().includes(q);
    const matchesCategory=state.category==="all" || p.category===state.category;
    const matchesStation=state.station==="all" || p.station===state.station || (p.category==="station" && p.station==="network");
    const matchesDuration=durationSupported(p,state.duration);
    const matchesBudget=budgetMatch(filterRate(p),state.budget);
    const matchesFavorite=!state.showFavorites || state.favorites.has(p.id);
    return matchesQ&&matchesCategory&&matchesStation&&matchesDuration&&matchesBudget&&matchesFavorite;
  });
  if(state.sort==="name") list.sort((a,b)=>a.name.localeCompare(b.name));
  else if(state.sort==="price-low") list.sort((a,b)=>(filterRate(a)??Infinity)-(filterRate(b)??Infinity));
  else if(state.sort==="price-high") list.sort((a,b)=>(filterRate(b)??-1)-(filterRate(a)??-1));
  else if(state.sort==="traffic") list.sort((a,b)=>(b.traffic?.monthly||0)-(a.traffic?.monthly||0));
  else list.sort((a,b)=>(a.featured??99)-(b.featured??99));
  return list;
}

function renderActiveFilters(){
  const chips=[];
  if(state.showFavorites) chips.push("Favorit saja");
  if(state.search) chips.push(`Search: ${state.search}`);
  if(state.category!=="all") chips.push(categoryLabel(state.category));
  if(state.station!=="all") chips.push(`Stasiun ${stationName(state.station)}`);
  if(state.budget!=="all") chips.push("Budget aktif");
  if(state.duration!=="all") chips.push(`${state.duration} bulan`);
  $("#activeFilters").innerHTML=chips.map(x=>`<span class="filter-chip">${x}</span>`).join("");
}

function renderProducts(){
  const list=getFilteredProducts();
  $("#resultCount").textContent=`${list.length} media`;
  renderActiveFilters();
  const grid=$("#productGrid");
  if(!list.length){
    grid.innerHTML=`<div class="empty-state"><b>Belum ketemu medianya.</b>Ubah filter atau buka Campaign Recommender buat cari opsi lain.<div style="margin-top:16px"><button class="secondary-btn" id="resetFilterBtn">Reset Filter</button></div></div>`;
    $("#resetFilterBtn").onclick=resetFilters; return;
  }
  grid.innerHTML=list.map(p=>{
    const rate=displayRate(p); const fav=state.favorites.has(p.id); const comp=state.compare.has(p.id);
    return `<article class="product-card glass" data-product="${p.id}">
      <div class="product-media"><img src="${p.image}" alt="${p.name}" loading="lazy"><span class="product-badge request">${statusLabel()}</span><span class="product-category">${categoryLabel(p.category)}</span><div class="product-tools"><button class="${fav?'active':''}" data-fav="${p.id}" aria-label="Favorite">${fav?'♥':'♡'}</button><button class="${comp?'active':''}" data-compare="${p.id}" aria-label="Compare">${comp?'✓':'⇄'}</button></div></div>
      <div class="product-body"><div class="product-kicker"><span>${p.location}</span><span>${p.station&&p.station!=="network"?stationName(p.station):"LRT Sumsel"}</span></div><h3>${p.name}</h3><p class="product-desc">${p.desc}</p>
      <div class="spec-row">${Object.entries(p.specs||{}).slice(0,3).map(([k,v])=>`<span>${k}: ${v}</span>`).join("")}</div>
      ${p.traffic?`<div class="product-meta-line"><span>Daily traffic <b>${num(p.traffic.daily)}</b></span><span>Monthly <b>${num(p.traffic.monthly)}</b></span></div>`:""}
      <div class="product-price"><div class="price-block"><small>Reference Rate</small><b>${rate.main}</b><span>${rate.sub}</span></div><div class="product-actions"><button class="mini-btn" data-detail="${p.id}">Detail</button><button class="mini-btn add" data-add="${p.id}">+ Plan</button></div></div></div>
    </article>`;
  }).join("");
  $$('[data-fav]',grid).forEach(btn=>btn.onclick=()=>toggleFavorite(btn.dataset.fav));
  $$('[data-compare]',grid).forEach(btn=>btn.onclick=()=>toggleCompare(btn.dataset.compare));
  $$('[data-detail]',grid).forEach(btn=>btn.onclick=()=>openProduct(btn.dataset.detail));
  $$('[data-add]',grid).forEach(btn=>btn.onclick=()=>addToPlan(btn.dataset.add));
}

function resetFilters(){
  Object.assign(state,{search:"",category:"all",station:"all",budget:"all",duration:"all",sort:"featured",showFavorites:false});
  $("#productSearch").value="";$("#categorySelect").value="all";$("#stationFilter").value="all";$("#budgetFilter").value="all";$("#durationFilter").value="all";$("#sortSelect").value="featured";
  renderProducts();renderCategoryStrip();
}
function toggleFavorite(id){
  state.favorites.has(id)?state.favorites.delete(id):state.favorites.add(id);saveState();updateCounters();renderProducts();toast(state.favorites.has(id)?"Disimpan ke favorit":"Dihapus dari favorit");
}
function toggleCompare(id){
  if(state.compare.has(id)) state.compare.delete(id); else if(state.compare.size<3) state.compare.add(id); else return toast("Maksimal 3 media untuk dibandingkan.");
  updateCompareBar();renderProducts();
}
function updateCompareBar(){
  $("#compareCount").textContent=state.compare.size;$("#compareBar").classList.toggle("show",state.compare.size>0);
}
function openCompare(){
  if(state.compare.size<2) return toast("Pilih minimal 2 media dulu.");
  const items=[...state.compare].map(productById).filter(Boolean); const rows=[
    ["Kategori",p=>categoryLabel(p.category)], ["Lokasi",p=>p.location], ["Reference Rate",p=>displayRate(p).main], ["Minimum / Duration",p=>p.pricingType==="monthly"?`Min. ${p.minDuration} bulan`:(p.durationOptions||[]).map(d=>d+" bln").join(" • ")], ["Monthly Traffic",p=>p.traffic?num(p.traffic.monthly):"Tidak dicantumkan"], ["Format",p=>p.specs?.Format||p.specs?.Type||"—"]
  ];
  $("#compareContent").innerHTML=`<div class="compare-table" style="--compare-cols:${items.length}"><div class="compare-cell label">MEDIA</div>${items.map(p=>`<div class="compare-cell head"><img class="compare-thumb" src="${p.image}" alt="${p.name}"><strong>${p.name}</strong></div>`).join("")}${rows.map(([label,fn])=>`<div class="compare-cell label">${label}</div>${items.map(p=>`<div class="compare-cell">${fn(p)}</div>`).join("")}`).join("")}<div class="compare-cell label">ACTION</div>${items.map(p=>`<div class="compare-cell"><button class="primary-btn" data-compare-add="${p.id}">+ Media Plan</button></div>`).join("")}</div>`;
  $$('[data-compare-add]',$("#compareContent")).forEach(b=>b.onclick=()=>addToPlan(b.dataset.compareAdd)); openLayer("#compareModal");
}

function planEntries(){return Object.entries(state.plan).map(([id,item])=>({p:productById(id),...item})).filter(x=>x.p)}
function planEstimate(){
  return planEntries().reduce((sum,x)=>{const r=rateForDuration(x.p,x.duration);return sum+(r==null?0:r*x.qty)},0);
}
function planRequestCount(){return planEntries().filter(x=>rateForDuration(x.p,x.duration)==null).length}
function planItemCount(){return planEntries().reduce((sum,x)=>sum+x.qty,0)}
function addToPlan(id){
  const p=productById(id); if(!p)return;
  if(!state.plan[id]) state.plan[id]={qty:1,duration:getDefaultDuration(p)}; else state.plan[id].qty+=1;
  saveState();renderPlan();updateCounters();toast("Masuk ke Media Plan");
}
function removeFromPlan(id){delete state.plan[id];saveState();renderPlan();updateCounters();renderProducts()}
function changePlanQty(id,delta){
  if(!state.plan[id])return;state.plan[id].qty+=delta;if(state.plan[id].qty<=0)delete state.plan[id];saveState();renderPlan();updateCounters();renderProducts();
}
function changePlanDuration(id,duration){if(!state.plan[id])return;state.plan[id].duration=Number(duration);saveState();renderPlan();updateCounters()}
function renderPlan(){
  const wrap=$("#quoteItems");const entries=planEntries();
  if(!entries.length){wrap.innerHTML=`<div class="quote-empty"><b>Media Plan masih kosong.</b>Pilih placement dari katalog atau rekomendasi dulu.</div>`;return;}
  wrap.innerHTML=entries.map(({p,qty,duration})=>{
    const unit=rateForDuration(p,duration); const subtotal=unit==null?null:unit*qty;
    return `<div class="quote-item"><img src="${p.image}" alt="${p.name}"><div class="quote-item-main"><b>${p.name}</b><span>${categoryLabel(p.category)} • ${p.location}</span><button class="remove-item" data-remove="${p.id}">hapus</button></div><div class="quote-item-controls"><select data-plan-duration="${p.id}">${(p.durationOptions||[duration]).map(d=>`<option value="${d}" ${Number(d)===Number(duration)?'selected':''}>${d} bulan${p.pricingType==='monthly'&&d===p.minDuration?' (minimum)':''}</option>`).join("")}</select><div class="qty-control"><button data-plan-qty="${p.id}" data-delta="-1">−</button><i>${qty}</i><button data-plan-qty="${p.id}" data-delta="1">+</button></div><div class="quote-item-price"><b>${subtotal==null?'Request Rate':compactIDR(subtotal)}</b><small>${qty} × ${unit==null?'quote':compactIDR(unit)}</small></div></div></div>`;
  }).join("");
  $$('[data-remove]',wrap).forEach(b=>b.onclick=()=>removeFromPlan(b.dataset.remove));
  $$('[data-plan-qty]',wrap).forEach(b=>b.onclick=()=>changePlanQty(b.dataset.planQty,Number(b.dataset.delta)));
  $$('[data-plan-duration]',wrap).forEach(s=>s.onchange=()=>changePlanDuration(s.dataset.planDuration,s.value));
}
function updateCounters(){
  const count=planItemCount();const estimate=planEstimate();const req=planRequestCount();
  $("#quoteCount").textContent=count;$("#mobileQuoteCount").textContent=count;$("#favCount").textContent=state.favorites.size;$("#drawerEstimate").textContent=estimate?compactIDR(estimate):"Rp0";$("#mobileEstimate").textContent=estimate?compactIDR(estimate):"Rp0";$("#mobilePlanBar").classList.toggle("show",count>0);$("#drawerRequestNote").textContent=req?`${req} media masih Request Rate. Estimasi belum termasuk produksi, pemasangan, pajak, dan commercial terms lain.`:"Estimasi belum termasuk produksi, pemasangan, pajak, dan commercial terms lain.";
}
function buildInquiry(){
  const name=$("#clientName").value.trim();const company=$("#clientCompany").value.trim();const email=$("#clientEmail").value.trim();const station=$("#stationSelect").value;const objective=$("#objectiveSelect").value;const note=$("#clientNote").value.trim();
  const lines=[`Halo ${CONFIG.company},`,"","Saya ingin request proposal berdasarkan Media Plan berikut:",""];
  const entries=planEntries();
  if(entries.length){entries.forEach(({p,qty,duration},i)=>{const unit=rateForDuration(p,duration);const subtotal=unit==null?null:unit*qty;lines.push(`${i+1}. ${p.name}`,`   Lokasi: ${p.location}`,`   Durasi: ${duration} bulan`, `   Qty/Sisi: ${qty}`,`   Estimasi: ${subtotal==null?'Request Rate':fmtIDR(subtotal)}`,"")});}
  else lines.push("Media: Belum memilih placement","");
  const total=planEstimate();lines.push(`Estimasi media terhitung: ${total?fmtIDR(total):'Belum ada estimasi'}`);if(planRequestCount())lines.push(`Media Request Rate: ${planRequestCount()} item`);lines.push("",`Nama: ${name||'-'}`,`Perusahaan / Brand: ${company||'-'}`,`Email: ${email||'-'}`,`Target stasiun: ${station||'-'}`,`Objective: ${objective||'-'}`,`Catatan: ${note||'-'}`,"","Mohon konfirmasi availability, rate final, production/install cost, pajak, dan proposal terbaru. Terima kasih.");return lines.join("\n");
}

function openProduct(id){
  const p=productById(id);if(!p)return;const rate=displayRate(p);
  const rateOptions=p.pricingType==="request"?`<span class="rate-pill">Rate <b>By Proposal</b></span>`:(p.durationOptions||[]).map(d=>`<span class="rate-pill">${d} bln <b>${compactIDR(rateForDuration(p,d))}</b></span>`).join("");
  $("#productModalContent").innerHTML=`<div class="modal-image"><img src="${p.image}" alt="${p.name}"></div><div class="modal-copy"><button class="close-btn" data-close-modal>×</button><span class="eyebrow"><span></span> ${categoryLabel(p.category)}</span><h3>${p.name}</h3><p>${p.desc}</p><div class="modal-specs">${Object.entries(p.specs||{}).map(([k,v])=>`<div><small>${k}</small><b>${v}</b></div>`).join("")}</div>${p.traffic?`<div class="modal-traffic"><span>Daily traffic<b>${num(p.traffic.daily)}</b></span><span>Monthly traffic<b>${num(p.traffic.monthly)}</b></span></div>`:""}<div class="modal-price"><small>REFERENCE RATE</small><b>${rate.main}</b><div class="modal-rate-options">${rateOptions}</div></div><div class="modal-notes">${(p.notes||[]).map(x=>`• ${x}`).join("<br>")}</div><div class="product-modal-actions"><button class="primary-btn" data-modal-add="${p.id}">+ Media Plan</button><button class="secondary-btn" data-modal-wa="${p.id}">Request Proposal</button></div></div>`;
  $$('[data-close-modal]',$("#productModal")).forEach(b=>b.onclick=()=>closeLayer("#productModal"));
  $("[data-modal-add]").onclick=()=>addToPlan(p.id);$("[data-modal-wa]").onclick=()=>openWhatsApp([`Halo ${CONFIG.company},`,"",`Saya tertarik dengan media: ${p.name}`,`Lokasi: ${p.location}`,`Rate referensi: ${rate.main}`,"","Mohon info availability dan proposal terbaru."].join("\n"));
  openLayer("#productModal");
}

function renderPackages(){
  $("#packageGrid").innerHTML=PACKAGES.map(p=>`<article class="package-card glass ${p.featured?'featured':''}"><div class="package-cover"><img src="${p.image}" alt="${p.name}" loading="lazy"><span class="package-label">${p.featured?'Featured Package':'Campaign Package'}</span></div><div class="package-body"><h3>${p.name}</h3><div class="package-price">${fmtIDR(p.price)}</div><ul class="package-list">${p.inclusions.map(x=>`<li>${x}</li>`).join("")}</ul><p class="package-note">${p.note}</p><div class="package-actions"><button class="mini-btn add" data-package-wa="${p.id}">Request Proposal</button><button class="mini-btn" data-package-preview="${p.id}">Preview</button></div></div></article>`).join("");
  $$('[data-package-wa]').forEach(b=>b.onclick=()=>{const p=packageById(b.dataset.packageWa);openWhatsApp([`Halo ${CONFIG.company},`,"",`Saya tertarik dengan paket: ${p.name}`,`Harga referensi: ${fmtIDR(p.price)}`,"","Mohon detail inclusion, availability, dan proposal terbaru."].join("\n"))});
  $$('[data-package-preview]').forEach(b=>{const p=packageById(b.dataset.packagePreview);b.onclick=()=>openLightbox(p.image)});
}

function renderStations(){
  $("#stationCloud").innerHTML=STATIONS.map(s=>`<button class="station-chip ${state.selectedStation===s.id?'active':''}" data-station="${s.id}">${String(s.sequence).padStart(2,"0")} • ${s.name}</button>`).join("");
  $$('[data-station]',$("#stationCloud")).forEach(b=>b.onclick=()=>{state.selectedStation=b.dataset.station;renderStations();renderStationPanel()});
  renderStationPanel();
}
function renderStationPanel(){
  const s=STATIONS.find(x=>x.id===state.selectedStation);if(!s)return;
  const media=PRODUCTS.filter(p=>p.station===s.id || (p.category==="station" && p.station==="network"));
  $("#stationPanel").innerHTML=`<div class="station-panel-head"><small>STATION ${String(s.sequence).padStart(2,"0")}</small><h3>${s.name}</h3><p>Inventory yang terhubung langsung ke stasiun ini + station media network yang dapat diajukan sesuai titik dan proposal.</p><button class="secondary-btn" data-station-filter-go="${s.id}">Lihat di Katalog</button></div><div class="station-media-list">${media.length?media.slice(0,7).map(p=>`<div class="station-media-item"><div><b>${p.name}</b><span>${displayRate(p).main}</span></div><button data-station-detail="${p.id}">Detail →</button></div>`).join(""):`<div class="station-empty">Belum ada media spesifik yang terhubung pada data katalog untuk stasiun ini. Station branding tetap bisa diajukan melalui proposal.</div>`}</div>`;
  $("[data-station-filter-go]").onclick=()=>{state.station=s.id;$("#stationFilter").value=s.id;renderProducts();document.querySelector("#catalog").scrollIntoView({behavior:"smooth"})};
  $$('[data-station-detail]',$("#stationPanel")).forEach(b=>b.onclick=()=>openProduct(b.dataset.stationDetail));
}

function renderAudience(){
  $("#insightGrid").innerHTML=INSIGHTS.map(x=>`<article class="insight"><strong>${x.value}</strong><span>${x.label}</span><small>${x.note}</small></article>`).join("");
  const max=Math.max(...TRAFFIC.map(t=>t.monthly));
  $("#trafficChart").innerHTML=TRAFFIC.map(t=>`<div class="bar-row"><div class="bar-label">${t.name}</div><div class="bar"><span style="width:${Math.max(8,Math.round(t.monthly/max*100))}%"></span></div><div class="bar-value">${num(t.monthly)} / bulan</div></div>`).join("");
}

function openRecommend(){openLayer("#recommendModal")}
function runRecommend(){
  const budget=Number($("#recommendBudget").value);const objective=$("#recommendObjective").value;const duration=Number($("#recommendDuration").value);
  const scored=PRODUCTS.map(p=>{
    if(!durationSupported(p,String(duration)))return null;const rate=rateForDuration(p,duration);if(rate==null||rate>budget)return null;
    let score=0;if(p.tags?.includes(objective))score+=80;if(objective==="awareness"&&p.tags?.includes("awareness"))score+=70;if(objective==="station"&&["station","naming-rights"].includes(p.category))score+=70;if(objective==="train"&&p.category==="train")score+=100;if(objective==="local"&&["pillar","parapet","skybridge"].includes(p.category))score+=80;if(objective==="premium"&&p.tags?.includes("premium"))score+=100;if(p.traffic?.monthly)score+=Math.min(30,p.traffic.monthly/120000);score+=Math.max(0,20-(p.featured||20));return {p,rate,score};
  }).filter(Boolean).sort((a,b)=>b.score-a.score||b.rate-a.rate).slice(0,6);
  const wrap=$("#recommendResults");
  if(!scored.length){wrap.innerHTML=`<div class="recommend-empty">Belum ada media dengan rate terhitung yang cocok dengan kombinasi ini. Coba budget/durasi lain atau request proposal untuk inventory “Request Rate”.</div>`;return;}
  wrap.innerHTML=scored.map(({p,rate})=>`<article class="recommend-result"><img src="${p.image}" alt="${p.name}"><h4>${p.name}</h4><p>${categoryLabel(p.category)} • ${p.location}<br>${duration} bulan</p><b>${compactIDR(rate)}</b><button class="mini-btn add" data-recommend-add="${p.id}">+ Media Plan</button></article>`).join("");
  $$('[data-recommend-add]',wrap).forEach(b=>b.onclick=()=>addToPlan(b.dataset.recommendAdd));
}

function openConsult(){openLayer("#consultModal")}
function sendConsult(){
  const name=$("#consultName").value.trim(),brand=$("#consultBrand").value.trim(),email=$("#consultEmail").value.trim(),goal=$("#consultGoal").value,budget=$("#consultBudget").value,brief=$("#consultBrief").value.trim();
  openWhatsApp([`Halo ${CONFIG.company},`,"","Saya ingin request proposal.",`Nama: ${name||'-'}`,`Brand / Perusahaan: ${brand||'-'}`,`Email: ${email||'-'}`,`Objective: ${goal}`,`Budget: ${budget}`,`Brief: ${brief||'-'}`,"","Mohon rekomendasi media, availability, dan proposal terbaru."].join("\n"));
}
function openLightbox(src){$("#lightboxImg").src=src;openLayer("#lightbox")}

function bindUI(){
  $$('[data-scroll]').forEach(btn=>btn.onclick=()=>document.querySelector(btn.dataset.scroll)?.scrollIntoView({behavior:"smooth"}));
  $("#menuBtn").onclick=()=>$("#navLinks").classList.toggle("open");
  $$("#navLinks a").forEach(a=>a.onclick=()=>$("#navLinks").classList.remove("open"));
  $("#productSearch").oninput=e=>{state.search=e.target.value;renderProducts()};
  $("#categorySelect").onchange=e=>{state.category=e.target.value;renderProducts();renderCategoryStrip()};
  $("#stationFilter").onchange=e=>{state.station=e.target.value;renderProducts()};
  $("#budgetFilter").onchange=e=>{state.budget=e.target.value;renderProducts()};
  $("#durationFilter").onchange=e=>{state.duration=e.target.value;renderProducts()};
  $("#sortSelect").onchange=e=>{state.sort=e.target.value;renderProducts()};
  $("#favNavBtn").onclick=()=>{state.showFavorites=!state.showFavorites;renderProducts();document.querySelector("#catalog").scrollIntoView({behavior:"smooth"});toast(state.showFavorites?"Menampilkan favorit":"Menampilkan semua media")};
  ["#quoteNavBtn","#mobileQuoteBtn","#whyPlanBtn","#closingPlanBtn","#footerPlanBtn"].forEach(id=>$(id)&&( $(id).onclick=()=>openLayer("#quoteDrawer") ));
  $$('[data-close-drawer]').forEach(b=>b.onclick=()=>closeLayer("#quoteDrawer"));
  $$('[data-close-modal]').forEach(b=>b.onclick=()=>closeLayer("#productModal"));
  $$('[data-close-consult]').forEach(b=>b.onclick=()=>closeLayer("#consultModal"));
  $$('[data-close-compare]').forEach(b=>b.onclick=()=>closeLayer("#compareModal"));
  $$('[data-close-recommend]').forEach(b=>b.onclick=()=>closeLayer("#recommendModal"));
  ["#heroConsultBtn","#contactProposalBtn"].forEach(id=>$(id).onclick=openConsult);$("#consultSendBtn").onclick=sendConsult;
  ["#heroRecommendBtn","#openRecommendBtn","#footerRecommendBtn"].forEach(id=>$(id).onclick=openRecommend);$("#runRecommendBtn").onclick=runRecommend;
  $("#compareOpenBtn").onclick=openCompare;$("#compareClearBtn").onclick=()=>{state.compare.clear();updateCompareBar();renderProducts()};
  $("#sendInquiryBtn").onclick=()=>openWhatsApp(buildInquiry());$("#copyInquiryBtn").onclick=async()=>{try{await navigator.clipboard.writeText(buildInquiry());toast("Brief berhasil dicopy") }catch{toast("Copy gagal—gunakan tombol WhatsApp")}};
  $("#emailInquiryBtn").onclick=()=>openEmail("Request Proposal — Ramanisa White",buildInquiry());
  ["#topWaBtn","#contactWaBtn","#footerSalesBtn"].forEach(id=>$(id).onclick=()=>openWhatsApp(genericWa()));
  $("#contactEmailBtn").onclick=()=>openEmail("Konsultasi Media Advertising LRT Sumsel",`Halo ${CONFIG.company},\n\nSaya ingin konsultasi kebutuhan media advertising LRT Sumsel. Mohon info inventory, availability, dan proposal terbaru.`);
  $("#contactEmailText").textContent=CONFIG.email || "Compose Email";
  $$('[data-lightbox]').forEach(b=>b.onclick=()=>openLightbox(b.dataset.lightbox));$("#lightboxClose").onclick=()=>closeLayer("#lightbox");$("#lightbox").onclick=e=>{if(e.target===$("#lightbox"))closeLayer("#lightbox")};
  document.addEventListener("keydown",e=>{if(e.key==="Escape"){["#quoteDrawer","#productModal","#consultModal","#compareModal","#recommendModal","#lightbox"].forEach(closeLayer)}});
}

function initReveal(){
  const els=$$(".reveal");if(!("IntersectionObserver" in window)){els.forEach(el=>el.classList.add("visible"));return}
  const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");io.unobserve(e.target)}}),{threshold:.08});els.forEach(el=>io.observe(el));
}

function init(){
  renderSelects();renderCategoryStrip();renderProducts();renderPackages();renderStations();renderAudience();renderPlan();updateCounters();updateCompareBar();bindUI();initReveal();
}

document.addEventListener("DOMContentLoaded",init);
