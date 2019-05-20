export class SessionService {
    
    session = [
        {
            name:'',
            message:''
        }
    ]

    addSession(session) {
        this.session.push(session);
    }
}