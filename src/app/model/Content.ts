import { User } from "./User";

export class Content{

    contentid?:number;
    title?:String;
    contentdata?:String;
    emailid?:String;

    constructor(){
        this.contentid=0;
        this.title='';
        this.contentdata='';
        this.emailid='';
    }
}