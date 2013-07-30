Ext.define('Test.view.AboutApplication', {
    extend:'Ext.Container',
    xtype:'aboutapplication',
    config: {
        cls: 'page-background',
        items:[{
                
            // agenda toolbar
            xtype: 'titlebar',
            docked: 'top',
            title: 'About Application',
            items:[{
                xtype: 'button',
                name: 'back_to_more',
                text: 'Back',
                ui: 'back'
            }]
        },{
            html: 
            ['<div class="speaker-details-parent">',
            '<div class="speaker-parent">',
            '<img class="speaker-picture" src="resources/images/pic1.jpg"/>',
            '<div class="speaker-name">Arishol Rafel</div>',
            '<div class="admin-site">innofied.com</div>',
            '</div>',
            '</div>',
            '<p class="about-admin">Electrical engineering may include electronic engineering.',
            ' Where a distinction is made, usually outside of the ',
            ' electrical machines, whereas electronic engineering deals with ',
            'the study of electronic systems including computers, communication',
            ' systems, integrated circuits, and radar.</p>',
            '<p class="about-admin">Follow him on Twitter:<span class="important-topic">@innofied</span></p>',
            '<p class="about-admin">Visit his website:<span class="important-topic">http://innofied.com/</span></p>',
            '<p class="about-admin copy-right">&#169 2013 innofied.com</p>'
            ].join('')
        }]
    }
});