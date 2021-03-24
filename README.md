# gulp-css-js-md

Стартовая конфигурация gulpfile.js и package.json для обработки SCSS, минификации и генерациии CSS файлов. Обработка JS файлов, минификация. Преобразования Markdown файлов в Html файлы со стилями GitHub.

## Что конфигурация может делать

Все задачи Gulp распределены по своим файлам и лежат в папке `.gulp-tasks`. Это удобно для того, чтобы не засорять один файл кучей кода и легко настраивать отдельные задачи под конкретные действия. Для стартовой конфигурации этого достаточно.

### SCSS файлы

1. преобразуются из SCSS в CSS;
2. автоматически добавляются префиксы для 2-х последних версий браузеров с >1% долей юзеров и не являющимися мёртвыми (задаётся в package.json);
3. минифицируются, очищаются от комментариев;
4. формируются map'ы на исходные файлы (отключается комментирование строки);
5. полученные файлы складываются там же, где исходные с расширением `.css` и `.css.map`

### JS-файлы

1. преобразовываются из современных стандартов ECMAScript (es2015, es2016, es2017) в старую версию, совместимую с большинством браузеров (можно более тонко настроить. По умолчанию используется env-preset babel`а);
2. минифицируются, очищаются от комментариев;
3. формируются map`ы на исходные файлы;
4. полученные файлы складываются там же, где исходные с расширением `.min.js` и `.min.js.map`.

### Markdown файлы

1. преобразование Markdown файлов (`.md`) в Html версию;
2. применяются стили повторяющие Markdown GitHub.com;
3. полученные файлы складываются там же, где исходные с расширением `.html`.

## Использование сторонних пакетов

### Для генерации CSS-файлов

1. gulp-plumber;
2. gulp-sass;
3. gulp-postcss с модулями cssnano & autoprefixer;
5. gulp-sourcemaps;
6. gulp-rename - отключено закомментированными строками;
7. normalize.css - можно подключать в SCSS-файле импортом:
   `@import "node_modules/normalize.css/normalize"`;
8. breakpoint-sass - можно подключать в SCSS-файле импортом:
   `@import "node_modules/breakpoint-sass/stylesheets/breakpoint"`.
9. susy - можно подключать в SCSS-файле импортом:
   `@import "bower_components/susy/sass/susy";`
   `@import "bower_components/susy/sass/susy-prefix";`
10. compass - можно подключать в SCSS-файле импортом:
    `@import "node_modules/compass-mixins/lib/compass";`
    `@import "node_modules/compass-mixins/lib/animation/core";`

### Для генерации JS-файлов

1. gulp-babel;
2. gulp-uglify;
3. gulp-sourcemaps;
4. gulp-rename.

### Для генерации Html файлов из Markdown текста

1. gulp-markdown;
2. gulp-rename.

## Установка

Я использую этот "стартовый" конфиг для работы с проектами под системой управления 1С-Битрикс. Чтобы установить конфиг:

1. Если не установлен `Node.js`, что можно проверить командой `node -v`, то переходим на сайт [https://nodejs.org/en/](https://nodejs.org/en/), скачиваем и устанавливаем. Проверялось на версии `v12.18.0`;
2. Установить `npm` не ниже версии `7.6.3`;
3. Установить [https://bower.io/](bower) - `sudo npm install -g bower` - не ниже версии `1.8.12`;
4. Скопировать файлы `gulpfile.js`, `package.json`, `bower.json`, `postcss.config.js` в корень проекта;
5. Исключить файлы `gulpfile.js`, `package.json`, `bower.json`, `postcss.config.js`, `node_modules/` и `bower_components/` в `.gitignore`;
6. Выполнить в папке проекта, в терминале команду `npm install` для установки зависимостей;
7. Установить пакет Susy `bower install susy`;
8. Запускать вручную задачи `gulp css`, `gulp md` или `gulp js` в терминале. Удобнее использовать встроенные возможности IDE и запускать прямо из среды разработки. Например, для JetBrains Phpstorm есть дополнительное окошко `Gulp Tasks`.
9. Дописать `watcher` для `Gulp`, но я использую без него, поэтому в задачах нет `gulp.watch()`.

## License

This project is licensed under the MIT License - see the [LICENSE.txt](LICENSE.txt) file for details