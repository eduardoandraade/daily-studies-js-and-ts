var agora = new Date()
var hora = agora.getHours()

console.log( `Agora são ${hora}h.` )
if ( hora < 12 ) {
    console.log( 'Bom diazão.' )
} else if ( hora <= 18 ) {
    console.log( 'Boa tarde!' )
} else {
    console.log('Boa noite!')
}