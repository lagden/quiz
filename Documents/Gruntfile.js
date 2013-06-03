'use strict';

module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ';'
      },
      others: {
        src: [
            'js/greensock/src/uncompressed/plugins/CSSPlugin.js'
          , 'js/greensock/src/uncompressed/plugins/ScrollToPlugin.js'
          , 'js/greensock/src/uncompressed/plugins/easing/EasePack.js'
          , 'js/greensock/src/uncompressed/TimelineMax.js'
          , 'js/greensock/src/uncompressed/TweenMax.js'
          , 'js/greensock/src/uncompressed/jquery.gsap.js'
          , 'js/imagesloaded/imagesloaded.pkgd.js'
        ],
        dest: 'js/dist/others.js'
      },
      app: {
        src: [
          'js/main.js'
        ],
        dest: 'js/dist/base.js'
      },
      watch: {
        src: [
            'js/dist/others.js'
          , 'js/dist/base.js'
        ],
        dest: 'output.js'
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %> */',
        properties: true,
        compress: {
          global_defs: {
            "DEBUG": false
          },
          dead_code: true
        }
      },
      target: {
        files: {
          'output.js': [
            'js/dist/others.js'
            , 'js/dist/base.js'
          ]
        }
      }
    },
    watch: {
      files: ['js/main.js'],
      tasks: ['concat', 'concat:watch'],
    },
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['concat', 'uglify']);

};