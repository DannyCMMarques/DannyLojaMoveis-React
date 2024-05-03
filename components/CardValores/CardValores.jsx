
import styles from './CardValores.module.css'
const CardValores = ({icones, titulo, subtitulo }) => {
  return (

  
      <div className={styles.cardItens} >
        <i className="d-flex justify-content-center">
          {icones}
        </i>
        <h5 className="mt-2"> {titulo} </h5>
        <p className="d-flex justify-content-center">
          {subtitulo}
        </p>
      </div>
  )
}

export default CardValores;
