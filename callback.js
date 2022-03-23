function welcomeMessage( name, greetHandler ) {
    greetHandler( name );
}
function greetMorning( name ) {
    console.log( 'Good Morning', name );
}
function greetAfternoon( name ) {
    console.log( 'Good Afternoon', name );
}
function greetNight( name ) {
    console.log( 'Good Night', name );
}
welcomeMessage( 'Akbar Hossain', greetMorning );
welcomeMessage( 'Alamin', greetAfternoon );
welcomeMessage( 'Rasel', greetNight );