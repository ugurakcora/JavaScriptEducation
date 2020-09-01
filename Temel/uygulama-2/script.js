let aracBilgileri = [
  {
    id: "bmw116d_123",
    model: "bmw 116d",
    yil: 2015,
    renk: "beyaz",

    servisKayitlar: [
      {
        id: "bmw116d_123_1",
        tarih: "20.01.2016",
        km: "13000",
        ucret: 900,

        detay: [
          { id: "bmw116d_123_1_1", aciklama: "yag Degisimi", ucret: 300 },
          { id: "bmw116d_123_1_2", aciklama: "filtre Degisimi", ucret: 400 },
          { id: "bmw116d_123_1_3", aciklama: "fren hidroliği", ucret: 200 },
        ],
      },

      {
        id: "bmw116d_123_2",
        tarih: "10.01.2017",
        km: "28000",
        ucret: 1800,

        detay: [
          { id: "bmw116d_123_2_1", aciklama: "yag Degisimi", ucret: 600 },
          { id: "bmw116d_123_2_2", aciklama: "filtre Degisimi", ucret: 800 },
          { id: "bmw116d_123_2_3", aciklama: "fren hidroliği", ucret: 400 },
        ],
      },
    ],
  },
  {
    id: "bmw118i_123",
    model: "bmw 116d",
    yil: 2015,
    renk: "beyaz",

    servisKayitlar: [
      {
        id: "bmw118i_123_1",
        tarih: "20.01.2016",
        km: "13000",
        ucret: 900,

        detay: [
          { id: "bmw118i_123_1_1", aciklama: "yag Degisimi", ucret: 300 },
          { id: "bmw118i_123_1_2", aciklama: "filtre Degisimi", ucret: 400 },
          { id: "bmw118i_123_1_3", aciklama: "fren hidroliği", ucret: 200 },
        ],
      },

      {
        id: "bmw118i_123_2",
        tarih: "10.01.2017",
        km: "28000",
        ucret: 1800,

        detay: [
          { id: "bmw118i_123_2_1", aciklama: "yag Degisimi", ucret: 600 },
          { id: "bmw118i_123_2_2", aciklama: "filtre Degisimi", ucret: 800 },
          { id: "bmw118i_123_2_3", aciklama: "fren hidroliği", ucret: 400 },
        ],
      },
    ],
  },
  {
    id: "bmw320d_123",
    model: "bmw 116d",
    yil: 2015,
    renk: "beyaz",

    servisKayitlar: [
      {
        id: "bmw320d_123_1",
        tarih: "20.01.2016",
        km: "13000",
        ucret: 900,

        detay: [
          { id: "bmw320d_123_1_1", aciklama: "yag Degisimi", ucret: 300 },
          { id: "bmw320d_123_1_2", aciklama: "filtre Degisimi", ucret: 400 },
          { id: "bmw320d_123_1_3", aciklama: "fren hidroliği", ucret: 200 },
        ],
      },

      {
        id: "bmw320d_123_2",
        tarih: "10.01.2017",
        km: "28000",
        ucret: 1800,

        detay: [
          { id: "bmw320d_123_2_1", aciklama: "yag Degisimi", ucret: 600 },
          { id: "bmw320d_123_2_2", aciklama: "filtre Degisimi", ucret: 800 },
          { id: "bmw320d_123_2_3", aciklama: "fren hidroliği", ucret: 400 },
        ],
      },
    ],
  },
];
console.log(aracBilgileri[0]);
console.log(aracBilgileri[0].id);
console.log(aracBilgileri[0].model);
console.log(aracBilgileri[0].renk);
console.log(aracBilgileri[0].servisKayitlar[0].km);
console.log(aracBilgileri[0].servisKayitlar[0].ucret);
console.log(aracBilgileri[0].servisKayitlar[0].detay[0].aciklama);

