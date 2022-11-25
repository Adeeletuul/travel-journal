import Article from "./components/Article"
import Navbar from "./components/Navbar"
import data from "./data"

export default function App() {
  const articles = data.map(article => {
    return (
      <Article
        key={Article.title}
        {...article}
    
      />
    )
  })
  return (
    <div>
      <Navbar />
      {articles}
    </div>
  );
}
