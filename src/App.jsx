

// App component
import Content from "./components/Content"
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
    const title = 'Simple React Application';
  
    return (
      <div>
        <Header title={title} />
        <Content />
        <Footer />
      </div>
    );
  };
  
  export default App;