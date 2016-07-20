module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-copy');

grunt.initConfig({
	pkg: grunt.file.readJSON('package.json'),
	//------- CSS Minify -------//
	cssmin: {
		combine: {
		  files: {
		    '../seolondon/static/styles/styles.css': ['css/styles.css']
		  }
		}
	},
	//------- SASS -------//
	sass: {
		dist: {
			files: {
				'css/styles.css': 'src/sass/styles.scss'
			}
		}
	},
	//------- Watch SASS -> CSS -------//
	watch: {
		sass: {
		  files: 'src/sass/**/**.scss',
		  tasks: ['sass']
		}
	},
	jspaths: {
        src: {
                js: 'src/**/**.js'
            },
            dest: {
                jsMin: '../seolondon/static/scripts/seolondon.min.js'
            }
        },
    uglify: {
        options: {
            compress: true,
            mangle: true,
            sourceMap: true
        },
        target: {
            src: '<%= jspaths.src.js %>',
            dest: '<%= jspaths.dest.jsMin %>'
        }
    },
    copy: {
        img: {
            files: [{
                expand: true,
                nonull: true,
                cwd: 'src/img',
                src: ['*.{png,jpg,jpeg,svg,gif}'],
                dest: '../seolondon/static/img/',
                filter: 'isFile'
            }, ]
        }
    },
        
});

    grunt.registerTask('default', ['sass', 'cssmin', 'uglify']);

};