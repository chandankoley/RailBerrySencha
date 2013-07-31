Ext.define('Test.controller.Main', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            speakerItem : 'list[name="speaker_list"]',
            speaker : 'speaker',
            speakerPage : 'container[name="speaker_page"]',
            backToSpeaker : 'button[name="back_to_speaker"]',
            
            moreList : 'list[name="more_list"]',
            morePage: 'container[name="more_page"]',
            backToMore: 'button[name="back_to_more"]',
            
            mainWindow: 'container[name="main_window"]',
            
            agendaList: '[name="agenda_list"]',
            agendaToggleButton: 'segmentedbutton[name="agenda_toggle_button"]',
            leftAgendaButton: 'left_side',
            rightAgendaButton: 'right_side',
            agendaListFirst: 'list[name="agenda_list_first"]',
            agendaListSecond: 'list[name="agenda_list_second"]',
            agendaPage: 'container[name="agenda_page"]',
            backToAgenda: 'button[name="back_to_agenda"]',
            
            showTwitterData: '[name="twitter"]'
            
        },
        control: {
            showTwitterData: {
                activate: function(){
                    Ext.Ajax.request({
                        url: 'http://query.yahooapis.com/v1/public/yql?q=%20select%20*%20from%20rss%20where%20url%3D%22https%3A%2F%2Fwww.facebook.com%2Ffeeds%2Fpage.php%3Fformat%3Drss20%26id%3D233254130082808%22',
                        method: 'GET',
                        params: {
                            format: "json",
                            diagnostics : true
                        },
                        callback: function(options, success, response) {
                            console.log(Ext.decode(response.responseText).query.results);
                            Ext.getStore('Twitter').setData(Ext.decode(response.responseText).query.results.item);
                        }
                    });
                }  
            },
            agendaListFirst: {
                itemtap: function(){
                    console.log("go to agenda schedule");
                    this.getAgendaPage().animateActiveItem(1,{
                        type : 'slide'
                    });
                }
            },
            agendaListSecond: {
                itemtap: function(){
                    console.log("go to agenda schedule");
                    this.getAgendaPage().animateActiveItem(1,{
                        type : 'slide'
                    });
                }
            },
            backToAgenda: {
                tap:function(){
                    console.log("go back to agenda page");
                    this.getAgendaPage().animateActiveItem(0,{
                        type : 'slide',
                        direction : 'right'
                    });
                }  
            },
            agendaToggleButton: {
                toggle: function(el, button, isPressed, eOpts){
                    if(button.name === "left_side" && isPressed) {
                        console.log('1st list');
                        this.getAgendaList().setActiveItem(0);
                    } else if(button.name === "right_side" && isPressed) {
                        console.log('2nd list');
                        this.getAgendaList().setActiveItem(1);
                    }
                }
            },
            mainWindow: {
                activeitemchange: function(){
                    console.log("activeitemchange fireing");
                    this.getSpeakerPage().setActiveItem(0);
                    this.getMorePage().setActiveItem(0);
                }  
            },
            speakerItem: {
                itemtap: function(){
                    console.log("go to speaker details");
                    this.getSpeakerPage().animateActiveItem(1,{
                        type : 'slide'
                    });
                }
            },
            backToSpeaker: {
                tap: function(){
                    console.log("go to speaker page");
                    this.getSpeakerPage().animateActiveItem(0,{
                        type : 'slide',
                        direction : 'right'
                    });
                }
            },
            moreList : {
                itemtap: function(mylist, index, target, record, e, eOpts ){
                    if(index === 0){
                        this.getMorePage().animateActiveItem(2,{
                            type : 'slide'
                        });
                    } else if(index === 1){
                        console.log('sponsors list');
                        this.getMorePage().animateActiveItem(3,{
                            type : 'slide'
                        });
                    }else if(index === 2){
                        this.getMorePage().animateActiveItem(1,{
                            type : 'slide'
                        });
                    } 
                }
            },
            backToMore: {
                tap: function(){
                    console.log("go to more page");
                    this.getMorePage().animateActiveItem(0,{
                        type : 'slide',
                        direction : 'right'
                    });
                }
            }
        }
    }
});
