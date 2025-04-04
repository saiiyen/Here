import Header from "./components/Header";
import MainContent from "./MainContent";
import Footer from "./Footer";
import WelcomeMessage from "./WelcomeMessage";
import UsersList from "./UsersList";
import Person from "./Person";
import Product from "./Product";
import Weather from "./Weather";
import UserStatus from "./UserStatus";
import Greetings from "./Greetings";
import "./index.css";



const ValidPassword = () => <h1>Valid Password</h1>
const InvalidPassword = () => <h1>invalid Password</h1>
const Password = ({isValid}) =>{
  if(isValid){
    return <ValidPassword/>
  }
  return <InvalidPassword/>
  // or we code like this
  //return isValid ? <ValidPawword/>:<InvalidPassword/>
 // or const Password = ({isValid}) =>
  // isValid ? <ValidPassword/> : <Invalid Password/>
};
//another code sample of cart is belo
const Cart =()=>{
  const items =["pubg mobile","pineapple","samosa"]
  return (
    <div>
      <h1>Cart shopping</h1>
      { items.lenght> 0 && <h2> you have {items.length} items in your cart</h2>}
      <ul> 
        <h4>products lists</h4>
        {items.map(item=>(
<li key={Math.random()}>{item}</li>
        

        ))}
      </ul>
    </div>
  )
  
}

// AboutAbout
// 📌 Information Technology Consultant in Robert Walters. Specialized in IT profiles.

// If you are looking for a new job opportunity or you need help with candidate search, contact me:

// 📩 aina.garcia@robertwalters.com
// const App = () => {
//   return  ( 

//   <div> 
//     <section>
      
//       <h1 style={{color: "white", backgroundColor:"teal",padding:"2rem"}}>inline style</h1>
      
      
//       </section>
      const App = () => {
        const styles={color: "white", backgroundColor:"teal",padding:"4rem"}
  return  ( 

  <div> 
    <section>
      
      
      <h1 style={styles}>inline style</h1>
      
      
      //inline seperate object and importing the file are the ways of styling for now
      </section>
      
    <Greetings timeofDay="Afternoon" />
    <UserStatus  loggedIn={true} isAdmin={false}/>
    <Weather />
    <Cart/>
    <Password  isValid={true} />
    
    <Product  name="Iphone" price={400}/>
    <Person  name="kuku" age='24'/>

    <UsersList />
    <WelcomeMessage />
    <Header />  
    <MainContent />
    <Footer />
    
    
  </div>
  );
  //<section>hello kuku bear</section>

};
export default App;
//https://www.youtube.com/watch?v=yJc_YWgOYYE

// Want callbacks from recruiters? Click here to highlight your profile and increase your chances Click here Call 1800-102-5557 now! (Toll-free)
// Call 1800-3010-5557 now! (Toll-free)
// powered by Naukri Fast Forward
//Ms. PRIYA (HR MANAGER)
//CONTACT :- /8341472546