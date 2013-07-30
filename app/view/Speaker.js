Ext.define('Test.view.Speaker', {
    extend:'Ext.Container',
    xtype:'speaker',
    scrollable: true,
    config: {
        cls: 'page-background',
        // speakers icon shown here
            items:[{
                    
                // speakers titlebar
                xtype: 'titlebar',
                docked: 'top',
                title: 'Speakers',
                cls: 'cookie-font'
            },{
                
                // speakers list
                xtype: 'list',
                height : '100%',
                
//                cls : 'speaker',
                cls: 'page-background',
                
                name: 'speaker_list',
                itemHeight : 90,
                store: 'Agenda',
                itemTpl: 
                ['<div class="speaker-parent">',
                '<img class="speaker-picture" src="resources/images/pic1.jpg"/>',
                '<div class="speaker-name">{topic} {by}</div>',
                '<div class="speaker-type">Rails core team member</div>',
                '</div>',
                '<img class="speaker-arrow" src="resources/images/code3.png"/>'].join('')
            }]
    }
});