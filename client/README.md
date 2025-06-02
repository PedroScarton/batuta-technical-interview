# BATUTA Front

Front-end de BATUTA

## Entorno de desarrollo

- Crear un archivo `.env` a partir de `.env.dist`

### Instalar y correr el front

- Podes usarlo local con yarn y node 16.10
- Podes levantarlo medienta un container de docker

### Correr en docker

- Existe el archivo `Dockerfile.dev` que instala las dependencias, copia el codigo en `/app` y corre el comando `yarn dev`
- Podes usar el docker-compose:

```bash
# Armado de la imagen del front
docker-compose build

# Levantar el servicio de front
## front -> Dockerfile.dev
docker-compose up -d
```

- En el servicio **front** se monta el codigo desde la raiz en `/app` del container para actualizar automaticamente los cambios en el desarrollo
