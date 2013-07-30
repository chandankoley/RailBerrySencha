Ext.define('Test.view.Tweeter', {
    extend:'Ext.Container',
    xtype:'tweeter',
    config: {
        cls : 'twitter-background',
        items:[{
                
            // agenda toolbar
            xtype: 'titlebar',
            docked: 'top',
            title: 'Tweets',
            cls: 'cookie-font',
            
            items:[{
                xtype: 'button',
                iconCls: 'refresh',
                align: 'right',
                ui: 'plain'
            }]
        },{
            html:[
                '<div class="loading-parent">',
                '<div class="loading-pic"></div>',
                '<div class="loading-text">Loading...<div>',
                '</div>'
            ].join('')
        }]
    }
});