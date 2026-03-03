// productos.js
const default_CONFIG = {
    nombrePizzeria: "La Cacha",
    numeroWhatsApp: "5491123456789",
    linkMercadoPago: "https://link.mercadopago.com.ar/tu-alias",
    colorPrincipal: "#d35400", // Un naranja terracota más moderno
    horarioApertura: "19:00",
    horarioCierre: "23:59"
};

const default_productos = [
    {
        id: 1,
        nombre: "Muzzarella",
        descripcion: "Salsa casera, muzzarella premium y orégano de la huerta.",
        precio: 7500,
        categoria: "clasicas",
        imagen: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500",
        esPromo: false,
        disponible: true
    },
    {
        id: 2,
        nombre: "Promo Amigos",
        descripcion: "2 Pizzas de Muzza + 1 Gaseosa 1.5L",
        precio: 14500,
        categoria: "promos",
        imagen: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?w=500",
        esPromo: true,
        disponible: true
    },
    // Solo seguí agregando acá abajo...
    {
        id: 3,
        nombre: "Napolitana",
        descripcion: "Masa fina, salsa de tomate, mozzarella, albahaca fresca.",
        precio: 8500,
        categoria: "clasicas",
        imagen: "https://images.unsplash.com/photo-1601924582975-7c2c9e8c0c4e?w=500",
        esPromo: false,
        disponible: true
    },
    {
        id: 4,
        nombre: "Combo Familiar",
        descripcion: "2 Pizzas Grandes + 2 Gaseosas 1.5L",
        precio: 25000,
        categoria: "promos",
        imagen: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=500",
        esPromo: true,
        disponible: true
    },
];

// Inicializar y cargar desde localStorage
let CONFIG = JSON.parse(localStorage.getItem('pizzeria_config')) || default_CONFIG;
let productos = JSON.parse(localStorage.getItem('pizzeria_productos')) || default_productos;

// Funciones para guardar
function saveConfig() {
    localStorage.setItem('pizzeria_config', JSON.stringify(CONFIG));
}

function saveProductos() {
    localStorage.setItem('pizzeria_productos', JSON.stringify(productos));
}