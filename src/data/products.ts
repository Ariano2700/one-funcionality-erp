export interface Product {
  description?: string;
  codigo: number;
  precio?: number;
  existencia?: number;
}

export interface FolioI {
  folioId: string;
}

export const productsAOTC: Product[] = [
  {
    description: "Monitor Gaming 27'' 144Hz",
    codigo: 1001,
    precio: 350,
    existencia: 15,
  },
  {
    description: "Teclado Mecánico Redragon K552",
    codigo: 1002,
    precio: 60,
    existencia: 20,
  },
  {
    description: "Mouse Logitech G502 Hero",
    codigo: 1003,
    precio: 80,
    existencia: 18,
  },
  {
    description: "Laptop ASUS ROG Strix G15",
    codigo: 1004,
    precio: 1200,
    existencia: 10,
  },
  {
    description: "Tarjeta Gráfica NVIDIA RTX 3080",
    codigo: 1005,
    precio: 900,
    existencia: 5,
  },
  {
    description: "Auriculares HyperX Cloud II",
    codigo: 1006,
    precio: 100,
    existencia: 25,
  },
  {
    description: "SSD Samsung 1TB NVMe",
    codigo: 1007,
    precio: 150,
    existencia: 30,
  },
  {
    description: "Monitor LG UltraWide 34''",
    codigo: 1008,
    precio: 600,
    existencia: 12,
  },
  {
    description: "Teclado Logitech G Pro X",
    codigo: 1009,
    precio: 130,
    existencia: 22,
  },
  {
    description: "Mousepad SteelSeries QcK Prism",
    codigo: 1010,
    precio: 50,
    existencia: 35,
  },
  {
    description: "Monitor Dell 24'' 60Hz",
    codigo: 1011,
    precio: 200,
    existencia: 20,
  },
  {
    description: "Teclado HP Multimedia",
    codigo: 1012,
    precio: 25,
    existencia: 40,
  },
  {
    description: "Mouse Microsoft Basic Optical",
    codigo: 1013,
    precio: 15,
    existencia: 50,
  },
  {
    description: "Impresora Epson EcoTank",
    codigo: 1014,
    precio: 300,
    existencia: 8,
  },
  {
    description: "Monitor Samsung 32'' Curvo",
    codigo: 1015,
    precio: 400,
    existencia: 14,
  },
  {
    description: "Teclado Razer BlackWidow Elite",
    codigo: 1016,
    precio: 160,
    existencia: 18,
  },
  {
    description: "Mouse Gamer Corsair M65",
    codigo: 1017,
    precio: 70,
    existencia: 20,
  },
  {
    description: "Tablet Apple iPad Pro 12.9''",
    codigo: 1018,
    precio: 1000,
    existencia: 6,
  },
  {
    description: "Monitor HP 27'' 4K",
    codigo: 1019,
    precio: 500,
    existencia: 10,
  },
  {
    description: "Teclado Lenovo ThinkPad",
    codigo: 1020,
    precio: 80,
    existencia: 25,
  },
];
export const gamingProductsIHC: Product[] = [
  {
    codigo: 2001,
    description: "Gaming Laptop ASUS ROG",
    precio: 1500.0,
    existencia: 10,
  },
  {
    codigo: 2002,
    description: "Gaming Mouse Logitech G502",
    precio: 60.0,
    existencia: 25,
  },
  {
    codigo: 2003,
    description: "Mechanical Keyboard Razer",
    precio: 120.0,
    existencia: 15,
  },
  {
    codigo: 2004,
    description: "Gaming Monitor 27'' Samsung",
    precio: 300.0,
    existencia: 8,
  },
  {
    codigo: 2005,
    description: "Gaming Headset SteelSeries",
    precio: 100.0,
    existencia: 20,
  },
  {
    codigo: 2006,
    description: "Gaming Chair DXRacer",
    precio: 250.0,
    existencia: 5,
  },
  {
    codigo: 2007,
    description: "Gaming Desk Eureka",
    precio: 200.0,
    existencia: 10,
  },
  {
    codigo: 2008,
    description: "RGB Mouse Pad Corsair",
    precio: 50.0,
    existencia: 30,
  },
  {
    codigo: 2009,
    description: "Gaming PC Case NZXT",
    precio: 150.0,
    existencia: 12,
  },
  {
    codigo: 2010,
    description: "Streaming Webcam Logitech C922",
    precio: 90.0,
    existencia: 18,
  },
];
export const regularProductsMDC: Product[] = [
  {
    codigo: 3001,
    description: "Laptop HP Pavilion",
    precio: 800.0,
    existencia: 20,
  },
  {
    codigo: 3002,
    description: "Wireless Mouse Logitech",
    precio: 25.0,
    existencia: 50,
  },
  {
    codigo: 3003,
    description: "Office Keyboard Microsoft",
    precio: 30.0,
    existencia: 40,
  },
  {
    codigo: 3004,
    description: "LED Monitor 24'' Dell",
    precio: 200.0,
    existencia: 15,
  },
  {
    codigo: 3005,
    description: "Headset Sony",
    precio: 80.0,
    existencia: 35,
  },
  {
    codigo: 3006,
    description: "Office Chair Herman Miller",
    precio: 400.0,
    existencia: 10,
  },
  {
    codigo: 3007,
    description: "Office Desk Ikea",
    precio: 150.0,
    existencia: 20,
  },
  {
    codigo: 3008,
    description: "USB Flash Drive 64GB Kingston",
    precio: 15.0,
    existencia: 100,
  },
  {
    codigo: 3009,
    description: "External HDD 1TB Seagate",
    precio: 70.0,
    existencia: 25,
  },
  {
    codigo: 3010,
    description: "Webcam Microsoft LifeCam",
    precio: 50.0,
    existencia: 30,
  },
];

export const randomFolios: FolioI[] = [
  { folioId: "P-0001" },
  { folioId: "P-0002" },
  { folioId: "P-0003" },
  { folioId: "P-0004" },
  { folioId: "P-0005" },
  { folioId: "P-0006" },
  { folioId: "P-0007" },
  { folioId: "P-0008" },
  { folioId: "P-0009" },
  { folioId: "P-0010" },
];

export const randomFoliosOrden: FolioI[] = [
  { folioId: "O-0001" },
  { folioId: "O-0002" },
  { folioId: "O-0003" },
  { folioId: "O-0004" },
  { folioId: "O-0005" },
  { folioId: "O-0006" },
  { folioId: "O-0007" },
  { folioId: "O-0008" },
  { folioId: "O-0009" },
  { folioId: "O-0010" },
];
