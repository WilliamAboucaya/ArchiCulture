const getAnecdote = (imageName) => {
    let anecdote;
    switch (imageName) {
        case "tour_effeil":
            anecdote = "Guy de Maupassant s'opposa, comme beaucoup d'artistes, à la construction de la Tour Eiffel. Après son ouverture, il déjeunait souvent dans l'un des restaurants du premier étage. Un jour, un journaliste l'interrogea et il répondit : « c'est le seul endroit de la ville où je ne la vois pas ».";
            break;
        case "tour_de_pise":
            anecdote = "La tour de Pise ne s'est pas mise à pencher une fois construite : elle commença à pencher en 1178 alors que seuls les trois premiers étages étaient construits. À cause de ce problème d'inclinaison, la construction fut stoppée durant presque un siècle, et il fut finalement décidé de construire les quatre derniers étages inclinés pour que l'ensemble soit harmonieux.";
            break;
        case "le louvre":
            anecdote = "Actuellement le Musée du Louvre compte environ 35 000 oeuvres exposées. C'est déjà beaucoup et il faudrait des mois de visite pour tout voir, mais c'est peu comparé à la collection totale du musée : il n'expose même pas 10% de sa collection totale, car il dispose en tout d'environ 500 000 oeuvres. ";
            break;
        default:
            anecdote = "Image non traité"
            break;
    }
    return anecdote
}


const getHeaderWiki = (imageName) => {
    let headerWiki;
    switch (imageName) {
        case "tour_effeil":
                headerWiki = "La tour Eiffel est une tour de fer puddlé de 324 mètres de hauteur (avec antennes) située à Paris, à l’extrémité nord-ouest du parc du Champ-de-Mars en bordure de la Seine dans le 7e arrondissement. Son adresse officielle est 5, avenue Anatole-France. Construite par Gustave Eiffel et ses collaborateurs pour l’Exposition universelle de Paris de 1889, et initialement nommée « tour de 300 mètres », ce monument est devenu le symbole de la capitale française, et un site touristique de premier plan : il s’agit du troisième site culturel français payant le plus visité en 2015, avec 6,9 millions de visiteurs, en 2011 la cathédrale Notre-Dame de Paris était en tête des monuments à l'accès libre avec 13,6 millions de visiteurs estimés mais il reste le monument payant le plus visité au monde. Depuis son ouverture au public, elle a accueilli plus de 300 millions de visiteurs. D’une hauteur de 312 mètres à l’origine, la tour Eiffel est restée le monument le plus élevé du monde pendant quarante ans. Le second niveau du troisième étage, appelé parfois quatrième étage, situé à 279,11 mètres, est la plus haute plateforme d'observation accessible au public de l'Union européenne et la deuxième plus haute d'Europe, derrière la tour Ostankino à Moscou culminant à 337 mètres. La hauteur de la tour a été plusieurs fois augmentée par l’installation de nombreuses antennes. Utilisée dans le passé pour de nombreuses expériences scientifiques, elle sert aujourd’hui d’émetteur de programmes radiophoniques et télévisés.";
            break;
        case "tour_de_pise":
                headerWiki = "La tour de Pise (torre di Pisa en italien) est le campanile de la cathédrale Notre-Dame de l’Assomption de Pise, en Toscane (Italie). Elle est située à proximité du chevet de la cathédrale et fait partie des monuments de la piazza dei Miracoli (la « place des Miracles »), classés au patrimoine mondial de l'UNESCO. Sa construction débuta en 1173. Mondialement connue, elle est un des symboles de l’Italie et l’emblème de la ville de Pise. Outre le fait qu’elle soit considérée comme un chef-d’œuvre de l’art roman toscan en marbre, sa célébrité vient notamment de son inclinaison caractéristique (qui est actuellement d’un angle de 3° 59′ vers le sud), apparue très rapidement pendant sa construction, du fait qu’elle ait été édifiée sur une plaine alluviale. Ce défaut serait dû soit à un défaut de fondation, soit à un affaissement de terrain dû à une roche : la marne. Fermé au public pour des raisons de sécurité le 7 janvier 1990, le monument a été visité par 31 millions de personnes au cours des soixante années précédentes. Devant le risque d’écroulement, d’importants travaux ont été engagés à partir de 1993.";
            break;
        case "le_louvre":
                headerWiki = "Le musée du Louvre, fondé en 1775-1776 par le comte d'Angivillier, directeur général des Bâtiments du roi, puis inauguré en 1793 sous l'appellation de Muséum central des arts de la République dans le palais du Louvre, ancienne résidence royale située au centre de Paris, est aujourd'hui le plus grand musée d'art et d'antiquités au monde. Sa surface d'exposition est de 72 735 m2"
                + 
                "Fin 2016, ses collections comprenaient 554 731 œuvres, dont 35 000 exposées et 264 486 œuvres graphiques. Celles-ci présentent l'art occidental du Moyen Âge à 1848, celui des civilisations antiques qui l'ont précédé et influencé (orientales, égyptienne, grecque, étrusque et romaine), les arts des premiers chrétiens et de l'islam."
                +
                "Situé dans le 1er arrondissement de Paris, sur la rive droite entre la Seine et la rue de Rivoli, le musée se signale par la pyramide de verre de son hall d'accueil, érigée en 1989 dans la cour Napoléon et qui en est devenue emblématique, tandis que la statue équestre de Louis XIV constitue le point de départ de l'axe historique parisien."
                +
                "En 2018, avec environ 10,2 millions de visiteurs annuels, le Louvre est le musée le plus visité au monde. Il est le site culturel payant le plus visité de France. Parmi ses pièces les plus célèbres figurent La Joconde, la Vénus de Milo, Le Scribe accroupi, La Victoire de Samothrace et le Code de Hammurabi."
                +
                "Le Louvre possède une longue histoire de conservation artistique et historique, depuis l'Ancien Régime jusqu'à nos jours. À la suite du départ de Louis XIV pour le château de Versailles à la fin du xviie siècle, on y entrepose une partie des collections royales de tableaux et de sculptures antiques. Après avoir durant un siècle hébergé plusieurs académies dont celle de peinture et de sculpture, ainsi que divers artistes logés par le roi, l'ancien palais royal est véritablement transformé sous la Révolution en « Muséum central des arts de la République ». Il ouvre en 1793 en exposant environ 660 œuvres, essentiellement issues des collections royales ou confisquées chez des nobles émigrés ou dans des églises. Par la suite les collections ne cesseront de s'enrichir par des prises de guerre, acquisitions, mécénats, legs, donations, et découvertes archéologiques."
                +
                "Le musée compte pour sa gestion 2 091 employés (fonctionnaires, contractuels et vacataires), dont 1 232 agents de surveillance, un garde pour chacune des 403 salles d’exposition, que complètent les effectifs affectés aux 900 caméras du système de télésurveillance."
                break;
        default:
            headerWiki = "Image non traité";
            break;
    }
    return headerWiki
}


export default getAnecdote
export default getHeaderWiki


