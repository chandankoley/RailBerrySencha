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
                    console.log("show twitter data now");
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