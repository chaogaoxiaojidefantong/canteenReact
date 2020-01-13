class Authenticate{
    isAuthenticated=false
    
    authenticate(cb) {
        let authState=this.state
        let resState={...authState,...{isAuthenticated:true}}    
        debugger
        this.setState(resState);
        setTimeout(cb, 100); // fake async
      }
      signout(cb) {
        this.setState({isAuthenticated:false});
        setTimeout(cb, 100);
      }
}
const authenticate=new Authenticate();
export default authenticate;