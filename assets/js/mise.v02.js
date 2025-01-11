var lightbox = new SimpleLightbox('.gallery a', { /* options */ });

var width = $(window).width();
if (width >= 1199) {
    $("#main").addClass('pl50');
    $("#StrMain").removeClass('ml100');
    $("#StrMain").removeClass('ml50');
    $("#StrMain").addClass('ml400');
} else if (width > 700) {
    $("#main").removeClass('pl50');
    $("#StrMain").removeClass('ml50');
    $("#StrMain").removeClass('ml400').addClass('ml100');
} else {
    $("#main").removeClass('pl50');
    $("#StrMain").removeClass('ml100');
    $("#StrMain").removeClass('ml400').addClass('ml50');
    document.getElementById('StrMain').style.marginLeft = '20px!important';
}

$(document).ready(function () {
    $(window).on('resize', function () {
        var winWidth = $(this).width();
        if (winWidth >= 1199) {
            $("#main").addClass('pl50');
            $("#StrMain").removeClass('ml100');
            $("#StrMain").addClass('ml400').removeClass('ml50');
        } else if (winWidth > 700) {
            $("#main").removeClass('pl50');
            $("#StrMain").removeClass('ml50');
            $("#StrMain").removeClass('ml400').addClass('ml100');
        } else {
            $("#main").removeClass('pl50');
            $("#StrMain").removeClass('ml100');
            $("#StrMain").removeClass('ml400').addClass('ml50');
            document.getElementById('StrMain').style.marginLeft = '20px!important';
        }
    });

});

function ReadMore(number) {
    var HtmlStr = "";
    if (number == 1) {
        HtmlStr += `<p style="text-indent:50px; text-align: justify ">Migration means moving from one area to Another permanently or temporarily and it dates back to the ages of early homo sapiens. Although it has different means for different eras, today, the migration phenomenon caused by wars and natural disasters and it flows from undeveloped and developing countries to developed ones. In addition to this, in general, there are some driving factors. First of all are security problems, high crime rates, crops fail especially in rural areas, floodings, poverty, and wars. Another driving factors are good job opportunities, high living standard, good weather conditions, more secure places and low crime rates, political stability, fertile lands, low-risk proportion of natural disasters.</p>`;
        HtmlStr += `<p style="text-indent:50px; text-align: justify "> Western Europen Countries Germany, England, France, Spain, İtaly, Norway, Sweden, Finland, Denmark, Netherlands, Belgium have faced a burst of illegal immigration after Arap Spring, a political and social uprising of people who lived for decades under dictatorial regimes. The geographical proximity of these undemocratic regimes and developed western counties is the main factor for such a burst of illegal immigration. Some migratory routes provide an easy crossing for illegal immigration. Thus, these routes are highly preferred for human trafficking.</p>`;
        HtmlStr += `<p style="text-indent:50px; text-align: justify "> Geographic Informations System (GIS) can be used as a useful to reveal migration routes. In spite of this potential, there is not enough study based on GIS. The most significant advantage of using GIS is the chance of carrying out accurate analyses by combining different kind sources of data together. The results of this dissertation were obtained by using GIS. For example, analyzes like the national income of the top 10 African countries and the number of immigrants in these countries between 2009 and 2017, the ratio of terrorism in 2016 and the total number of immigrants in 2016, the democracy ratios of the selected countries and the number of immigrants of these countries between 2009 and 2017, ratios of the selected countries’ usage of the East Mediterranean Route to the all other routes were made with CBS technology. These analyzes showed that the reasons like lack of democracy, terror activities and low income were the main driving forces of the immigration.</p>`;
        HtmlStr += `<p style="text-indent:50px; text-align: justify ">The aim of the research is a multidimensional investigation of migrations to Europe and its migration routes. Context to this resect first, the areas around the world where people have immigrated to Europe were identified and the reasons for these migrations were revealed. Then the migratory routes were indented and the reason that why these routes were preferred was revealed. GIS enables to analyze by combining data diversity on the same basis with principles of contrast and suitability. Therefore, GIS was used during identification of migratory routes and the link between the routes and their reasons (conflict, natural disasters or population density etc.) were tried to find out. </p>`;
        HtmlStr += `<p style="text-indent:50px; text-align: justify ">ArcMap 10.2 was used in this study as a GIS software. Immigrant, originated from mostly Africa, Asia and The Middle East The migratory routes were identified by different institutions such as Frontex and IOM( International Organization for Migration). These routes are generally divided into eight: The West Africa Route, The West Mediterranean Route, The Middle (Center) Mediterranean Route, The Crossing Route from Albania to Greece, The West Balkan Route, The East Boundary Route and The East Mediterranean Route. These routes were used as references in this study. In addition to that, not just the routes but also the reasons for the preference of these routes (geographic closeness and escaping conflict) were determined. Also, The East Mediterranean Route which Turkey is involved in was paid more attention and the locations of Turkey in this route was tried to clarify. The reason for the attention is that Turkey is not just a destination but also a transit passing lane. Despite the fact that there are not many people who have migrated from Turkey to Europe, Turkey has a crossing location which intensely used by the migrants preferring The East Mediterranean Route. </p>`;
        HtmlStr += `<p style="text-indent:50px; text-align: justify ">One of the most important entry points for illegal immigrants to Europe are the regions close to the Greek islands near Turkey. Right after the deterioration in the security situation in Syria, the increasing demand for transition allowed the dramatic increase in smuggling. The active use of the East Mediterranean route by the Syrians has not led to the opening of a new route. Conversely, this situation resulted in Syrian’s addition to the countries Iraq, Pakistan, and Afghanistan which began to use this route on an earlier date. As a result of this, the immigrant population has increased in Turkey which is the most important transit country along this migration road. Another reason for the use of the migration road is that Turkey’s border policies’ being relatively easier and passing through to Europe by the Aegean Sea is cheaper than other roads. By using the immigrant exit points in İzmir, Çeşme, Dikili, Ayvalık, and Bodrum, hence with relatively cheaper price, thousands of Syrian refugees have utilized a route to the Greek islands like Kos, Chios, and Lesbos. </p>`;
        HtmlStr += `<p style="text-indent:50px; text-align: justify ">Ten countries have identified in the range of The East Mediterranean Route. These countries are Afghanistan, Bangladesh, Iran, Iraq, Pakistan, Palestine, Somalia, Morocco, Algeria, and Syria. These countries are also the countries that use the East Mediterranean Route at most. This route was mostly used by these ten countries and these were analyzed in detail. People who migrated to Europe are mostly from the countries such as Afghanistan, Syria, and Iraq and they prefer to use this route at a massive 80 percent. So, it wouldn’t be wrong to say that The East Mediterranean Route is the most significant route among the others. Syria war has a big role for this route. Also, this intensive using increased the importance of the migration studies of Turkey. Within the selected countries, there is a considerable increase in immigrant people population. ISIS’s activities for escalating the conflict in the Middle East was the main reason for this increase. </p>`;
        HtmlStr += `<p style="text-indent:50px; text-align: justify ">West Balkan Route and especially East Mediterranean Route which extends from Turkey to Greece, passes through Turkey and constitutes frequently used routes along migration roads. Thanks to this important role, Turkey has become quite important in terms of migration studies. </p>`;
        HtmlStr += `<p style="text-indent:50px; text-align: justify ">The frequency of using routes has risen with the increase of the burst of immigration to Europe after 2011. The intensity of the migratory routes and finding out the changes by years, detection of which countries’ citizens preferred to use these routes and why they preferred are the bases of this research. </p>`;
        HtmlStr += `<p style=""><b> Key Words:</b> Migration, Migratory Routes, Geographic Information Systems, Europe, The Middle East</p>`;
        HtmlStr += `<span onclick="ReadLess('1')" style=" opacity: 0.6; cursor:pointer!important">[<em>Read Less</em>]</span>`;
    } else if (number == 2) {
        HtmlStr += `<p style="text-indent:50px; text-align: justify "> In general terms, Lıttle Ice Age can be defined as a period of between 1300-1850 when the temperature decreased at least 1oC which gave rise to the icrease in the expansion areas of glaciers having an impact in every other ragion in the World at different ranges with sudden climatic oscillation. While this period of time is named as Lıttle Ice Age, it can be wrong to speak of a global era affecting the whole world in the same extend. The impact shows changes according to time and space. Furthermore, the factor making Lıttle Ice Age important is especially the effects it created on different societies. During this period of time, many revolts (Celali Revolts), social events (French Revolution) and wars took place. All these events are relation between these two is tried to be revealed.</p>`;
        HtmlStr += `<p style="text-indent:50px; text-align: justify "> The study focuses on Europe, Mediterranean Basin and Ottoman Empire (especially Anatolian drought in 1590s and Nile flooding in Egypt). In the end, it was found out that Lıttle Ice Age affected many areas like economy, social life, politics and art and that it was one of the most important elements that gave rise to social events like French Revolution which created an impact in the World scale, and the Celali revolts which had become a major problem for Ottomans for a long time.</p>`;
        HtmlStr += `<p ><b> Keywords:</b> Little Ice Age, Glaciers, French Revolution, Celali Revolts</p>`;
        HtmlStr += `<span onclick="ReadLess('2')" style=" opacity: 0.6; cursor:pointer!important">[<em>Read Less</em>]</span>`;

    } else {
        return false;
    }


    $("#DvThesis" + number).html(HtmlStr);
}
function ReadLess(number) {
    var HtmlStr = "";
    if (number == 1) {
        HtmlStr += `<p style="text-indent:50px; text-align: justify ">Migration means moving from one area to Another permanently or temporarily and it dates back to the ages of early homo sapiens. Although it has different means for different eras, today, the migration phenomenon caused by wars and natural disasters and it flows from undeveloped and developing countries to developed ones. In addition to this, in general, there are some driving factors. First of all are security problems, high crime rates, crops fail especially in rural areas, floodings, poverty, and wars. Another driving factors are good job opportunities, high living standard, good weather conditions, more secure places and low crime rates, political stability, fertile lands, low-risk proportion of natural disasters. ...`;
        HtmlStr += `<span onclick="ReadMore('1')" style=" opacity: 0.6; cursor:pointer!important">[<em>Read More</em>]</span></p>`;
    } else if (number == 2) {
        HtmlStr += `<p style="text-indent:50px; text-align: justify "> In general terms, Lıttle Ice Age can be defined as a period of between 1300-1850 when the temperature decreased at least 1oC which gave rise to the icrease in the expansion areas of glaciers having an impact in every other ragion in the World at different ranges with sudden climatic oscillation. While this period of time is named as Lıttle Ice Age, it can be wrong to speak of a global era affecting the whole world in the same extend. The impact shows changes according to time and space. Furthermore, the factor making Lıttle Ice Age important is especially the effects it created on different societies. During this period of time, many revolts (Celali Revolts), social events (French Revolution) and wars took place. All these events are relation between these two is tried to be revealed. ...`;
        HtmlStr += `<span onclick="ReadMore('2')" style=" opacity: 0.6; cursor:pointer!important">[<em>Read More</em>]</span> </p>`;
    } else {
        return false;
    }
    $("#DvThesis" + number).html(HtmlStr);
    $("#idDvPublication").trigger("click");
}