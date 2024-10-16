import "dotenv/config.js";
import '../../config/database.js'
import Producto from '../Producto.js'

// array de productos
let productos = [
    {
        nombre: "Smartphone Galaxy S21",
        marca: "Samsung",
        tipo: "Electrónica",
        precio: 799
    },
    {
        nombre: "Zapatillas Air Max",
        marca: "Nike",
        tipo: "Calzado",
        precio: 120
    },
    {
        nombre: "Laptop MacBook Pro",
        marca: "Apple",
        tipo: "Electrónica",
        precio: 1299
    },
    {
        nombre: "Televisor OLED 4K",
        marca: "LG",
        tipo: "Electrónica",
        precio: 1499
    },
    {
        nombre: "Cámara EOS R5",
        marca: "Canon",
        tipo: "Fotografía",
        precio: 3899
    },
    {
        nombre: "Refrigerador Side-by-Side",
        marca: "Whirlpool",
        tipo: "Electrodomésticos",
        precio: 1200
    },
    {
        nombre: "Consola PlayStation 5",
        marca: "Sony",
        tipo: "Videojuegos",
        precio: 499
    },
    {
        nombre: "Aspiradora sin cable V11",
        marca: "Dyson",
        tipo: "Hogar",
        precio: 599
    },
    {
        nombre: "Batidora KitchenAid",
        marca: "KitchenAid",
        tipo: "Electrodomésticos",
        precio: 279
    },
    {
        nombre: "Perfume Chanel N°5",
        marca: "Chanel",
        tipo: "Belleza",
        precio: 135
    },
    {
        nombre: "Tableta iPad Pro",
        marca: "Apple",
        tipo: "Electrónica",
        precio: 799
    },
    {
        nombre: "Cafetera Vertuo",
        marca: "Nespresso",
        tipo: "Electrodomésticos",
        precio: 199
    },
    {
        nombre: "Altavoz Bluetooth Bose",
        marca: "Bose",
        tipo: "Audio",
        precio: 199
    },
    {
        nombre: "Reloj Submariner",
        marca: "Rolex",
        tipo: "Joyería",
        precio: 8000
    },
    {
        nombre: "Secadora de pelo Dyson",
        marca: "Dyson",
        tipo: "Belleza",
        precio: 399
    },
    {
        nombre: "Impresora LaserJet Pro",
        marca: "HP",
        tipo: "Oficina",
        precio: 299
    },
    {
        nombre: "Sartén antiadherente",
        marca: "Tefal",
        tipo: "Cocina",
        precio: 49
    },
    {
        nombre: "Tostadora 4 rebanadas",
        marca: "Breville",
        tipo: "Electrodomésticos",
        precio: 79
    },
    {
        nombre: "Drone Mavic Air 2",
        marca: "DJI",
        tipo: "Electrónica",
        precio: 799
    },
    {
        nombre: "Licuadora Vitamix",
        marca: "Vitamix",
        tipo: "Electrodomésticos",
        precio: 449
    },
    {
        nombre: "Monitor gaming 144Hz",
        marca: "ASUS",
        tipo: "Electrónica",
        precio: 299
    },
    {
        nombre: "Bolso Neverfull",
        marca: "Louis Vuitton",
        tipo: "Moda",
        precio: 1540
    },
    {
        nombre: "Horno eléctrico",
        marca: "Black+Decker",
        tipo: "Electrodomésticos",
        precio: 89
    },
    {
        nombre: "Silla de oficina ergonómica",
        marca: "Herman Miller",
        tipo: "Muebles",
        precio: 1395
    },
    {
        nombre: "Smartwatch Apple Watch",
        marca: "Apple",
        tipo: "Electrónica",
        precio: 399
    },
    {
        nombre: "Cepillo eléctrico Oral-B",
        marca: "Oral-B",
        tipo: "Cuidado personal",
        precio: 99
    },
    {
        nombre: "Aire acondicionado inverter",
        marca: "Daikin",
        tipo: "Climatización",
        precio: 999
    },
    {
        nombre: "Altavoz inteligente Echo",
        marca: "Amazon",
        tipo: "Electrónica",
        precio: 99
    },
    {
        nombre: "Freidora de aire",
        marca: "Philips",
        tipo: "Electrodomésticos",
        precio: 149
    },
    {
        nombre: "Lavavajillas integrable",
        marca: "Bosch",
        tipo: "Electrodomésticos",
        precio: 649
    },
    {
        nombre: "Cámara instantánea Instax",
        marca: "Fujifilm",
        tipo: "Fotografía",
        precio: 69
    },
    {
        nombre: "Microondas con grill",
        marca: "Panasonic",
        tipo: "Electrodomésticos",
        precio: 199
    },
    {
        nombre: "Auriculares AirPods Pro",
        marca: "Apple",
        tipo: "Audio",
        precio: 249
    },
    {
        nombre: "Plancha de pelo GHD",
        marca: "GHD",
        tipo: "Belleza",
        precio: 199
    },
    {
        nombre: "Máquina de coser",
        marca: "Singer",
        tipo: "Hogar",
        precio: 159
    },
    {
        nombre: "Telescopio Celestron",
        marca: "Celestron",
        tipo: "Óptica",
        precio: 399
    },
    {
        nombre: "Bicicleta de montaña",
        marca: "Trek",
        tipo: "Deportes",
        precio: 899
    },
    {
        nombre: "Cafetera espresso",
        marca: "De'Longhi",
        tipo: "Electrodomésticos",
        precio: 299
    },
    {
        nombre: "Robot aspirador Roomba",
        marca: "iRobot",
        tipo: "Hogar",
        precio: 399
    },
    {
        nombre: "Altavoces surround",
        marca: "Sonos",
        tipo: "Audio",
        precio: 1499
    },
    {
        nombre: "Barbacoa de gas",
        marca: "Weber",
        tipo: "Jardín",
        precio: 499
    },
    {
        nombre: "Cámara de seguridad",
        marca: "Arlo",
        tipo: "Seguridad",
        precio: 199
    },
    {
        nombre: "Máquina de café en cápsulas",
        marca: "Keurig",
        tipo: "Electrodomésticos",
        precio: 99
    },
    {
        nombre: "Purificador de aire",
        marca: "Dyson",
        tipo: "Hogar",
        precio: 549
    },
    {
        nombre: "Teclado mecánico gaming",
        marca: "Razer",
        tipo: "Informática",
        precio: 129
    },
    {
        nombre: "Set de ollas y sartenes",
        marca: "Calphalon",
        tipo: "Cocina",
        precio: 399
    },
    {
        nombre: "Cepillo de dientes eléctrico",
        marca: "Philips Sonicare",
        tipo: "Cuidado personal",
        precio: 89
    },
    {
        nombre: "Cortacésped eléctrico",
        marca: "Greenworks",
        tipo: "Jardín",
        precio: 199
    },
    {
        nombre: "Encimera de inducción",
        marca: "Siemens",
        tipo: "Electrodomésticos",
        precio: 799
    },
    {
        nombre: "Router WiFi mesh",
        marca: "Netgear",
        tipo: "Redes",
        precio: 299
    },
    {
        nombre: "Máquina de hacer pan",
        marca: "Zojirushi",
        tipo: "Electrodomésticos",
        precio: 259
    },
    {
        nombre: "Depiladora IPL",
        marca: "Braun",
        tipo: "Belleza",
        precio: 399
    },
    {
        nombre: "Smartwatch Fenix 6",
        marca: "Garmin",
        tipo: "Electrónica",
        precio: 599
    },
    {
        nombre: "Cámara de acción GoPro",
        marca: "GoPro",
        tipo: "Fotografía",
        precio: 349
    },
    {
        nombre: "Silla gaming",
        marca: "Secretlab",
        tipo: "Muebles",
        precio: 399
    },
    {
        nombre: "Batidora de mano",
        marca: "Braun",
        tipo: "Electrodomésticos",
        precio: 59
    },
    {
        nombre: "Lavadora carga frontal",
        marca: "Samsung",
        tipo: "Electrodomésticos",
        precio: 699
    },
    {
        nombre: "Altavoz portátil JBL",
        marca: "JBL",
        tipo: "Audio",
        precio: 129
    },
    {
        nombre: "Máquina de helados",
        marca: "Cuisinart",
        tipo: "Electrodomésticos",
        precio: 69
    },
    {
        nombre: "Casco de realidad virtual",
        marca: "Oculus",
        tipo: "Electrónica",
        precio: 399
    },
    {
        nombre: "Lente de cámara 50mm",
        marca: "Nikon",
        tipo: "Fotografía",
        precio: 219
    },
    {
        nombre: "Impresora 3D",
        marca: "Creality",
        tipo: "Electrónica",
        precio: 259
    },
    {
        nombre: "Horno de pizza",
        marca: "Ooni",
        tipo: "Cocina",
        precio: 349
    },
    {
        nombre: "Cepillo alisador",
        marca: "Revlon",
        tipo: "Belleza",
        precio: 59
    },
    {
        nombre: "Proyector 4K",
        marca: "Epson",
        tipo: "Electrónica",
        precio: 1999
    },
    {
        nombre: "Batería externa",
        marca: "Anker",
        tipo: "Accesorios",
        precio: 49
    },
    {
        nombre: "Mesa de ping pong",
        marca: "Stiga",
        tipo: "Deportes",
        precio: 599
    },
    {
        nombre: "Báscula inteligente",
        marca: "Withings",
        tipo: "Salud",
        precio: 99
    },
    {
        nombre: "Teclado MIDI",
        marca: "Akai",
        tipo: "Música",
        precio: 119
    },
    {
        nombre: "Cama para mascotas",
        marca: "Furhaven",
        tipo: "Mascotas",
        precio: 39
    },
    {
        nombre: "Altavoz inteligente HomePod",
        marca: "Apple",
        tipo: "Audio",
        precio: 299
    },
    {
        nombre: "Freidora de aire XL",
        marca: "Ninja",
        tipo: "Electrodomésticos",
        precio: 149
    },
    {
        nombre: "Consola Nintendo Switch",
        marca: "Nintendo",
        tipo: "Videojuegos",
        precio: 299
    },
    {
        nombre: "Cámara mirrorless A7 III",
        marca: "Sony",
        tipo: "Fotografía",
        precio: 1999
    },
    {
        nombre: "Molde para pan de silicona",
        marca: "Trudeau",
        tipo: "Cocina",
        precio: 15
    },
    {
        nombre: "Teclado inalámbrico",
        marca: "Logitech",
        tipo: "Informática",
        precio: 99
    },
    {
        nombre: "Maleta de viaje",
        marca: "Samsonite",
        tipo: "Viaje",
        precio: 159
    },
    {
        nombre: "Batidora de vaso",
        marca: "Oster",
        tipo: "Electrodomésticos",
        precio: 79
    },
    {
        nombre: "Silla de coche para bebé",
        marca: "Graco",
        tipo: "Bebé",
        precio: 199
    },
    {
        nombre: "Cargador inalámbrico",
        marca: "Belkin",
        tipo: "Accesorios",
        precio: 39
    },
    {
        nombre: "Reloj inteligente Versa 3",
        marca: "Fitbit",
        tipo: "Electrónica",
        precio: 229
    },
    {
        nombre: "Auriculares con cancelación de ruido",
        marca: "Sony",
        tipo: "Audio",
        precio: 349
    },
    {
        nombre: "Cocina de gas",
        marca: "Whirlpool",
        tipo: "Electrodomésticos",
        precio: 649
    },
    {
        nombre: "Cámara instantánea Polaroid",
        marca: "Polaroid",
        tipo: "Fotografía",
        precio: 99
    },
    {
        nombre: "Silla de oficina ergonómica",
        marca: "Steelcase",
        tipo: "Muebles",
        precio: 999
    },
    {
        nombre: "Altavoz Bluetooth resistente al agua",
        marca: "Ultimate Ears",
        tipo: "Audio",
        precio: 99
    },
    {
        nombre: "Máquina de correr plegable",
        marca: "NordicTrack",
        tipo: "Fitness",
        precio: 999
    },
    {
        nombre: "Ventilador de torre",
        marca: "Lasko",
        tipo: "Climatización",
        precio: 69
    },
    {
        nombre: "Cafetera de filtro programable",
        marca: "Cuisinart",
        tipo: "Electrodomésticos",
        precio: 89
    },
    {
        nombre: "Impresora multifunción",
        marca: "Epson",
        tipo: "Oficina",
        precio: 199
    },
    {
        nombre: "Termo de acero inoxidable",
        marca: "Thermos",
        tipo: "Hogar",
        precio: 29
    },
    {
        nombre: "Termo de acero inoxidable",
        marca: "Thermos",
        tipo: "Hogar",
        precio: 29
    },
    {
        nombre: "Mochila para portátil",
        marca: "The North Face",
        tipo: "Accesorios",
        precio: 89
    },
    {
        nombre: "Máquina de café espresso",
        marca: "Breville",
        tipo: "Electrodomésticos",
        precio: 599
    },
    {
        nombre: "Altavoz inteligente Nest Audio",
        marca: "Google",
        tipo: "Audio",
        precio: 99
    },
    {
        nombre: "Silla de camping plegable",
        marca: "Coleman",
        tipo: "Aire libre",
        precio: 39
    },
    {
        nombre: "Robot de cocina Thermomix",
        marca: "Vorwerk",
        tipo: "Electrodomésticos",
        precio: 1299
    },
    {
        nombre: "Secadora de ropa",
        marca: "LG",
        tipo: "Electrodomésticos",
        precio: 699
    },
    {
        nombre: "Tableta gráfica",
        marca: "Wacom",
        tipo: "Informática",
        precio: 349
    },
    {
        nombre: "Horno de sobremesa",
        marca: "Cuisinart",
        tipo: "Electrodomésticos",
        precio: 199
    },
    {
        nombre: "Cámara de vigilancia WiFi",
        marca: "Ring",
        tipo: "Seguridad",
        precio: 199
    },
    {
        nombre: "Reloj de pared",
        marca: "Seiko",
        tipo: "Hogar",
        precio: 59
    }
];

// Insertar datos en la base de datos
Producto.insertMany(productos)
    .then(() => {
        console.log('Datos de productos insertados correctamente');
        process.exit(0);
    })
    .catch(error => {
        console.error('Error al insertar datos de productos:', error);
        process.exit(1);
    });