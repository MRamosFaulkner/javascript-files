//a users email

let appData = {
    appName: 'Hotmail',
    mailboxes: [
        'Inbox',
        'Junk',
        'Drafts',
        'Sent',
        'Deleted',
        'Work',
        'Pics',
    ],
    contacts:[{
        name: 'James',
        phone: '(704) 555-1234',
        organization: "CTAC",
        email: 'james@mail.com',
        moreInfo: {
            messageStatus: 'read',
            lastMessage: 'Ran into an issue for the project.',  
        }
    },

        {
        name: 'Edgar',
        phone: '(704) 555-5678',
        organization: "CTAC",
        email: 'edgar@mail.com',
        moreInfo: {
            messageStatus: 'deleted',
            lastMessage: 'Meet you at noon.',  
        }
    },
        {name: 'Thomas',
        phone: '(704) 555-7779',
        organization: "CTAC",
        email: 'tom@mail.com',
        moreInfo: {
            messageStatus: 'read',
            lastMessage: 'I can come in to help with that.',
    
        },
    },
        {name: 'Casey', 
        phone: '(704) 555-6666',
        organization: 'CTAC',
        email: 'casey@mail.com',
        moreInfo: {
            messageStatus: 'unread',
            lastMessage: 'That sounds like a good plan.',
        },
    },
    ],
    emails:[
        {mailbox: 'Inbox', from:'Casey', to: 'ctac@info.com', subject: 'Class Work', message: 'This work is due on ...'},
        {mailbox: 'Drafts', from:'Edgar', to: 'ctac@info.com', subject: 'Class Work', message: 'This work must be for ...'},
        {mailbox: 'Junk', from:'James', to: 'ctac@info.com', subject: 'Class Work', message: 'This work never made ...'},
        {mailbox: 'Deleted', from:'Thomas', to: 'ctac@info.com', subject: 'Class Work', message: 'This work needs some ...'},
        {mailbox: 'Junk', from:'Casey', to: 'ctac@info.com', subject: 'Class Work', message: 'This work has been ...'},
   
   
    ]

   
}


console.log(appData.appName, '\n');

for(let i = 0; i < appData.mailboxes.length; i++) {
    console.log(appData.mailboxes[i])
}

console.log();

for(let i = 0; i < appData.contacts.length; i++) {
    console.log(appData.contacts[i].email)
}

console.log();
console.log('Text from second message reads: ' + appData.emails[1].message);

console.log();

appData.contacts[1].moreInfo.messageStatus = 'sent';

console.log('This message status was changed to: ' + appData.contacts[1].moreInfo.messageStatus + '.');

let Drafts = {mailbox: 'Drafts', from:'Edgar', to: 'ctac@info.com', subject: 'Class Work', message: 'This work should have ...'}

appData.emails.push(Drafts);
console.log(appData.emails)