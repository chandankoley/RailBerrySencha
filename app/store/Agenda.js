Ext.define('Test.store.Agenda', {
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
       { topic: 'Tommy',   by: 'Maintz'  ,time: '9:00'},
       { topic: 'Rob',     by: 'Dougan'  ,time: '9:30'},
       { topic: 'Ed',      by: 'Spencer' ,time: '10:00'},
       { topic: 'Jamie',   by: 'Avins'   ,time: '10:30'},
       { topic: 'Aaron',   by: 'Conran'  ,time: '10:40'},
       { topic: 'Dave',    by: 'Kaneda'  ,time: '11:00'},
       { topic: 'Jacky',   by: 'Nguyen'  ,time: '11:20'},
       { topic: 'Abraham', by: 'Elias'   ,time: '12:30'},
       { topic: 'Jay',     by: 'Robinson',time: '12:40'},
       { topic: 'Nigel',   by: 'White'   ,time: '12:50'},
       { topic: 'Don',     by: 'Griffin' ,time: '1:00'},
       { topic: 'Nico',    by: 'Ferrero' ,time: '2:00'},
       { topic: 'Jason',   by: 'Johnston',time: '3:00'}
    ]
 }
});