
module.exports = function(grunt) {
    var path = require('path');

    grunt.loadNpmTasks('grunt-contrib-watch');

    var buildDir = require('../buildDir.js')();

    grunt.config('watch', {
        less: {
            files: ['src/**/*.less','src/**/*.css','!src/modules/ui-dashboard/**/*.less'],
            tasks: ['less:dev']
        },
        lessLib: {
            files: ['src/modules/ui-dashboard/**/*.less'],
            tasks: ['less:ui-dashboard','less:dev']
        },
        requirejs: {
            files: ['src/lib/*.js','src/modules/core/**/*.js','src/modules/main/**/*.js','src/modules/documentation/**/*.js','src/modules/download/**/*.js','src/app.js'],
            tasks: ['requirejs:dev']
        },
        requirejsLib: {
            files: ['src/modules/ui-dashboard/**/*.js'],
            tasks: ['requirejs:ui-dashboard-dev','requirejs:dev']
        },        
        jade: {
            files: ['src/**/*.jade'],
            tasks: ['jade:devall','jade:devindex','requirejs:dev']
        },
        copy: {
            files: ['assets/**','fonts/**','src/modules/core/locale/*.json'],
            tasks: ['copy:dev']
        }
    });
};
