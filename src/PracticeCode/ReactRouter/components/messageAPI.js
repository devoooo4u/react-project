const messageAPI = {
    messages : [
        {id:1, from: 'gareth@email.com', title:"GDPR session", body:"session for CT india -Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud"},
        {id:2, from: 'devansh@email.com', title:"React JS session", body:"test session for React JS - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud"},
        {id:3, from: 'naveen@email.com', title:"Powerapps origin", body:"CT india training"},
        {id:8, from: 'bala@email.com', title:"IT Security training", body:"session for CT india - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud"},
        {id:18, from: 'vedha@email.com', title:"Director's story", body:"for CT india -Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud"},
        {id:4, from: 'dan@email.com', title:"UX in React", body:"CT india"},
        {id:198, from: 'dave@email.com', title:"ICAEW deployment scheduled", body:"ICAEW UK 3rd wave deployment"}
    ],
    allMessages: function(){
       return this.messages;
    },
    getByID: function(id){
        const isMessage =p => p.id === id;
        return this.messages.find(isMessage);
    }
};

export default messageAPI;