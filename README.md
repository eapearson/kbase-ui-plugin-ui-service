# A ClojureScript Plugin

## to setup

## creating project

Get leiengen, which is used for developing and compilation.

curl https://raw.githubusercontent.com/technomancy/leiningen/stable/bin/lein -o lein

chmod u+x lein

create project with lein template:

./lein new figwheel app --rum

see https://github.com/bhauman/figwheel-template 

then

./lein figwheel 

to code directly against the app.

start coding in CLJS with RUM!


## to build


## design

## more

to get figwheel running right it needs to be run under wss:

- install tunnnel:

sudo gem install tunnel

- update project.clj

add 

:websocket-url "wss://localhost:34490/figwheel-ws"

- start tunnel

sudo tunnels 34490 3449

take your browser to https://localhost:34490

accept certificate, etc. then it should work!