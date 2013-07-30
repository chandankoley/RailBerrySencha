Ext.define('Test.view.Agenda', {
    extend:'Ext.Container',
    xtype:'agenda',
    config: {
//        cls : 'agenda-main',
        cls: 'page-background',
        layout : 'fit',
        scrollable: true,
        
        // agenda items
        items: [{
                    
            // agenda titlebar
            xtype: 'titlebar',
            docked: 'top',
            title: 'Schedule',
            cls: 'cookie-font'
        },{
                
            // agenda toolbar
            xtype: 'toolbar',
            docked: 'top',
            ui: 'sub',
                
            // agenda toolbar button
            items:[{
                xtype:'segmentedbutton',
                cls:'agenda-button',
                name:'agenda_toggle_button',
                items: [
                {
                    text: 'Tues 19',
                    name:'left_side',
                    pressed: true
                },
                {
                    text: 'Wed 20',
                    name:'right_side'
                }
                ]                    
            }]
        },{
            layout: 'card',
            name: 'agenda_list',
            items:[{
                xtype: 'agendafirst'
            },{
                xtype: 'agendasecond'
            }]
        }]
    }
});