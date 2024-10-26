# Prueba Carolina Capote nodeJS

## Requisitos previos
Docker (para ejecutar la API en un contenedor)
Node.js y npm (para desarrollo local)

## Pasos para ejecutar el proyecto
* **Clona el repositorio**
```bash
  git clone https://github.com/Carolinacapote/prueba-1.git
```

* **Navega al repositorio del proyecto**
```bash
  cd prueba-1
```

* **Inicializar**
- Para iniciar la API dentro de un contenedor Docker con todas las dependencias necesarias,
ejecuta el siguiente comando:
```bash
  npm run docker
```

- Para ejecutar el proyecto localmente en modo desarrollo:
1. Instalar dependencias
```bash
  npm install
```

2. Inicia el servidor localmente:
```bash
  npm run dev
```

## Endpoints

- POST http://localhost:8181/envios -> Crea un nuevo envío
Ejemplo de body:
```bash
  {
    "destinatario": "Carolina Capote",
    "remitente": "Empresa XYZ",
    "contenido": "Paquete de manzanas",
    "fecha_envio": "2024-11-26",
    "distancia": 25
  }
```

- GET http://localhost:8181/envios -> retorna una lista de todos los envíos


## Notas adicionales
- **Base de datos:** El proyecto utiliza SQLite, una base de datos incorporada que maneja todas las consultas y transacciones directamente en la aplicación. Los datos se almacenan en un archivo de base de datos local.
