Ext.define('Test.view.Main', {
    extend:'Ext.tab.Panel',
    requires: ['Ext.SegmentedButton', 'Ext.dataview.List', 'Test.store.Agenda', 'Ext.TitleBar'],
    xtype: 'main',
    name: 'main_window',
    
    
    config: {
        fullscreen: true,
        tabBarPosition: 'bottom',
        ui : 'dark',
        defaults: {
            styleHtmlContent: true
        },
        items: [{
                
            // about page shown here
            iconCls: 'home',
            xtype: 'about',
            title:'About',
            scrollable: true
        },{
            
            // agenda page shown here
            title: 'Agenda',
            iconCls: 'time',
            name:'agenda_page',
            padding: '0',
            layout:'card',
            items:[{
                xtype: 'agenda'  
            },{
                xtype: 'agendadetails'
            }]
        }, {

            // speaker list card****
            title: 'Speakers',
            iconCls: 'team',
            padding: '0',
            layout:'card',
            name: 'speaker_page',
            items:[{
                xtype:'speaker'
            },{
                xtype:'speakerdetails'
            }]
            
        },{  // end of speakers
                        
            
            title: 'Tweet',
            iconCls: 'info',
            xtype: 'tweeter',
            name: 'twitter'
        },{
            
            // more page start here
            title: 'More',
            iconCls: 'more',
            padding: '0',
            layout: 'card',
            name: 'more_page',
            items:[{
                xtype:'more'
            },{
                xtype:'aboutapplication'
            },{
                xtype: 'venue'
            },{
                xtype: 'sponsors'
            }]
        }]
    
    } // end of config
});