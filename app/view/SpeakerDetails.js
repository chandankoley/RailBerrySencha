Ext.define('Test.view.SpeakerDetails', {
    extend:'Ext.Container',
    xtype:'speakerdetails',
    config: {
        cls: 'page-background',
        items:[{
                
            // agenda toolbar
            xtype: 'titlebar',
            docked: 'top',
            title: 'Speaker',
            items:[{
                xtype: 'button',
                name: 'back_to_speaker',
                text: 'Back',
                ui: 'back'
            }]
        },{
            store: 'Agenda',
            html: 
            ['<div class="speaker-details-parent">',
            '<div class="speaker-parent">',
            '<img class="speaker-picture" src="resources/images/pic1.jpg"/>',
            '<div class="speaker-name">Adam Krege</div>',
            '<div class="speaker-type">Rails core team member</div>',
            '</div>',
            '</div>',
            '<div class="speaker-details-para">Electrical engineering may include electronic engineering.',
            ' Where a distinction is made, usually outside of the ',
            '<span class="important-topic">United States,</span>',
            'electrical engineering is considered to deal with the problems',
            ' associated with systems such as electric power transmission and',
            ' electrical machines, whereas electronic engineering deals with ',
            'the study of electronic systems including computers, communication',
            ' systems, integrated circuits, and radar.[1]</div>'
            ].join('')
        }]
    }
});