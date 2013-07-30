Ext.define('Test.model.Sponsor', {
    extend : 'Ext.data.Model',
    config: {
        fields: [        
        {
            name: 'sponsor_type',
            type: 'string'
        },
        {
            name: 'sponsor_name',
            type: 'string'
        },
        {
            name: 'sponsor_logo',
            type: 'string'
        },
        ]
    }
});