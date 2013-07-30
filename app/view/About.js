Ext.define('Test.view.About', {
    extend:'Ext.Container',
    xtype:'about',
    config: {
        cls: 'page-background',
        items: [{
                    
            //about title bar
            xtype: 'titlebar',
            docked: 'top',
            title: 'About'
        }, {
                
            //about panel html
            xtype: 'panel',
            html: "<h2 class='cookie-font about-heading'>What's Railberry?</h2>\n\
                    <img class='about-pic' src='http://www.demos.paranoida.com/railsberry/images/railsberry_intro.png'/>\n\
                    <p>\n\
                        Sencha Touch is a product of Sencha, which was formed \n\
                        after popular JavaScript library projects Ext JS, jQTouch \n\
                        and Raphaël were combined.[1] The first release of Sencha Touch, \n\
                        version 0.90 beta, was made available on July 17, 2010. This\n\
                         beta release supported devices running Android, and iOS \n\
                        (on iPhone, iPod touch, iPad). Subsequently the first stable version, \n\
                        1.0, was released in November 2010. Version 1.1.0 added support\n\
                         for devices running BlackBerry OS version 6. The latest release, \n\
                        Sencha Touch 2, was released on March 7, 2012 and is designed to run on \n\
                        WebKit based browsers such as Android, Google Chrome for Android, \n\
                        RIM BlackBerry Browser, Bada Mobile Browser, Kindle Fire Browser, and Safari.\n\
                         Sencha currently supports Windows Phone in the 2.x line. There are\n\
                         no plans to support Firefox Mobile.\n\
                    </p>"
        }]
    }
});