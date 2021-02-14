import * as information from './information.json';

export const help = ():String => {
    let helpMenu:String = '';

    helpMenu += '\nYou can use the following commands here.\n\n' +
        'about - shows basic information about myself\n' +
        'prolang - shows my programming language and frameworks skill\n'+
        'interests - shows my current research interests\n' +
        'contact - shows contact information\n' +
        'github - takes you to my github profile\n'+
        'fiverr - takes you to my fiverr account\n'+
        'experience - shows my previous experience\n'+
        'website - takes you to my personal website\n'+
        'project - shows my previous projects';


    return helpMenu;
};

export const about = (): String => {
    let info:String = '';

    let time = ((Date.now() - new Date("2017-06-20T12:01:04.753Z").getTime())/(1000 * 3600 * 24));
    let years = Math.floor(time/365) ;
    let months = Math.ceil((time % 365)/30);


    info += `\nHi! I'm ${information.name}.\n` +
        `I have completed my ${information.bsDegree} from ${information.bsUni}. ` +
        `I am a software engineer and a professional web developer with ${years} years and ${months} months of experience.\n` +
        '\n\n' +
        `My hobbies include(but not limited to!) ${information.hobbies}.`;

    return info
};

export const prolang = (): String => information.prolang;

export const interests = ():String => information.interestedIn;



export const experience = ():String => {
    let exp:String = '';

    for (let e in information.experience) {
        exp += `\n-\n` +
            `${information.experience[e].title}\n` +
            `${information.experience[e].role}\n`+
            `${information.experience[e].years}\n`;
    }

    return exp;
};

export const projects = ():String => {
    let pro:String = '';

    for (let p in information.projects){
        pro += '\n-\n' +
            `${information.projects[p].title}\n` +
            `${information.projects[p].link}\n`;
    }
    return pro;
}


export const contact = ():String => {
    return `\nemail - ${information.email}` +
        `\ngithub - ${information.github}` +
        `\nfiverr - ${information.fiverr}` +
        `\nlinkedin - ${information.linkedin}` +
        `\ntwitter - ${information.twitter}`
};

export const takeTo = (key:string):string => {
    let url:string = '';

    switch (key) {
        case 'fiverr':
            url = information.fiverr;
            break;
        case 'linkedin':
            url = information.linkedin;
            break;
        case 'website':
            url = information.personal_website;
            break;
        case 'github':
            url = information.github;
            break;
        default:
            break;
    }


    window.open(url, '_blank');
    return url;
};

