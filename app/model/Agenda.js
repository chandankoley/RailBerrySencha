Ext.define('Test.model.Agenda', {
    extend : 'Ext.data.Model',
    config: {
        fields: [        
        {
            name: 'topic',
            type: 'string'
        },
        {
            name: 'by',
            type: 'string'
        },
        {
            name: 'time',
            type: 'time'
        },
        ]
    }
});