const getAnecdote = (imageName) => {
    let anecdote;
    switch (imageName) {
        case "tour_effeil":
            anecdote = "Guy de Maupassant s'opposa, comme beaucoup d'artistes, à la construction de la Tour Eiffel. Après son ouverture, il déjeunait souvent dans l'un des restaurants du premier étage. Un jour, un journaliste l'interrogea et il répondit : « c'est le seul endroit de la ville où je ne la vois pas ».";
            break;
        case "tour_de_pise":
            anecdote = "La tour de Pise ne s'est pas mise à pencher une fois construite : elle commença à pencher en 1178 alors que seuls les trois premiers étages étaient construits. À cause de ce problème d'inclinaison, la construction fut stoppée durant presque un siècle, et il fut finalement décidé de construire les quatre derniers étages inclinés pour que l'ensemble soit harmonieux.";
            break;
        case "le_louvre":
            anecdote = "Actuellement le Musée du Louvre compte environ 35 000 oeuvres exposées. C'est déjà beaucoup et il faudrait des mois de visite pour tout voir, mais c'est peu comparé à la collection totale du musée : il n'expose même pas 10% de sa collection totale, car il dispose en tout d'environ 500 000 oeuvres. ";
            break;
        default:
            anecdote = "Image non traité"
            break;
    }
    return anecdote
}


export default getAnecdote


