import Focus from "./Focus";
import "./App.css";
import Typography from "@material-ui/core/Typography";

function App() {
  return (
    <div>
      <Typography variant="body1" color="secondary">
        D3 Focused chart: Observable code to React
      </Typography>
      <Typography variant="body2" color="inherit">
        Drag the slider to see more data.
      </Typography>
      <Focus />
    </div>
  );
}

export default App;
