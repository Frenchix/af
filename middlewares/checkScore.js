function checkScore(request, response, next) {
    const team1 = request.query.team1;
    const team2 = request.query.team2;
    if ((team1 < 500) && (team2 < 500)) {
        return next();
    }
    response.status(404).json("LIMIT");
}

module.exports = { checkScore };