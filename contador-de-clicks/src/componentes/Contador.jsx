import '../css/Contador.css'

function Contador({ numClicks }) {
  return (
    <div className="contador">
      { numClicks }
    </div>
  );
}
export default Contador;