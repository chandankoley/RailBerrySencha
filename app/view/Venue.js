Ext.define('Test.view.Venue', {
    extend:'Ext.Map',
    requires:['Ext.Map'],
    xtype:'venue',
    config: {
        cls: 'page-background',
        items:[{
                
            // agenda toolbar
            xtype: 'titlebar',
            docked: 'top',
            title: 'Venue',
            items:[{
                xtype: 'button',
                name: 'back_to_more',
                text: 'Back',
                ui: 'back'
            }]
        },{
            xtype: 'map',
            useCurrentLocation:true
        }]
    }
});