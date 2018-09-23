# ThinkGeek - Blog de tecnología

Práctica del módulo de FrontEnd Avanzado, Webpack, SCSS y más, de **KeepCoding**.

## Sobre la APP

La webapp consiste en un blog de tecnología estructurado en componentes reutilizables y con programación orientada a objetos.

### Clases principales

La aplicación se estructura en dos clases básicas **Component** y **Page**. Todas las funciones se han abstraído como métodos de las clases.

#### Component
La clase component es la principal, recibe un template y lo renderiza buscando su selector personalizado en el DOM.

#### Page
La clase page simplemente sirve para renderizar el selector del componente en el DOM sin la necesidad de tener un archivo html por cada página en desarrollo. La idea de separarlo en una clase es que a futuro se puede cambiar esa clase por un router y el resto de la app funcionaria.

### Servicios
Todas las funciones compartidas se han organizado en servicios con sus respectivas clases.

## Optimización
Para conseguir una buena optimización, el código es instanciado a medida que se necesita para funcionar.

## Sobre su desarrollo

### Instalación

Para inciar la aplicación instala sus dependencias:
```shell
$ npm install
```

Si se diera algún error con el babel-polyfill que la versión instalada es la correcta y no `@babel/polyfill`, hay algún problema de compatibilidad con las versiones más actuales.

En caso de problemas:
```shell
npm uninstall @babel/polyfill && npm install babel-polyfill
```
## Base de datos
Como base de datos se utiliza json-server. Para iniciarlo:
```shell
$ npm run server
```
