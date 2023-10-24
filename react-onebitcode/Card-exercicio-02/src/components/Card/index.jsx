import posterImg from "../../assets/fusca.jpg"
import styles from "./styles.module.css"
import Button from "../Button"

export default function Card(props) {
    return (
        <div className={styles.container}>
            <img className={styles.poster} src={props.posterImg} alt={props.altImg} />
            <div>
                <h1>{props.title}</h1>
                <p>Seja o centro das atenções nas ruas com este icônico Fusca amarelo de 1979! Este é mais do que um carro; é uma peça de história automotiva que evoca nostalgia e estilo por onde passa.</p>
                <p>Se você está buscando um veículo que seja mais do que apenas uma maneira de se locomover, mas sim uma declaração de estilo e personalidade, este Fusca amarelo de 1979 é a escolha perfeita. Entre em contato para agendar um teste e reviver a emoção de dirigir um clássico autêntico. Não deixe essa oportunidade passar!</p>
                <Button />
            </div>

        </div>
    )    
}