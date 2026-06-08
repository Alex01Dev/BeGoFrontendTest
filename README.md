# BeGo Frontend Test

Prueba técnica frontend para BeGo — aplicación de gestión de órdenes de carga desarrollada en React + TypeScript.

🔗 **Deploy:** [https://be-go-frontend-test.vercel.app](https://be-go-frontend-test.vercel.app)

---

## 🛠 Tecnologías utilizadas

| Tecnología | Versión | Uso |
|---|---|---|
| React | 19 | UI library |
| TypeScript | 5 | Tipado estático |
| Vite | 8 | Bundler y dev server |
| React Router DOM | 7 | Navegación SPA |
| Axios | 1 | Peticiones HTTP |
| SCSS | — | Estilos con variables y mixins |

---

## 📁 Estructura del proyecto

```
src/
├── api/                  # Configuración de Axios
├── assets/
│   ├── icons/            # Iconos SVG como componentes React
│   └── images/           # Imágenes estáticas
├── components/
│   ├── header/
│   ├── orderCard/
│   ├── orderDetail/
│   │   ├── destinationPanel/
│   │   ├── routeSummaryCard/
│   │   └── trackingCard/
│   ├── searchBar/
│   └── tabs/
├── hooks/                # Custom hooks
├── mappers/              # Transformación de datos del API al modelo de UI
├── pages/
│   ├── orders/
│   └── orderDetails/
├── routes/               # Configuración de rutas
├── services/             # Llamadas a la API REST
├── styles/               # Variables y estilos globales SCSS
├── types/                # Interfaces y tipos TypeScript
└── utils/                # Funciones utilitarias (formatters, etc.)
```

---

## 🚀 Cómo correr el proyecto

### Requisitos previos

- Node.js 18+
- npm 9+

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/Alex01Dev/BeGoFrontendTest.git

# Entrar al directorio
cd BeGoFrontendTest

# Instalar dependencias
npm install
```

### Variables de entorno

Crea un archivo `.env.development` en la raíz del proyecto:

```env
VITE_API_URL=https://129bc152-6319-4e38-b755-534a4ee46195.mock.pstmn.io
```

### Correr en desarrollo

```bash
npm run dev
```

### Build de producción

```bash
npm run build
```

---

## 🌐 Endpoints utilizados

| Endpoint | Descripción |
|---|---|
| `GET /orders/upcoming` | Lista de órdenes próximas |
| `GET /orders` | Todos los pedidos |

Base URL: `https://129bc152-6319-4e38-b755-534a4ee46195.mock.pstmn.io`

---

## 📱 Evidencia de vistas

### Orders Page — Vista
Lista de órdenes próximas consumida desde el endpoint `/orders/upcoming`. Muestra el número de orden, tipo de carga FTL, status actual, direcciones de pickup y dropoff con fecha y hora, y el botón de Resume para navegar al detalle.

![Orders Mobile](/src/assets/images/img1.png)

---

### Orders Page — Botones Pickup
Cuando una orden tiene `status_string` igual a `"Recolección completada"`, se activa el botón **"It's time for pickup"** junto a un contador regresivo que indica el tiempo restante para iniciar la recolección. El botón **Resume** siempre está disponible para ir al detalle.


![Orders Pickup](/src/assets/images/img2.png)

---

### Order Detail Page
Vista de detalle de una orden. Muestra el resumen de ruta con los puntos de pickup y dropoff, el estado de cada destino (Accepted / On hold) y permite alternar entre ambos para ver su información específica.


![Order Detail](/src/assets/images/img3.png)

---

### Order Detail — Tracking Card y Destination Panel
La **Tracking Card** muestra el progreso de la orden a través de los steps del `status_list` del API (pickup + dropoff). Los steps completados muestran ✓ en amarillo. El botón **Track Order** se habilita cuando `order.status >= 3`. El **Destination Panel** es expandible y muestra dirección, fecha, hora, teléfono y email del contacto del destino activo.


![Tracking and Destination](/src/assets/images/img4.png)

---

## 🔧 Variables de entorno disponibles

| Variable | Descripción | Uso |
|---|---|---|
| `VITE_API_URL` | URL base de la API | Requerida |
| `VITE_FORCE_STATUS` | Fuerza un status específico para pruebas | Usado en Pruebas |
| `VITE_FORCE_CAN_TRACK` | Fuerza el botón Track Order activo | Usado en Pruebas |