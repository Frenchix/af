module.exports = {
    getCombinaisons : function(request, response){
            const td = 6;
            let sommeTD = 0;
            let nbTD = 0;
            const fg = 3;
            let sommeFG = 0;
            let nbFG = 0;
            let nbPAT = 0;
            const team1 = request.query.team1;
            const team2 = request.query.team2;
            const combinaisonsTeam1 = [];
            const combinaisonsTeam2 = [];
            let dif = 0;

            // TEAM 1
            //on calcul juste avec les field goal pour la team 1
            if (team1 >= fg) {
                dif = team1 - sommeFG;
                if ((dif % fg) == 0){
                    nbFG = dif / fg;
                    combinaisonsTeam1.push({
                        nbTouchDown : 0,
                        nbFieldGoal : nbFG,
                        nbPAT : 0
                    })
                }
            }
            // on calcul avec les touch down pour la team 1
            if (team1 >= td) {
                while (sommeTD <= (team1 - td)){
                    sommeTD += td;
                    nbTD++
                    dif = team1 - sommeTD;
                    // on calcul le nombre de field goal
                    if ((dif % fg) == 0){
                        nbFG = dif / fg;
                        combinaisonsTeam1.push({
                            nbTouchDown : nbTD,
                            nbFieldGoal : nbFG,
                            nbPAT : 0
                        })
                    }
                }
            }
            if(team1 >= td + 1) {
                // on calcul avec le nombre de pat pour la team 1
                sommeTD = 0;
                while (sommeTD <= (team1 - td)){
                    nbPAT++;
                    sommeTD += (td + 1);
                    dif = team1 - sommeTD;
                    if ((dif % td) == 0){
                        const nbTD = dif / td;
                        for (let i = 0; i < nbTD; i++){
                            combinaisonsTeam1.push({
                                nbTouchDown : i + nbPAT,
                                nbFieldGoal : (nbTD - i) * 2,
                                nbPAT : nbPAT
                            })
                        }
                    } else if (((dif % td) == 3)) {
                        const nbTD = Math.floor(dif / td);
                        combinaisonsTeam1.push({
                            nbTouchDown : nbTD + nbPAT,
                            nbFieldGoal : 1,
                            nbPAT : nbPAT
                        })
                    }
                }
            }

            // TEAM 2
             //on calcul juste avec les field goal pour la team 2
             sommeTD = 0;
             nbTD = 0;
             if (team2 >= fg) {
                dif = team2 - sommeFG;
                if ((dif % fg) == 0){
                    nbFG = dif / fg;
                    combinaisonsTeam2.push({
                        nbTouchDown : 0,
                        nbFieldGoal : nbFG,
                        nbPAT : 0
                    })
                }
            }
            // on calcul avec les touch down pour la team 2
            if (team2 >= td) {
                while (sommeTD <= (team2 - td)){
                    sommeTD += td;
                    nbTD++
                    dif = team2 - sommeTD;
                    // on calcul le nombre de field goal
                    if ((dif % fg) == 0){
                        nbFG = dif / fg;
                        combinaisonsTeam2.push({
                            nbTouchDown : nbTD,
                            nbFieldGoal : nbFG,
                            nbPAT : 0
                        })
                    }
                }
            }
            nbPAT = 0
            if(team2 >= td + 1) {
                // on calcul avec le nombre de pat pour la team 2
                sommeTD = 0;
                while (sommeTD <= (team2 - td)){
                    nbPAT++;
                    sommeTD += (td + 1);
                    dif = team2 - sommeTD;
                    if ((dif % td) == 0){
                        const nbTD = dif / td;
                        for (let i = 0; i < nbTD; i++){
                            combinaisonsTeam2.push({
                                nbTouchDown : i + nbPAT,
                                nbFieldGoal : (nbTD - i) * 2,
                                nbPAT : nbPAT
                            })
                        }
                    } else if (((dif % td) == 3)) {
                        const nbTD = Math.floor(dif / td);
                        combinaisonsTeam2.push({
                            nbTouchDown : nbTD + nbPAT,
                            nbFieldGoal : 1,
                            nbPAT : nbPAT
                        })
                    }
                }
            }
            const combinaisons = { team1 : combinaisonsTeam1, team2: combinaisonsTeam2}
            response.json(combinaisons);
    }
}