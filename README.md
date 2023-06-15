# Test task for SPIK &middot;

Тестовое задание по <a href='https://www.figma.com/file/oade9pxS8wGXjRvJa3pL8H/Untitled?node-id=1-354&t=fGDZJ2QyQDuAHLiN-0'>макету</a>
### Ссылка на демонстрацию:
<a href="https://creepycreep.github.io/SPIKS/">GithubPages</a>
## Installing / Getting started

Для запуска проекта клонируйте репозиторий и введите команду:

```shell
npm i
gulp
```
#### npm i необходима для установки необходимых модулей проекта
#### gulp включает в себя команды:

```shell
gulp images
gulp pug
gulp styles, 
gulp scripts
gulp watching
```
Что позволяет минимифицировать изображения, собирать и минифицировать файлы .pug, .scss/sass, .js, а также запускает сервер со слежением за изменением вышеперечисленных файлов

### Если необходимо сначала собрать svg sprite, вначале используйте

```shell
gulp images
gulp sprite
```
Это позволит минифицировать и собрать в спрайт svg изображения.
После используйте:

```shell
gulp
```

Но так как это тестовое, то спрайт уже готов

## Developing

### Built With
Gulp, Pug, SCSS

### Prerequisites
    "browser-sync": "^2.29.3",
    "gulp": "^4.0.2",
    "gulp-autoprefixer": "^8.0.0",
    "gulp-clean": "^0.4.0",
    "gulp-concat": "^2.6.1",
    "gulp-gh-pages": "^0.5.4",
    "gulp-imagemin": "^7.1.0",
    "gulp-newer": "^1.4.0",
    "gulp-pug": "^5.0.0",
    "gulp-sass": "^5.1.0",
    "gulp-svg-sprite": "^2.0.3",
    "gulp-uglify-es": "^3.0.0",
    "sass": "^1.63.4"

### Building

Для сборки проекта пропишите:

```shell
gulp build 
```
Команда содержит в себе 

```shell
gulp cleanDist
gulp building
gulp deploy
```
Что позволяет очистить папку dist перед сборкой, после собрать все необходимые файлы и задеплоить на GithubPages
