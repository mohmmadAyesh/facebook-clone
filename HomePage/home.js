const listItems=document.querySelectorAll('header nav .pageIcon ul li');
listItems.forEach(list=>{
    list.addEventListener('click',(e)=>{
        console.log(e.target.closest('li'));
        listItems.forEach(list=>{
            if(list!==e.target.closest('li')){
                list.classList.remove('active');
                list.querySelector('svg').setAttribute('fill','#65676B');
            }else{
                list.classList.add('active');
                list.querySelector('svg').setAttribute('fill','#1876f2');
            }
        })
    })
});
const titles=document.querySelectorAll('.stories .titles span');
titles.forEach(title=>{
    title.addEventListener('click',(e)=>{
        console.log('it clicked');
        titles.forEach(title=>{
            if(title!=e.target){
                title.classList.remove('active');
            }
            else{
                title.classList.add('active');
            }
            })
        })
    })
    const contactObject=[
        {
            title:'Mansour Hossam',
            image:'mansour.jpg'
        },
        {
            title:'Lina S Ayesh',
            image:'lina.jpg'
        },
        {
            title:'Basem Daqarem',
            image:'basem.jpg'
        },
        {
            title:'Ayman Sami',
            image:'ayman.jpg'
        },
        {
            title:'بكر الوحيدي',
            image:'baker.jpg'
        },
        {
            title:'mahmoudAlamoudi',
            image:'mahamaedAlamoudi.jpg'
        },
        {
            title:'Ibrahim Jomaa',
            image:'ibrahimJomma.jpg'
        },
        {
            title:'Yosef El Hindi',
            image:'yousef.jpg'
        },
        {
            title:'Khalil Al Bardaweel',
            image:'khalil.jpg'
        },
        {
            title:'Hazem Ayesh',
            image:'hazem.jpg'
        },
        {
            title:'إبراهيم أحمد',
            image:'ibrahimAhmed.jpg'
        },
        {
            title:'Sajedah S. Ayesh',
            image:'sajeda.jpg'
        },
        {
            title:'Awni Besiso',
            image:'awni.jpg'
        }
    ];
    const contacts=document.querySelector('.contacts .contact');
    const contactsContainer=document.querySelector('.contacts');
    contacts.scrollIntoView();
    
contactsContainer.addEventListener('mouseover',e=>{
    contactsContainer.style.overflowY='scroll';
})
contactsContainer.addEventListener('mouseleave',e=>{
    contactsContainer.style.overflowY='hidden';
});
function createCards(){
contactObject.forEach(obj=>{
    const card=`
    <div class="card">
    <div class="img-container">
            <img src="../assests/${obj.image}" alt="">
            <span></span>
    </div>
    <span>${obj.title}</span>
    </div>
    `;
    contacts.innerHTML+=card;
    console.log(card);
});
}
createCards();
//comment input code
const actualPost=document.querySelector('.actual-post');
const comment=document.querySelector('.actual-post .write-comment .inputField input');
console.log(comment);
comment.addEventListener('keydown',e=>{
    if(e.key=='Enter'){
        const commentContent=`<div class="comments">
        <img src="../assests/profile.jpg" alt="">
        <div class="text-container">
            <span class="title">Moh  Suhail</span>
            <span class="comments">${comment.value}</span>
        </div>
    </div>
        `;
        actualPost.innerHTML+=commentContent;
    
    }
});
//end of comment input code
// start of like container
const likeContainer=document.querySelector('.actual-post .like-comment-banner .like-container');
const NumberOfLikes=document.querySelector('.actual-post .like-banner span');
console.log(NumberOfLikes);
likeContainer.addEventListener('click',()=>{
    const likesNumber=Number(NumberOfLikes.textContent);
    if(likeContainer.classList.contains('active')){
        likeContainer.classList.remove('active');
        NumberOfLikes.textContent=`${likesNumber-1}`
    }
    else{
        likeContainer.classList.add('active');
        console.log(likeContainer.querySelector('i'))
        likeContainer.querySelector('i').style.color='#1876f2';
        NumberOfLikes.textContent=`${likesNumber+1}`
    }
})
// end of like container code
const commentContainer=document.querySelector('.actual-post .like-comment-banner .comment-container');
commentContainer.addEventListener('click',()=>{
    comment.focus();
});
const cardsFirstScroll=[
    {
        title:'Ads Manager',
        image:'charts.png'
    },
    {
        title:'Blood Donations',
        image:'blood.png'
    },
    {
        title:'COVID-19 Information Center',
        image:'health.png'
    },
    {
        title:'Crisis response',
        image:'ButtonON.png'
    },
    {
        title:'Emotional Health',
        image:'heart.png'
    },
    {
        title:'Facebook Pay',
        image:'card.png'
    },
    {
        title:'Favourites',
        image:'star.png'
    },
    {
        title:'Gamming Video',
        image:'gamming.png'
    },
    {
        title:'Live videos',
        image:'live.png'
    },
    {
        title:'Messanger',
        image:'messanger.png'
    },
    {
        title:'Messanger Kids',
        image:'messangerKid.png'
    },
    {
        title:'Play Games',
        image:'playTool.png'
    },
    {
        title:'Recent ad activity',
        image:'canvas.png'
    }

]
const cardsFirstFromHTML=[
    {
            title:'Moh Suhail',
            image:'profile.jpg'
    },
    {
        title:'Friends',
        image:'friendsIcon.png'
    },
    {
        title:'Saved',
        image:'saveIcon.png'
    },
    {
        title:'Groups',
        image:'groupsIcon.png'
    },
    {
        title:'Ad Center',
        image:'VoiceTalk.png'
    },
    {
        title:'Marketplace',
        image:'store.png'
    },
    {
        title:'Watch',
        image:'watchIcon.png'
    },
    {
        title:'Memories',
        image:'ClockIcon.png'
    },
    {
        title:'Pages',
        image:'FlagIcon.png'
    },
    {
        title:'Events',
        image:'CalenderIcon.png'
    },
    {
        title:'Most Recent',
        image:'mostRecent.png'
    }


]
const IconContainer=document.querySelector('.wrapper .icon-container .list');
for(obj of cardsFirstFromHTML.reverse()){
    const list=`<li>
                    <img src="../assests/${obj.image}" alt="">
                    <p class="title">${obj.title}</p>
                </li>
    `
    IconContainer.insertAdjacentHTML('afterbegin',list);
}
let isMoreActivate=false;
function InsertCards(){
    for(obj of cardsFirstScroll){
        const list=`<li class='addition'>
                        <img src="../assests/${obj.image}" alt="">
                        <p class="title">${obj.title}</p>
                    </li>
        `
        IconContainer.insertAdjacentHTML('beforeend',list);
    }
}
function removeAdditionCards(){
    const Items=document.querySelectorAll('.wrapper .icon-container li');
    Items.forEach(item=>{
        if(item.classList.contains('addition')){
        item.remove();
        }
    });
}
const seeMoreBtn=document.querySelector('.wrapper .icon-container .seemore');
console.log(seeMoreBtn);
seeMoreBtn.addEventListener('click',()=>{
    seeMoreBtn.classList.toggle('active');
    if(isMoreActivate){
        isMoreActivate=false;
        removeAdditionCards();
        seeMoreBtn.querySelector('p').textContent='See More';
    }
    else{
        isMoreActivate=true;
        InsertCards();
        seeMoreBtn.querySelector('p').textContent='See less';
    }
});
//chats container
const container=document.querySelector('.wrapper .messanger-contacts .messanger-guys ul');
const MessangerGuys=[
    {
        title:'Dont cry you are perfecto',
        image:'fetra.jpg'
    },
    {
        title:'البيت الملكي للمفروشات',
        image:'makaki.jpg',
    },
    {
        title:'Mansour Hossam',
        image:'mansour.jpg'
    },
    {
        title:'Lina S Ayesh',
        image:'lina.jpg'
    },
    {
        title:'Basem Daqarem',
        image:'basem.jpg'
    },
    {
        title:'Ayman Sami',
        image:'ayman.jpg'
    },
    {
        title:'Khalil Al Bardaweel',
        image:'khalil.jpg'
    },
    {
        title:'Hazem Ayesh',
        image:'hazem.jpg'
    },
    {
        title:'إبراهيم أحمد',
        image:'ibrahimAhmed.jpg'
    },
    {
        title:'Sajedah S. Ayesh',
        image:'sajeda.jpg'
    },
    {
        title:'Awni Besiso',
        image:'awni.jpg'
    }
];
function generateMessangerGuys(ul,objects){
    ul.replaceChildren('');
    for(d of objects){
        const liContent=`<li>
        <div class="img-container">
            <img src="../assests/${d.image}" alt="">
            <span class='dot'></span>
            </div>
            <span class="title">${d.title}</span>
            <div class="three-dots">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
             </li>
        `
        ul.insertAdjacentHTML('beforeend',liContent);
    }
}
const chatcontainerfinal=document.querySelector('.wrapper .chat-container');
generateMessangerGuys(container,MessangerGuys);
container.querySelectorAll('li').forEach(li=>{
    li.addEventListener('click',()=>{
        const src=li.querySelector('.img-container img').getAttribute('src');
        const title=li.querySelector('.title').textContent;
        generatechatContainerContent(title,src);
        toggle(chatcontainerfinal);
    })
})
// end of chats container
// messanger bar function code
const chatsContainer=document.querySelector('.wrapper .messanger-contacts');
const messangerBtn=document.querySelector('nav .messangerBar .messanger');
const notificationBtn=document.querySelector('nav .messangerBar .notification');
const notificationContainer=document.querySelector('.wrapper .notification-container');
const collectionContainer=document.querySelector('.wrapper .collection-container');
const collectionBtn=document.querySelector('nav .messangerBar .collection');

messangerBtn.addEventListener('click',()=>{
    toggle(chatsContainer);
    if(messangerBtn.classList.contains('active')){
        messangerBtn.querySelector('svg').setAttribute('fill','#050505');
    }else{
    messangerBtn.querySelector('svg').setAttribute('fill','#1876f2');
    }
    toggle(messangerBtn);
})
function toggle(list){
    list.classList.toggle('active');
}
//###########################################
notificationBtn.addEventListener('click',()=>{
    toggle(notificationContainer);
    if(notificationBtn.classList.contains('active')){
        notificationBtn.querySelector('svg').setAttribute('fill','#050505');
    }else{
    notificationBtn.querySelector('svg').setAttribute('fill','#1876f2');
    }
    toggle(notificationBtn);
})
//########################
collectionBtn.addEventListener('click',()=>{
    toggle(collectionContainer);
    if(collectionBtn.classList.contains('active')){
        collectionBtn.querySelector('svg').setAttribute('fill','#050505');
    }else{
    collectionBtn.querySelector('svg').setAttribute('fill','#1876f2');
    }
    toggle(collectionBtn);
})
//end of messanger bar function code
// notification guys generator
const notificationGuys=[
    {
        title:'Hazem Allam Gamming',
        content:` was live:<br>"Donate<img src='../assests/star.png' width="16px" height="16px"><br>
        ::https:://streamlabs/hazem...`,
        image:'hazoom.jpg',
        sideImage:'<i data-visualcompletion="css-img" class="gneimcpu p9wrh9lq" style="height: 28px; width: 28px; background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yy/r/6lGW-8_Fcno.png&quot;); background-position: 0px -638px; background-size: auto; background-repeat: no-repeat; display: inline-block;"></i>',
        date:'a day ago'
    },
    {
        title:'Mansour Hossam',
        content:` mentioned you in a comment.`,
        image:'mansourIconBigger.jpg',
        sideImage:'<i data-visualcompletion="css-img" class="gneimcpu p9wrh9lq" style="height: 28px; width: 28px; background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yy/r/6lGW-8_Fcno.png&quot;); background-position: 0px -783px; background-size: auto; background-repeat: no-repeat; display: inline-block;"></i>',
        date:'a day ago' 
    },
    {
        title:'BunnyCosplay',
        content:` is live now:"ranked eune".`,
        image:'bunnyIcon.jpg',
        sideImage:'<i data-visualcompletion="css-img" class="gneimcpu p9wrh9lq" style="height: 28px; width: 28px; background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yy/r/6lGW-8_Fcno.png&quot;); background-position: 0px -638px; background-size: auto; background-repeat: no-repeat; display: inline-block;"></i>',
        date:'a day ago'
    },
    { title:'Ayman Sami',
      content:'accepted your friend request.',
      image:'ayman.jpg',
      sideImage:`<i data-visualcompletion="css-img" class="gneimcpu p9wrh9lq" style="height: 28px; width: 28px; background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yy/r/6lGW-8_Fcno.png&quot;); background-position: 0px -870px; background-size: auto; background-repeat: no-repeat; display: inline-block;"></i>`,
      date:'a day ago'
    },
]
const notification=document.querySelector('.wrapper .notification-container .notification-guys ul');
console.log(notification);
function generateNotificationGuys(){
    notification.replaceChildren('');
    for(obj of notificationGuys){
    const li=`<li class="live">
                <div class="img-container">
                <img class="logo" src="../assests/${obj.image}" alt="">
                ${obj.sideImage}
                </div>
<span></span>
<div class="three-dots">
    <div></div>
    <div></div>
    <div></div>
</div>
<div class="text-container">
<span><strong>${obj.title}</strong>${obj.content}</span>
<span class="date">${obj.date}</span>
</div>
   </li> `;
   notification.insertAdjacentHTML('beforeend',li);
    }
    for(let i=0;i<4;i++){
        const li=`<li class="live">
                <div class="img-container">
                <img class="logo" src="../assests/${notificationGuys[0].image}" alt="">
                ${notificationGuys[0].sideImage}
                </div>
<span></span>
<div class="three-dots">
    <div></div>
    <div></div>
    <div></div>
</div>
<div class="text-container">
<span><strong>${notificationGuys[0].title}</strong>${notificationGuys[0].content}</span>
<span class="date">${notificationGuys[0].date}</span>
</div>
   </li> `;
   notification.insertAdjacentHTML('beforeend',li);
    }
}
generateNotificationGuys();
//end of notification guys generator
// start of social in menu-container
const listOfSocial=[
    {
        title:'Events',
        content:'Organize or find events and other things to do online and nearby',
        image:'CalenderIcon.png'
    },
    {
        title:'Friends',
        content:'Search for friends or people you may know',
        image:'friendsIcon.png'
    },
    {
        title:'Groups',
        content:'Connect with people who share your interest',
        image:'groupsIcon.png'
    },
    {
        title:'New Feed',
        content:'see relevant posts from people and pages you folllow',
        image:'NewFeed.png'
    },
    {
        title:'Favourites',
        content:'View posts by your favourite',
        image:'star.png'
    },
    {
        title:'Most Recent',
        content:'see the most recent posts from your friends,groups,Pages and more.',
        image:'mostRecent.png'
    },
    {
        title:'Pages',
        content:'Discover and connect with businesses on Facebook',
        image:'FlagIcon.png'
    }

]
const listOfEntertainment=[
    {
        title:'Gamming Video',
        content:'Watch and connect with your favourite games and streamers.',
        image:'gamming.png'
    },
    {
        title:'Play Games',
        content:'play your favourite games',
        image:'PlayTool.png' 
    },
    {
        title:'Live videos',
        content:'Watch popular videos from around the world.',
        image:'live.png'
    },
];
const listOfShopping=[
    {
        title:'Facebook pay',
        content:'A seemless, secure way on the apps  you already use',
        image:'card.png'
    },
    {
        title:'Marketplace',
        content:'Buy and sell in your community',
        image:'store.png'
    }
];
const listOfPersonal=[
    {
        title:'Recent ad activity',
        content:'see all ad you interacted with on Facebook',
        image:'canvas.png'
    },
    {
        title:'Memories',
        content:'Browse your old photos,videos and posts on Facebook.',
        image:'ClockIcon.png'
    },
    {
        title:'Saved',
        content:'Find posts,photos and videos that you saved for later',
        image:'saveIcon.png'
    }
];
const listOfProfessional=[
    {
        title:'Ad Manager',
        content:'create,mange and track the performance of your ad',
        image:'charts.png'
    },
    {
        title:'Ad Center',
        content:'Manage all ads you create in Pages,with streamlined features',
        image:'VoiceTalk.png'
    }
];
const listOfCommunityResources=[
    {
        title:'Blood Donation',
        content:'Get updates about donating blood near you',
        image:'blood.png'
    },
    {
        title:'COVID-19 Information Center',
        content:'See the latest prevention tips, community resources and updates from health organizations.',
        image:'health.png'
    },
    {
        title:'Crisis response',
        content:'Find the latest updates for recent crises happening around the world.',
        image:'ButtonON.png'
    },
    {
        title:'EmotionalHealth',
        content:'',
        image:'heart.png'
    },
    {
        title:'Fundraiser',
        content:'Donate and raise money for nonprofit and personal causes',
        image:'heartCookie.png'
    }
];
const listOfOtherFromMeta=[
    {
        title:'Messanger',
        content:'chat instantly with your friends and connection',
        image:'messanger.png'
    },
    {
        title:'Messanger Kids',
        content:'let kids message with close friends and family',
        image:'messangerKids.png'
    }

]
const listOfList1=[
    {
        icon:'<i data-visualcompletion="css-img" class="gneimcpu b0w474w7" style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yQ/r/9UDWIBl_jiv.png&quot;); background-position: 0px -515px; background-size: auto; width: 20px; height: 20px; background-repeat: no-repeat; display: inline-block;"></i>',
        title:'Post'
    },
    {
        icon:'<i data-visualcompletion="css-img" class="gneimcpu b0w474w7" style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yQ/r/9UDWIBl_jiv.png&quot;); background-position: 0px -1250px; background-size: auto; width: 20px; height: 20px; background-repeat: no-repeat; display: inline-block;"></i>',
        title:'Story'
    },
    {
        icon:'<i data-visualcompletion="css-img" class="gneimcpu b0w474w7" style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yQ/r/9UDWIBl_jiv.png&quot;); background-position: 0px -242px; background-size: auto; width: 20px; height: 20px; background-repeat: no-repeat; display: inline-block;"></i>',
        title:'Room'
    }
];
const listOfList2=[
    {
        icon:'<i data-visualcompletion="css-img" class="gneimcpu b0w474w7" style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/xjV4j8zXH-H.png&quot;); background-position: -121px -59px; background-size: auto; width: 20px; height: 20px; background-repeat: no-repeat; display: inline-block;"></i>',
        title:'Page'
    },
    {
        icon:'<i data-visualcompletion="css-img" class="gneimcpu b0w474w7" style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yQ/r/9UDWIBl_jiv.png&quot;); background-position: 0px -914px; background-size: auto; width: 20px; height: 20px; background-repeat: no-repeat; display: inline-block;"></i>',
        title:'Ad'
    },
    {
        icon:'<i data-visualcompletion="css-img" class="gneimcpu b0w474w7" style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yQ/r/9UDWIBl_jiv.png&quot;); background-position: 0px -221px; background-size: auto; width: 20px; height: 20px; background-repeat: no-repeat; display: inline-block;"></i>',
        title:'Groups'
    },
    {
        icon:'<i data-visualcompletion="css-img" class="gneimcpu b0w474w7" style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yQ/r/9UDWIBl_jiv.png&quot;); background-position: 0px -326px; background-size: auto; width: 20px; height: 20px; background-repeat: no-repeat; display: inline-block;"></i>',
        title:'Events'
    },
    {
        icon:'<i data-visualcompletion="css-img" class="gneimcpu b0w474w7" style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yQ/r/9UDWIBl_jiv.png&quot;); background-position: 0px -1187px; background-size: auto; width: 20px; height: 20px; background-repeat: no-repeat; display: inline-block;"></i>',
        title:'Marketplace Listing'
    }
]
const PostList1=document.querySelector('.wrapper-container .list1');
const PostList2=document.querySelector('.wrapper-container .list2');
function generatePostContainerList(ul,list){
    ul.replaceChildren('');
    for(obj of list){
    const li=`<li>
    <div class="icon">
        ${obj.icon}
    </div>
    <span>${obj.title}</span>
</li>
    `
    ul.insertAdjacentHTML('beforeend',li);
    }
}
generatePostContainerList(PostList1,listOfList1);
generatePostContainerList(PostList2,listOfList2);
const ulContainer=document.querySelector('.menu-container  ul');
const entertainmentContainer=document.querySelector('.menu-container .entertainment ul');
const shoppingContainer=document.querySelector('.menu-container .shopping ul');
const personalContainer=document.querySelector('.menu-container .personal ul');
const professionalContainer=document.querySelector('.menu-container .professional ul');
const communityContainer=document.querySelector('.menu-container .CommunityResources ul');
const otherContainer=document.querySelector('.menu-container .other ul');
  function generateSocialList(ul,list){
    ul.replaceChildren('');
    for(obj of list){
        const li=`
        <li>
                                    <div class="img-container">
                                    <img src="../assests/${obj.image}" alt="">
                                </div>
                                    <div class="text-container">
                                        <span class="title">${obj.title}</span>
                                        <span class="pra">${obj.content}</span>
                                    </div>
                                </li>
        `;
        ul.insertAdjacentHTML('beforeend',li);
    }
  }  
generateSocialList(ulContainer,listOfSocial);
generateSocialList(entertainmentContainer,listOfEntertainment);
generateSocialList(shoppingContainer,listOfShopping);
generateSocialList(personalContainer,listOfPersonal);
generateSocialList(professionalContainer,listOfProfessional);
generateSocialList(communityContainer,listOfCommunityResources);
generateSocialList(otherContainer,listOfOtherFromMeta);
//end of social in menu-container
//code of popup
const listOfpop1=[
    {
        title:'Incomming call sound',
        content:'',
        icon:'<i data-visualcompletion="css-img" class="gneimcpu b0w474w7" style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yS/r/v5VX8tDldjr.png&quot;); background-position: 0px -88px; background-size: 22px 110px; width: 20px; height: 20px; background-repeat: no-repeat; display: inline-block;"></i>'
    },
    {
        title:'Mesage sounds',
        content:'',
        icon:'<i data-visualcompletion="css-img" class="gneimcpu b0w474w7" style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yS/r/v5VX8tDldjr.png&quot;); background-position: 0px 0px; background-size: 22px 110px; width: 20px; height: 20px; background-repeat: no-repeat; display: inline-block;"></i>'
    },
    {
        title:'pop-up new messages',
        content:'Automatically open new Messages',
        icon:'<i data-visualcompletion="css-img" class="gneimcpu b0w474w7" style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yS/r/v5VX8tDldjr.png&quot;); background-position: 0px -22px; background-size: 22px 110px; width: 20px; height: 20px; background-repeat: no-repeat; display: inline-block;"></i>'
    }
    ];
const listOfPop2=[
    {
        title:'Show contacts',
        content:'',
        icon:'<i data-visualcompletion="css-img" class="gneimcpu b0w474w7" style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yC/r/FGX_fHBWYsG.png&quot;); background-position: 0px -22px; background-size: 22px 220px; width: 20px; height: 20px; background-repeat: no-repeat; display: inline-block;"></i>'  
    }
];
const listOfPop3=[
    {
        title:'Active Status:ON',
        content:'',
        icon:'<i data-visualcompletion="css-img" class="gneimcpu b0w474w7" style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yS/r/v5VX8tDldjr.png&quot;); background-position: 0px -44px; background-size: 22px 110px; width: 20px; height: 20px; background-repeat: no-repeat; display: inline-block;"></i>'
    },
    {
        title:'Message delivery setting',
        content:'',
        icon:'<i data-visualcompletion="css-img" class="gneimcpu b0w474w7" style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yS/r/v5VX8tDldjr.png&quot;); background-position: 0px -66px; background-size: 22px 110px; width: 20px; height: 20px; background-repeat: no-repeat; display: inline-block;"></i>'
    },
    {
        title:'Block settings',
        content:'',
        icon:'<i data-visualcompletion="css-img" class="gneimcpu b0w474w7" style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yC/r/FGX_fHBWYsG.png&quot;); background-position: 0px -176px; background-size: 22px 220px; width: 20px; height: 20px; background-repeat: no-repeat; display: inline-block;"></i>'
    }
]
    const popUp=document.querySelector('.contact .list1');
    const popUp2=document.querySelector('.contact .list2');
    const popUp3=document.querySelector('.contact .list3');
    function generatePopUp(ul,list){
        ul.replaceChildren('');
        for(obj of list){
            const li=`<li>
            ${obj.icon}
            <div class="text-container">
                                <span class='title'>${obj.title}</span>
                                <span class="desc">${obj.content}</span>
                            </div>
                <div class="blue-one">
                    <div class="white-one"></div>
                </div>
        </li>
            `
            ul.insertAdjacentHTML('beforeend',li);
        }
    }
    generatePopUp(popUp,listOfpop1);
    generatePopUp(popUp2,listOfPop2);
    generatePopUp(popUp3,listOfPop3);
const li=document.querySelectorAll('.contact .list1 li').forEach(li=>{
    li.addEventListener('click',()=>{
        console.log('clicked');
    })
});
const popUpContainer=document.querySelector('.contact .popUp');
const contactMenuBar=document.querySelector('.contact .threeDots');
contactMenuBar.addEventListener('click',()=>{
    toggle(popUpContainer)
})
//end code of popup;
// start Of pop code
const popUpdots=document.querySelector('.post .popUpdots');
const listOfpopdots=[
    {
        icon:'<i data-visualcompletion="css-img" class="gneimcpu b0w474w7" style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yY/r/OaZdJOgrDqk.png&quot;); background-position: 0px -318px; background-size: 34px 1640px; width: 20px; height: 20px; background-repeat: no-repeat; display: inline-block;"></i>',
        title:'Save post',
        desc:'Add this to your saved items'
    },
    {
        icon:'<i data-visualcompletion="css-img" class="gneimcpu b0w474w7" style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yz/r/GN41Y-ogxa5.png&quot;); background-position: 0px -218px; background-size: 34px 602px; width: 20px; height: 20px; background-repeat: no-repeat; display: inline-block;"></i>',
        title:'Turn on notification',
        desc:''
    },
    {
        icon:'',
        title:'Report post',
        desc:'I am concered about this post'
    }
];
function generatePopUppost(ul,list){
    ul.replaceChildren('');
    for(let i=0;i<list.length;i++){
        let li=``;
        if(!(i===(list.length-1))){
        li=`
        <div class="li">
                            ${list[i].icon}
                            <div class="text-container">
                            <span class="title">${list[i].title}</span>
                            <span class="desc">${list[i].desc}</span>
                        </div>
                        </div>
        `
        }
        else{
            li=`
            <div class="li">
                                <img src='../assests/report.png'>
                                <div class="text-container">
                                <span class="title">${list[i].title}t</span>
                                <span class="desc">${list[i].desc}</span>
                            </div>
                            </div>
            `
        }
        ul.insertAdjacentHTML('beforeend',li);
    }
}
generatePopUppost(popUpdots,listOfpopdots);
const popUpdotsBtn=document.querySelector('.post .title-container .title-right');
popUpdotsBtn.addEventListener('click',()=>{
    toggle(popUpdots);
});

//end of pop code
// code of chat container
function generatechatContainerContent(title,image){
    chatcontainerfinal.innerHTML=`
    <div class="title-container">
                    <div class="img-container">
                        <img src="${image}" alt="">
                        <span></span>
                    </div>
                    <div class="text-container">
                        <span class="title">${title}</span>
                    </div>
                    <div class="svgs-container">
                        <svg role="presentation" width="26px" height="26px" viewBox="-5 -5 30 30"><path d="M10.952 14.044c.074.044.147.086.22.125a.842.842 0 001.161-.367c.096-.195.167-.185.337-.42.204-.283.552-.689.91-.772.341-.078.686-.105.92-.11.435-.01 1.118.174 1.926.648a15.9 15.9 0 011.713 1.147c.224.175.37.43.393.711.042.494-.034 1.318-.754 2.137-1.135 1.291-2.859 1.772-4.942 1.088a17.47 17.47 0 01-6.855-4.212 17.485 17.485 0 01-4.213-6.855c-.683-2.083-.202-3.808 1.09-4.942.818-.72 1.642-.796 2.136-.754.282.023.536.17.711.392.25.32.663.89 1.146 1.714.475.808.681 1.491.65 1.926-.024.31-.026.647-.112.921-.11.35-.488.705-.77.91-.236.17-.226.24-.42.336a.841.841 0 00-.368 1.161c.04.072.081.146.125.22a14.012 14.012 0 004.996 4.996z" fill="var(--always-white)"></path><path d="M10.952 14.044c.074.044.147.086.22.125a.842.842 0 001.161-.367c.096-.195.167-.185.337-.42.204-.283.552-.689.91-.772.341-.078.686-.105.92-.11.435-.01 1.118.174 1.926.648.824.484 1.394.898 1.713 1.147.224.175.37.43.393.711.042.494-.034 1.318-.754 2.137-1.135 1.291-2.859 1.772-4.942 1.088a17.47 17.47 0 01-6.855-4.212 17.485 17.485 0 01-4.213-6.855c-.683-2.083-.202-3.808 1.09-4.942.818-.72 1.642-.796 2.136-.754.282.023.536.17.711.392.25.32.663.89 1.146 1.714.475.808.681 1.491.65 1.926-.024.31-.026.647-.112.921-.11.35-.488.705-.77.91-.236.17-.226.24-.42.336a.841.841 0 00-.368 1.161c.04.072.081.146.125.22a14.012 14.012 0 004.996 4.996z" stroke="var(--always-white)" fill="none"></path></svg>
                        <svg role="presentation" width="26px" height="26px" viewBox="-3 -5 30 30"><path d="M19.492 4.112a.972.972 0 00-1.01.063l-3.052 2.12a.998.998 0 00-.43.822v5.766a1 1 0 00.43.823l3.051 2.12a.978.978 0 001.011.063.936.936 0 00.508-.829V4.94a.936.936 0 00-.508-.828zM10.996 18A3.008 3.008 0 0014 14.996V5.004A3.008 3.008 0 0010.996 2H3.004A3.008 3.008 0 000 5.004v9.992A3.008 3.008 0 003.004 18h7.992z" fill="var(--always-white)"></path><circle cx="24" cy="10" r="2" class="tejsmfk1"></circle></svg>

                        <svg fill='#000' width="26px" height="26px" viewBox="-4 -4 24 24"><line x1="2" x2="14" y1="8" y2="8" stroke-linecap="round" stroke-width="2" stroke="var(--always-white)"></line></svg>
                        <span class="close">&times;</span>
                    </div>
                </div>
                <div class="textarea-container"></div>
                <div class="write-container">
                    <svg fill='#65676b' viewBox="0 0 24 24" height="20px" width="20px" class="b6ax4al1 m4pnbp5e aqweqrfb ahndzqod db0glzta tnag3kze"><g fill-rule="evenodd"><polygon fill="none" points="-6,30 30,30 30,-6 -6,-6 "></polygon><path d="m18,11l-5,0l0,-5c0,-0.552 -0.448,-1 -1,-1c-0.5525,0 -1,0.448 -1,1l0,5l-5,0c-0.5525,0 -1,0.448 -1,1c0,0.552 0.4475,1 1,1l5,0l0,5c0,0.552 0.4475,1 1,1c0.552,0 1,-0.448 1,-1l0,-5l5,0c0.552,0 1,-0.448 1,-1c0,-0.552 -0.448,-1 -1,-1m-6,13c-6.6275,0 -12,-5.3725 -12,-12c0,-6.6275 5.3725,-12 12,-12c6.627,0 12,5.3725 12,12c0,6.6275 -5.373,12 -12,12"></path></g></svg>
                    <!-- <svg viewBox="0 -1 17 17" height="20px" width="20px" class="b6ax4al1 m4pnbp5e aqweqrfb ahndzqod"><g fill="none" fill-rule="evenodd"><path d="M2.882 13.13C3.476 4.743 3.773.48 3.773.348L2.195.516c-.7.1-1.478.647-1.478 1.647l1.092 11.419c0 .5.2.9.4 1.3.4.2.7.4.9.4h.4c-.6-.6-.727-.951-.627-2.151z" class="db0glzta"></path><circle cx="8.5" cy="4.5" r="1.5" class="db0glzta"></circle><path d="M14 6.2c-.2-.2-.6-.3-.8-.1l-2.8 2.4c-.2.1-.2.4 0 .6l.6.7c.2.2.2.6-.1.8-.1.1-.2.1-.4.1s-.3-.1-.4-.2L8.3 8.3c-.2-.2-.6-.3-.8-.1l-2.6 2-.4 3.1c0 .5.2 1.6.7 1.7l8.8.6c.2 0 .5 0 .7-.2.2-.2.5-.7.6-.9l.6-5.9L14 6.2z" class="db0glzta"></path><path d="M13.9 15.5l-8.2-.7c-.7-.1-1.3-.8-1.3-1.6l1-11.4C5.5 1 6.2.5 7 .5l8.2.7c.8.1 1.3.8 1.3 1.6l-1 11.4c-.1.8-.8 1.4-1.6 1.3z" stroke-linecap="round" stroke-linejoin="round" class="qg8n5hqy"></path></g></svg> -->
                    <svg fill='#65676b' x="0px" y="0px" viewBox="0 0 17 16" height="20px" width="20px" class="b6ax4al1 m4pnbp5e aqweqrfb ahndzqod db0glzta"><g fill-rule="evenodd"><circle fill="none" cx="5.5" cy="5.5" r="1"></circle><circle fill="none" cx="11.5" cy="4.5" r="1"></circle><path d="M5.3 9c-.2.1-.4.4-.3.7.4 1.1 1.2 1.9 2.3 2.3h.2c.2 0 .4-.1.5-.3.1-.3 0-.5-.3-.6-.8-.4-1.4-1-1.7-1.8-.1-.2-.4-.4-.7-.3z" fill="none"></path><path d="M10.4 13.1c0 .9-.4 1.6-.9 2.2 4.1-1.1 6.8-5.1 6.5-9.3-.4.6-1 1.1-1.8 1.5-2 1-3.7 3.6-3.8 5.6z"></path><path d="M2.5 13.4c.1.8.6 1.6 1.3 2 .5.4 1.2.6 1.8.6h.6l.4-.1c1.6-.4 2.6-1.5 2.7-2.9.1-2.4 2.1-5.4 4.5-6.6 1.3-.7 1.9-1.6 1.9-2.8l-.2-.9c-.1-.8-.6-1.6-1.3-2-.7-.5-1.5-.7-2.4-.5L3.6 1.5C1.9 1.8.7 3.4 1 5.2l1.5 8.2zm9-8.9c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1zm-3.57 6.662c.3.1.4.4.3.6-.1.3-.3.4-.5.4h-.2c-1-.4-1.9-1.3-2.3-2.3-.1-.3.1-.6.3-.7.3-.1.5 0 .6.3.4.8 1 1.4 1.8 1.7zM5.5 5.5c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1z" fill-rule="nonzero"></path></g></svg>
                    <svg fill='#65676b' x="0px" y="0px" viewBox="0 0 16 16" height="20px" width="20px" class="b6ax4al1 m4pnbp5e aqweqrfb ahndzqod db0glzta"><path d="M.783 12.705c.4.8 1.017 1.206 1.817 1.606 0 0 1.3.594 2.5.694 1 .1 1.9.1 2.9.1s1.9 0 2.9-.1 1.679-.294 2.479-.694c.8-.4 1.157-.906 1.557-1.706.018 0 .4-1.405.5-2.505.1-1.2.1-3 0-4.3-.1-1.1-.073-1.976-.473-2.676-.4-.8-.863-1.408-1.763-1.808-.6-.3-1.2-.3-2.4-.4-1.8-.1-3.8-.1-5.7 0-1 .1-1.7.1-2.5.5s-1.417 1.1-1.817 1.9c0 0-.4 1.484-.5 2.584-.1 1.2-.1 3 0 4.3.1 1 .2 1.705.5 2.505zm10.498-8.274h2.3c.4 0 .769.196.769.696 0 .5-.247.68-.747.68l-1.793.02.022 1.412 1.252-.02c.4 0 .835.204.835.704s-.442.696-.842.696H11.82l-.045 2.139c0 .4-.194.8-.694.8-.5 0-.7-.3-.7-.8l-.031-5.631c0-.4.43-.696.93-.696zm-3.285.771c0-.5.3-.8.8-.8s.8.3.8.8l-.037 5.579c0 .4-.3.8-.8.8s-.8-.4-.8-.8l.037-5.579zm-3.192-.825c.7 0 1.307.183 1.807.683.3.3.4.7.1 1-.2.4-.7.4-1 .1-.2-.1-.5-.3-.9-.3-1 0-2.011.84-2.011 2.14 0 1.3.795 2.227 1.695 2.227.4 0 .805.073 1.105-.127V8.6c0-.4.3-.8.8-.8s.8.3.8.8v1.8c0 .2.037.071-.063.271-.7.7-1.57.991-2.47.991C2.868 11.662 1.3 10.2 1.3 8s1.704-3.623 3.504-3.623z" fill-rule="nonzero"></path></svg>
                    <div class="inputField">
                      <img src="../assests/smile.jpg" alt="">
                        <input type="text" placeholder="Aa">
                    </div>
                    <svg fill='#65676b' viewBox="0 0 16 16" height="20" width="20" class="db0glzta"><path d="M16,9.1c0-0.8-0.3-1.1-0.6-1.3c0.2-0.3,0.3-0.7,0.3-1.2c0-1-0.8-1.7-2.1-1.7h-3.1c0.1-0.5,0.2-1.3,0.2-1.8 c0-1.1-0.3-2.4-1.2-3C9.3,0.1,9,0,8.7,0C8.1,0,7.7,0.2,7.6,0.4C7.5,0.5,7.5,0.6,7.5,0.7L7.6,3c0,0.2,0,0.4-0.1,0.5L5.7,6.6 c0,0-0.1,0.1-0.1,0.1l0,0l0,0L5.3,6.8C5.1,7,5,7.2,5,7.4v6.1c0,0.2,0.1,0.4,0.2,0.5c0.1,0.1,1,1,2,1h5.2c0.9,0,1.4-0.3,1.8-0.9 c0.3-0.5,0.2-1,0.1-1.4c0.5-0.2,0.9-0.5,1.1-1.2c0.1-0.4,0-0.8-0.2-1C15.6,10.3,16,9.9,16,9.1z"></path><path d="M3.3,6H0.7C0.3,6,0,6.3,0,6.7v8.5C0,15.7,0.3,16,0.7,16h2.5C3.7,16,4,15.7,4,15.3V6.7C4,6.3,3.7,6,3.3,6z"></path></svg>
                </div>
    `
}
const closeContainerClose=chatcontainerfinal.querySelector('.title-container .svgs-container .close');
const containers=chatcontainerfinal.querySelector('.title-container');
document.addEventListener('click',(e)=>{
    if(e.target==contacts){
        click();
    }
})
function click(){
    console.log(closeContainerClose);
    chatcontainerfinal.classList.remove('active');
    chatcontainerfinal.replaceChildren('');
}
//end of chat container code
