# Panel de Control de Clientes

**Trabajo Práctico Integrador - Programación Visual (2026)**  
_Analista Programador Universitario - Facultad de Ingeniería (UNJu)_

## Descripción del Proyecto

Este proyecto consiste en el desarrollo de una aplicación web funcional orientada a la gestión de clientes en tiempo real. Actúa como un Panel de Control que deja de utilizar datos simulados locales para conectarse de forma asincrónica a un servidor real en la nube a través de la FakeStore API.

El sistema implementa una arquitectura basada en componentes funcionales, navegación sin recarga mediante React Router DOM, protección de rutas y manejo de estado global con Context API.

## Grupo 2 - Equipo de Desarrollo

- **Mamani Elías Alberto** - GitHub: @EliasAM-apu
- **Armeya Efraín** - GitHub: @ArmeyaEfraain
- **Dionicio Rodrigo Ezequiel** - GitHub: @Dionicio-Rodrigo
- **Cruz Benavidez Rita Melina** - GitHub: @rmelinacruzb

## Stack técnico

- **React** (con Hooks: `useState`, `useEffect`, `useContext`)
- **Vite** como bundler / entorno de desarrollo
- **Material UI (MUI)** para los componentes visuales y el sistema de temas
- **React Router DOM** para el ruteo y la protección de rutas
- **Formik + Yup** para el formulario de login y su validación
- **Fake Store API** (`https://fakestoreapi.com/users`) como fuente de datos de clientes

## Descripción Detallada

### 1. Login (`views/Login.jsx`)

Es la puerta de entrada a la aplicación. No es un login "real" contra un backend, sino un **login simbólico** pensado para identificar quién está usando el panel:

- Se pide un **nombre completo** (validado con Yup para que tenga nombre y apellido) y un **sector** (`Soporte` o `Gerencia`), usando `Formik` para manejar el estado del formulario y sus errores.
- Al enviar el formulario (`manejarEnvio`), se llama a la función `login()` del contexto de administrador, que guarda esos datos como el usuario "logueado", y luego se redirige a la página principal (`/`).
- Si ya existe una sesión activa (`admin` distinto de `null`), un `useEffect` redirige automáticamente al Dashboard, evitando que alguien logueado vuelva a ver el formulario.

En resumen, esta vista **no autentica contra un servidor**: simplemente registra "quién dice ser" el usuario para personalizar el resto de la app (nombre y sector se muestran luego en el Header y el Dashboard).

### 2. Dashboard (`views/Dashboard.jsx`)

Es la pantalla de bienvenida tras iniciar sesión, y la vista **menos crítica** en términos de lógica de negocio: su función es más informativa/decorativa que funcional.

- Saluda al administrador logueado mostrando su **nombre y sector**, obtenidos del `AdminContext`.
- Hace un `fetch` a la misma API de clientes (`fakestoreapi.com/users`) solo para calcular dos métricas rápidas: la **cantidad total de clientes** y la **cantidad de ciudades distintas** en las que viven (usando `filter` + `indexOf` para deduplicar).
- Muestra una tabla de **"Información General"** con datos fijos de la organización (nombre, año de fundación, cantidad de miembros, próxima reunión, sede) — estos datos están _hardcodeados_ en el propio componente, no vienen de ninguna API.
- Muestra un listado de **"Notificaciones"** también estático, a modo de ejemplo visual (avisos, mensajes, nuevos registros, etc.), sin conexión a datos reales.

Es una vista de resumen visual, útil para "aterrizar" al usuario, pero sin operaciones de escritura ni navegación crítica.

### 3. Gestión de Clientes (`views/ListaClientes.jsx`)

Es el corazón funcional de la aplicación. Consume la API `https://fakestoreapi.com/users` para obtener el listado real de clientes y ofrece una búsqueda dinámica sobre ese listado.

- **Carga de datos:** al montar el componente, un `useEffect` dispara una función asíncrona (`llamadaApi`) que hace el `fetch`. Se maneja el estado con tres posibilidades:
  - `undefined` → todavía está cargando (se muestra un `SkeletonTabla`, un esqueleto de carga)
  - `false` → hubo un error en la petición (se muestra un `Alert` de error)
  - `array` → los datos llegaron correctamente (se renderiza el listado)
- **Buscador:** un campo de texto permite filtrar los clientes por **apellido** o **ciudad**, comparando en minúsculas para que la búsqueda no sea sensible a mayúsculas.
- **Responsividad:** usando el hook `useMediaQuery` de MUI, la vista decide qué componente usar para mostrar los resultados:
  - En pantallas chicas (`xs`/`sm`) → se usa `ClientesContainer`, una lista de **tarjetas (Cards)** apiladas verticalmente, más cómoda para mobile.
  - En pantallas más grandes → se usa `TablaClientes`, una **tabla** tradicional con columnas (ID, nombre, apellido, email, teléfono, ciudad).

Esta vista demuestra el patrón de **renderizado condicional según estado de carga** (loading / error / éxito) y **diseño adaptable** según el tamaño de pantalla, reutilizando el mismo dato filtrado (`usuariosFiltrados`) para ambas presentaciones.

### 4. Detalle de Cliente (`views/DetalleCliente.jsx`)

Esta vista implementa enrutamiento dinámico (`/clientes/:id`) capturando el parámetro con el hook `useParams`. 
- **Lectura Profunda:** Realiza un `fetch` específico para obtener y desestructurar los datos anidados del cliente (dirección completa, geolocalización, credenciales).
- **Control de Accesos (Roles):** Consume el `AdminContext` para verificar el sector del usuario. Si el perfil es "Gerencia", se habilita el botón de eliminación. Si es "Soporte", la vista es de solo lectura.
- **Eliminación (DELETE):** Al confirmar la acción, dispara una petición asincrónica con el método `DELETE` hacia la API y redirige automáticamente al listado principal usando `useNavigate`.

### 5. Alta de Clientes (components/common/FormularioCliente.jsx)

Integrado dentro de la vista de gestión mediante un componente `Accordion` de Material UI, permite registrar nuevos usuarios.
- **Validación Robusta:** Utiliza **Formik** y **Yup** para el control de estados y la validación estricta de campos vacíos o formatos incorrectos (ej. validación de email).
- **Escritura Anidada:** Implementa componentes personalizados (`FormikInput` con `useField`) para manejar la actualización de estados anidados (`name.firstname`, `address.city`) sin mutar el objeto original.
- **Petición POST:** Envía los datos normalizados mediante un `fetch` con el método `POST`. Al recibir el Status 200, captura el ID generado por la FakeStore API y renderiza un feedback visual de éxito (`Snackbar`).

## APIs utilizadas

La aplicación consume un único recurso externo:

- **Fake Store API — `GET https://fakestoreapi.com/users`**
  Se usa tanto en `Dashboard.jsx` (para las métricas rápidas) como en `ListaClientes.jsx` (para el listado completo y filtrable). Cada usuario devuelto incluye datos como `id`, `name.firstname`, `name.lastname`, `email`, `phone` y `address.city`, que son los campos que la app efectivamente utiliza.
- **GET** `https://fakestoreapi.com/users/:id` (Para el detalle de un cliente específico).
- **POST** `https://fakestoreapi.com/users` (Simulación de creación de cliente).
- **DELETE** `https://fakestoreapi.com/users/:id` (Simulación de borrado lógico por rol).

## Uso de localStorage

El único dato que persiste entre recargas de la página es la **sesión del administrador**, manejada en `context/AdminContext.jsx`:

- Al iniciar sesión (`login`), el objeto `{ nombre, sector }` se guarda en el estado (`admin`) y, mediante un `useEffect`, se serializa con `JSON.stringify` y se guarda en `localStorage` bajo la clave `"admin"`.
- Al cargar la aplicación, el propio `useState` inicial lee `localStorage.getItem("admin")` y, si existe, lo parsea con `JSON.parse` para restaurar la sesión automáticamente (así el usuario no tiene que loguearse de nuevo cada vez que refresca la página).
- Al cerrar sesión (`logout`), se limpia el estado (`setAdmin(null)`) y se elimina la clave del `localStorage`.

No se guarda ningún dato de clientes en `localStorage`: esa información se pide siempre "en fresco" a la API cada vez que se visita el Dashboard o la vista de Clientes.
