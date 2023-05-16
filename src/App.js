import './style.css';


function App() {
  return (
    <div className="App">
<nav>
         <div class="menu-icon">
            <span class="fas fa-bars"></span>
         </div>
         <div class="logo">
         <img src="https://classroom.edyoda.com/static/media/edyoda_transparent_logo.55bcc00f.png" alt="" width="130"/>
         </div>
         <div class="nav-items">
            <li><a href="#">Courses</a></li>
            <li><a href="#">Programs</a></li>
            
         </div>
         <div class="search-icon">
            <span class="fas fa-search"></span>
         </div>
         <div class="cancel-icon">
            <span class="fas fa-times"></span>
         </div>
         <input type="text" placeholder="Search.."></input><br></br>
         <p>Login</p>
         <strong><p class="btn">JOIN NOW</p></strong>
      </nav>
      <section>
        <h1 class="head">Access curated Courses worth
          </h1><h1 class="head2"><a class="eight">₹18,500</a> at just <a class="nine">₹99</a> per year!</h1>
          

          <div class="container">
        <div class="content">
           
       
        </div>
        <div class="sidebar">
            <h2>Subscription Details</h2>
            <p>Choose a plan:</p>
            <ul>
            <div class="form-group mt-5">
   
  
   
    <input type="checkbox" class="chb chb-1" id="chb-1" />
    <label for="chb-1">Monthly Subscription<a class="sub">₹70</a></label>
   
    
    <input type="checkbox" class="chb chb-1" id="chb-2" />
    <label for="chb-2">Weekly Subscription<a class="sub">₹20</a></label>
    
    <input type="checkbox" class="chb chb-1" id="chb-3" />
    <label for="chb-3">Yearly Subscription<a class="sub">₹1000</a></label>
    <div class="button-container">
        <button class="can">Cancel</button><br></br>
        <button class="pay">Pay Subscription</button>
    </div>
<img className='razer' src="https://blog.razorpay.in/blog-content/uploads/2021/12/logo-blog.png" alt='' height={50} width={100}></img>
    
  </div>
 
</ul>
        </div>
    </div>
   
   </section>
    </div>
    
  );
}

export default App;
