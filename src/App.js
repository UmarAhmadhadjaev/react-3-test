
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
		<div className="main">
		<div className='logo'>
			<img src="logo.png"/>
		</div>
		
		 <ul>
		 <li className="active"><a href="#"><i className="fa fa-home"></i>Home</a></li>
		 <li><a href="#">About</a></li>
		 <li><a href="#">Dessert</a></li>
		 <li><a href="#">Appetizers</a></li>
		 <li><a href="#">Pasta</a></li>
		 <li><a href="#">Salad</a></li>
		 <li><a href="#">Burger</a></li>
		 <li><a href="#">Pizza</a></li>
		 <li><a href="#"><i className="fa fa-caret-down"></i> More Recipes <i className="fa fa-caret-down"></i></a>
		 	<div className="sub-menu">
		 		<ul>	 
		 		 <li><a href="#">Cookies</a></li>
		 		 <li><a href="#">Sandwich</a></li>
		 	 </ul>
		 	</div>
		 </li>
		</ul>

		 </div>
		 <div className="title">
		 	<h1>HOMIE RECIPES</h1>
		 </div>
		 <div className="button">
		 	<a href="#" className="btn">WATCH VIDEO</a>
		 	<a href="#" className="btn">BASIC SKILLS</a>
		 	<a href="#" className="btn">LEARN MORE</a>
		 </div>

		 	</header>
    </div>
  );
}

export default App;
