class Authenticate{
  isAuthenticated=false  
  constructor(){
    let userJson=localStorage.getItem('user');
    if(userJson!=null||''){
      this.isAuthenticated=true
    }
  }
    authenticate(cb) {
       this.isAuthenticated=true 
        setTimeout(cb, 100); // fake async
      }
      signout(cb) {
       this.isAuthenticated=false
       localStorage.clear();
        setTimeout(cb, 100);
      }
}
const authenticate=new Authenticate();
export default authenticate;