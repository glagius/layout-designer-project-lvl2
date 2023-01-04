install:
	npm install

build:
	npx gulp buildSass

server: build
	npx gulp server;
