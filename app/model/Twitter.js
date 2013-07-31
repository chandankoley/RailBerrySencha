Ext.define('Test.model.Twitter', {
    extend : 'Ext.data.Model',
    config: {
        fields: [        
        {
            name: 'author',
            type: 'string'
        },
        {
            name: 'creator',
            type: 'string'
        },
        {
            name: 'description',
            type: 'string'
        },
        {
            name: 'link',
            type: 'string'
        },
        {
            name: 'pubDate',
            type: 'string'
        },
        {
            name: 'title',
            type: 'string'
        },
        ]
    }
});