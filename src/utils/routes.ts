export const ROUTES = {
  INDEX: '/',
  HOME: '/home',
  PEDIDOS: '/pedidos',
  FACTURACION: '/facturacion',
  COBRANZA: '/cobranza',
  RECLAMOS: '/reclamos',
  CLIENTES: '/clientes',
  VENDEDORES: '/vendedores',
}

export const ROUTES_DATA = [
  { name: 'Inicio',       icon: 'FaHome',              link: '/home',           enable: true},
  { name: 'Pedidos',      icon: 'FaNewspaper',         link: '/pedidos',        enable: true},
  { name: 'Facturación',  icon: 'FaMoneyBillWave',     link: '/facturacion',    enable: true},
  { name: 'Cobranzas',    icon: 'FaMoneyBillTrendUp',  link: '/cobranza',       enable: true},
  { name: 'Reclamos',     icon: 'LuBaggageClaim',      link: '/reclamos',       enable: true},
  { name: 'Clientes',     icon: 'FaBuildingUser',      link: '/clientes',       enable: false},
  { name: 'Vendedores',   icon: 'FaUserTie',           link: '/vendedores',     enable: true},
];