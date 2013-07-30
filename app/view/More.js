Ext.define('Test.view.More', {
    extend:'Ext.Container',
    xtype:'more',
    scrollable: true,
    config: {
        cls: 'page-background',
        items:[{
                    
            // more titlebar
            xtype: 'titlebar',
            docked: 'top',
            title: 'More' ,
            cls: 'cookie-font'
        },{
                
            // more list
            xtype:'list',
            cls: 'page-background',
            name: 'more_list',
            height:'100%',
            itemTpl: ['<div class="more-topic">{title}</div>',
            '<img class="more-arrow" src="resources/images/code3.png"/>',
            ].join(''),
            data: [
            {
                title: 'Venue'
            },
            {
                title: 'Sponsors'
            },
            {
                title: 'About Applications'
            }
            ]
        }]
    }
});