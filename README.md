# mfe
these are independent stand-alone projects, Federation library needs to be installed in all of them. 
https://www.npmjs.com/package/@angular-architects/native-federation

# adding new mfe 

ng new <name> --standalone --routing,
ng g @angular-architects/native-federation:init --project <name> --port <new_port> --type remote,
install deps,
add to shell manifest new remote

# run all remotes
cd/shell 
npm run start:all

# shared lib 
cd shared,
ng build shared-lib,
npm install file:../shared/dist/shared-lib inside mfe1