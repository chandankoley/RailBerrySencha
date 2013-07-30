Ext.define('Test.view.AgendaDetails', {
    extend:'Ext.Container',
    xtype:'agendadetails',
    config: {
        cls: 'page-background',
        items:[{
                
            // agenda toolbar
            xtype: 'titlebar',
            docked: 'top',
            title: 'Schedule',
            items:[{
                xtype: 'button',
                name: 'back_to_agenda',
                text: 'Back',
                ui: 'back'
            }]
        },{
            html: 
            ['<div class="speaker-details-parent">',
            '<div class="speaker-parent">',
            '<img class="speaker-picture" src="resources/images/pic1.jpg"/>',
            '<div class="speaker-name">Adam Krege</div>',
            '<div class="speaker-time">Rails core team member</div>',
            '<div class="speaker-time">10:00 - 12:30</div>',
            '</div>',
            '</div>',
            '<div class="speaker-details-para">Electrical engineering may include electronic engineering.',
            ' Where a distinction is made, usually outside of the ',
            'electrical engineering is considered to deal with the problems',
            ' associated with systems such as electric power transmission and',
            ' electrical machines, whereas electronic engineering deals with ',
            'the study of electronic systems including computers, communication',
            ' systems, integrated circuits, and radar.[1]</div>'
            ].join('')
        }]
    }
});