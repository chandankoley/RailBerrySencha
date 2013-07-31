Ext.define('Test.view.Tweeter', {
    extend:'Ext.Container',
    xtype:'tweeter',
    config: {
        cls: 'page-background',
        layout: 'fit',
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
           
            // tweet list
            xtype: 'list',
            cls: 'page-background',
            store: 'Twitter',
            variableHeight : true,
            itemHeight : '100',
            scrollable : true,
            
            itemTpl: new Ext.XTemplate(
                '<div class="fb-feed">',
                '<div class="title">{title}</div>',
                '<img class="arrow" src="resources/images/code3.png"/>',
                '<div class="author">-By {author}</div>',
                '<div class="pubDate">{pubDate:this.feedDate}</div>',
                '</div>',
                {
                    feedDate: function(pubDate){
                        var time = new Date(pubDate);
                        console.log(Ext.Date.format(time, 'D j M-Y h:i:s a'));
                        return Ext.Date.format(time, 'M j,Y');
                    }
                }
                )
        //            '<div class="fb-feed">',
        //            '<div class="title">{title}</div>',
        //            '<img class="speaker-arrow" src="resources/images/code3.png"/>',
        //            '<div class="author">-By {author}</div>',
        //            '<div class="pubDate">{pubDate}</div>',
        //            '</div>'
        //            ].join('')
            
            
        //            html:[
        //                '<div class="loading-parent">',
        //                '<div class="loading-pic"></div>',
        //                '<div class="loading-text">Loading...<div>',
        //                '</div>'
        //            ].join('')
        }]
    }
});