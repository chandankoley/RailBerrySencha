Ext.define('Test.store.NextAgenda', {
    extend : 'Ext.data.Store',
    config : {
        model : 'Test.model.Agenda',
        sorters: 'time',

   grouper: {
       groupFn: function(record) {
           return record.get('time');
       }
   },

   data: [
       { topic: 'Tommy',   by: 'Maintz'  ,time: '19:00'},
       { topic: 'Rob',     by: 'Dougan'  ,time: '2:30'},
       { topic: 'Ed',      by: 'Spencer' ,time: '1:00'},
       { topic: 'Jamie',   by: 'Avins'   ,time: '10:00'},
       { topic: 'Aaron',   by: 'Conran'  ,time: '12:30'},
       { topic: 'Dave',    by: 'Kaneda'  ,time: '8:00'},
       { topic: 'Jacky',   by: 'Nguyen'  ,time: '16:20'},
       { topic: 'Abraham', by: 'Elias'   ,time: '8:30'},
       { topic: 'Jay',     by: 'Robinson',time: '9:10'},
       { topic: 'Nigel',   by: 'White'   ,time: '2:00'},
       { topic: 'Don',     by: 'Griffin' ,time: '1:30'},
       { topic: 'Nico',    by: 'Ferrero' ,time: '2:30'},
       { topic: 'Jason',   by: 'Johnston',time: '3:00'}
    ]
 }
});