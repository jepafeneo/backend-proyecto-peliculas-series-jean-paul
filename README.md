# Películas y Series API

API REST desarrollada con Node.js, Express y MongoDB para gestionar películas y series.

---

# Características

- CRUD completo de películas
- Registro de usuarios
- Inicio de sesión con JWT
- Contraseñas encriptadas con bcrypt
- Autenticación mediante Bearer Token
- MongoDB Atlas
- Seeder de datos iniciales
- Tests con Vitest y Supertest

---

# 🛠 Tecnologías utilizadas

- Node.js
- Express
- MongoDB Atlas
- Mongoose
- JWT
- bcryptjs
- dotenv
- cors
- Vitest
- Supertest

---

# Instalación

Clonar el repositorio:

```bash
git clone <url-del-repositorio>
```

Ingresar al proyecto:

```bash
cd backend-proyecto-peliculas-series
```

Instalar dependencias:

```bash
npm install
```

---

# Variables de entorno

Crear un archivo `.env` utilizando como referencia `.env.example`.

## .env.example

```env
PORT=
MONGODB_URI=
JWT_SECRET=
```

## Ejemplo

```env
PORT=3000
MONGODB_URI=mongodb+srv://usuario:password@cluster.mongodb.net/moviesdb
JWT_SECRET=mi-clave-secreta
```

---

# Ejecutar en desarrollo

```bash
npm run dev
```

---

# Ejecutar en producción

```bash
npm start
```

---

# Ejecutar tests

```bash
npm test
```

---

# Cargar datos iniciales

```bash
npm run seed
```

---

# Endpoints

---

## Home

### GET /

Devuelve un mensaje de bienvenida.

### Respuesta Exitosa

#### Status: 200 OK

```json
{
  "message": "Bienvenidos a la API de películas y series"
}
```

---

# Autenticación

## Registro

### POST /api/auth/register

Registra un nuevo usuario.

### Body

```json
{
  "name": "Juan Pérez",
  "email": "juan@example.com",
  "password": "123456"
}
```

### Respuesta Exitosa

#### Status: 201 Created

```json
{
  "message": "Usuario registrado correctamente"
}
```

### Posibles Errores

#### Status: 400 Bad Request

```json
{
  "message": "Todos los campos son obligatorios"
}
```

#### Status: 400 Bad Request

```json
{
  "message": "El usuario ya existe"
}
```

#### Status: 500 Internal Server Error

```json
{
  "message": "Error interno del servidor"
}
```

---

## Login

### POST /api/auth/login

Inicia sesión y devuelve un token JWT.

### Body

```json
{
  "email": "juan@example.com",
  "password": "123456"
}
```

### Respuesta Exitosa

#### Status: 200 OK

```json
{
  "token": "jwt-token",
  "user": {
    "_id": "...",
    "name": "Juan Pérez",
    "email": "juan@example.com"
  }
}
```

### Posibles Errores

#### Status: 400 Bad Request

```json
{
  "message": "Todos los campos son obligatorios"
}
```

#### Status: 401 Unauthorized

```json
{
  "message": "Credenciales inválidas"
}
```

#### Status: 500 Internal Server Error

```json
{
  "message": "Error interno del servidor"
}
```

---

# Películas

## Obtener todas las películas

### GET /api/movies

Devuelve todas las películas.

### Respuesta Exitosa

#### Status: 200 OK

```json
[
  {
    "_id": "...",
    "title": "Matrix",
    "genre": "Acción",
    "year": 1999,
    "image": "https://..."
  }
]
```

#### Status: 500 Internal Server Error

```json
{
  "message": "Error interno del servidor"
}
```

---

## Obtener película por ID

### GET /api/movies/:id

Devuelve una película por su ID.

### Respuesta Exitosa

#### Status: 200 OK

```json
{
  "_id": "...",
  "title": "Matrix",
  "genre": "Acción",
  "year": 1999,
  "image": "https://..."
}
```

### Posibles Errores

#### Status: 404 Not Found

```json
{
  "message": "Película no encontrada"
}
```

#### Status: 500 Internal Server Error

```json
{
  "message": "Error interno del servidor"
}
```

---

## Crear película

### POST /api/movies

Requiere autenticación.

### Headers

```txt
Authorization: Bearer TOKEN
```

### Body

```json
{
  "title": "Matrix",
  "genre": "Acción",
  "year": 1999,
  "image": "https://..."
}
```

### Respuesta Exitosa

#### Status: 201 Created

```json
{
  "_id": "...",
  "title": "Matrix",
  "genre": "Acción",
  "year": 1999,
  "image": "https://..."
}
```

### Posibles Errores

#### Status: 401 Unauthorized

```json
{
  "message": "No autorizado"
}
```

#### Status: 400 Bad Request

```json
{
  "message": "Datos inválidos"
}
```

#### Status: 500 Internal Server Error

```json
{
  "message": "Error interno del servidor"
}
```

---

## Actualizar película

### PUT /api/movies/:id

Requiere autenticación.

### Headers

```txt
Authorization: Bearer TOKEN
```

### Respuesta Exitosa

#### Status: 200 OK

```json
{
  "_id": "...",
  "title": "Matrix Recargada",
  "genre": "Acción",
  "year": 2003,
  "image": "https://..."
}
```

### Posibles Errores

#### Status: 401 Unauthorized

```json
{
  "message": "No autorizado"
}
```

#### Status: 404 Not Found

```json
{
  "message": "Película no encontrada"
}
```

#### Status: 500 Internal Server Error

```json
{
  "message": "Error interno del servidor"
}
```

---

## Eliminar película

### DELETE /api/movies/:id

Requiere autenticación.

### Headers

```txt
Authorization: Bearer TOKEN
```

### Respuesta Exitosa

#### Status: 200 OK

```json
{
  "message": "Película eliminada correctamente"
}
```

### Posibles Errores

#### Status: 401 Unauthorized

```json
{
  "message": "No autorizado"
}
```

#### Status: 404 Not Found

```json
{
  "message": "Película no encontrada"
}
```

#### Status: 500 Internal Server Error

```json
{
  "message": "Error interno del servidor"
}
```

---

# Deploy

Backend desplegado en Render.

```txt
https://mi-api.onrender.com
```

---

# Estructura del proyecto

```txt
src/
│
├── config/
├── controllers/
├── middlewares/
├── models/
├── routes/
├── seeders/
├── tests/
│
└── app.js

index.js
```

---

# Autor

Proyecto desarrollado como práctica del curso Full Stack de Neoland.

Autor: Jean Paul Ferreira
