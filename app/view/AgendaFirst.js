Ext.define('Test.view.AgendaFirst', {
    extend:'Ext.Container',
    xtype:'agendafirst',
    config: {
        cls: 'page-background',
        items:[{

            //agenda list
            xtype: 'list',
            iconCls: 'code3',
            height : '100%',
            store: 'Agenda',
            cls: 'agenda-list',
            name: 'agenda_list_first',
            grouped: true,
            variableHeights: true,
            itemTpl: [
                '<div class="agenda-listitem-parent">',
                '<div class="agenda-listitem-topic">{topic}</div>',
                '<div class="agenda-listitem-by">by <span class="agenda-listitem-by-name">{by}</span></div>',
                '</div>',
                '<img class="agenda-listitem-arrow" src="resources/images/code3.png"/>'
            ].join('')
        }]
    }
});