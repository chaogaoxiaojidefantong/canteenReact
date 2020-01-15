class Authenticate{
    isAuthenticated=false   
    authenticate(cb) {
       this.isAuthenticated=true 
        setTimeout(cb, 100); // fake async
      }
      signout(cb) {
       this.isAuthenticated=false
        setTimeout(cb, 100);
      }
}
const authenticate=new Authenticate();
export default authenticate;