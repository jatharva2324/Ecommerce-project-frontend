const data = [
  {
    id: "1",
    name: "Sony MDR-ZX110A Wired On Ear Headphone without Mic (White)",
    price: "₹599",
    specs:
      "White,Wired,30mm dynamic driver,Slim, folding design,Warranty: 1 Year",
    image: "https://m.media-amazon.com/images/I/41BoLKMYjnL._SY879_.jpg",
    rating: "4/5"
  },
  {
    id: "2",
    name: "boAt Bassheads 900 Wired On Ear Headphones with Mic (Pearl White)",
    price: "₹849.00",
    specs:
      "Pearl White,Wired,40mm Neodymium drivers,3.5mm audio jack,built-in mic ",
    image: "https://m.media-amazon.com/images/I/71r6AArbBBL._SX522_.jpg",
    rating: "4/5"
  },
  {
    id: "3",
    name: "boAt Rockerz 450 Bluetooth Wireless On Ear Headphones with Mic",
    price: "₹1,499.00",
    specs:
      "Wireless,Upto 15 Hours Playback,40MM Drivers,Padded Ear Cushions and Dual Modes (Luscious Black)",
    image: "https://m.media-amazon.com/images/I/315vj6oj-FL._AC_SR320,320_.jpg",
    rating: "4.5/5"
  },
  {
    id: "4",
    name: "Zebronics Zeb-Thunder PRO On-Ear Wireless Headphone",
    price: "₹1899.00",
    specs:
      "Black,Wireless,BTv5.0,Up to 21 Hours Playback,40mm Drivers,Deep Bass,USB-C Type Charging",
    image: "https://m.media-amazon.com/images/I/61Eqeb950eL._SX522_.jpg",
    rating: "4.5/5"
  },
  {
    id: "5",
    name: "Lenovo 110 Wired On Ear Headphones with Mic (White)",
    price: "₹1,879.00",
    specs:
      "White,Wired,1.8 m USB-A cable,extra-long 1.8 mm auxiliary cable,30 mm audio drivers",
    image: "https://m.media-amazon.com/images/I/21twShNdZRL._AC_SR160,160_.jpg",
    rating: "3/5"
  },
  {
    id: "6",
    name: "boAt Stone 1000 14W Bluetooth Speaker",
    price: "₹2,499.00",
    specs:
      "Black,8 Hours Playback,Bluetooth v5.0,IPX5 Water Resistance,Frequency Response 20Hz-20KHz,3000mAh battery",
    image:
      "https://m.media-amazon.com/images/I/718DqdKu9tL._AC_UY327_FMwebp_QL65_.jpg",
    rating: "4/5"
  },
  {
    id: "7",
    name: "Zebronics ZEB-COUNTY 3W Wireless Bluetooth Portable Speaker",
    price: "₹549.00",
    specs:
      "Black,3W,Supporting Carry Handle,Playback time approx. 10 hrs,Frequency response 120hz-15khz",
    image:
      "https://m.media-amazon.com/images/I/81v-h4I5CCL._AC_UY327_FMwebp_QL65_.jpg",
    rating: "3/5"
  },
  {
    id: "8",
    name: "Mivi Play Bluetooth Speaker with 12 Hours Playtime",
    price: "₹899.00",
    specs:
      " Black,Made in India,12 Hours Playtime,Wireless, Bluetooth,Built in Mic",
    image:
      "https://m.media-amazon.com/images/I/61UJnlIHF9S._AC_UY327_FMwebp_QL65_.jpg",
    rating: "4.5/5"
  },
  {
    id: "9",
    name: "Echo Dot (3rd Gen)",
    price: "₹2,399.00",
    specs:
      "Black,3.5mm jack,New and improved smart speaker with Alexa,Voice control",
    image:
      "https://m.media-amazon.com/images/I/61EXU8BuGZL._AC_UY327_FMwebp_QL65_.jpg",
    rating: "4.5/5"
  },
  {
    id: "10",
    name: "AUGEN TWS Mini Bluetooth Speaker with in Built Mic",
    price: "₹699.00",
    specs: "Yellow, 4-5H Playtime with 400mAH,3W Output,n Built Mic",
    image:
      "https://m.media-amazon.com/images/I/619u741UT5S._AC_UY327_FMwebp_QL65_.jpg",
    rating: "3/5"
  },
  {
    id: "11",
    name: "HP 247 G8 Laptop",
    price: "28,800.00",
    specs: "Black,35.56 cms,8GB RAM DDR4,1TB HDD,W11 SL",
    image:
      "https://m.media-amazon.com/images/I/71Ff0Ap49HS._AC_UY327_FMwebp_QL65_.jpg",
    rating: "3.5/5"
  },
  {
    id: "12",
    name: "AVITA PURA E14 NS14A6ING431-CRC AMD Radeon R4",
    price: "₹25,900.00",
    specs:
      "Red,Thin and Light 14 inches Laptop,Windows 10 Home,1.34Kg,4 GB RAM",
    image:
      "https://m.media-amazon.com/images/I/51WO3l2h2IL._AC_UY327_FMwebp_QL65_.jpg",
    rating: "2.5/5"
  },
  {
    id: "13",
    name: "Redmi Book Pro Intel Core i5 11th Gen H Series",
    price: "₹42,990.00",
    specs: "Charcoal Gray,8 GB RAM,Core i5,512 GB,39.62 Centimetres",
    image:
      "https://m.media-amazon.com/images/I/71rGGIEXtcL._AC_UY327_FMwebp_QL65_.jpg",
    rating: "4/5"
  },
  {
    id: "14",
    name: "ASUS TUF Gaming F15 (2021)",
    price: "₹96,990.00",
    specs:
      "39.62 cms,Intel Core i7-11800H 11th Gen,GeForce RTX 3050 4GB Graphics,8 GB RAM ,512 GB storage",
    image:
      "https://m.media-amazon.com/images/I/91aWfctUptL._AC_UY327_QL65_.jpg",
    rating: "5/5"
  },
  {
    id: "15",
    name: "2020 Apple MacBook Air Laptop:",
    price: "₹92,900.00",
    specs:
      "Gold,Apple M1 chip,13.3-inch/33.74 cm Retina Display,8GB RAM, 256GB SSD Storage, Backlit Keyboard",
    image:
      "https://m.media-amazon.com/images/I/71vFKBpKakL._AC_UY327_FMwebp_QL65_.jpg",
    rating: "5/5"
  },
  {
    id: "16",
    name: "Samsung Galaxy S20 FE 5G",
    price: "₹36,990.00",
    specs:
      "Cloud Mint,8GB RAM,128GB Storage,12MP OIS F1.8 Wide Rear Camera + 8MP Tele Camera + 12MP Ultra Wide",
    image:
      "https://m.media-amazon.com/images/I/812yohjGZ2L._AC_UY327_FMwebp_QL65_.jpg",
    rating: "4/5"
  },
  {
    id: "17",
    name: "MOTOROLA G40 Fusion ",
    price: "15,499.00 ",
    specs:
      "Dynamic Gray, 6 GB RAM, 128GB Storage,64MP,6000mAh lithium-ion battery",
    image:
      "https://m.media-amazon.com/images/I/31QQm0f6ntL._AC_UY327_FMwebp_QL65_.jpg",
    rating: "4/5"
  },
  {
    id: "18",
    name: "Redmi Note 11 Pro + 5G",
    price: "₹19,999.00",
    specs:
      "Stealth Black, 6GB RAM, 128GB Storage,16.94cm(6.67) Super AMOLED display,108MP triple camera",
    image:
      "https://m.media-amazon.com/images/I/71lx0qz7rFL._AC_UY327_FMwebp_QL65_.jpg",
    rating: "4/5"
  },
  {
    id: "19",
    name: "Apple iPhone 12 (64GB)",
    price: "₹53,999.00",
    specs:
      "RED,6.1 Inches,64 GB storage,4 GB RAM,Dual Rear Camera (12MP), 12MP Front Camera",
    image:
      "https://m.media-amazon.com/images/I/915NXQJEeFL._AC_UY327_FMwebp_QL65_.jpg",
    rating: "5/5"
  },
  {
    id: "20",
    name: "OnePlus 9 5G",
    price: "₹37,999.00",
    specs:
      "Astral Black, 8GB RAM, 128GB Storage,4500 mAh Battery,48 MP Main camera, 50 MP Ultra Wide",
    image:
      "https://m.media-amazon.com/images/I/61urU8k2lFL._AC_UL480_FMwebp_QL65_.jpg",
    rating: "5/5"
  },
  {
    id: "21",
    name: "Lenovo Tab Yoga Smart Tablet with The Google Assistant",
    price: "₹18,999.00",
    specs:
      "10.1 inch/25.65 cm, 4GB, 64GB, Wi-Fi + 4G LTE, Calling), Iron Grey,64 GB storage",
    image:
      "https://m.media-amazon.com/images/I/814AjiAo5GL._AC_UY327_FMwebp_QL65_.jpg",
    rating: "3/5"
  },
  {
    id: "22",
    name: "Samsung Galaxy Tab A8",
    price: "17,999.00",
    specs:
      "10.5 inch, Display, RAM 4 GB, ROM 64 GB Expandable, Wi-Fi Tablet, Gray",
    image:
      "https://m.media-amazon.com/images/I/91veRYPjpeL._AC_UY327_FMwebp_QL65_.jpg",
    rating: "4/5"
  },
  {
    id: "23",
    name: "Lenovo Tab M10 FHD Plus",
    price: "₹21,091.00",
    specs: "10.3 inch (26.16 cm), 4GB, 128 GB, Wi-Fi + LTE, Volte Calling",
    image:
      "https://m.media-amazon.com/images/I/71UD5dhwyYS._AC_UY327_FMwebp_QL65_.jpg",
    rating: "4/5"
  },
  {
    id: "24",
    name: "Nokia T20 Tab",
    price: "₹18,499.00",
    specs:
      "10.36 Inch 2K Screen, Low Blue Light, Wi-Fi & LTE, 8200mAh Battery,4GB RAM, 64GB Storage",
    image:
      "https://m.media-amazon.com/images/I/61MRf24YMEL._AC_UY327_FMwebp_QL65_.jpg",
    rating: "3/5"
  },
  {
    id: "25",
    name: "Swipe X1 Tab ",
    price: "₹15,999.00",
    specs: "IPS Display Octa Core 10.1 inch with Wi-Fi,4GB+64GB, Space Grey",
    image:
      "https://m.media-amazon.com/images/I/61s79Z1nryL._AC_UY327_QL65_.jpg",
    rating: "4/5"
  },
  {
    id: "26",
    name: "Panasonic Viera",
    price: "₹43,290.00",
    specs:
      "108cm (43 Inch) Ultra HD 4K LED Android Smart TV,Super Bright Panel, TH-43JX660DX, Black",
    image:
      "https://m.media-amazon.com/images/I/81j+5gnv1RL._AC_UY327_FMwebp_QL65_.jpg",
    rating: "4/5"
  },
  {
    id: "27",
    name: "Huidi Ready Smart LED TV",
    price: "₹10,999.00",
    specs: "Black,32 Inches,720p,HD Ready (1366 x 768)",
    image:
      "https://m.media-amazon.com/images/I/817V04mr-TL._AC_UY327_FMwebp_QL65_.jpg",
    rating: "3/5"
  },
  {
    id: "28",
    name: "Sony Bravia Smart TV",
    price: " ₹66,490.00",
    specs:
      "Black,55 inches,Alexa Compatibility,Wi-Fi, USB, Ethernet, HDMI, Google TV ",
    image:
      "https://m.media-amazon.com/images/I/71ZKGDdz1lL._AC_UY327_FMwebp_QL65_.jpg",
    rating: "5/5"
  },
  {
    id: "29",
    name: "iFFALCON Android Smart LED TV",
    price: "₹52,999.00",
    specs:
      "Black,164 cm (65 inches) 4K Ultra HD,Refresh Rate: 60 Hertz, Dolby Audio Power Speakers ",
    image:
      "https://m.media-amazon.com/images/I/81JoeYVLiiL._AC_UY327_FMwebp_QL65_.jpg",
    rating: "4.5/5"
  },
  {
    id: "30",
    name: "Sansui LED TV JSY24NSHD ",
    price: "",
    specs: "60 cm (24 Inches) HD Ready LED,Black,768p, 2 USB ports",
    image:
      "https://m.media-amazon.com/images/I/71GNqAJNZzL._AC_UY327_FMwebp_QL65_.jpg",
    rating: "3/5"
  }
];
export default data;
