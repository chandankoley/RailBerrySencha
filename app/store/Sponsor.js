Ext.define('Test.store.Sponsor', {
    extend : 'Ext.data.Store',
    config : {
        model : 'Test.model.Sponsor',
        sorters: 'sponsor_type',

        grouper: {
            groupFn: function(record) {
                return record.get('sponsor_type')+' : '+record.get('sponsor_name');
            },
            sortProperty: 'sponsor_type'
        },
   
        //   resources/images/pic1.jpg

        data: [
        {
            sponsor_type: 'The sweetest sponsor', 
            sponsor_name: 'AJUTHR COMPLEX',  
            sponsor_logo: 'resources/images/logo/logo1.png'
        },
        {
            sponsor_type: 'Confetti sponsor', 
            sponsor_name: 'UYHTYER JUIYR',  
            sponsor_logo: 'resources/images/logo/logo2.png'
        },
        {
            sponsor_type: 'Pink Sponsor', 
            sponsor_name: 'AKIYRHRF KIUTY',  
            sponsor_logo: 'resources/images/logo/logo3.png'
        },
        {
            sponsor_type: 'Drinkup Sponsor', 
            sponsor_name: 'DFETRYG KITUY',  
            sponsor_logo: 'resources/images/logo/logo4.png'
        },
        {
            sponsor_type: 'Movie Sponsor', 
            sponsor_name: 'SRETRYF KIOTYR',  
            sponsor_logo: 'resources/images/logo/logo5.png'
        },
        {
            sponsor_type: 'Tea setup Sponsor', 
            sponsor_name: 'IUYIROT UTYEJRT',  
            sponsor_logo: 'resources/images/logo/logo6.png'
        }
        ]
    }
});