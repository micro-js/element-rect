#
# Vars
#

BIN = ./node_modules/.bin

#
# Tasks
#

node_modules: package.json
	@npm install

test: $(src) $(tests)
	@NODE_ENV=development hihat test/index.js -- \
		--debug \
		-p tap-dev-tool

validate: node_modules
	@standard

init:
	@git init
	@git add .
	@git commit -am "FIRST"
	@hub create micro-js/element-rect -d "Get the bounding rect of an element, optionally relative to a particular parent"
	@travis enable
	@git push -u origin master

.PHONY: test validate init
