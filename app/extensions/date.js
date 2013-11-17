moment.fn.seasons = {
    winter: 0,
    spring: 3,
    summer: 6,
    fall: 9
};

/**
 *
 * Returns the current season based on the date
 */
moment.fn.getSeason = function(){
    var season = -1;
    
    switch(this.month()){
        case 0:
        case 1:
        case 2:
            season = this.seasons.winter;
            break;
        case 3:
        case 4:
        case 5:
            season = this.seasons.spring;
            break;
        case 6:
        case 7:
        case 8:
            season = this.seasons.summer;
            break;
        case 9:
        case 10:
        case 11:
            season = this.seasons.fall;
            break;
    }
    return season;
};
moment.fn.setStartOfSeason = function(){
    var startOfSeason = this.getSeason();
    this.month(startOfSeason);
    return this.startOf('month');
};

moment.fn.setEndOfSeason = function(){
    this.setStartOfSeason();
    this.addSeason();
    return this.subtract('day',1);
};

moment.fn.addSeason = function(){
    return this.add('month', 3);
};

moment.fn.subtractSeason = function(){
    return this.subtract('month', 3);
};

