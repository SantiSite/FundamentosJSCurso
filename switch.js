let signo = prompt('Cual es tu signo?');

switch (signo) {
    case 'acuario':
        alert('De enero 20 a febrero 18');
        break;
    case 'piscis':
        alert('De febrero 19 a marzo 20');
        break;
    case 'aries':
        alert('De marzo 21 a abril 19');
        break;
    case 'tauro':
        alert('De abril 20 a mayo 20');
        break;
    case 'geminis':
    case 'géminis':
        alert('De mayo 21 a junio 20 ');
        break;
    case 'cancer':
    case 'cáncer':
        alert('De junio 21 a julio 22');
        break;
    case 'leo':
        alert('De julio 23 a agosto 22');
        break;
    case 'virgo':
        alert('De agosto 23 a septiembre 22');
        break;
    case 'libra':
        alert('De septiembre 23 a octubre 22');
        break;
    case 'escorpion':
        alert('De octubre 23 a noviembre 21');
        break;
    case 'sagitario':
        alert('De noviembre 22 a diciembre 21');
        break;
    case 'capricornio':
        alert('De diciembre 22 a enero 19');
        break;
    default:
        alert('No es un signo zodiacal');
        break;
}
