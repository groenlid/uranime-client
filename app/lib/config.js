App.Config = Ember.Object.create({
        imagepath: "http://urani.me/attachments/photos/orginal/",
        imageresizepath: "http://urani.me/api/imageresize/",
        episodepath: "http://urani.me/attachments/episodes/",
        
        noImageYet: './img/200x112&text=No+image+yet.gif',
        
        // Anime
        search: "search?q=",


        // Episodes
        shortDescriptionLength: 200,

        serverDateFormat: "YYYY-MM-DD",

        clientDateFormat: "dddd, MMM Do YYYY",

        defaultgravatar: "http://groenlid.no-ip.org/assets/img/default_guy2.png"
});
