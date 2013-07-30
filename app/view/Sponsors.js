Ext.define('Test.view.Sponsors', {
    extend:'Ext.Container',
    xtype:'sponsors',
    config: {
        cls: 'page-background',
        items:[{
                
            // agenda toolbar
            xtype: 'titlebar',
            docked: 'top',
            title: 'Sponsors',
            items:[{
                xtype: 'button',
                name: 'back_to_more',
                text: 'Back',
                ui: 'back'
            }]
        },{
            //agenda list
            xtype: 'list',
            height : '100%',
            store: 'Sponsor',
            grouped: true,
            variableHeights: true,
            itemTpl: '<img class="sponsor-logo" src="{sponsor_logo}"/>'

        }]
    }
});