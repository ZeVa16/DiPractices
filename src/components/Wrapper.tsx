import BotonGeneral from "./BotonGeneral"
import { BotonSecundario } from "./BotonSecundario"

export default function Wrapper() {
  return (
    <div className="row">
        <div className=" d-flex col-6 bg-info justify-content-center mt-2 rounded">
        
        <BotonGeneral/>
        
        <BotonSecundario/>
        
        </div>
        
    </div>
  )
}
