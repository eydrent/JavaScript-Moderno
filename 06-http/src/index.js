/* 
import *as CRUD from './js/crud-provider';

CRUD.getUsuario( 2 ).then( console.log );

CRUD.crearUsuario({
    name: 'Fernando',
    job: 'Carpintero'
}).then( console.log );

CRUD.actualizarUsuario( 1, {
    name: 'Melissa',
    job: 'Developer'
}).then( console.log );

CRUD.borrarUsuario( 1 ).then( console.log ); */

import { init } from './js/archivos-page';

init();