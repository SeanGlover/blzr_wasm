function StarEnter(x, y) {
    var elem = document.elementFromPoint(x, y)
    if (elem != null)
    {
        var elemSz = elem.getBoundingClientRect();
        var starId = elem.id;
        var starIndex = parseInt(starId.substring(0, 1));
        for (var i = 1; i <= 5; i++)
        {
            var stars = `#${i}${starId.substring(1, starId.length)}`;
            $(stars).attr("src", "/images/starEmpty.png");
        }
        for (var i = 1; i < starIndex; i++)
        {
            var stars = `#${i}${starId.substring(1, starId.length)}`;
            $(stars).attr("src", `/images/starFill.png`);
        }
        var lastStar = `#${starIndex}${starId.substring(1, starId.length)}`;
        var halfFull = x < elemSz.left + elemSz.width / 2 ? `Half` : `Fill`;
        $(lastStar).attr("src", `/images/star${halfFull}.png`);

        // all stars
        var images = document.getElementsByTagName('img');
        if (images.length > 0)
        {
            var fillPoints = 0;
            var allPoints = 0;
            var bigStars = new Array();
            for (var i = 0; i <= images.length; i++)
            {
                var img = images.item(i);
                if (img != null)
                {
                    var starSz = img.getBoundingClientRect();
                    if (starSz.width == 16) {
                        allPoints++;
                        fillPoints += img.src.includes('Fill') ? 1 : img.src.includes('Half') ? .5 : 0;
                    } else { bigStars.push(img); }
                }
            }
            allPoints = (allPoints == 0 ? 1 : allPoints);
            var avgStars = bigStars.length * (fillPoints / allPoints);
            var fullStars = Math.floor(avgStars);
            //console.log(`Big=${bigStars.length}, Fill=${fillPoints}, All=${allPoints}, Avg=${avgStars}, Full=${fullStars}`);
            for (var i = 0; i < bigStars.length; i++)
            {
                var bigStar = bigStars[i];
                if (bigStar != null) { bigStar.src = `/images/starEmpty.png`; }
            }
            for (var i = 0; i < fullStars; i++)
            {
                var bigStar = bigStars[i];
                if (bigStar != null) {bigStar.src = `/images/starFill.png`; }
            }
            if (avgStars - fullStars >= .5) { bigStars[fullStars].src = `/images/starHalf.png`; }
        }
    }
    return null;
}
function Change_TitleBar(text) {
    $('#title').html(text);
    $('#titleBar').css("background-color", "blue");
    return null;
}