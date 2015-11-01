module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({

        //Read the package.json (optional)
        pkg: grunt.file.readJSON('package.json'),


        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
            '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
            '* Copyright (c) <%= grunt.template.today("yyyy") %> ',

        // Task configuration.
        sass: {
            options: { // Target options
                style: 'compressed'
            },
            dist: {
                files: {
                    '../static/css/index.css': './scss/index.scss',
                    '../static/css/reset.css': './scss/reset.scss'
                }
            }
        },
        watch: {
            scripts: {
                files: [
                    './scss/**/**/*.scss'
                ],
                tasks: ['sass']
            }
        }
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task.
    grunt.registerTask('default', ['watch']);
};
