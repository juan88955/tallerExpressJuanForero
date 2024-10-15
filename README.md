# Taller Express - API de Tiendas, Productos y Empleados

Este proyecto es una API REST desarrollada con Express.js y MongoDB, que gestiona información sobre tiendas, productos y empleados.

Características:

- CRUD operations para Tiendas, Productos y Empleados
- Conexión a MongoDB Atlas
- Estructura modular con rutas, controladores y modelos separados
- Scripts para poblar la base de datos con datos de prueba


Instalación:

1. Clona el repositorio:
   git clone [URL_DEL_REPOSITORIO]
   cd [NOMBRE_DEL_DIRECTORIO]

2. Instala las dependencias:
   npm install

3. Crea un archivo .env en la raíz del proyecto y añade tu URI de MongoDB:
   MONGODB_URI=tu_uri_de_mongodb_aqui
   PORT=8080

Uso:

1. Inicia el servidor:
   npm start

2. Para desarrollo, usa:
   npm run dev

3. Para poblar la base de datos con datos de prueba:
   npm run dataTiendas
   npm run dataProductos
   npm run dataEmpleados

Endpoints:

Tiendas
- GET /api/tiendas - Obtener todas las tiendas
- GET /api/tiendas/nombre/:nombre - Obtener una tienda por su nombre
- GET /api/tiendas/direccion/:direccion - Obtener una tienda por su dirección

Productos
- GET /api/productos - Obtener todos los productos
- GET /api/productos/nombre/:nombre - Obtener un producto por su nombre
- GET /api/productos/marca/:marca - Obtener productos por marca

Empleados
- GET /api/empleados - Obtener todos los empleados
- GET /api/empleados/nombre/:nombre - Obtener un empleado por su nombre
- GET /api/empleados/cargo/:cargo - Obtener empleados por cargo