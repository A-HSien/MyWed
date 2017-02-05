(function (global) {
    System.config({
        defaultJSExtensions: true,
        // packages tells the System loader how to load when no filename and/or no extension
        packages: {
            app: {
                main: './main.js',
                defaultExtension: 'js'
            }
        }
    });
})(this);