CREATE DATABASE emprendLocales;
\c emprendLocales

CREATE TABLE tiendas (
    id SERIAL PRIMARY KEY,
    mail VARCHAR(255) NOT NULL,
    nombre_tienda VARCHAR(255) NOT NULL,
    nombre_emprendedor VARCHAR(255) NOT NULL,
    direccion VARCHAR(255) NOT NULL,
    comuna VARCHAR(255) NOT NULL,
    rut VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    imagen VARCHAR(255)
);

CREATE TABLE productos (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    descripcion VARCHAR(255) NOT NULL,
    precio INTEGER NOT NULL,
    tienda_id INTEGER,
    FOREIGN KEY (tienda_id) REFERENCES tiendas(id)

);

CREATE TABLE ganadores(
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    codigo VARCHAR(255) NOT NULL
);

CREATE TABLE ganador_producto(
    id SERIAL,
    producto_id INTEGER,
    ganador_id INTEGER,
    FOREIGN KEY (producto_id) REFERENCES productos(id),
    FOREIGN KEY (ganador_id) REFERENCES ganadores(id)
);